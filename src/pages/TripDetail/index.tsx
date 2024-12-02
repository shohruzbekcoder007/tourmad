import React, { useEffect, useState } from "react";
import {
  FavouritesUser,
  Footer,
  Header,
  ProtectedLinks,
  ServicesLink,
} from "../../components";
import { Box, Button, Container, Stack } from "@mui/material";
import { HeaderWrapper } from "./styles";
import banner_trip from "./../../media/images/banner-trip.jpg";
import BannerMain from "../../components/BannerMain";
import { GlobalParagraph } from "../../global_styles/styles";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useLocation, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  getDailyPlan,
  getDailyPlanDetailData,
} from "../../redux/slices/tripSlice";
import MyTripDailyPlan from "../../components/MyTripDailyPlan";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import hotel from "../../media/images/hotel.png";
import restaurant from "../../media/images/restaurant.png";
import history from "../../media/images/history.png";
import place from "../../media/images/place.png";
import daily from "../../media/images/daily.png";
import { postRequest } from "../../utils/request";
import { useTranslation } from "react-i18next";

const defaultIcon = L.icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const icons: Record<string, L.Icon> = {
  hotel: new L.Icon({
    iconUrl: hotel,
    iconSize: [50, 50],
  }),
  restaurant: new L.Icon({
    iconUrl: restaurant,
    iconSize: [50, 50],
  }),
  history: new L.Icon({
    iconUrl: history,
    iconSize: [50, 50],
  }),
  place: new L.Icon({
    iconUrl: place,
    iconSize: [50, 50],
  }),
  daily: new L.Icon({
    iconUrl: daily,
    iconSize: [50, 50],
  }),
};

const MyTrip: React.FC = () => {
  const location = useLocation()
  console.log(location, "location")
  const [topNavbar, setTopNavbar] = useState<boolean>(false);
  const {t} = useTranslation()

  const { id } = useParams<{ id: string }>();
  const dailyPlans = useAppSelector(getDailyPlanDetailData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const query = location?.state?.query; // Extract query from location state
    if (query) {
      dispatch(getDailyPlan({ id: id as string, query })); // Include query if it's not an empty string
    } else {
      dispatch(getDailyPlan({ id: id as string })); // Pass an object with only the id
    }
  }, [dispatch, id, location?.state?.query]);
  
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 400) {
        setTopNavbar(false);
      } else if (window.scrollY >= 450) {
        setTopNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick(id: number) {
    postRequest("order/payze/", { trip: id })
      .then((response) => {
        // Ensure payment_url exists and is a valid URL
        const paymentUrl = response.data?.payment_url;
        if (paymentUrl) {
          console.log("Response:", response.data);
          window.location.href = paymentUrl; // Using window.location.href for external navigation
        } else {
          console.error("Payment URL not found in response.");
        }
      })
      .catch((error) => {
        console.error("Error occurred:", error);
      });
  }
  return (
    <>
      <HeaderWrapper>
        <Container>
          <Header
            logo={require("../../media/images/logo2.png")}
            type="dark"
            auth={<FavouritesUser />}
          />
          {topNavbar && <ProtectedLinks />}
        </Container>
      </HeaderWrapper>
      <BannerMain
        bgimage={banner_trip}
        bannersubtitle={t("Embark on a Journey of Discovery! Explore, Experience, and Enrich Your Soul.")}
        bannertitle={t("Join Us on an Unforgettable Adventure!")}
        heightprops="400px"
      />
      <ServicesLink />
      <Container>
        <Stack>
          <Box
            mt={{ xl: 0, md: 0, sm: "32px", xs: "32px" }}
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
          >
            <Box width={{ xl: "55%", md: "55%", sm: "100%", xs: "100%" }}>
              <Box
                boxShadow={1}
                borderRadius="8px"
                position="relative"
                width="100%"
                height="250px"
              >
                <img
                  src={`${dailyPlans.daily_plan?.location[0].photo}`}
                  width="100%"
                  height="100%"
                  style={{ objectFit: "cover", borderRadius: "8px" }}
                  alt={`${dailyPlans.daily_plan?.location[0].name}`}
                />
                <Box
                  position="absolute"
                  top="0"
                  borderRadius="8px"
                  width="100%"
                  height="100%"
                  bgcolor="#00000050"
                >
                  <Box position="absolute" bottom="10px" left="10px">
                    <GlobalParagraph
                      color="neutrals"
                      fontSize="24px"
                      fontWeight="700"
                      mediafontsize="16px"
                    >
                      {dailyPlans.daily_plan?.title}
                    </GlobalParagraph>
                    <Box
                      mt="16px"
                      display="flex"
                      flexWrap="wrap"
                      justifyContent="flex-start"
                      gap="16px"
                    >
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-start"
                        gap="5px"
                      >
                        <CalendarMonthIcon />
                        <GlobalParagraph
                          color="neutrals"
                          fontSize="14px"
                          fontWeight="400"
                        >
                          {dailyPlans.daily_plan?.start_time} →{" "}
                          {dailyPlans.daily_plan?.end_time}
                        </GlobalParagraph>
                      </Box>
                      <Box
                        display="flex"
                        width={{
                          xl: "auto",
                          md: "auto",
                          sm: "auto",
                          xs: "100%",
                        }}
                        alignItems="center"
                        justifyContent="flex-start"
                        gap="5px"
                      >
                        <LocationOnIcon />
                        <GlobalParagraph
                          color="neutrals"
                          fontSize="14px"
                          fontWeight="400"
                        >
                          {dailyPlans.daily_plan?.location[0].name}
                        </GlobalParagraph>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box mt="32px">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <GlobalParagraph
                    fontSize="24px"
                    mediafontsize="16px"
                    fontWeight="600"
                    paddingbottom="16px"
                  >
                    {t("What is this trip about?")}
                  </GlobalParagraph>
                  {(dailyPlans.daily_plan?.is_paid && dailyPlans.daily_plan?.price !== "0") ? (
                    <GlobalParagraph
                      fontSize="24px"
                      mediafontsize="16px"
                      fontWeight="600"
                    >
                      {t("Payment made")}
                    </GlobalParagraph>
                  ) : dailyPlans.daily_plan?.price === "0" ? <span></span> : (
                    <Button
                      onClick={() =>
                        handleClick(dailyPlans.daily_plan?.id as number)
                      }
                      variant="contained"
                    >
                      {dailyPlans.daily_plan?.price === "0" ? <span></span> : `$${dailyPlans.daily_plan?.price}`}
                    </Button>
                  )}
                </Box>
                <Box my="32px">
                  {dailyPlans.daily_plan?.daily_plans?.map((item, index) => {
                    return (
                      <MyTripDailyPlan
                        key={index + 1}
                        hotels={item.hotels}
                        restaurants={item.restaurants}
                        drivers={item.drivers}
                        date={item.date}
                        daily_price={item.daily_price}
                        history_or_places={item.history_or_places}
                      />
                    );
                  })}
                </Box>
              </Box>
            </Box>
            <Box
              width={{ xl: "40%", md: "40%", sm: "100%", xs: "100%" }}
              height={{ xl: "800px", md: "800px", sm: "auto", xs: "auto" }}
              position={{
                xl: "sticky",
                md: "sticky",
                sm: "static",
                xs: "static",
              }}
              top={{ xl: "120px", md: "120px", sm: "0", xs: 0 }}
              right="0"
            >
              {/*<iframe title='Anor Plaza' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11979.44075980614!2d69.2852827!3d41.3553925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d11aa1a6c3f%3A0x376ab77baf387727!2z0JDQvdC-0YAg0LzQsNGA0LrQtdGC!5e0!3m2!1sru!2s!4v1717198941300!5m2!1sru!2s" width="100%" height="100%" style={{border: 0, borderRadius: "16px"}} allowFullScreen loading="lazy" referrerPolicy='no-referrer-when-downgrade' />*/}

              {dailyPlans.daily_plan?.location?.map((item, index) => {
                return (
                  <MapContainer
                    center={[
                      item?.latitude || 41.34090131239861,
                      item?.longitude || 69.2866030679263,
                    ]}
                    zoom={13}
                    style={{
                      height: "100%",
                      width: "100%",
                      border: 0,
                      borderRadius: "16px",
                    }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />

                    {dailyPlans.daily_plan?.daily_plans?.map((item, index) => {
                      return (
                        <>
                          {item?.hotels?.map((hotel, index) => {
                            return (
                              <Marker
                                key={index}
                                position={[
                                  hotel.latitude || 0,
                                  hotel.longitude || 0,
                                ]}
                                icon={icons.hotel || defaultIcon}
                              ></Marker>
                            );
                          })}
                          {item?.restaurants?.map((restaurant, index) => {
                            return (
                              <Marker
                                key={index}
                                position={[
                                  restaurant.latitude || 0,
                                  restaurant.longitude || 0,
                                ]}
                                icon={icons.restaurant || defaultIcon}
                              ></Marker>
                            );
                          })}
                          {item?.history_or_places?.map((history, index) => {
                            return (
                              <Marker
                                key={index}
                                position={[
                                  history.latitude || 0,
                                  history.longitude || 0,
                                ]}
                                icon={icons.history || defaultIcon}
                              ></Marker>
                            );
                          })}
                        </>
                      );
                    })}
                  </MapContainer>
                );
              })}
            </Box>
          </Box>
        </Stack>
      </Container>
      <Box paddingTop="170px">
        <Footer />
      </Box>
    </>
  );
};

export default MyTrip;

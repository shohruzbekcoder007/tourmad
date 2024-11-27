import React, { useEffect } from 'react'
import { TripPlan, Welcome as WelcomeComponent, ShowService, Footer, ServicesLink } from '../../components';

import { Box } from '@mui/system';
import { Button, Grid } from '@mui/material';
import { Container, GlobalParagraph, WelcomeMainText } from '../../global_styles/styles';
import IntoTravel from '../../components/IntoTravel';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getHotelRecommendationList, getRecommendationTripHotel, getStatusLastRecommendationHotel } from '../../redux/slices/hotelSlice';
import { getRecommendationRestaurantList, getRestaurantRecommendationList, getStatusLastRecommendationRestaurant } from '../../redux/slices/restaurantSlice';
import { getDriverRecommendationList, getRecommendationDriverList, getStatusLastRecommendationDriver } from '../../redux/slices/driverSliser';
import { getCategoryPlanList, getPlanRecommendationList, getRecommendationPlanList, getStatusLastRecommendationPlan } from '../../redux/slices/planSliser';
import { useTranslation } from 'react-i18next';

const Welcome: React.FC = () => {
    const navigate = useNavigate();
    const {t} = useTranslation()
    
    const statusLastRecommendationHotel = useAppSelector(getStatusLastRecommendationHotel)
    const hotelRecommendationList = useAppSelector(getHotelRecommendationList)
    const statusLastRecommendationRestaurant = useAppSelector(getStatusLastRecommendationRestaurant)
    const restaurantRecommendationList = useAppSelector(getRestaurantRecommendationList)
    const statusLastRecommendationDriver = useAppSelector(getStatusLastRecommendationDriver)
    const driverRecommendationList = useAppSelector(getDriverRecommendationList)
    const statusLastRecommendationPlan = useAppSelector(
        getStatusLastRecommendationPlan
      );
      const planRecommendationList = useAppSelector(getPlanRecommendationList);

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (statusLastRecommendationPlan === "idle") {
          dispatch(getRecommendationPlanList());
          dispatch(getCategoryPlanList())
        }
      }, [statusLastRecommendationPlan, dispatch]);

    useEffect(() => {
        if (statusLastRecommendationHotel === 'idle') {
            dispatch(getRecommendationTripHotel())
        }
    }, [statusLastRecommendationHotel, dispatch])

    useEffect(() => {
        if (statusLastRecommendationRestaurant === 'idle') {
          dispatch(getRecommendationRestaurantList())
        }
      }, [statusLastRecommendationRestaurant, dispatch])

      useEffect(() => {
        if (statusLastRecommendationDriver === 'idle') {
            dispatch(getRecommendationDriverList())
        }
    }, [statusLastRecommendationDriver, dispatch])

    return (
        <>
            <WelcomeComponent />
            {/* <TicketTable /> */}
            <ServicesLink />
            <TripPlan />
            <ShowService />
            <Container>
                <Grid container>
                    <Grid item xl={8} md={8} sm={6} xs={8}>
                        <WelcomeMainText paddingbottom={"16px"} mediafontsize="24px" texttransform='capitalize' fontSize={"32px"} part="true">{t("The best hotels")}</WelcomeMainText>
                        <GlobalParagraph fontSize={"16px"} mediafontsize='14px' fontWeight="400">{t("Feel the luxury and comfort in our hotels!")}</GlobalParagraph>
                    </Grid>
                    <Grid item xl={4} md={4} sm={6} xs={4} display='flex' justifyContent='flex-end' alignItems='center'>
                        <Button onClick={() => navigate("/hotel-filter")} variant="outlined" >{t("See All")}</Button>
                    </Grid>
                </Grid>
                <IntoTravel link="hotel" data={hotelRecommendationList} />
                <Grid container>
                    <Grid item xl={8} md={8} sm={6} xs={8}>
                        <WelcomeMainText paddingbottom={"16px"} mediafontsize="24px" texttransform='capitalize' fontSize={"32px"} part="true">{t("The best restaurant")}</WelcomeMainText>
                        <GlobalParagraph fontSize={"16px"} mediafontsize='14px' fontWeight="400">{t("Our restaurant offers you great food and an unforgettable experience.")}</GlobalParagraph>
                    </Grid>
                    <Grid item xl={4} md={4} sm={6} xs={4} display='flex' justifyContent='flex-end' alignItems='center'>
                        <Button variant="outlined" onClick={() => navigate("/restaurant-filter")}>{t("See All")}</Button>
                    </Grid>
                </Grid>
                <IntoTravel link="restaurant" data={restaurantRecommendationList}/>
                <Grid container>
                    <Grid item xl={8} md={8} sm={6} xs={8}>
                        <WelcomeMainText paddingbottom={"16px"} mediafontsize="24px" texttransform='capitalize' fontSize={"32px"} part="true">{t("A Journey Through Time: Ancient and Beautiful Landmarks")}</WelcomeMainText>
                        <GlobalParagraph fontSize={"16px"} mediafontsize='14px' fontWeight="400">{t("Embark on a journey to uncover the world's most ancient and beautiful historical landmarks")}</GlobalParagraph>
                    </Grid>
                    <Grid item xl={4} md={4} sm={6} xs={4} display='flex' justifyContent='flex-end' alignItems='center'>
                        <Button variant="outlined" onClick={() => navigate("/plan-filter")}>{t("See All")}</Button>
                    </Grid>
                </Grid>
                <IntoTravel link="plan" data={planRecommendationList}/>
                <Grid container>
                    <Grid item xl={8} md={8} sm={6} xs={8}>
                        <WelcomeMainText paddingbottom={"16px"} mediafontsize="24px" texttransform='capitalize' fontSize={"32px"} part="true">{t("The best drivers")}</WelcomeMainText>
                        <GlobalParagraph fontSize={"16px"} mediafontsize='14px' fontWeight="400">{t("We provide comfortable and safe car services for all our guests.We provide comfortable and safe car services for all our guests.")}</GlobalParagraph>
                    </Grid>
                    <Grid item xl={4} md={4} sm={6} xs={4} display='flex' justifyContent='flex-end' alignItems='center'>
                        <Button variant="outlined" onClick={() => navigate("/drive-filter")}>{t("See All")}</Button>
                    </Grid>
                </Grid>
                <IntoTravel link="driver" data={driverRecommendationList} daily={true}/>
            </Container>
            <Box
                paddingTop="120px"
            >
                <Footer />
            </Box>
        </>
    )
}

export default Welcome
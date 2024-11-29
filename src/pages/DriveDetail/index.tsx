import React, { useEffect, useState } from "react";
import { AuthUserInfo, Footer, Header, ProtectedLinks } from "../../components";
import {
  Box,
  Button,
  Container,
  IconButton,
  Popover,
  Snackbar,
  Stack,
} from "@mui/material";
import { HeaderWrapper } from "./styles";
import { GlobalParagraph, WelcomeMainText } from "../../global_styles/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import DetailDescription from "../../components/DetailDescription";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DriveOrder from "../../components/DriveOrder";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import LinkIcon from "@mui/icons-material/Link";

import {
  getDriveDetail,
  getDriveDriveDetail,
} from "../../redux/slices/tripSlice";
import { useParams } from "react-router-dom";
import BannerDetail from "./BannerDetail";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import CopyToClipboard from "react-copy-to-clipboard";
import { getOrderCreateAction } from "../../redux/slices/driverSliser";
import { DriveOrderType } from "../../utils/response_types";
import { useTranslation } from "react-i18next";

const MyDriveDetail: React.FC = () => {
  const {t} = useTranslation()
  const [topNavbar, setTopNavbar] = useState<boolean>(false);
  const { drive_detail } = useAppSelector(getDriveDriveDetail);
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

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

  function orderSend(data: {orderCreate: DriveOrderType }) {
    dispatch(getOrderCreateAction(data));
  }

  useEffect(() => {
    dispatch(getDriveDetail(id as string));
  }, [dispatch, id]);

  const handleClickShare = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCopyLink = () => {
    setSnackbarOpen(true);
    setAnchorEl(null); // Close popover after copying
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? "share-popover" : undefined;

  return (
    <Stack>
      <HeaderWrapper>
        <Container>
          <Header
            logo={require("../../media/images/logo2.png")}
            type="dark"
            auth={<AuthUserInfo />}
          />
          {topNavbar && <ProtectedLinks />}
        </Container>
      </HeaderWrapper>
      <Container>
        <Box
          mt="32px"
          pb="32px"
          display="flex"
          justifyContent="space-between"
          gap="16px"
          flexWrap="wrap"
        >
          <Box>
            <Box
              pb="12px"
              display="flex"
              justifyContent="flex-start"
              gap="5px"
              alignItems="center"
              flexWrap="wrap"
            >
              <WelcomeMainText
                fontSize="24px"
                mediafontsize="18px"
                part="true"
                texttransform="capitalize"
              >
                {drive_detail?.name}
              </WelcomeMainText>
            </Box>
            <Box
              pb="12px"
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              gap="2px"
            >
              <DirectionsCarIcon />
              <GlobalParagraph fontSize="14px" fontWeight="700">
                Malibu
              </GlobalParagraph>
              <Box
                ml="5px"
                display="flex"
                borderRadius="5px"
                justifyContent="flex-start"
                gap="5px"
                p="5px"
                border="solid 2px #000"
              >
                {/* <Box pr='5px' borderRight="solid 2px #000">
                                    <GlobalParagraph fontSize="12px" fontWeight="700">30</GlobalParagraph>
                                </Box> */}
                <Box display="flex" justifyContent="flex-start">
                  <Box pr="5px">
                    <GlobalParagraph fontSize="12px" fontWeight="700">
                      {drive_detail?.auto_number}
                    </GlobalParagraph>
                  </Box>
                  {/* <Box pl='5px' borderLeft="solid 2px #000">
                                        <GlobalParagraph fontSize="12px" fontWeight="700">UZ</GlobalParagraph>
                                    </Box> */}
                </Box>
              </Box>
            </Box>
            <Box
              pb="12px"
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              gap="2px"
            >
              <LocationOnIcon />
              <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">
                {drive_detail?.location?.name}
              </GlobalParagraph>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              gap="5px"
            >
              <Button variant="outlined">{drive_detail?.avg_rate}</Button>
              <GlobalParagraph fontSize="12px" fontWeight="700">
                {t("Very Good")}
              </GlobalParagraph>
              <GlobalParagraph fontSize="12px" fontWeight="500">
                {drive_detail?.reviews_count} {t("reviews")}
              </GlobalParagraph>
            </Box>
          </Box>
          <Box textAlign={{ xl: "right", md: "left", sm: "left", xs: "left" }}>
            <GlobalParagraph fontSize="12px" fontWeight="500">
              {t("starting from")}
            </GlobalParagraph>
            <GlobalParagraph
              paddingbottom="16px"
              fontSize="24px"
              fontWeight="700"
              color="slamon"
            >
              ${drive_detail?.price}/{t("day")}
            </GlobalParagraph>
            <Box display="flex" justifyContent="flex-start" gap="16px">
              <Button variant="outlined">
                <FavoriteBorderIcon />
              </Button>
              <Button variant="outlined" onClick={handleClickShare}>
                <ShareIcon />
              </Button>
              <Popover
                id={popoverId} // Updated to popoverId
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  padding="16px"
                  gap="8px"
                >
                  {/* Social media share buttons */}
                  <FacebookShareButton url={window.location.href}>
                    <IconButton color="primary">
                      <FacebookIcon />
                    </IconButton>
                  </FacebookShareButton>
                  <TwitterShareButton url={window.location.href}>
                    <IconButton color="primary">
                      <TwitterIcon />
                    </IconButton>
                  </TwitterShareButton>
                  <WhatsappShareButton url={window.location.href}>
                    <IconButton color="primary">
                      <WhatsappIcon />
                    </IconButton>
                  </WhatsappShareButton>

                  {/* Copy to clipboard button */}
                  <CopyToClipboard
                    text={window.location.href}
                    onCopy={handleCopyLink}
                  >
                    <Button variant="outlined" startIcon={<LinkIcon />}>
                      {t("Copy Link")}
                    </Button>
                  </CopyToClipboard>
                </Box>
              </Popover>

              <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message="Link copied to clipboard!"
              />
              <DriveOrder message="" success={true} btnText={t("Book Now")}  id={id} orderSend={orderSend} />
            </Box>
          </Box>
        </Box>
        <BannerDetail bgimage={`${drive_detail?.banner}`} />
        <DetailDescription />
        {/* <DetailReviews /> */}
      </Container>
      <Box paddingTop="170px">
        <Footer />
      </Box>
    </Stack>
  );
};

export default MyDriveDetail;

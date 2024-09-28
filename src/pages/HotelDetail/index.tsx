import React, { useEffect, useState } from "react";
import { AuthUserInfo, Footer, Header, ProtectedLinks } from "../../components";
import {
  Box,
  Button,
  Container,
  IconButton,
  Popover,
  Rating,
  Snackbar,
  Stack,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { HeaderWrapper } from "./styles";
import { GlobalParagraph, WelcomeMainText } from "../../global_styles/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import DetailBanner from "../../components/DetailBanner";
import DetailDescription from "../../components/DetailDescription";
import HotelRooms from "../../components/HotelRooms";
import DetailMap from "../../components/DetailMap";
// import DetailReviews from '../../components/DetailReviews'
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  getHotelDetail,
  getHotelDetailInfo,
} from "../../redux/slices/hotelSlice";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import SwipeDrawer from "../../components/SwipeDrawer";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import CopyToClipboard from "react-copy-to-clipboard";
import LinkIcon from "@mui/icons-material/Link";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const HotelDetail: React.FC = () => {
  const [topNavbar, setTopNavbar] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { hotel } = useAppSelector(getHotelDetail);

  const { id } = useParams<{ id: string }>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    dispatch(getHotelDetailInfo(id as string));
  }, [dispatch, id]);

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
        <Box my="32px">
          <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                {hotel?.location?.name}
              </Link>
              <Typography color="text.primary">{hotel?.name}</Typography>
            </Breadcrumbs>
          </div>
        </Box>
        <Box
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
                {hotel?.name}
              </WelcomeMainText>
              <Rating name="disabled" value={hotel?.grade || 0} disabled />
              <GlobalParagraph fontSize="12px" fontWeight="500">
                {hotel?.grade} Star Hotel
              </GlobalParagraph>
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
                {hotel?.location?.name}
              </GlobalParagraph>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              gap="5px"
            >
              <Button variant="outlined">{hotel?.rate}</Button>
              <GlobalParagraph fontSize="12px" fontWeight="700">
                Very Good
              </GlobalParagraph>
              {/* <GlobalParagraph fontSize="12px" fontWeight="500">371 reviews</GlobalParagraph> */}
            </Box>
          </Box>
          <Box textAlign={{ xl: "right", md: "left", sm: "left", xs: "left" }}>
            <GlobalParagraph
              paddingbottom="16px"
              fontSize="24px"
              fontWeight="700"
              color="slamon"
            >
              {hotel?.room_style?.[0]?.price}$
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
                      Copy Link
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
              <SwipeDrawer
                hotel_id={parseInt(id as string)}
                addType={"hotel"}
                button={<Button variant="contained">Book Now</Button>}
              />
            </Box>
          </Box>
        </Box>
        <DetailBanner bgimage={`${hotel?.banner}`} />
        <DetailDescription>
          {parse((hotel?.body as string) || "")}
        </DetailDescription>
        <HotelRooms room_style={hotel?.room_style} />
        <DetailMap longitude={hotel?.longitude} latitude={hotel?.latitude} />
        {/* <DetailReviews />    */}
      </Container>
      <Box paddingTop="170px">
        <Footer />
      </Box>
    </Stack>
  );
};

export default HotelDetail;

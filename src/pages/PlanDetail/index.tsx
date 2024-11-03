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
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { HeaderWrapper } from "../ConsultingDetail/styles";
import { GlobalParagraph, WelcomeMainText } from "../../global_styles/styles";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import DetailBanner from "../../components/DetailBanner";
import DetailDescription from "../../components/DetailDescription";
import DetailMap from "../../components/DetailMap";
// import DetailReviews from '../../components/DetailReviews';
import parse from 'html-react-parser';
import LinkIcon from "@mui/icons-material/Link";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CopyToClipboard from "react-copy-to-clipboard";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useParams } from "react-router-dom";
import { getPlanDetail, getPlanDetailInfo } from "../../redux/slices/planSliser";
import SwipeDrawer from "../../components/SwipeDrawer";
import { useTranslation } from "react-i18next";
import { postLikeIdH } from "../../redux/slices/wishListSlice";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const PlanDetail: React.FC = () => {
  const {t} = useTranslation()
  const [topNavbar, setTopNavbar] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()
  const plan_detail = useAppSelector(getPlanDetail)
  const [liked, setLiked] = useState<boolean | undefined | null>(undefined);

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


  useEffect(() => {
    dispatch(getPlanDetailInfo(id as string))
  }, [id, dispatch])
  useEffect(() => {
    if (plan_detail?.plan_detail?.is_liked !== undefined) {
      setLiked(plan_detail?.plan_detail?.is_liked);
    }
  }, [plan_detail]);

  function handleLikeFunc(id: number) {
    setLiked(!liked); 
    dispatch(postLikeIdH(id))
  }

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
                {plan_detail?.plan_detail?.location?.name}
              </Link>
              <Typography color="text.primary">{plan_detail?.plan_detail?.name}</Typography>
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
                {plan_detail?.plan_detail?.name}
              </WelcomeMainText>
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
                {plan_detail?.plan_detail?.location?.name}
              </GlobalParagraph>
            </Box>
          </Box>
          <Box textAlign={{ xl: "right", md: "left", sm: "left", xs: "left" }}>

            <Box display="flex" justifyContent="flex-start" gap="16px">
            <Button variant="outlined" onClick={() => handleLikeFunc(plan_detail?.plan_detail?.id as number)}>
                {liked ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M11.9995 21.5C11.6985 21.4996 11.4045 21.4086 11.1558 21.2389C7.47189 18.7381 5.87673 17.0234 4.99689 15.9514C3.12189 13.6663 2.22423 11.3202 2.24954 8.77953C2.27908 5.86813 4.61486 3.5 7.45642 3.5C9.52267 3.5 10.9538 4.66391 11.7872 5.63328C11.8136 5.66368 11.8462 5.68805 11.8829 5.70476C11.9195 5.72146 11.9593 5.73011 11.9995 5.73011C12.0398 5.73011 12.0796 5.72146 12.1162 5.70476C12.1529 5.68805 12.1855 5.66368 12.2119 5.63328C13.0453 4.66297 14.4764 3.5 16.5427 3.5C19.3842 3.5 21.72 5.86812 21.7495 8.78C21.7749 11.3211 20.8763 13.6672 19.0022 15.9519C18.1224 17.0239 16.5272 18.7386 12.8433 21.2394C12.5946 21.4089 12.3006 21.4998 11.9995 21.5Z"
                      fill="#1B1464"
                    />
                  </svg>
                ) : (
                  <FavoriteBorderIcon />
                )}
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
                      <WhatsAppIcon />
                    </IconButton>
                  </WhatsappShareButton>

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
                plan_id={parseInt(("" + plan_detail?.plan_detail?.id) as string)}
                addType={'plan-detail'}
                button={<Button variant='contained'>{t("Add trip")}</Button>}
              />
            </Box>
          </Box>
        </Box>
        <DetailBanner bgimage={plan_detail?.plan_detail?.banner as string} gallery={plan_detail?.plan_detail?.gallery} name={plan_detail?.plan_detail?.name} />
        <DetailDescription > {parse((plan_detail?.plan_detail?.body as string) || "")} </DetailDescription>
        <DetailMap longitude={plan_detail?.plan_detail?.longitude} latitude={plan_detail?.plan_detail?.latitude} />
      </Container>
      <Box paddingTop="170px">
        <Footer />
      </Box>
    </Stack>
  );
};

export default PlanDetail;

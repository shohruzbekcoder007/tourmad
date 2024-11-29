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
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { HeaderWrapper } from "./styles";
import { WelcomeMainText } from "../../global_styles/styles";
import ShareIcon from "@mui/icons-material/Share";
import DetailBanner from "../../components/DetailBanner";
import DetailDescription from "../../components/DetailDescription";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  getConsultingDetail,
  getConsultingDetailInfo,
} from "../../redux/slices/consultingSlice";
import parse from "html-react-parser";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkIcon from "@mui/icons-material/Link";
import CopyToClipboard from "react-copy-to-clipboard";
import { useTranslation } from "react-i18next";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const ConsultingDetail: React.FC = () => {
  const {t} = useTranslation()
  const [topNavbar, setTopNavbar] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { consulting } = useAppSelector(getConsultingDetail);
  const { id } = useParams<{ id: string }>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    dispatch(getConsultingDetailInfo(id as string));
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
                {consulting?.category?.name}
              </Link>
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
                {consulting?.name}
              </WelcomeMainText>
            </Box>
          </Box>
          <Box textAlign={{ xl: "right", md: "left", sm: "left", xs: "left" }}>
            <Box display="flex" justifyContent="flex-start" gap="16px">
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
                      <WhatsAppIcon />
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
            </Box>
          </Box>
        </Box>
        <DetailBanner
          bgimage={consulting?.banner as string}
          name={"consulting"}
        />
        <DetailDescription>
          {parse((consulting?.desc as string) || "")}
          {parse((consulting?.body as string) || "")}
        </DetailDescription>
      </Container>
      <Box paddingTop="170px">
        <Footer />
      </Box>
    </Stack>
  );
};

export default ConsultingDetail;

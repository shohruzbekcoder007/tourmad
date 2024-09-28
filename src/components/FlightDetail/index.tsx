import {
  Box,
  Breadcrumbs,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Link,
  Popover,
  Snackbar,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { GlobalParagraph, WelcomeMainText } from "../../global_styles/styles";
import airplane from "./../../media/images/emirats.png";
import galery from "./../../media/images/Frame 142.png";
import galery1 from "./../../media/images/Frame 183.png";
import galery2 from "./../../media/images/Frame 184.png";
import galery3 from "./../../media/images/Frame 186.png";
import galery4 from "./../../media/images/Frame 188.png";
import galery5 from "./../../media/images/Frame 189.png";
import TimerIcon from "@mui/icons-material/Timer";
import FlightCard from "../FlightCard";
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

const FlightDetail: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

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
      <Box pt="48px" pb="32px">
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <Link underline="hover" color="error" href="/">
            Turkey
          </Link>
          <Link underline="hover" color="error" href="">
            Istanbul
          </Link>
          <GlobalParagraph fontSize="14px" fontWeight="500" oposity="0.75">
            CVK Park Bosphorus Hotel Istanbul
          </GlobalParagraph>
        </Breadcrumbs>
      </Box>
      <Box pb="32px" display="flex" justifyContent="space-between">
        <Box>
          <WelcomeMainText
            paddingbottom="16px"
            fontSize="24px"
            part="true"
            texttransform="capitalize"
          >
            Emirates A380 Airbus
          </WelcomeMainText>
          <Box pb="8px" display="flex" flexDirection="row" alignItems="center">
            <LocationOnIcon />
            <GlobalParagraph fontSize="14px" fontWeight="500" oposity="0.75">
              Gümüssuyu Mah. Inönü Cad. No:8, Istanbul 34437
            </GlobalParagraph>
          </Box>
          <Box
            pb="8px"
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap="8px"
          >
            <Button variant="outlined">4.2</Button>
            <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">
              <span style={{ fontWeight: "bold" }}>Very Good</span> 54 reviews
            </GlobalParagraph>
          </Box>
        </Box>
        <Box textAlign="right">
          <GlobalParagraph
            fontSize="32px"
            fontWeight="700"
            paddingbottom="16px"
            color="slamon"
          >
            $240
          </GlobalParagraph>
          <Box display="flex" justifyContent="flex-start" gap="15px">
            <Button variant="outlined" sx={{ height: "50px" }}>
              <FavoriteBorderIcon />
            </Button>
            <Button
              variant="outlined"
              sx={{ height: "50px" }}
              onClick={handleClickShare}
            >
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
            <Button variant="contained" sx={{ height: "50px", width: "150px" }}>
              Book now
            </Button>
          </Box>
        </Box>
      </Box>
      <Box pb="40px" width="100%" height="395px" borderRadius="12px">
        <img
          src={airplane}
          width="100%"
          height="100%"
          style={{ objectFit: "cover", borderRadius: "12px" }}
          alt="Emirats"
        />
      </Box>
      <Box
        pb="5px"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <GlobalParagraph fontSize="24px" fontWeight="700">
          Basic Economy Features
        </GlobalParagraph>
        <Box>
          <FormControlLabel control={<Checkbox />} label="Economy" />
          <FormControlLabel control={<Checkbox />} label="First Class" />
          <FormControlLabel control={<Checkbox />} label="Busines Class" />
        </Box>
      </Box>
      <Box
        pb="40px"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Box width="120px" mt="19px" height="120px" borderRadius="12px">
          <img
            src={galery}
            width="100%"
            height="100%"
            style={{ objectFit: "cover", borderRadius: "12px" }}
            alt="Emirats"
          />
        </Box>
        <Box width="120px" mt="19px" height="120px" borderRadius="12px">
          <img
            src={galery1}
            width="100%"
            height="100%"
            style={{ objectFit: "cover", borderRadius: "12px" }}
            alt="Emirats"
          />
        </Box>
        <Box width="120px" mt="19px" height="120px" borderRadius="12px">
          <img
            src={galery2}
            width="100%"
            height="100%"
            style={{ objectFit: "cover", borderRadius: "12px" }}
            alt="Emirats"
          />
        </Box>
        <Box width="120px" mt="19px" height="120px" borderRadius="12px">
          <img
            src={galery3}
            width="100%"
            height="100%"
            style={{ objectFit: "cover", borderRadius: "12px" }}
            alt="Emirats"
          />
        </Box>
        <Box width="120px" mt="19px" height="120px" borderRadius="12px">
          <img
            src={galery4}
            width="100%"
            height="100%"
            style={{ objectFit: "cover", borderRadius: "12px" }}
            alt="Emirats"
          />
        </Box>
        <Box width="120px" mt="19px" height="120px" borderRadius="12px">
          <img
            src={galery5}
            width="100%"
            height="100%"
            style={{ objectFit: "cover", borderRadius: "12px" }}
            alt="Emirats"
          />
        </Box>
        <Box width="120px" mt="19px" height="120px" borderRadius="12px">
          <img
            src={galery}
            width="100%"
            height="100%"
            style={{ objectFit: "cover", borderRadius: "12px" }}
            alt="Emirats"
          />
        </Box>
        <Box width="120px" mt="19px" height="120px" borderRadius="12px">
          <img
            src={galery1}
            width="100%"
            height="100%"
            style={{ objectFit: "cover", borderRadius: "12px" }}
            alt="Emirats"
          />
        </Box>
        <Box width="120px" mt="19px" height="120px" borderRadius="12px">
          <img
            src={galery2}
            width="100%"
            height="100%"
            style={{ objectFit: "cover", borderRadius: "12px" }}
            alt="Emirats"
          />
        </Box>
      </Box>
      <Box
        p="16px"
        mb="40px"
        borderRadius="8px"
        bgcolor="rgba(141, 211, 187, 0.60)"
      >
        <GlobalParagraph fontSize="24px" fontWeight="700">
          Emirates Airlines Policies
        </GlobalParagraph>
        <Box display="flex" justifyContent="space-between" flex="wrap">
          <Box
            mt="16px"
            width="50%"
            gap="16px"
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <TimerIcon />
            <GlobalParagraph fontSize="14px" fontWeight="500" oposity="0.75">
              Pre-flight cleaning, installation of cabin HEPA filters.
            </GlobalParagraph>
          </Box>
          <Box
            mt="16px"
            width="50%"
            gap="16px"
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <TimerIcon />
            <GlobalParagraph fontSize="14px" fontWeight="500" oposity="0.75">
              Pre-flight health screening questions.
            </GlobalParagraph>
          </Box>
        </Box>
      </Box>
      <FlightCard />
    </Stack>
  );
};

export default FlightDetail;

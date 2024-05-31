import { Box, Button, Divider, Paper, Rating, Stack } from "@mui/material";
import card_image from "./../../media/images/Rectangle 3.png";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { GlobalParagraph, WelcomeMainText } from "../../global_styles/styles";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const HotelFilterCard: React.FC = () => {
  const value: number | null = 2;

  return (
    <Stack>
      <Paper
        elevation={0}
        sx={{
          boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
          borderRadius: "12px",
          padding: "24px 16px",
          mb: "32px",
          "&:hover": {
            boxShadow: "0px 4px 16px 0px rgba(164, 168, 167, 0.413)",
          },
        }}
      >
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          <Box  width={{xl: '30%', md: "30%", sm: "30%", xs: "100%"}} position="relative">
            <img src={card_image} width="100%" height="100%" style={{objectFit: "cover", borderRadius: "12px"}} alt="" />
            <Button variant="contained" sx={{right: "10px", top: "10px", position: "absolute", bgcolor: "#6b6c7566"}}>9 images</Button>
          </Box>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: "24px"}} width={{xl: '65%', md: "65%", sm: "65%", xs: "100%"}}>
            <Box pb="16px" width="100%" display="flex" justifyContent="space-between" gap="24px">
              <WelcomeMainText fontSize="20px" part="true" texttransform="capitalize">CVK Park Bosphorus Hotel Istanbul</WelcomeMainText>
              <Box>
                <GlobalParagraph fontSize="12px" fontWeight="500">starting from</GlobalParagraph>
                <GlobalParagraph fontSize="24px" fontWeight="700" color="slamon">$240/night</GlobalParagraph>
              </Box>
            </Box>
            <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
              <LocationOnIcon />
              <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">Samarqand</GlobalParagraph>
            </Box>
            <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
              <Rating name="disabled" value={value} disabled />
              <GlobalParagraph fontSize="12px" fontWeight="500">5 Star Hotel</GlobalParagraph>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="flex-start" gap="5px">
              <Button variant="outlined">4.2</Button>
              <GlobalParagraph fontSize="12px" fontWeight="700">Very Good</GlobalParagraph>
              <GlobalParagraph fontSize="12px" fontWeight="500">371 reviews</GlobalParagraph>
            </Box>
            <Divider style={{
              marginTop: "24px"
            }}/>
            <Box pt="16px" display="flex" justifyContent="space-between">
              <Button variant="outlined">
                <FavoriteBorderIcon />
              </Button>
              <Box width={{xl: "85%", md: "75%", sm: "75%", xs: "75%"}}>
                <Button variant="contained" fullWidth>
                  View Deals
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
      <Paper
        elevation={0}
        sx={{
          boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
          borderRadius: "12px",
          padding: "24px 16px",
          mb: "32px",
          "&:hover": {
            boxShadow: "0px 4px 16px 0px rgba(164, 168, 167, 0.413)",
          },
        }}
      >
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          <Box  width={{xl: '30%', md: "30%", sm: "30%", xs: "100%"}} position="relative">
            <img src={card_image} width="100%" height="100%" style={{objectFit: "cover", borderRadius: "12px"}} alt="" />
            <Button variant="contained" sx={{right: "10px", top: "10px", position: "absolute", bgcolor: "#6b6c7566"}}>9 images</Button>
          </Box>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: "24px"}} width={{xl: '65%', md: "65%", sm: "65%", xs: "100%"}}>
            <Box pb="16px" width="100%" display="flex" justifyContent="space-between" gap="24px">
              <WelcomeMainText fontSize="20px" part="true" texttransform="capitalize">CVK Park Bosphorus Hotel Istanbul</WelcomeMainText>
              <Box>
                <GlobalParagraph fontSize="12px" fontWeight="500">starting from</GlobalParagraph>
                <GlobalParagraph fontSize="24px" fontWeight="700" color="slamon">$240/night</GlobalParagraph>
              </Box>
            </Box>
            <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
              <LocationOnIcon />
              <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">Samarqand</GlobalParagraph>
            </Box>
            <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
              <Rating name="disabled" value={value} disabled />
              <GlobalParagraph fontSize="12px" fontWeight="500">5 Star Hotel</GlobalParagraph>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="flex-start" gap="5px">
              <Button variant="outlined">4.2</Button>
              <GlobalParagraph fontSize="12px" fontWeight="700">Very Good</GlobalParagraph>
              <GlobalParagraph fontSize="12px" fontWeight="500">371 reviews</GlobalParagraph>
            </Box>
            <Divider style={{
              marginTop: "24px"
            }}/>
            <Box pt="16px" display="flex" justifyContent="space-between">
              <Button variant="outlined">
                <FavoriteBorderIcon />
              </Button>
              <Box width={{xl: "85%", md: "75%", sm: "75%", xs: "75%"}}>
                <Button variant="contained" fullWidth>
                  View Deals
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
      <Paper
        elevation={0}
        sx={{
          boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
          borderRadius: "12px",
          padding: "24px 16px",
          mb: "32px",
          "&:hover": {
            boxShadow: "0px 4px 16px 0px rgba(164, 168, 167, 0.413)",
          },
        }}
      >
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          <Box  width={{xl: '30%', md: "30%", sm: "30%", xs: "100%"}} position="relative">
            <img src={card_image} width="100%" height="100%" style={{objectFit: "cover", borderRadius: "12px"}} alt="" />
            <Button variant="contained" sx={{right: "10px", top: "10px", position: "absolute", bgcolor: "#6b6c7566"}}>9 images</Button>
          </Box>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: "24px"}} width={{xl: '65%', md: "65%", sm: "65%", xs: "100%"}}>
            <Box pb="16px" width="100%" display="flex" justifyContent="space-between" gap="24px">
              <WelcomeMainText fontSize="20px" part="true" texttransform="capitalize">CVK Park Bosphorus Hotel Istanbul</WelcomeMainText>
              <Box>
                <GlobalParagraph fontSize="12px" fontWeight="500">starting from</GlobalParagraph>
                <GlobalParagraph fontSize="24px" fontWeight="700" color="slamon">$240/night</GlobalParagraph>
              </Box>
            </Box>
            <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
              <LocationOnIcon />
              <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">Samarqand</GlobalParagraph>
            </Box>
            <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
              <Rating name="disabled" value={value} disabled />
              <GlobalParagraph fontSize="12px" fontWeight="500">5 Star Hotel</GlobalParagraph>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="flex-start" gap="5px">
              <Button variant="outlined">4.2</Button>
              <GlobalParagraph fontSize="12px" fontWeight="700">Very Good</GlobalParagraph>
              <GlobalParagraph fontSize="12px" fontWeight="500">371 reviews</GlobalParagraph>
            </Box>
            <Divider style={{
              marginTop: "24px"
            }}/>
            <Box pt="16px" display="flex" justifyContent="space-between">
              <Button variant="outlined">
                <FavoriteBorderIcon />
              </Button>
              <Box width={{xl: "85%", md: "75%", sm: "75%", xs: "75%"}}>
                <Button variant="contained" fullWidth>
                  View Deals
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
      <Paper
        elevation={0}
        sx={{
          boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
          borderRadius: "12px",
          padding: "24px 16px",
          mb: "32px",
          "&:hover": {
            boxShadow: "0px 4px 16px 0px rgba(164, 168, 167, 0.413)",
          },
        }}
      >
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          <Box  width={{xl: '30%', md: "30%", sm: "30%", xs: "100%"}} position="relative">
            <img src={card_image} width="100%" height="100%" style={{objectFit: "cover", borderRadius: "12px"}} alt="" />
            <Button variant="contained" sx={{right: "10px", top: "10px", position: "absolute", bgcolor: "#6b6c7566"}}>9 images</Button>
          </Box>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: "24px"}} width={{xl: '65%', md: "65%", sm: "65%", xs: "100%"}}>
            <Box pb="16px" width="100%" display="flex" justifyContent="space-between" gap="24px">
              <WelcomeMainText fontSize="20px" part="true" texttransform="capitalize">CVK Park Bosphorus Hotel Istanbul</WelcomeMainText>
              <Box>
                <GlobalParagraph fontSize="12px" fontWeight="500">starting from</GlobalParagraph>
                <GlobalParagraph fontSize="24px" fontWeight="700" color="slamon">$240/night</GlobalParagraph>
              </Box>
            </Box>
            <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
              <LocationOnIcon />
              <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">Samarqand</GlobalParagraph>
            </Box>
            <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
              <Rating name="disabled" value={value} disabled />
              <GlobalParagraph fontSize="12px" fontWeight="500">5 Star Hotel</GlobalParagraph>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="flex-start" gap="5px">
              <Button variant="outlined">4.2</Button>
              <GlobalParagraph fontSize="12px" fontWeight="700">Very Good</GlobalParagraph>
              <GlobalParagraph fontSize="12px" fontWeight="500">371 reviews</GlobalParagraph>
            </Box>
            <Divider style={{
              marginTop: "24px"
            }}/>
            <Box pt="16px" display="flex" justifyContent="space-between">
              <Button variant="outlined">
                <FavoriteBorderIcon />
              </Button>
              <Box width={{xl: "85%", md: "75%", sm: "75%", xs: "75%"}}>
                <Button variant="contained" fullWidth>
                  View Deals
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
      <Paper
        elevation={0}
        sx={{
          boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
          borderRadius: "12px",
          padding: "24px 16px",
          mb: "32px",
          "&:hover": {
            boxShadow: "0px 4px 16px 0px rgba(164, 168, 167, 0.413)",
          },
        }}
      >
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          <Box  width={{xl: '30%', md: "30%", sm: "30%", xs: "100%"}} position="relative">
            <img src={card_image} width="100%" height="100%" style={{objectFit: "cover", borderRadius: "12px"}} alt="" />
            <Button variant="contained" sx={{right: "10px", top: "10px", position: "absolute", bgcolor: "#6b6c7566"}}>9 images</Button>
          </Box>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: "24px"}} width={{xl: '65%', md: "65%", sm: "65%", xs: "100%"}}>
            <Box pb="16px" width="100%" display="flex" justifyContent="space-between" gap="24px">
              <WelcomeMainText fontSize="20px" part="true" texttransform="capitalize">CVK Park Bosphorus Hotel Istanbul</WelcomeMainText>
              <Box>
                <GlobalParagraph fontSize="12px" fontWeight="500">starting from</GlobalParagraph>
                <GlobalParagraph fontSize="24px" fontWeight="700" color="slamon">$240/night</GlobalParagraph>
              </Box>
            </Box>
            <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
              <LocationOnIcon />
              <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">Samarqand</GlobalParagraph>
            </Box>
            <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
              <Rating name="disabled" value={value} disabled />
              <GlobalParagraph fontSize="12px" fontWeight="500">5 Star Hotel</GlobalParagraph>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="flex-start" gap="5px">
              <Button variant="outlined">4.2</Button>
              <GlobalParagraph fontSize="12px" fontWeight="700">Very Good</GlobalParagraph>
              <GlobalParagraph fontSize="12px" fontWeight="500">371 reviews</GlobalParagraph>
            </Box>
            <Divider style={{
              marginTop: "24px"
            }}/>
            <Box pt="16px" display="flex" justifyContent="space-between">
              <Button variant="outlined">
                <FavoriteBorderIcon />
              </Button>
              <Box width={{xl: "85%", md: "75%", sm: "75%", xs: "75%"}}>
                <Button variant="contained" fullWidth>
                  View Deals
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Stack>
  );
};

export default HotelFilterCard;

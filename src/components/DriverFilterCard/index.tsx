import { Box, Button, Divider, Paper, Stack } from "@mui/material";
import card_image from "./../../media/images/into-hotel-1.png";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { GlobalParagraph, WelcomeMainText } from "../../global_styles/styles";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

type PropsType = {
  time?: string
}

const DriveFilterCard: React.FC<PropsType> = (props) => {

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
          <Box  width={{xl: '30%', md: "30%", sm: "30%", xs: "100%"}}>
            <img src={card_image} width="100%" height="100%" style={{objectFit: "cover", borderRadius: "12px"}} alt="" />
          </Box>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: "24px"}} width={{xl: '65%', md: "65%", sm: "65%", xs: "100%"}}>
            <Box pb="16px" width="100%" display="flex" justifyContent="space-between" gap="24px">
              <WelcomeMainText fontSize="20px" part="true" texttransform="capitalize">Sevda Apa</WelcomeMainText>
              <Box>
                <GlobalParagraph fontSize="12px" fontWeight="500">starting from</GlobalParagraph>
                <GlobalParagraph fontSize="24px" fontWeight="700" color="slamon">$240/{props.time}</GlobalParagraph>
              </Box>
            </Box>
            <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
              <LocationOnIcon />
              <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">Samarqand</GlobalParagraph>
            </Box>
            <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
              <DirectionsCarIcon />
              <GlobalParagraph fontSize="14px" fontWeight="700">Malibu</GlobalParagraph>
              <Box ml='5px' display='flex' borderRadius='5px' justifyContent='flex-start' gap='5px' p='5px' border='solid 2px #000'>
                <Box pr='5px' borderRight="solid 2px #000">
                  <GlobalParagraph fontSize="12px" fontWeight="700">30</GlobalParagraph>
                </Box>
                <Box display='flex' justifyContent='flex-start'>
                  <Box pr='5px'>
                    <GlobalParagraph fontSize="12px" fontWeight="700">A777BC</GlobalParagraph>
                  </Box>
                  <Box pl='5px' borderLeft="solid 2px #000">
                    <GlobalParagraph fontSize="12px" fontWeight="700">UZ</GlobalParagraph>
                  </Box>
                </Box>
              </Box>
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

export default DriveFilterCard;

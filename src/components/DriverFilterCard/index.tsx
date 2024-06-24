import { Box, Button, Divider, Paper, Stack } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { GlobalParagraph, WelcomeMainText } from "../../global_styles/styles";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { useNavigate } from "react-router-dom";
import { AutoModel, AutoNumber, Language, Location, UserDrivers } from "../../utils/response_types";
import TranslateIcon from '@mui/icons-material/Translate';

type DriveFilterProps = {
  user: UserDrivers | null,
  auto_number: AutoNumber | null,
  avg_rate: number | null,
  location: Location | null,
  auto_model: AutoModel | null,
  auto_photo: string | null,
  languages: Language[] | null,
  price: number ,
  time?: string,
  orders_count: number,
}

const DriveFilterCard: React.FC<DriveFilterProps> = ({time, price, languages, auto_model, auto_number, auto_photo, location, avg_rate, user, orders_count}) => {
  const navigate = useNavigate();

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
            <img src={`${auto_photo}`} width="100%" height="100%" style={{objectFit: "cover", borderRadius: "12px"}} alt="" />
          </Box>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: "24px"}} width={{xl: '65%', md: "65%", sm: "65%", xs: "100%"}}>
            <Box pb="16px" width="100%" display="flex" justifyContent="space-between" gap="24px">
              <Box>
                <WelcomeMainText fontSize="20px" part="true" texttransform="capitalize">{user?.first_name} {user?.last_name}</WelcomeMainText>
                <Box  display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
                  <TranslateIcon />
                  <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">
                    {
                      languages?.map((lang) => {
                        return `${lang.lang}, `
                      })
                    }
                  </GlobalParagraph>
                </Box>
              </Box>
              <Box>
                <GlobalParagraph fontSize="12px" fontWeight="500">starting from</GlobalParagraph>
                <GlobalParagraph fontSize="24px" fontWeight="700" color="slamon">${price}/{time}</GlobalParagraph>
              </Box>
            </Box>
            <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
              <LocationOnIcon />
              <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">{location?.name}</GlobalParagraph>
            </Box>
            <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
              <DirectionsCarIcon />
              <GlobalParagraph fontSize="14px" fontWeight="700">{auto_model?.name}</GlobalParagraph>
              <Box ml='5px' display='flex' borderRadius='5px' justifyContent='flex-start' gap='5px' p='5px' border='solid 2px #000'>
                <Box pr='5px' borderRight="solid 2px #000">
                  <GlobalParagraph fontSize="12px" fontWeight="700">{auto_number?.region}</GlobalParagraph>
                </Box>
                <Box display='flex' justifyContent='flex-start'>
                  <Box pr='5px'>
                    <GlobalParagraph fontSize="12px" fontWeight="700">{auto_number?.number}</GlobalParagraph>
                  </Box>
                  <Box pl='5px' borderLeft="solid 2px #000">
                    <GlobalParagraph fontSize="12px" fontWeight="700">{auto_number?.country}</GlobalParagraph>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="flex-start" gap="5px">
              <Button variant="outlined">{avg_rate}</Button>
              <GlobalParagraph fontSize="12px" fontWeight="700">Very Good</GlobalParagraph>
              <GlobalParagraph fontSize="12px" fontWeight="500">{orders_count} reviews</GlobalParagraph>
            </Box>
            <Divider style={{
              marginTop: "24px"
            }}/>
            <Box pt="16px" display="flex" justifyContent="space-between">
              <Button variant="outlined">
                <FavoriteBorderIcon />
              </Button>
              <Box width={{xl: "85%", md: "75%", sm: "75%", xs: "75%"}}>
                <Button onClick={() => navigate("/drive-detail")} variant="contained" fullWidth>
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

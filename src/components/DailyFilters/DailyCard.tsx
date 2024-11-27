import { Box, Button, Divider, Paper, Rating } from "@mui/material"
import React from "react"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import { GlobalParagraph, WelcomeMainText } from "../../global_styles/styles"
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { GalleryType, LocationType, RoomStyle } from "../../utils/response_types"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

type DailyCardProps = {
  id: number | null,
  galery: GalleryType[] | null,
  grade: number | null,
  name: string | null,
  location: LocationType | null,
  room_style: RoomStyle[] | null
  rate: number | null,
  card: string | null
}

const DailyCard: React.FC<DailyCardProps> = ({ id, card, galery, grade, name, location, room_style, rate }) => {
  const navigate = useNavigate();
  const {t} = useTranslation()
  return (
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
        <Box width={{ xl: '30%', md: "30%", sm: "30%", xs: "100%" }} position="relative">
          <img src={`${card}`} width="100%" height="100%" style={{ objectFit: "cover", borderRadius: "12px" }} alt="" />
          <Button variant="contained" sx={{ right: "10px", top: "10px", position: "absolute", bgcolor: "#6b6c7566" }}>{galery?.length} images</Button>
        </Box>
        <Box mt={{ xl: 0, md: 0, sm: 0, xs: "24px" }} width={{ xl: '65%', md: "65%", sm: "65%", xs: "100%" }}>
          <Box pb="16px" width="100%" display="flex" justifyContent="space-between" gap="24px">
            <WelcomeMainText fontSize="20px" part="true" texttransform="capitalize">{name}</WelcomeMainText>
            <Box>
              <GlobalParagraph fontSize="12px" fontWeight="500">{t("starting from")}</GlobalParagraph>
              <GlobalParagraph fontSize="24px" fontWeight="700" color="slamon">{room_style ? `${room_style[0]?.price ? `$${room_style[0]?.price}` : ""}` : ``}/{t("night")}</GlobalParagraph>
              {
                (room_style) ? <GlobalParagraph fontSize='24px' mediafontsize='18px' fontWeight='600' color='neutrals'>{room_style[0]?.price} $</GlobalParagraph> : <></>
              }
            </Box>
          </Box>
          <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
            <LocationOnIcon />
            <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">{location?.name}</GlobalParagraph>
          </Box>
          <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
            <Rating name="disabled" value={grade} disabled />
            <GlobalParagraph fontSize="12px" fontWeight="500">{grade} {t("Star Daily")}</GlobalParagraph>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="flex-start" gap="5px">
            <Button variant="outlined">{rate}</Button>
            <GlobalParagraph fontSize="12px" fontWeight="700">{t("Very Good")}</GlobalParagraph>
            {/* <GlobalParagraph fontSize="12px" fontWeight="500">371 reviews</GlobalParagraph> */}
          </Box>
          <Divider style={{
            marginTop: "24px"
          }} />
          <Box pt="16px" display="flex" justifyContent="space-between">
            <Button variant="outlined">
              {/* <FavoriteBorderIcon /> */}
            </Button>
            <Box width={{ xl: "85%", md: "75%", sm: "75%", xs: "75%" }}>
              <Button onClick={() => navigate(`/daily-detail/${id}`)} variant="contained" fullWidth>
                {t("View Deals")}
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default DailyCard;

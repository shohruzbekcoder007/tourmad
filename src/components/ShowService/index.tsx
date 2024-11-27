import React, { useEffect } from "react";
import TelegramIcon from '@mui/icons-material/Telegram';
import { Container, GlobalParagraph, WelcomeMainText } from "../../global_styles/styles";
import ShowHotels from "./../../media/images/Rectangle 41.png";
import { Box, Button, Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getHomeBanner, getHomeBannerPhotos } from "../../redux/slices/homeSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ShowService: React.FC = () => {
    const navigate = useNavigate()
    const homeBanner = useAppSelector(getHomeBannerPhotos)
const {t} = useTranslation()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getHomeBanner())
    },[])
    
    return (
        <Container>
            <Box pb="70px">
                <Grid container spacing={2}>
                    <Grid item xl={6} md={6} sm={6} xs={12}>
                           <Box sx={{ 
                                backgroundImage: `url("${homeBanner.banner?.history}")`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: "20px",
                                height: {xl: "559px", md: "559px", sm: "400px", xs: "400px"}}}>
                               <Box padding="24px"
                                borderRadius="20px" 
                                display='flex' 
                                justifyContent="center" 
                                alignItems="flex-end" 
                                sx={{height: "100%", background: "linear-gradient(180deg, #00000017, #00000073)"}}>
                                <Box textAlign="center">
                                        <WelcomeMainText fontSize="40px" paddingbottom="8px">
                                            {t("History")}
                                        </WelcomeMainText>
                                        <GlobalParagraph fontSize="16px" fontWeight="400" color="neutrals" paddingbottom="16px">
                                            {t("The study of history helps people to deepen their understanding of their own culture and relationships.")}
                                        </GlobalParagraph>
                                        <Button onClick={() => navigate("/history")}  variant="contained" startIcon={<TelegramIcon />}>{t("Show History")}</Button>
                                    </Box>
                               </Box>
                           </Box> 
                    </Grid>
                    <Grid item xl={6} md={6} sm={6} xs={12}>
                           <Box  sx={{ 
                                backgroundImage: `url("${homeBanner.banner?.hotels}")`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: "20px",
                                height: {xl: "559px", md: "559px", sm: "400px", xs: "400px"}}}>
                                <Box padding="24px"
                                borderRadius="20px" 
                                display='flex' 
                                justifyContent="center" 
                                alignItems="flex-end" 
                                sx={{height: "100%", background: "linear-gradient(180deg, #00000017, #00000073)"}}>
                                    <Box textAlign="center">
                                        <WelcomeMainText fontSize="40px" paddingbottom="8px">
                                            {t("Hotels")}
                                        </WelcomeMainText>
                                        <GlobalParagraph fontSize="16px" fontWeight="400" color="neutrals" paddingbottom="16px">
                                            {t("Search hotels & Places Hire to our most popular destinations")}
                                        </GlobalParagraph>
                                        <Button onClick={() => navigate("/hotel-filter")} variant="contained" startIcon={<TelegramIcon />}>{t("Show Hotels")}</Button>
                                    </Box>
                                </Box>
                           </Box> 
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ShowService;
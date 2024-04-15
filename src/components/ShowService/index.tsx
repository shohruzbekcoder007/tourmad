import React from "react";
import TelegramIcon from '@mui/icons-material/Telegram';
import { Container, GlobalParagraph, WelcomeMainText } from "../../global_styles/styles";
import ShowFlight from "./../../media/images/Rectangle 40.png";
import ShowHotels from "./../../media/images/Rectangle 41.png";
import { Box, Button, Grid } from "@mui/material";

const ShowService: React.FC = () => {
    return (
        <Container>
            <Box pb="70px">
                <Grid container spacing={2}>
                    <Grid item xl={6} md={6} sm={6} xs={12}>
                           <Box sx={{ 
                                backgroundImage: `url("${ShowFlight}")`,
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
                                            Flights
                                        </WelcomeMainText>
                                        <GlobalParagraph fontSize="16px" fontWeight="400" color="#fff" paddingbottom="16px">
                                            Search Flights & Places Hire to our most popular <br/> destinations
                                        </GlobalParagraph>
                                        <Button sx={{backgroundColor: "#8DD3BB", color: "#000"}}  variant="contained" startIcon={<TelegramIcon />}>Show Filghts</Button>
                                    </Box>
                               </Box>
                           </Box> 
                    </Grid>
                    <Grid item xl={6} md={6} sm={6} xs={12}>
                           <Box  sx={{ 
                                backgroundImage: `url("${ShowHotels}")`,
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
                                            Hotels
                                        </WelcomeMainText>
                                        <GlobalParagraph fontSize="16px" fontWeight="400" color="#fff" paddingbottom="16px">
                                            Search hotels & Places Hire to our most popular <br/> destinations
                                        </GlobalParagraph>
                                        <Button sx={{backgroundColor: "#8DD3BB", color: "#000"}}  variant="contained" startIcon={<TelegramIcon />}>Show Hotels</Button>
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
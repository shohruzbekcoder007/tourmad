import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { Container, GlobalParagraph, WelcomeMainText } from "../../global_styles/styles";
import { CardPhoto, TripCardTitle, TripPlanCard } from "./styles";
import Istanbul from "./../../media/images/Rectangle3.png";
import Sydney from "./../../media/images/Rectangle 3 (1).png";
import Baku from "./../../media/images/Rectangle 4.png";
import Male from "./../../media/images/Rectangle 4 (1).png";
import Paris from "./../../media/images/Rectangle 3 (2).png";
import NewYork from "./../../media/images/Rectangle 4 (2).png";
import London from "./../../media/images/Rectangle 3 (3).png";
import Tokyo from "./../../media/images/Rectangle 3 (4).png";
import Dubai from "./../../media/images/Rectangle 4 (3).png";

const TripPlan: React.FC = () => {
    return (
        <Container>
            <Box pb='48px'>
                <Grid container pb="40px">
                    <Grid item xl={8} md={8} sm={6} xs={6}>
                        <WelcomeMainText paddingbottom={"16px"} fontSize={"32px"} part>Plan your perfect trip</WelcomeMainText>
                        <GlobalParagraph fontSize={"16px"} fontWeight="400">Search Flights & Places Hire to our most popular destinations</GlobalParagraph>
                    </Grid>
                    <Grid item xl={4} md={4} sm={6} xs={6} display='flex' justifyContent='flex-end' alignItems='center'>
                        <Button variant="outlined" sx={{color: "#000"}} color="success">See more places</Button>
                    </Grid>
                </Grid>
                <Box display='flex' justifyContent='center' flexWrap='wrap' gap='32px'>
                    <TripPlanCard>
                        <CardPhoto>
                            <img src={Istanbul} alt="Istanbul, Turkey" />
                        </CardPhoto>
                        <Box>
                            <TripCardTitle>Istanbul, Turkey</TripCardTitle>
                            <GlobalParagraph fontSize="14px" fontWeight="500">Flights &#x2022; Hotels &#x2022; Resorts</GlobalParagraph>
                        </Box>
                    </TripPlanCard>
                    <TripPlanCard>
                        <CardPhoto>
                            <img src={Sydney} alt="Sydney, Australia" />
                        </CardPhoto>
                        <Box>
                            <TripCardTitle>Sydney, Australia</TripCardTitle>
                            <GlobalParagraph fontSize="14px" fontWeight="500">Flights &#x2022; Hotels &#x2022; Resorts</GlobalParagraph>
                        </Box>
                    </TripPlanCard>
                    <TripPlanCard>
                        <CardPhoto>
                            <img src={Baku} alt="Baku, Azerbaijan" />
                        </CardPhoto>
                        <Box>
                            <TripCardTitle>Baku, Azerbaijan</TripCardTitle>
                            <GlobalParagraph fontSize="14px" fontWeight="500">Flights &#x2022; Hotels &#x2022; Resorts</GlobalParagraph>
                        </Box>
                    </TripPlanCard>
                    <TripPlanCard>
                        <CardPhoto>
                            <img src={Male} alt="Malé, Maldives" />
                        </CardPhoto>
                        <Box>
                            <TripCardTitle>Malé, Maldives</TripCardTitle>
                            <GlobalParagraph fontSize="14px" fontWeight="500">Flights &#x2022; Hotels &#x2022; Resorts</GlobalParagraph>
                        </Box>
                    </TripPlanCard>
                    <TripPlanCard>
                        <CardPhoto>
                            <img src={Paris} alt="Paris, France" />
                        </CardPhoto>
                        <Box>
                            <TripCardTitle>Paris, France</TripCardTitle>
                            <GlobalParagraph fontSize="14px" fontWeight="500">Flights &#x2022; Hotels &#x2022; Resorts</GlobalParagraph>
                        </Box>
                    </TripPlanCard>
                    <TripPlanCard>
                        <CardPhoto>
                            <img src={NewYork} alt="New York, US" />
                        </CardPhoto>
                        <Box>
                            <TripCardTitle>New York, US</TripCardTitle>
                            <GlobalParagraph fontSize="14px" fontWeight="500">Flights &#x2022; Hotels &#x2022; Resorts</GlobalParagraph>
                        </Box>
                    </TripPlanCard>
                    <TripPlanCard>
                        <CardPhoto>
                            <img src={London} alt="London, UK" />
                        </CardPhoto>
                        <Box>
                            <TripCardTitle>London, UK</TripCardTitle>
                            <GlobalParagraph fontSize="14px" fontWeight="500">Flights &#x2022; Hotels &#x2022; Resorts</GlobalParagraph>
                        </Box>
                    </TripPlanCard>
                    <TripPlanCard>
                        <CardPhoto>
                            <img src={Tokyo} alt="Tokyo, Japan" />
                        </CardPhoto>
                        <Box>
                            <TripCardTitle>Tokyo, Japan</TripCardTitle>
                            <GlobalParagraph fontSize="14px" fontWeight="500">Flights &#x2022; Hotels &#x2022; Resorts</GlobalParagraph>
                        </Box>
                    </TripPlanCard>
                    <TripPlanCard>
                        <CardPhoto>
                            <img src={Dubai} alt="Dubai, UAE" />
                        </CardPhoto>
                        <Box>
                            <TripCardTitle>Dubai, UAE</TripCardTitle>
                            <GlobalParagraph fontSize="14px" fontWeight="500">Flights &#x2022; Hotels &#x2022; Resorts</GlobalParagraph>
                        </Box>
                    </TripPlanCard>
                </Box>
            </Box>
        </Container>
    );
};

export default TripPlan;
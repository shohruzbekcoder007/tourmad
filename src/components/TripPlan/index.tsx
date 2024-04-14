import { Box, Button, Grid } from "@mui/material";
import React from "react";
import { Container, GlobalParagraph, WelcomeMainText } from "../../global_styles/styles";
const TripPlan: React.FC = () => {
    return (
        <Container>
            <Box pb='40px'>
                <Grid container>
                    <Grid item xl={8} md={8} sm={6} xs={6}>
                        <WelcomeMainText paddingbottom={"16px"} fontSize={"32px"} part>Plan your perfect trip</WelcomeMainText>
                        <GlobalParagraph fontSize={"16px"} fontWeight="400">Search Flights & Places Hire to our most popular destinations</GlobalParagraph>
                    </Grid>
                    <Grid item xl={4} md={4} sm={6} xs={6} display='flex' justifyContent='flex-end' alignItems='center'>
                        <Button variant="outlined" sx={{color: "#000"}} color="success">See more places</Button>
                    </Grid>
                </Grid>
            </Box>
            <Box>

            </Box>
        </Container>
    );
};

export default TripPlan;
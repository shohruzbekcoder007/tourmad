import { Box, Grid } from "@mui/material";
import React from "react";
import { Container, WelcomeMainText } from "../../global_styles/styles";
const TripPlan: React.FC = () => {
    return (
        <Container>
            <Box>
                <Grid container>
                    <Grid item xl={8} md={8} sm={6} xs={6}>
                        <WelcomeMainText fontSize={"32px"} part>Plan your perfect trip</WelcomeMainText>
                    </Grid>
                    <Grid item xl={4} md={4} sm={6} xs={6}>

                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default TripPlan;
import { Box, Button, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { Container, GlobalParagraph, WelcomeMainText } from "../../global_styles/styles";
import { CardPhoto, TripCardTitle, TripPlanCard } from "./styles";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getCommonLocationList, getCommonLocations } from "../../redux/slices/commonLocationSlicer";
import { useTranslation } from "react-i18next";

const TripPlan: React.FC = () => {
    const navigate = useNavigate()
    const commonLocation = useAppSelector(getCommonLocations)
const {t} = useTranslation()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCommonLocationList())
    }, [])
    return (
        <Container>
            <Box pb='48px'>
                <Grid container pb="40px">
                    <Grid item xl={8} md={8} sm={6} xs={6}>
                        <WelcomeMainText paddingbottom={"16px"} fontSize={"32px"} mediafontsize="18px" part="true">{t("Plan your perfect trip")}</WelcomeMainText>
                        <GlobalParagraph fontSize={"16px"} mediafontsize="12px" fontWeight="400">{t("The best locations for your travel plans")}</GlobalParagraph>
                    </Grid>
                    <Grid item xl={4} md={4} sm={6} xs={6} display='flex' justifyContent='flex-end' alignItems='center'>
                        <Button onClick={() => navigate("/history")} variant="outlined" sx={{ color: "#000" }} color="success">See more places</Button>
                    </Grid>
                </Grid>
                <Box display='flex'
                    justifyContent={{ xl: "center", md: "space-between", sm: "space-between", xs: "space-between" }}
                    flexWrap='wrap'
                    gap={{ xl: '32px', md: 0, sm: 0, xs: 0 }}>
                    {
                        commonLocation?.map((item, index) => {
                            return (
                                <TripPlanCard key={index + 1}>
                                    <CardPhoto>
                                        <img src={`${item.photo}`} alt={`${item.name}`} />
                                    </CardPhoto>
                                    <Box>
                                        <TripCardTitle>{item.name}</TripCardTitle>
                                    </Box>
                                </TripPlanCard>
                            )
                        })
                    }
                </Box>
            </Box>
        </Container>
    );
};

export default TripPlan;
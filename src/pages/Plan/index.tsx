import React, { useEffect } from "react";
import {
  Container,
  GlobalParagraph,
  WelcomeMainText,
} from "../../global_styles/styles";
import Banner from "../../components/Banner";
import banner_photo from "./../../media/images/banner-plan.jpg";
import IntoTravel from "../../components/IntoTravel";
import { Button, Grid } from "@mui/material";
import ResentSearch from "../../components/ResentSearch";
import { useNavigate } from "react-router-dom";
import {
  getCategoryPlanList,
  getPlanCategoryList,
  getPlanRecommendationList,
  getRecommendationPlanList,
  getStatusLastRecommendationPlan,
} from "../../redux/slices/planSliser";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useTranslation } from "react-i18next";

const Plan: React.FC = () => {
  const navigate = useNavigate();
  const {t} = useTranslation()
  const statusLastRecommendationPlan = useAppSelector(
    getStatusLastRecommendationPlan
  );
  const planRecommendationList = useAppSelector(getPlanRecommendationList);
  const getPlanCategoryListt = useAppSelector(
    getPlanCategoryList
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (statusLastRecommendationPlan === "idle") {
      dispatch(getRecommendationPlanList());
      dispatch(getCategoryPlanList())
    }
  }, [statusLastRecommendationPlan, dispatch]);

  return (
    <>
      <Banner
        bgimage={banner_photo}
        heightprops="400px"
        bannersubtitle={t("Special offers to suit your plan")}
        bannertitle={t("Make the best travel plan.")}
      />
      <Container>
        <ResentSearch
          title={t("Your Location for plan")}
          locationList={getPlanCategoryListt}
          statusLastSearch="succeeded"
        />
        <Grid container>
          <Grid item xl={8} md={8} sm={6} xs={8}>
            <WelcomeMainText
              paddingbottom={"16px"}
              mediafontsize="24px"
              texttransform="capitalize"
              fontSize={"32px"}
              part="true"
            >
              {t("Fall into travel")}
            </WelcomeMainText>
            <GlobalParagraph
              fontSize={"16px"}
              mediafontsize="14px"
              fontWeight="400"
            >
              {t("Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.")}
            </GlobalParagraph>
          </Grid>
          <Grid
            item
            xl={4}
            md={4}
            sm={6}
            xs={4}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button onClick={() => navigate("/plan-filter")} variant="outlined">
              {t("See All")}
            </Button>
          </Grid>
        </Grid>
        <IntoTravel link="plan" data={planRecommendationList} />
      </Container>
    </>
  );
};

export default Plan;

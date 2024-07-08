import { Button, Grid, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Container,
  GlobalParagraph,
  WelcomeMainText,
} from "../../global_styles/styles";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import {
  changeCategory,
  getConsultingCategoryList,
  getConsultingCategoryLoading,
  getStatusConsultingCategoryList,
  getTripConsultingCategoryList,
} from "../../redux/slices/consultingSlice";
import { ConsultingCategoryType } from "../../utils/response_types";
const CunsultingPlanCategory: React.FC = () => {
  
  useEffect(() => {}, []); //for error fixed

  const dispatch = useAppDispatch();

  //redux

  const statusConsultingCategoryList = useAppSelector(
    getStatusConsultingCategoryList
  );
  const consultingCategoryList = useAppSelector(getConsultingCategoryList);
  const consultingCategoryLoading = useAppSelector(
    getConsultingCategoryLoading
  );

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const changeCategoryFunc = (category: number | null) => {
      setSelectedCategory(category)
      dispatch(changeCategory(category));
  };

  useEffect(() => {
    if (statusConsultingCategoryList === "idle") {
      dispatch(getTripConsultingCategoryList());
    }
  }, [statusConsultingCategoryList, dispatch]);

  return (
    <Stack py="40px" mb="40px" bgcolor="#edececee">
      <Container>
        <Grid container pb="32px">
          <Grid item xl={8} md={8} sm={6} xs={8}>
            <WelcomeMainText
              paddingbottom={"16px"}
              texttransform="capitalize"
              fontSize={"24px"}
              part="true"
            >
              Consulting
            </WelcomeMainText>
            <GlobalParagraph fontSize={"16px"} fontWeight="400">
              consulting
            </GlobalParagraph>
          </Grid>
        </Grid>
        <Stack
          display="flex"
          flexWrap="wrap"
          flexDirection="row"
          justifyContent="flex-start"
          gap="10px"
        >
          {consultingCategoryLoading ? (
            "Loading"
          ) : (
            <>
              {consultingCategoryList?.map(
                (consultingCategory: ConsultingCategoryType, index: number) => {
                  return (
                    <Button
                      key={index}
                      sx={{
                        backgroundColor: selectedCategory === consultingCategory.id ? "#fff" : "transparent",
                        padding: "10px",
                        border: "1px solid black",
                        borderRadius: "10px",
                        ":hover": {
                          backgroundColor: "#fff",
                        },
                      }}
                      onClick={() => {
                        changeCategoryFunc(consultingCategory?.id);
                      }}
                    >
                      <LocationCityIcon /> {consultingCategory?.name}{" "}
                      {consultingCategory?.count}
                    </Button>
                  );
                }
              )}
            </>
          )}
        </Stack>
      </Container>
    </Stack>
  );
};
export default CunsultingPlanCategory;

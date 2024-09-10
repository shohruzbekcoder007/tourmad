import {
  Box,
  Button,
  Grid,
  IconButton,
  Pagination,
  Stack,
} from "@mui/material";
import React, { useEffect } from "react";
import { GlobalParagraph, WelcomeMainText } from "../../global_styles/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useTranslation } from "react-i18next";
import {
  changePage,
  getConsultingList,
  getConsultingListCurrentPage,
  getConsultingListTotalPages,
  getConsultingLoading,
  getStatusConsultingList,
  getTripConsultingList,
} from "../../redux/slices/consultingSlice";
import { ConsultingType } from "../../utils/response_types";

const ConsultingCards: React.FC = () => {
  const {t} = useTranslation()
  
  const navigate = useNavigate();

  useEffect(() => {}, []); //for error fixed

  const dispatch = useAppDispatch();

  //redux

  const consultingListTotalPages = useAppSelector(getConsultingListTotalPages);
  const consultingListCurrentPage = useAppSelector(
    getConsultingListCurrentPage
  );
  const statusConsultingList = useAppSelector(getStatusConsultingList);
  const consultingList = useAppSelector(getConsultingList);
  const consultingLoading = useAppSelector(getConsultingLoading);

  const changePageHandler = (page: number) => {
    dispatch(changePage(page));
  };


  useEffect(() => {
    if (statusConsultingList === "idle") {
      dispatch(getTripConsultingList());
    }
  }, [statusConsultingList, dispatch]);
  return (
    <>
      <Stack pb="80px" mb="80px">
        <Grid container>
          <Grid item xl={8} md={8} sm={6} xs={8}>
            <WelcomeMainText
              paddingbottom={"16px"}
              mediafontsize="24px"
              texttransform="capitalize"
              fontSize={"32px"}
              part="true"
            >
              consulting
            </WelcomeMainText>
            <GlobalParagraph
              fontSize={"16px"}
              mediafontsize="14px"
              fontWeight="400"
            >
              consulting
            </GlobalParagraph>
          </Grid>
        </Grid>
        <Box
          display="flex"
          flexWrap="wrap"
          width="100%"
          justifyContent="flex-start"
          alignItems="center"
          gap="15px"
        >
          {consultingLoading ? (
            "Loading"
          ) : (
            <>
              {consultingList?.map(
                (consulting: ConsultingType, index: number) => {
                  return (
                    <Box
                    key={index}
                      sx={{
                        backgroundImage: `url(${consulting?.card})`,
                        backgroundRepeat: "no-repeat",
                        p: "24px",
                        display: "flex",
                        alignItems: "flex-end",
                        borderRadius: "12px",
                        height: "420px",
                        mt: "32px",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        position: "relative",
                        minWidth: "296px",
                        "&:hover": {
                          boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                          cursor: "pointer",
                        },
                      }}
                    >
                      <IconButton
                        sx={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                        }}
                        aria-label="favorite"
                        color="secondary"
                      >
                        <FavoriteBorderIcon />
                      </IconButton>
                      <Box width="100%">
                        <Box
                          pb="16px"
                          width="100%"
                          display="flex"
                          flexWrap="wrap"
                          justifyContent="space-between"
                          alignItems="flex-end"
                        >
                          <Box>
                            <GlobalParagraph
                              fontSize="24px"
                              mediafontsize="18px"
                              fontWeight="600"
                              color="neutrals"
                            >
                              {consulting?.name}
                            </GlobalParagraph>
                            <GlobalParagraph
                              fontSize="14px"
                              mediafontsize="12px"
                              fontWeight="400"
                              color="neutrals"
                            >
                              {consulting?.desc}
                            </GlobalParagraph>
                          </Box>
                          <Button
                            sx={{ height: "48px" }}
                            onClick={() => navigate(`/consulting-detail/${consulting.id}`)}
                            fullWidth
                            variant="contained"
                          >
                            {consulting?.desc}
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  );
                }
              )}
            </>
          )}
        </Box>
        <Box
          sx={{
            textAlign: "center",
            margin: "50px auto",
          }}
        >
          <Pagination count={consultingListTotalPages} page={consultingListCurrentPage} onChange={(_, page) => { changePageHandler(page) }} color="primary" />
        </Box>
      </Stack>
    </>
  );
};

export default ConsultingCards;

import {
  Stack,
  Box,
  Button,
  Paper,
  Grid,
  IconButton,
  Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { GlobalParagraph, WelcomeMainText } from "../../global_styles/styles";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { CustomAutocomplete } from "../../helper_components";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ResentSearch from "../ResentSearch";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import {
  getCommonLocationList,
  getCommonLocations,
  getStatusCommonLocation,
} from "../../redux/slices/commonLocationSlicer";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  changePage,
  changeSearchLocation,
  getCommonLocationHistory,
  getCommonLocationHistoryList,
  getHistoryList,
  getHistoryListCurrentPage,
  getHistoryListTotalPages,
  getHistoryLoading,
  getStatusHistoryList,
  getTripHistoryList,
} from "../../redux/slices/historySlice";
import { HistoryType } from "../../utils/response_types";
import { postLikeIdH } from "../../redux/slices/wishListSlice";
import { useTranslation } from "react-i18next";

type Option = {
  label: string;
  value: string;
};

const HistoryService: React.FC = () => {
  const [from, setFrom] = useState<Option | null>(null);
  const navigate = useNavigate();
const {t} = useTranslation()
  useEffect(() => {}, [from]); //for error fixed

  const dispatch = useAppDispatch();
  const statusCommonLocation = useAppSelector(getStatusCommonLocation);
  const commonLocationList = useAppSelector(getCommonLocations);

  // redux
  const historyListTotalPages = useAppSelector(getHistoryListTotalPages);
  const historyListCurrentPage = useAppSelector(getHistoryListCurrentPage);
  const statusHistoryList = useAppSelector(getStatusHistoryList);
  const historyList = useAppSelector(getHistoryList);
  const historyLoading = useAppSelector(getHistoryLoading);
  const commonLocationHistoryList = useAppSelector(
    getCommonLocationHistoryList
  );

  const changePageHandler = (page: number) => {
    dispatch(changePage(page));
  };

  useEffect(() => {
    if (statusCommonLocation === "idle") {
      dispatch(getCommonLocationList());
      dispatch(getCommonLocationHistory());
    }
  }, [statusCommonLocation, dispatch]);

  const getChangeOptionFrom = (newValue: Option | null) => {
    setFrom(newValue);
  };

  const filterLocation = commonLocationList?.filter((item) => {
    return item.parent !== null;
  });

  const newOption: Option[] | undefined = filterLocation?.map((item) => {
    return { label: item.name, value: "" + item.id };
  });

  useEffect(() => {
    if (statusHistoryList === "idle") {
      dispatch(getTripHistoryList());
    }
  }, [statusHistoryList, dispatch]);

//   const [liked, setLiked] = useState(historyList);

  function handleLikeFunc(id: number) {
    // setLiked(!liked);
    dispatch(postLikeIdH(id));
  }

  return (
    <Stack mt="40px">
      <Box pb="40px" display="flex" justifyContent="space-between">
        <WelcomeMainText
          fontSize="32px"
          mediafontsize="18px"
          texttransform="capitalize"
          part="true"
        >
          {t("History")}
        </WelcomeMainText>
        <Button variant="outlined" onClick={() => navigate(-1)}>
          <KeyboardBackspaceIcon />
        </Button>
      </Box>
      <Paper
        elevation={0}
        sx={{
          boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
          borderRadius: "16px",
          padding: "16px 24px 32px 24px",
          mb: "32px",
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box
            mt="16px"
            minWidth={{ xl: "90%", md: "90%", sm: "85%", xs: "70%" }}
          >
            <CustomAutocomplete
              options={newOption === undefined ? [] : newOption}
              placeholder="Search"
              getChange={getChangeOptionFrom}
              icon={<LocationOnIcon />}
            />
          </Box>
          <Box mt="16px" width={"56px"}>
            <Button
              sx={{ height: "56px" }}
              fullWidth
              variant="contained"
              onClick={() => {
                dispatch(changeSearchLocation(from?.value));
              }}
            >
              <SearchIcon />
            </Button>
          </Box>
        </Box>
      </Paper>
      <ResentSearch
        statusLastSearch="succeeded"
        locationList={commonLocationHistoryList}
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
      </Grid>
      <Box
        display="flex"
        width="100%"
        justifyContent="flex-start"
        flexWrap={"wrap"}
        gap="31px"
      >
        {historyLoading ? (
          "Loading"
        ) : (
          <>
            {historyList?.map((history: HistoryType, index: number) => {
              return (
                <Box
                  key={index}
                  sx={{
                    backgroundImage: `url(${history?.card})`,
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
                    width: { xl: "23%", md: "30%", sm: "48%", xs: "100%" },
                    "&:hover": {
                      boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                      cursor: "pointer",
                    },
                  }}
                >
                  <IconButton
                    sx={{ position: "absolute", top: "10px", right: "10px" }}
                    aria-label="favorite"
                    color="primary"
                  >
                    {/* <Button
                      variant="outlined"
                      onClick={() => handleLikeFunc(id as number)}
                    >
                      {liked ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M11.9995 21.5C11.6985 21.4996 11.4045 21.4086 11.1558 21.2389C7.47189 18.7381 5.87673 17.0234 4.99689 15.9514C3.12189 13.6663 2.22423 11.3202 2.24954 8.77953C2.27908 5.86813 4.61486 3.5 7.45642 3.5C9.52267 3.5 10.9538 4.66391 11.7872 5.63328C11.8136 5.66368 11.8462 5.68805 11.8829 5.70476C11.9195 5.72146 11.9593 5.73011 11.9995 5.73011C12.0398 5.73011 12.0796 5.72146 12.1162 5.70476C12.1529 5.68805 12.1855 5.66368 12.2119 5.63328C13.0453 4.66297 14.4764 3.5 16.5427 3.5C19.3842 3.5 21.72 5.86812 21.7495 8.78C21.7749 11.3211 20.8763 13.6672 19.0022 15.9519C18.1224 17.0239 16.5272 18.7386 12.8433 21.2394C12.5946 21.4089 12.3006 21.4998 11.9995 21.5Z"
                            fill="#1B1464"
                          />
                        </svg>
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </Button> */}
                  </IconButton>
                  <Box width="100%">
                    <Box
                      pb="16px"
                      width="100%"
                      display="flex"
                      justifyContent="space-between"
                      alignItems="flex-end"
                    >
                      <Box>
                        <GlobalParagraph
                          fontSize="24px"
                          fontWeight="600"
                          mediafontsize="18px"
                          color="neutrals"
                        >
                          {history?.name}
                        </GlobalParagraph>
                        <GlobalParagraph
                          fontSize="14px"
                          fontWeight="400"
                          mediafontsize="12px"
                          color="neutrals"
                        >
                          {history?.desc}
                        </GlobalParagraph>
                      </Box>
                    </Box>
                    <Button
                      sx={{ height: "48px" }}
                      fullWidth
                      variant="contained"
                      onClick={() => navigate(`/history-detail/${history?.id}`)}
                    >
                      {t("View History")}
                    </Button>
                  </Box>
                </Box>
              );
            })}
          </>
        )}

        <Box display="flex" justifyContent="center" width={"100%"}>
          <Pagination
            count={historyListTotalPages}
            page={historyListCurrentPage}
            color="primary"
            onChange={(_, page) => {
              changePageHandler(page);
            }}
          />
        </Box>
      </Box>
    </Stack>
  );
};

export default HistoryService;

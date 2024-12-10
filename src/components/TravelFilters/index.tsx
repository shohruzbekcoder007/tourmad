import { Paper, Stack, Box, Button, Divider, Tabs, Tab } from "@mui/material";
import { CustomAutocomplete } from "../../helper_components";
import React, { useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import TravelFilterCard from "../TravelFilterCard";
import { useTranslation } from "react-i18next";
import { DatePicker } from "@mui/x-date-pickers";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  getCheapTicketDataList,
  getCheapTicketList,
  getCitiesList,
  getCitiesTicketList,
  getDate,
  getErrorGetTicket,
  getTicketStatus,
  setDate,
  setFromCity,
  setToCity,
} from "../../redux/slices/ticketSlice";
import dayjs, { Dayjs } from "dayjs";
import { enqueueSnackbar } from "notistack";

type Option = {
  label: string;
  value: string;
};

const TravelFilters: React.FC = () => {
  const dispatch = useAppDispatch();
  const ticketCitiesList = useAppSelector(getCitiesList);
  const statusCities = useAppSelector(getTicketStatus);
  const cheapTicketList = useAppSelector(getCheapTicketDataList);
  const ErrorGetTicket = useAppSelector(getErrorGetTicket)
  const date = useAppSelector(getDate);
  const { t } = useTranslation();
  const [valueTab, setValueTab] = React.useState(0);

  useEffect(() => {
    if (statusCities === "idle") {
      dispatch(getCitiesTicketList());
    }
  }, [statusCities, dispatch]);

  function handleTicketsFunc() {
    dispatch(getCheapTicketList());
    if(ErrorGetTicket) {
      enqueueSnackbar(ErrorGetTicket, {variant: "error"})
    }
  }

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };

  const handleFromChange = (selectedOption: Option | null) => {
    if (selectedOption !== null) {
      dispatch(setFromCity(selectedOption)); // selectedOption is guaranteed to be an object here
    }
  };

  const handleToChange = (selectedOption: Option | null) => {
    if (selectedOption !== null) {
      dispatch(setToCity(selectedOption)); // selectedOption is guaranteed to be an object here
    }
  };

  const handleDateChange = (newValue: Dayjs | null) => {
    if (newValue) {
      const formattedDate = newValue.format("D/M/YYYY");
      dispatch(setDate(formattedDate));
    }
  };

  return (
    <Stack>
      <Paper
        elevation={0}
        sx={{
          boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
          borderRadius: "16px",
          padding: "16px 24px 32px 24px",
          marginTop: "48px",
          mb: "32px",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          <Box
            mt="16px"
            minWidth={{ xl: "300px", md: "200px", sm: "100%", xs: "100%" }}
          >
            <CustomAutocomplete
              options={ticketCitiesList?.map((city) => ({
                label: city.name_en ?? "",
                value: city.code ?? "",
              }))}
              placeholder={t("From")}
              getChange={handleFromChange}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g id="ion:swap-horizontal">
                    <path
                      id="Vector"
                      d="M14.25 2.25L19.5 7.5L14.25 12.75M18.697 7.5H4.5M9.75 21.75L4.5 16.5L9.75 11.25M5.34375 16.5H19.5"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              }
            />
          </Box>
          <Box
            mt="16px"
            minWidth={{ xl: "200px", md: "200px", sm: "100%", xs: "100%" }}
          >
            <CustomAutocomplete
              options={ticketCitiesList?.map((city) => ({
                label: city.name_en ?? "",
                value: city.code ?? "",
              }))}
              placeholder={t("To")}
              getChange={handleToChange}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g id="ion:swap-horizontal">
                    <path
                      id="Vector"
                      d="M14.25 2.25L19.5 7.5L14.25 12.75M18.697 7.5H4.5M9.75 21.75L4.5 16.5L9.75 11.25M5.34375 16.5H19.5"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              }
            />
          </Box>
          <Box
            mt="16px"
            minWidth={{ xl: "300px", md: "200px", sm: "100%", xs: "100%" }}
          >
            <DatePicker
              label="Date Picker"
              format="D/M/YYYY"
              defaultValue={dayjs(date)}
              slotProps={{ field: { shouldRespectLeadingZeros: true } }}
              onChange={handleDateChange}
            />
          </Box>
          <Box
            mt="16px"
            width={{ xl: "56px", md: "100%", sm: "100%", xs: "100%" }}
          >
            <Button
              sx={{ height: "56px" }}
              fullWidth
              variant="contained"
              onClick={handleTicketsFunc}
            >
              <SearchIcon />
            </Button>
          </Box>
        </Box>
      </Paper>
      <Box display="flex" justifyContent="space-between">
        <Box width={{ xl: "100%", md: "100%", sm: "100%", xs: "100%" }}>
          <Paper
            elevation={0}
            sx={{
              boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
              borderRadius: "12px",
              padding: "16px 24px",
              marginTop: "48px",
              mb: "32px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Tabs
              value={valueTab}
              sx={{
                display: { xl: "block", md: "block", sm: "block", xs: "none" },
              }}
              onChange={handleChangeTab}
              aria-label="icon label tabs example"
            >
              <Tab
                sx={{ width: { xl: "180px", md: "140px" } }}
                label={t("Cheapest")}
              />
              <Divider orientation="vertical" variant="middle" flexItem />
              <Tab
                sx={{ width: { xl: "180px", md: "140px" } }}
                label={t("Best")}
              />
              <Divider orientation="vertical" variant="middle" flexItem />
              <Tab
                sx={{ width: { xl: "180px", md: "140px" } }}
                label={t("Quickest")}
              />
              <Divider orientation="vertical" variant="middle" flexItem />
              <Tab
                sx={{ width: { xl: "180px", md: "140px" } }}
                label={t("Other sort")}
              />
            </Tabs>
          </Paper>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pb="24px"
          ></Box>
          <TravelFilterCard data={cheapTicketList} />
          <Box display="flex" justifyContent="center">
            <Button sx={{ width: "50%" }} color="success" variant="contained">
              {t("Show more results")}
            </Button>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default TravelFilters;

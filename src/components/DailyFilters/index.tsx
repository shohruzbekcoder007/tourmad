import {
    Stack,
    Box,
    Button,
    List,
    ListItemButton,
    Collapse,
    ListItemText,
    Slider,
    Typography,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Pagination
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import Select, { SelectChangeEvent } from "@mui/material/Select";
  import { ExpandLess, ExpandMore } from "@mui/icons-material";
  import { GlobalParagraph, WelcomeMainText } from "../../global_styles/styles";
  import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
  import { CustomAutocomplete } from "../../helper_components";
  import SearchIcon from '@mui/icons-material/Search';
  import FilterDrawerHotel from "../FilterDrawerHotel";
  import LocationOnIcon from '@mui/icons-material/LocationOn';
  import { useAppDispatch, useAppSelector } from "../../redux/hooks";
  import { changeGrade, changePage, changePriceFrom, changePriceTo, changeRoomStyle, changeSearchLocation, getDailyGrade, getDailyList, getDailyListCurrentPage, getDailyListTotalPages, getDailyLoading, getDailyPriceFrom, getDailyPriceTo, getStatusDailyList, getTripDailyList } from "../../redux/slices/dailySlice";
  import { AppDispatch } from "../../redux/store"
  import { useDebounce } from 'use-debounce';
  import room_styles from "../../dictionary/room_style";
  import { useNavigate } from "react-router-dom";
  import DriveFilterSkeleton from "../Skeleton/DriveFilterSkeleton";
  import { RecommendationType } from "../../utils/response_types";
  import { getCommonLocationList, getCommonLocations, getStatusCommonLocation } from "../../redux/slices/commonLocationSlicer";
import DailyCard from "./DailyCard";
import { useTranslation } from "react-i18next";
  
  type Option = {
    label: string,
    value: string
  }
  
  const MAX = 500;
  const MIN = 10;
  
  const marks = [
    {
      value: MIN,
      label: "",
    },
    {
      value: MAX,
      label: "",
    },
  ];
  
  function valuetext(value: number) {
    return `${value + 10}$`;
  }
  
  const DailyFilters: React.FC = () => {
  const {t} = useTranslation()
    const navigate = useNavigate()
    const [from, setFrom] = useState<Option | null>(null)
    const [openPrice, setOpenPrice] = React.useState(true)
    const [openRating, setOpenRating] = React.useState(true)
    const [value, setValue] = React.useState<number[]>([20, 300])
    const [age, setAge] = React.useState(room_styles[0].value)
  
    const [sliderValue] = useDebounce(value, 1000)
  
    // redux
    const statusDailyLIst = useAppSelector(getStatusDailyList)
    const dailyList = useAppSelector(getDailyList)
    const dailyListTotalPages = useAppSelector(getDailyListTotalPages)
    const dailyListCurrentPage = useAppSelector(getDailyListCurrentPage)
    const dailyLoading = useAppSelector(getDailyLoading)
    const dailyGrade = useAppSelector(getDailyGrade)
    const dailyPriceFrom = useAppSelector(getDailyPriceFrom)
    const dailyPriceTo = useAppSelector(getDailyPriceTo)
    const statusCommonLocation = useAppSelector(getStatusCommonLocation)
    const commonLocationList = useAppSelector(getCommonLocations)
  
    const dispatch: AppDispatch = useAppDispatch()
  
    const handleChangeSort = (event: SelectChangeEvent) => {
      setAge(event.target.value);
      dispatch(changeRoomStyle(event.target.value as string))
    }
  
    const handleChange = (_: Event, newValue: number | number[]) => {
      setValue(newValue as number[])
    }
  
    const handleClickPrice = () => {
      setOpenPrice(!openPrice)
    }
  
    const handleClickRating = () => {
      setOpenRating(!openRating)
    }
  
    const getChangeOptionFrom = (newValue: Option | null) => {
      setFrom(newValue)
    }
  
    const changePageHandler = (page: number) => {
      dispatch(changePage(page))
    }
  
    const changeGradeHanler = (grade: number) => {
      dispatch(changeGrade(grade))
    }
  
    useEffect(() => {
      if (statusCommonLocation === 'idle') {
        dispatch(getCommonLocationList())
      }
    }, [statusCommonLocation, dispatch])
  
    useEffect(() => {
      if (dailyPriceFrom !== sliderValue[0]) {
        dispatch(changePriceFrom(sliderValue[0]))
      }
      if (dailyPriceTo !== sliderValue[1]) {
        dispatch(changePriceTo(sliderValue[1]))
      }
    }, [sliderValue, dispatch, dailyPriceFrom, dailyPriceTo])
  
    useEffect(() => {
      setValue([dailyPriceFrom, dailyPriceTo])
    }, [dailyPriceFrom, dailyPriceTo])
  
    useEffect(() => {
      if (statusDailyLIst === 'idle') {
        dispatch(getTripDailyList())
      }
    }, [statusDailyLIst, dispatch])
  
    const filterLocation = commonLocationList?.filter((item) => {
      return item.parent !== null
    })
  
    const newOption: Option[] | undefined = filterLocation?.map((item) => {
      return { label: item.name, value: "" + item.id }
    })
  
    return (
      <Stack mt="40px">
        <Box pb="40px" display="flex" justifyContent="space-between">
          <WelcomeMainText fontSize="32px" mediafontsize="18px" texttransform="capitalize" part="true">{t("Daily Filter")}</WelcomeMainText>
          <Button onClick={() => navigate(-1)} variant="outlined"><KeyboardBackspaceIcon /></Button>
        </Box>
        <Paper
          elevation={0}
          sx={{
            boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
            borderRadius: "16px",
            padding: "16px 24px 32px 24px",
            mb: "32px",
          }}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box mt="16px" minWidth={{ xl: "90%", md: "90%", sm: "85%", xs: "70%" }}>
              <CustomAutocomplete
                options={newOption === undefined ? [] : newOption}
                placeholder={t("Location")}
                getChange={getChangeOptionFrom}
                icon={<LocationOnIcon />}
              />
            </Box>
            <Box mt="16px" width={'56px'}>
              <Button
                sx={{ height: '56px' }}
                fullWidth
                variant='contained'
                onClick={() => {
                  dispatch(changeSearchLocation(from?.value))
                }}
              >
                <SearchIcon />
              </Button>
            </Box>
          </Box>
        </Paper>
        <Box display="flex" justifyContent="space-between">
          <Box display={{ xl: "block", md: "block", sm: "none", xs: "none" }} sx={{
            position: "sticky",
            left: 0,
            top: '130px',
            height: '400px'
          }} width={{ xl: "343px", md: "28%" }}>
            <GlobalParagraph fontSize="20px" fontWeight="600">
              {t("Filters")}
            </GlobalParagraph>
            <Box width="100%" py="32px">
              <List
                sx={{ width: "100%", maxWidth: 360 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton onClick={handleClickPrice}>
                  <ListItemText primary={t("Prise")} />
                  {openPrice ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openPrice} timeout="auto" unmountOnExit>
                  <List component="div" sx={{ pt: "16px" }} disablePadding>
                    <Slider
                      marks={marks}
                      getAriaLabel={() => "Temperature range"}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                      min={MIN}
                      max={MAX}
                    />
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography variant="body2" sx={{ cursor: "pointer" }}>
                        ${MIN}
                      </Typography>
                      <Typography variant="body2" sx={{ cursor: "pointer" }}>
                        ${MAX}
                      </Typography>
                    </Box>
                  </List>
                </Collapse>
              </List>
            </Box>
            <Divider />
            <Box width="100%" py="32px">
              <List
                sx={{ width: "100%", maxWidth: 360 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton onClick={handleClickRating}>
                  <ListItemText primary={t("Rating")} />
                  {openRating ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openRating} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Button
                      sx={{ mr: "16px", mt: "16px" }}
                      size="small"
                      variant={dailyGrade === 1 ? "contained" : "outlined"}
                      onClick={() => { changeGradeHanler(1) }}
                    >
                      1+
                    </Button>
                    <Button
                      sx={{ mr: "16px", mt: "16px" }}
                      size="small"
                      variant={dailyGrade === 2 ? "contained" : "outlined"}
                      onClick={() => { changeGradeHanler(2) }}
                    >
                      2+
                    </Button>
                    <Button
                      sx={{ mr: "16px", mt: "16px" }}
                      size="small"
                      variant={dailyGrade === 3 ? "contained" : "outlined"}
                      onClick={() => { changeGradeHanler(3) }}
                    >
                      3+
                    </Button>
                    <Button
                      sx={{ mr: "16px", mt: "16px" }}
                      size="small"
                      variant={dailyGrade === 4 ? "contained" : "outlined"}
                      onClick={() => { changeGradeHanler(4) }}
                    >
                      4+
                    </Button>
                    <Button
                      sx={{ mr: "16px", mt: "16px" }}
                      size="small"
                      variant={dailyGrade === 5 ? "contained" : "outlined"}
                      onClick={() => { changeGradeHanler(5) }}
                    >
                      5+
                    </Button>
                  </List>
                </Collapse>
              </List>
            </Box>
          </Box>
          <Divider sx={{ display: { xl: "block", md: "block", sm: "none", xs: "none" } }} orientation="vertical" variant="middle" flexItem />
          <Box width={{ xl: "792px", md: "68%", sm: "100%", xs: "100%" }}>
            <Box display='flex' justifyContent='space-between'>
              <Box pb="32px" display={{ xl: "none", md: "none", sm: "block", xs: "block" }}>
                <FilterDrawerHotel />
              </Box>
              <Box pb="32px" display={{ xl: "none", md: "none", sm: "block", xs: "block" }} width={{ xl: "250px", md: "250px", sm: "250px", xs: "200px" }}>
                <FormControl fullWidth size='medium'>
                  <InputLabel id="demo-select-small-label">Sort Daily</InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Sort Daily"
                    onChange={handleChangeSort}
                  >
                    {
                      room_styles.map((room, index) => <MenuItem key={index} value={room.value}>{room.label}</MenuItem>)
                    }
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box
              width="100%"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              pb="24px"
            >
              <GlobalParagraph fontSize="14px" mediafontsize="12px" fontWeight="600">
                Showing 4 of <span style={{ color: `#FF8682` }}>257 places</span>
              </GlobalParagraph>
              <Box width="250px" display={{ xl: "block", md: "block", sm: "none", xs: "none" }}>
                <FormControl fullWidth size="small">
                  <InputLabel id="demo-select-small-label">
                    Sort Daily
                  </InputLabel>
                  <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Sort Daily"
                    onChange={handleChangeSort}
                  >
                    {
                      room_styles.map((room, index) => <MenuItem key={index} value={room.value}>{room.label}</MenuItem>)
                    }
                  </Select>
                </FormControl>
              </Box>
            </Box>
            {
              dailyLoading ? <DriveFilterSkeleton /> :
                <>
                  {
                    dailyList?.map((daily: RecommendationType, index: number) => {
                      return (
                        <DailyCard
                          key={index}
                          galery={daily.gallery}
                          grade={daily.grade}
                          name={daily.name}
                          location={daily.location}
                          room_style={daily.room_style}
                          rate={daily.rate}
                          card={daily.card}
                          id={daily.id}
                        />
                      )
                    })
                  }
                </>
            }
  
            <Box display="flex" justifyContent="flex-end">
              <Pagination count={dailyListTotalPages} page={dailyListCurrentPage} color="primary" onChange={(_, page) => { changePageHandler(page) }} />
            </Box>
          </Box>
        </Box>
      </Stack>
    );
  };
  
  export default DailyFilters;
  
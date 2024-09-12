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
    Pagination,
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
import TranslateIcon from '@mui/icons-material/Translate';
import DriveFilterCard from "../DriverFilterCard";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from '../../redux/hooks'
import { changeDriversStyle, changeGrade, changePage, changePriceFrom, changePriceTo, changeSearchLanguage, changeSearchLocation, getDriverCurrentPage, getDriverGrade, getDriverList, getDriverPriceFrom, getDriverPriceto, getDriverTotalPage, getDrivers, getLoadingDriver,  getStatusDriverList } from '../../redux/slices/driverSliser'
import { AppDispatch } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { driver_styles } from "../../dictionary/room_style";
import DriveFilterSkeleton from "../Skeleton/DriveFilterSkeleton";
import { useDebounce } from "use-debounce";
import { getCommonLanguageList, getLanguageList, getStatusCommonLanguage } from "../../redux/slices/commonLanguage";
import { getCommonLocationList, getCommonLocations, getStatusCommonLocation } from "../../redux/slices/commonLocationSlicer";

type Option = {
    label: string,
    value: string
}

const MAX = 1000;
const MIN = 0;
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
    return `${value}°C`;
}

const DriveFilter: React.FC = () => {
    const navigate = useNavigate();
    const [fromLocation, setFromLocation] = useState<Option | null>(null)
    const [fromLanguage, setFromLanguage] = useState<Option | null>(null)
    const [openPrice, setOpenPrice] = React.useState(true);
    const [openRating, setOpenRating] = React.useState(true);
    const [value, setValue] = React.useState<number[]>([0, 100]);
    const [age, setAge] = React.useState(driver_styles[0].value);

    const [sliderValue] =useDebounce(value, 1000)

    const handleChangeSort = (event: SelectChangeEvent) => {
        setAge(event.target.value);
        dispatch(changeDriversStyle(event.target.value as string))
    };

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const handleClickPrice = () => {
        setOpenPrice(!openPrice);
    };

    const handleClickRating = () => {
        setOpenRating(!openRating);
    };

   

    // redux
    const statusDriverList = useAppSelector(getStatusDriverList);
    const drivers = useAppSelector(getDrivers);
    const driversGrade = useAppSelector(getDriverGrade);
    const loadingDriver = useAppSelector(getLoadingDriver);
    const driverPriceFrom = useAppSelector(getDriverPriceFrom)
    const driverPriceTo = useAppSelector(getDriverPriceto) 
    const languagesList = useAppSelector(getLanguageList) 
    const statusLanguage = useAppSelector(getStatusCommonLanguage)
    const commonLocationList = useAppSelector(getCommonLocations)
    const statusCommonLocation = useAppSelector(getStatusCommonLocation)
    const driverCurrentPage = useAppSelector(getDriverCurrentPage);
    const driverTotalPage = useAppSelector(getDriverTotalPage);
    // const showMessageDriver = useAppSelector(getShowMessageDriver);
    // const errorDriver = useAppSelector(getErrorDriver);
    // const messageDriver = useAppSelector(getMessageDriver);

    // redux dispatch
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        if (statusLanguage === 'idle') {
            dispatch(getCommonLanguageList())
        }
    }, [statusLanguage, dispatch])

    const newOption: Option[] | undefined = languagesList?.map((item) => {
        return { label: item.lang, value: "" + item.id }
      })

      useEffect(() => {
        if (statusCommonLocation === 'idle') {
          dispatch(getCommonLocationList())
        }
      }, [statusCommonLocation, dispatch])

      const filterLocation = commonLocationList?.filter((item) => {
        return item.parent !== null
      })
    
      const newLocation: Option[] | undefined = filterLocation?.map((item) => {
        return { label: item.name, value: "" + item.id }
      })

    const changeGradeHanler = (grade: number) => {
        dispatch(changeGrade(grade))
    }

    const changePageHandler = (page: number) => {
        dispatch(changePage(page))
      }

    useEffect(() => {
        if (statusDriverList === 'idle') {
            dispatch(getDriverList())
        }
    }, [statusDriverList, dispatch])

    const getChangeOptionFromLocation = (newValue: Option | null) => {
        setFromLocation(newValue)
    }

    const getChangeOptionFromLanguage = (newValue: Option | null) => {
        setFromLanguage(newValue)
    }

    useEffect(() => {
        if(driverPriceFrom !== sliderValue[0]) {
          dispatch(changePriceFrom(sliderValue[0]))
        }
        if(driverPriceTo !== sliderValue[1]) {
          dispatch(changePriceTo(sliderValue[1]))
        }
      }, [value, dispatch])


    const search = () => {
        dispatch(changeSearchLanguage(fromLanguage?.value))
        dispatch(changeSearchLocation(fromLocation?.value))
    }

    return (
        <Stack mt="40px">
            <Box pb="40px" display="flex" justifyContent="space-between">
                <WelcomeMainText fontSize="32px" mediafontsize="18px" texttransform="capitalize" part="true">Drive Filter</WelcomeMainText>
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
                    flexWrap="wrap"
                    justifyContent="space-between"
                >
                    <Box mt="16px" minWidth={{ xl: "45%", md: "45%", sm: "40%", xs: "100%" }}>
                        <CustomAutocomplete
                            options={newLocation === undefined ? [] : newLocation}
                            placeholder="Location"
                            getChange={getChangeOptionFromLocation}
                            icon={<LocationOnIcon />}
                        />
                    </Box>
                    <Box mt="16px" minWidth={{ xl: "45%", md: "45%", sm: "40%", xs: "100%" }}>
                        <CustomAutocomplete
                            options={newOption === undefined ? [] : newOption}
                            placeholder="Language"
                            getChange={getChangeOptionFromLanguage}
                            icon={<TranslateIcon />}
                        />
                    </Box>
                    <Box mt="16px" width={{ xl: '56px', md: '56px', sm: '56px', xs: "100%" }}>
                        <Button onClick={search} sx={{ height: '56px' }} fullWidth variant='contained'>
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
                        Filters
                    </GlobalParagraph>
                    <Box width="100%" py="32px">
                        <List
                            sx={{ width: "100%", maxWidth: 360 }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            <ListItemButton onClick={handleClickPrice}>
                                <ListItemText primary="Prise" />
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
                                <ListItemText primary="Rating" />
                                {openRating ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={openRating} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <Button
                                        sx={{ mr: "16px", mt: "16px" }}
                                        size="small"
                                        variant={driversGrade === 1?"contained":"outlined"}
                                        onClick={() => {changeGradeHanler(1)}}
                                    >
                                        1+
                                    </Button>
                                    <Button
                                        sx={{ mr: "16px", mt: "16px" }}
                                        size="small"                    
                                        variant={driversGrade === 2?"contained":"outlined"}
                                        onClick={() => {changeGradeHanler(2)}}
                                    >
                                        2+
                                    </Button>
                                    <Button
                                        sx={{ mr: "16px", mt: "16px" }}
                                        size="small"
                                        variant={driversGrade === 3?"contained":"outlined"}
                                        onClick={() => {changeGradeHanler(3)}}
                                    >
                                        3+
                                    </Button>
                                    <Button
                                        sx={{ mr: "16px", mt: "16px" }}
                                        size="small"
                                        variant={driversGrade === 4?"contained":"outlined"}
                                        onClick={() => {changeGradeHanler(4)}}
                                    >
                                        4+
                                    </Button>
                                    <Button
                                        sx={{ mr: "16px", mt: "16px" }}
                                        size="small"
                                        variant={driversGrade === 5?"contained":"outlined"}
                                        onClick={() => {changeGradeHanler(5)}}
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
                                <InputLabel id="demo-select-small-label">Sort Type</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={age}
                                    label="Sort Type"
                                    onChange={handleChangeSort}
                                >
                                    {
                                        driver_styles.map((driver, index) => <MenuItem key={index} value={driver.value}>{driver.label}</MenuItem>)
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
                                    Sort Type
                                </InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={age}
                                    label="Sort Type"
                                    onChange={handleChangeSort}
                                >
                                    {
                                        driver_styles.map((driver, index) => <MenuItem key={index} value={driver.value}>{driver.label}</MenuItem>)
                                    }
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    {
                        loadingDriver ? <DriveFilterSkeleton /> :
                            <>
                                {
                                    drivers?.map((drivers, index) => {
                                        return (
                                            <DriveFilterCard
                                                key={index + 1}
                                                id={drivers.id}
                                                user={drivers.user}
                                                auto_number={drivers.auto_number}
                                                avg_rate={drivers.avg_rate}
                                                location={drivers.location}
                                                auto_model={drivers.auto_model}
                                                auto_photo={drivers.auto_photo}
                                                languages={drivers.languages}
                                                price={drivers.price}
                                                orders_count={drivers.orders_count}
                                                time="h" />
                                        )
                                    })
                                }
                            </>
                    }
                    <Box display="flex" justifyContent="flex-end">
                        <Pagination count={driverTotalPage} page={driverCurrentPage} onChange={(_, page) => {changePageHandler(page)}} color="primary" />
                    </Box>
                </Box>
            </Box>
        </Stack>
    )
}

export default DriveFilter
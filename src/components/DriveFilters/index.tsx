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

type Option = {
    label: string,
    value: string
}

const MAX = 1200;
const MIN = 50;
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
    const [from, setFrom] = useState<Option | null>(null)
    const [openPrice, setOpenPrice] = React.useState(true);
    const [openRating, setOpenRating] = React.useState(true);
    const [value, setValue] = React.useState<number[]>([20, 37]);
    const [age, setAge] = React.useState("");

    const handleChangeSort = (event: SelectChangeEvent) => {
        setAge(event.target.value);
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

    const options: Option[] = [
        { label: 'The Shawshank Redemption', value: "1994" },
        { label: 'The Godfather', value: "1972" },
        { label: 'The Godfather: Part II', value: "1974" },
        { label: 'The Dark Knight', value: "2008" },
        { label: '12 Angry Men', value: "1957" },
        { label: "Schindler's List", value: "1993" },
        { label: 'Pulp Fiction', value: "1994" },
    ]
    useEffect(() => { }, [from]) //for error fixed

    const getChangeOptionFrom = (newValue: Option | null) => {
        setFrom(newValue)
    }

    return (
        <Stack mt="40px">
            <Box pb="40px" display="flex" justifyContent="space-between">
                <WelcomeMainText fontSize="32px" mediafontsize="18px" texttransform="capitalize" part="true">Drive Filter</WelcomeMainText>
                <Button variant="outlined"><KeyboardBackspaceIcon /></Button>
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
                            options={options}
                            placeholder="Location"
                            getChange={getChangeOptionFrom}
                            icon={<LocationOnIcon />}
                        />
                    </Box>
                    <Box mt="16px" minWidth={{ xl: "45%", md: "45%", sm: "40%", xs: "100%" }}>
                        <CustomAutocomplete
                            options={options}
                            placeholder="Language"
                            getChange={getChangeOptionFrom}
                            icon={<TranslateIcon />}
                        />
                    </Box>
                    <Box mt="16px" width={{ xl: '56px', md: '56px', sm: '56px', xs: "100%" }}>
                        <Button sx={{ height: '56px' }} fullWidth variant='contained'>
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
                                        variant="outlined"
                                    >
                                        1+
                                    </Button>
                                    <Button
                                        sx={{ mr: "16px", mt: "16px" }}
                                        size="small"
                                        variant="outlined"
                                    >
                                        2+
                                    </Button>
                                    <Button
                                        sx={{ mr: "16px", mt: "16px" }}
                                        size="small"
                                        variant="outlined"
                                    >
                                        3+
                                    </Button>
                                    <Button
                                        sx={{ mr: "16px", mt: "16px" }}
                                        size="small"
                                        variant="outlined"
                                    >
                                        4+
                                    </Button>
                                    <Button
                                        sx={{ mr: "16px", mt: "16px" }}
                                        size="small"
                                        variant="outlined"
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
                                    <MenuItem value={10}>Start</MenuItem>
                                    <MenuItem value={20}>Camford</MenuItem>
                                    <MenuItem value={30}>Biznes</MenuItem>
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
                                    <MenuItem value={10}>Start</MenuItem>
                                    <MenuItem value={20}>Camford</MenuItem>
                                    <MenuItem value={30}>Biznes</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    <DriveFilterCard />
                    <Box display="flex" justifyContent="flex-end">
                        <Pagination count={10} color="primary" />
                    </Box>
                </Box>
            </Box>
        </Stack>
    )
}

export default DriveFilter
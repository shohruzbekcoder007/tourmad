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
  Skeleton,
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
import { changeGrade, changePage, getHotelGrade, getHotelList, getHotelListCurrentPage, getHotelListTotalPages, getHotelLoading, getStatusHotelList, getTripHotelList } from "../../redux/slices/hotelSlice";
import HotelCard from "./HotelCard"
import { AppDispatch } from "../../redux/store"

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

const options: Option[] = [
  { label: 'The Shawshank Redemption', value: "1994" },
  { label: 'The Godfather', value: "1972" },
  { label: 'The Godfather: Part II', value: "1974" },
  { label: 'The Dark Knight', value: "2008" },
  { label: '12 Angry Men', value: "1957" },
  { label: "Schindler's List", value: "1993" },
  { label: 'Pulp Fiction', value: "1994" },
]

function valuetext(value: number) {
  return `${value + 10}$`;
}

const HotelFilters: React.FC = () => {

  const [from, setFrom] = useState<Option | null>(null)
  const [openPrice, setOpenPrice] = React.useState(true)
  const [openRating, setOpenRating] = React.useState(true)
  const [value, setValue] = React.useState<number[]>([20, 37])
  const [age, setAge] = React.useState("")

  // redux
  const statusHotelLIst = useAppSelector(getStatusHotelList)
  const hotelList = useAppSelector(getHotelList)
  const hotelListTotalPages = useAppSelector(getHotelListTotalPages)
  const hotelListCurrentPage = useAppSelector(getHotelListCurrentPage)
  const hotelLoading = useAppSelector(getHotelLoading)
  const hotelGrade = useAppSelector(getHotelGrade)

  // redux dispatch
  const dispatch: AppDispatch = useAppDispatch()

  const handleChangeSort = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  }

  const handleChange = (event: Event, newValue: number | number[]) => {
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

  useEffect(() => { }, [from]) //for error fixed

  useEffect(() => {
    if (statusHotelLIst === 'idle') {
      dispatch(getTripHotelList())
    }
  }, [statusHotelLIst, dispatch])


  return (
    <Stack mt="40px">
      <Box pb="40px" display="flex" justifyContent="space-between">
        <WelcomeMainText fontSize="32px" mediafontsize="18px" texttransform="capitalize" part="true">Hotel Filter</WelcomeMainText>
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
          justifyContent="space-between"
        >
          <Box mt="16px" minWidth={{ xl: "90%", md: "90%", sm: "85%", xs: "70%" }}>
            <CustomAutocomplete
              options={options}
              placeholder="Location"
              getChange={getChangeOptionFrom}
              icon={<LocationOnIcon />}
            />
          </Box>
          <Box mt="16px" width={'56px'}>
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
                    variant={hotelGrade === 1?"contained":"outlined"}
                    onClick={() => {changeGradeHanler(1)}}
                  >
                    1+
                  </Button>
                  <Button
                    sx={{ mr: "16px", mt: "16px" }}
                    size="small"
                    variant={hotelGrade === 2?"contained":"outlined"}
                    onClick={() => {changeGradeHanler(2)}}
                  >
                    2+
                  </Button>
                  <Button
                    sx={{ mr: "16px", mt: "16px" }}
                    size="small"
                    variant={hotelGrade === 3?"contained":"outlined"}
                    onClick={() => {changeGradeHanler(3)}}
                  >
                    3+
                  </Button>
                  <Button
                    sx={{ mr: "16px", mt: "16px" }}
                    size="small"
                    variant={hotelGrade === 4?"contained":"outlined"}
                    onClick={() => {changeGradeHanler(4)}}
                  >
                    4+
                  </Button>
                  <Button
                    sx={{ mr: "16px", mt: "16px" }}
                    size="small"
                    variant={hotelGrade === 5?"contained":"outlined"}
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
                <InputLabel id="demo-select-small-label">Sort Hotel</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Sort Hotel"
                  onChange={handleChangeSort}
                >
                  <MenuItem value={10}>Sort 1</MenuItem>
                  <MenuItem value={20}>Sort 2</MenuItem>
                  <MenuItem value={30}>Sort 3</MenuItem>
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
                  Sort Hotel
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Sort Hotel"
                  onChange={handleChangeSort}
                >
                  <MenuItem value={10}>Sort 1</MenuItem>
                  <MenuItem value={20}>Sort 2</MenuItem>
                  <MenuItem value={30}>Sort 3</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          {
            hotelLoading ? <Skeleton animation="wave" width="100%" height="250px"/> :
              <>
                {
                  hotelList?.map((hotel, index) => {
                    return (
                      <HotelCard
                        key={index}
                        galery={hotel.gallery}
                        grade={hotel.grade}
                        name={hotel.name}
                        location={hotel.location}
                        room_style={hotel.room_style}
                        rate={hotel.rate}
                        card={hotel.card}
                      />
                    )
                  })
                }
              </>
          }

          <Box display="flex" justifyContent="flex-end">
            <Pagination count={hotelListTotalPages} page={hotelListCurrentPage} color="primary" onChange={(_, page) => { changePageHandler(page) }} />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default HotelFilters;

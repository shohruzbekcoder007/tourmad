import { Paper, Stack, Box, Button, List, ListItemButton, Collapse, ListItemText, Slider, Typography, Divider, ListItem, ListItemIcon, Checkbox, Tabs, Tab, FormControl, InputLabel, MenuItem } from '@mui/material'
import { CustomAutocomplete } from '../../helper_components'
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { GlobalParagraph } from '../../global_styles/styles';
import TravelFilterCard from '../TravelFilterCard';

type Option = {
  label: string,
  value: string
}

const MAX = 1200;
const MIN = 50;
const marks = [
  {
    value: MIN,
    label: '',
  },
  {
    value: MAX,
    label: '',
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

const TravelFilters: React.FC = () => {
  const [from, setFrom] = useState<Option | null>(null)
  const [depart, setDepart] = useState<Option | null>(null)
  const [openPrice, setOpenPrice] = React.useState(true);
  const [openTime, setOpenTime] = React.useState(true);
  const [openRating, setOpenRating] = React.useState(true);
  const [openAirlines, setOpenAirlines] = React.useState(true);
  const [openTrips, setOpenTrips] = React.useState(true);
  const [value, setValue] = React.useState<number[]>([20, 37]);
  const [checkedAirlines, setCheckedAirlines] = React.useState([0]);
  const [checkedTrips, setCheckedTrips] = React.useState([0]);
  const [valueTab, setValueTab] = React.useState(0);
  const [age, setAge] = React.useState('');

  const handleChangeSort = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };

  const handleToggleAirlines = (value: number) => () => {
    const currentIndex = checkedAirlines.indexOf(value);
    const newChecked = [...checkedAirlines];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedAirlines(newChecked);
  };

  const handleToggleTrips = (value: number) => () => {
    const currentIndex = checkedTrips.indexOf(value);
    const newChecked = [...checkedTrips];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedTrips(newChecked);
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleClickPrice = () => {
    setOpenPrice(!openPrice);
  };

  const handleClickTime = () => {
    setOpenTime(!openTime);
  };

  const handleClickRating = () => {
    setOpenRating(!openRating);
  };

  const handleClickAirlines = () => {
    setOpenAirlines(!openAirlines);
  };

  const handleClickTrips = () => {
    setOpenTrips(!openTrips);
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


  useEffect(() => { }, [from, depart]) //for error fixed

  const getChangeOptionFrom = (newValue: Option | null) => {
    setFrom(newValue)
  }

  const getChangeOptionDepart = (newValue: Option | null) => {
    setDepart(newValue)
  }
  return (
    <Stack>
      <Paper
        elevation={0}
        sx={{
          boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
          borderRadius: "16px",
          padding: "16px 32px 32px 32px",
          marginTop: '48px',
          mb: "32px",
        }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="24px"
          flexWrap="wrap"
        >
          <Box minWidth="300px">
            <CustomAutocomplete
              options={options}
              placeholder="From - To"
              getChange={getChangeOptionFrom}
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g id="ion:swap-horizontal">
                  <path id="Vector" d="M14.25 2.25L19.5 7.5L14.25 12.75M18.697 7.5H4.5M9.75 21.75L4.5 16.5L9.75 11.25M5.34375 16.5H19.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>}
            />
          </Box>
          <Box minWidth="140x">
            <CustomAutocomplete
              options={options}
              placeholder="Trip"
              getChange={getChangeOptionFrom}
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g id="ion:swap-horizontal">
                  <path id="Vector" d="M14.25 2.25L19.5 7.5L14.25 12.75M18.697 7.5H4.5M9.75 21.75L4.5 16.5L9.75 11.25M5.34375 16.5H19.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>}
            />
          </Box>
          <Box minWidth="300px">
            <CustomAutocomplete
              options={options}
              placeholder="Depart- Return"
              getChange={getChangeOptionDepart}
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g id="ion:swap-horizontal">
                  <path id="Vector" d="M14.25 2.25L19.5 7.5L14.25 12.75M18.697 7.5H4.5M9.75 21.75L4.5 16.5L9.75 11.25M5.34375 16.5H19.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>}
            />
          </Box>
          <Box minWidth="300px">
            <CustomAutocomplete
              options={options}
              placeholder="Passenger - Class"
              getChange={getChangeOptionDepart}
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g id="ion:swap-horizontal">
                  <path id="Vector" d="M14.25 2.25L19.5 7.5L14.25 12.75M18.697 7.5H4.5M9.75 21.75L4.5 16.5L9.75 11.25M5.34375 16.5H19.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>}
            />
          </Box>
          <Box>
            <Button sx={{ height: '56px', width: '56px' }} variant='contained'>
              <SearchIcon />
            </Button>
          </Box>
        </Box>
      </Paper>
      <Box display='flex' justifyContent='space-between'>
        <Box width='343px'>
          <GlobalParagraph fontSize='20px' fontWeight='600'>
            Filters
          </GlobalParagraph>
          <Box width="100%" py='32px' >
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={handleClickPrice}>
                <ListItemText primary="Prise" />
                {openPrice ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openPrice} timeout="auto" unmountOnExit>
                <List component="div" sx={{ pt: '16px' }} disablePadding>
                  <Slider
                    marks={marks}
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography
                      variant="body2"
                      sx={{ cursor: 'pointer' }}
                    >
                      ${MIN}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ cursor: 'pointer' }}
                    >
                      ${MAX}
                    </Typography>
                  </Box>
                </List>
              </Collapse>
            </List>
          </Box>
          <Divider />
          <Box width="100%" py='32px' >
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={handleClickTime}>
                <ListItemText primary="Departure Time" />
                {openTime ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openTime} timeout="auto" unmountOnExit>
                <List component="div" sx={{ pt: '16px' }} disablePadding>
                  <Slider
                    marks={marks}
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography
                      variant="body2"
                      sx={{ cursor: 'pointer' }}
                    >
                      {MIN}Am
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ cursor: 'pointer' }}
                    >
                      {MAX}Pm
                    </Typography>
                  </Box>
                </List>
              </Collapse>
            </List>
          </Box>
          <Divider />
          <Box width="100%" py='32px' >
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={handleClickRating}>
                <ListItemText primary="Rating" />
                {openRating ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openRating} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <Button sx={{ mr: '16px', mt: "16px" }} size='small' variant='outlined'>1+</Button>
                  <Button sx={{ mr: '16px', mt: "16px" }} size='small' variant='outlined'>2+</Button>
                  <Button sx={{ mr: '16px', mt: "16px" }} size='small' variant='outlined'>3+</Button>
                  <Button sx={{ mr: '16px', mt: "16px" }} size='small' variant='outlined'>4+</Button>
                  <Button sx={{ mr: '16px', mt: "16px" }} size='small' variant='outlined'>5+</Button>
                </List>
              </Collapse>
            </List>
          </Box>
          <Divider />
          <Box width="100%" py='32px' >
            <List
              sx={{ width: '100%', bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={handleClickAirlines}>
                <ListItemText primary="Airlines" />
                {openAirlines ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openAirlines} timeout="auto" unmountOnExit>
                <List component="div" sx={{ pt: "16px" }} disablePadding>
                  {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                      <ListItem
                        key={value}
                        disablePadding
                      >
                        <ListItemButton role={undefined} onClick={handleToggleAirlines(value)} dense>
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={checkedAirlines.indexOf(value) !== -1}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          </ListItemIcon>
                          <ListItemText id={labelId} primary={`Airlines ${value + 1}`} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </List>
          </Box>
          <Divider />
          <Box width="100%" py='32px' >
            <List
              sx={{ width: '100%', bgcolor: 'background.paper' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={handleClickTrips}>
                <ListItemText primary="Trips" />
                {openTrips ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openTrips} timeout="auto" unmountOnExit>
                <List component="div" sx={{ pt: "16px" }} disablePadding>
                  {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                      <ListItem
                        key={value}
                        disablePadding
                      >
                        <ListItemButton role={undefined} onClick={handleToggleTrips(value)} dense>
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={checkedTrips.indexOf(value) !== -1}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          </ListItemIcon>
                          <ListItemText id={labelId} primary={`Trips ${value + 1}`} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Collapse>
            </List>
          </Box>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box width="792px">
          <Paper elevation={0}
            sx={{
              boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
              borderRadius: "12px",
              padding: "16px 32px 32px 32px",
              marginTop: '48px',
              mb: "32px",
            }}>
            <Tabs value={valueTab} onChange={handleChangeTab} aria-label="icon label tabs example">
              <Tab sx={{ width: "180px" }} label="Cheapest" />
              <Divider orientation="vertical" variant="middle" flexItem />
              <Tab sx={{ width: "180px" }} label="Best" />
              <Divider orientation="vertical" variant="middle" flexItem />
              <Tab sx={{ width: "180px" }} label="Quickest" />
              <Divider orientation="vertical" variant="middle" flexItem />
              <Tab sx={{ width: "180px" }} label="Other sort" />
            </Tabs>
          </Paper>
          <Box width="100%" display="flex" justifyContent='space-between' alignItems='center' pb='24px' >
            <GlobalParagraph fontSize='14px' fontWeight='600'>
              Showing 4 of <span style={{ color: `#FF8682` }}>257 places</span>
            </GlobalParagraph>
            <Box width="250px">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-select-small-label">Sort by Recommended</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Sort by Recommended"
                  onChange={handleChangeSort}
                >
                  <MenuItem value={10}>Sort 1</MenuItem>
                  <MenuItem value={20}>Sort 2</MenuItem>
                  <MenuItem value={30}>Sort 3</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <TravelFilterCard />
        </Box>
      </Box>
      <Box display='flex' justifyContent="flex-end">
        <Button sx={{width: "792px"}} color='success' variant='contained'>
          Show more results
        </Button>
      </Box>
    </Stack>
  )
}

export default TravelFilters
import React from 'react'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { GlobalParagraph } from '../../global_styles/styles';
import { Checkbox, Collapse, Divider, FormControl, InputLabel, List, ListItem, ListItemButton, ListItemIcon, ListItemText, MenuItem, Select, SelectChangeEvent, Slider, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

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

type Anchor = 'left';

const FilterDrawerTrip: React.FC = () => {
    const [state, setState] = React.useState({
        left: false,
    });
    const [openPrice, setOpenPrice] = React.useState(true);
    const [openTime, setOpenTime] = React.useState(true);
    const [openRating, setOpenRating] = React.useState(true);
    const [openAirlines, setOpenAirlines] = React.useState(true);
    const [openTrips, setOpenTrips] = React.useState(true);
    const [value, setValue] = React.useState<number[]>([20, 37]);
    const [checkedAirlines, setCheckedAirlines] = React.useState([0]);
    const [checkedTrips, setCheckedTrips] = React.useState([0]);
    const [sort, setSort] = React.useState('');

    const handleChangeSort = (event: SelectChangeEvent) => {
        setSort(event.target.value);
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


    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: {xl: 500, md: 500, sm: 500, xs: 320} }}
            p="24px"
            pt="44px"
            role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >
            
            <GlobalParagraph fontSize='20px' fontWeight='600'>
                Filters
            </GlobalParagraph>
            <Box py='32px' display={{ xl: "none", md: "none", sm: "none", xs: "block" }} width="250px">
              <FormControl fullWidth size="small">
                <InputLabel id="demo-select-small-label">Sort</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={sort}
                  label="Sort by Recommended"
                  onChange={handleChangeSort}
                >
                  <MenuItem value={10}>Cheapest</MenuItem>
                  <MenuItem value={20}>Best</MenuItem>
                  <MenuItem value={30}>Quickest</MenuItem>
                  <MenuItem value={40}>Other Sort</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box width="100%" py='32px' >
                <List
                    sx={{ width: '100%', maxWidth: 360 }}
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
                    sx={{ width: '100%', maxWidth: 360 }}
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
                    sx={{ width: '100%', maxWidth: 360 }}
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
                    sx={{ width: '100%', }}
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
                    sx={{ width: '100%' }}
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
            <Divider />
            <Box py="44px" display="flex" justifyContent="space-between">
                <Button variant='outlined' sx={{
                    width: '120px',
                    height: "40px",
                    borderRadius: "25px"
                }}>Cancel</Button>
                <Button variant='contained' sx={{
                    width: '120px',
                    height: "40px",
                    borderRadius: "25px"
                }}>Search</Button>
            </Box>
        </Box>
    );

    return (
        <div>
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer("left", true)} sx={{ height: "56px" }} variant='outlined'><MenuIcon /></Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state["left"]}
                        onClose={toggleDrawer("left", false)}
                        onOpen={toggleDrawer("left", true)}
                    >
                        {list("left")}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    )
}

export default FilterDrawerTrip
import React from 'react'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { GlobalParagraph } from '../../global_styles/styles';
import { Collapse, Divider, List,  ListItemButton, ListItemText, Slider, Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

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

const FilterDrawerHotel: React.FC = () => {
    const [state, setState] = React.useState({
        left: false,
    });
    const [openRating, setOpenRating] = React.useState(true);
    const [openPrice, setOpenPrice] = React.useState(true);
    const [value, setValue] = React.useState<number[]>([20, 37]);


    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    const handleClickPrice = () => {
        setOpenPrice(!openPrice);
    };

    const handleClickRating = () => {
        setOpenRating(!openRating);
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
                    <Button onClick={toggleDrawer("left", true)} sx={{ height: "56px" }} variant='outlined'><FilterAltIcon/></Button>
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

export default FilterDrawerHotel
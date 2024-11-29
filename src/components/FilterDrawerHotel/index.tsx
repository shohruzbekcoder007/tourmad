import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { GlobalParagraph } from '../../global_styles/styles';
import { Collapse, Divider, List,  ListItemButton, ListItemText, Slider, Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useAppSelector } from '../../redux/hooks';
import { changeGrade, changePriceFrom, changePriceTo, getDriverGrade, getDriverPriceFrom, getDriverPriceto } from '../../redux/slices/driverSliser';
import { useDebounce } from 'use-debounce';
import { AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

const MAX = 1000;
const MIN = 0;
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
    const {t} = useTranslation()
    const [state, setState] = React.useState({
        left: false,
    });
    const [openRating, setOpenRating] = React.useState(true);
    const [openPrice, setOpenPrice] = React.useState(true);
    const [value, setValue] = React.useState<number[]>([0, 100]);

    const [sliderValue] =useDebounce(value, 1000)

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
    // const statusDriverList = useAppSelector(getStatusDriverList);
    // const drivers = useAppSelector(getDrivers);
    const driversGrade = useAppSelector(getDriverGrade);
    // const loadingDriver = useAppSelector(getLoadingDriver);
    const driverPriceFrom = useAppSelector(getDriverPriceFrom)
    const driverPriceTo = useAppSelector(getDriverPriceto) 
    // const showMessageDriver = useAppSelector(getShowMessageDriver);
    // const errorDriver = useAppSelector(getErrorDriver);
    // const messageDriver = useAppSelector(getMessageDriver);

    // redux dispatch
    const dispatch: AppDispatch = useDispatch();

    const changeGradeHanler = (grade: number) => {
        dispatch(changeGrade(grade))
    }

    useEffect(() => {
        if(driverPriceFrom !== sliderValue[0]) {
          dispatch(changePriceFrom(sliderValue[0]*10))
        }
        if(driverPriceTo !== sliderValue[1]) {
          dispatch(changePriceTo(sliderValue[1]*10))
        }
      }, [value, dispatch, driverPriceFrom, driverPriceTo, sliderValue])

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
                {t("Filters")}
            </GlobalParagraph>
            <Box width="100%" py='32px' >
                <List
                    sx={{ width: '100%', maxWidth: 360 }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton onClick={handleClickPrice}>
                        <ListItemText primary={t("Prise")} />
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
                        <ListItemText primary={t("Rating")} />
                        {openRating ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={openRating} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <Button sx={{ mr: '16px', mt: "16px" }} variant={driversGrade === 1?"contained":"outlined"}
                                        onClick={() => {changeGradeHanler(1)}} size='small' >1+</Button>
                            <Button sx={{ mr: '16px', mt: "16px" }} size='small' variant={driversGrade === 2?"contained":"outlined"}
                                        onClick={() => {changeGradeHanler(2)}}>2+</Button>
                            <Button sx={{ mr: '16px', mt: "16px" }} size='small' variant={driversGrade === 3?"contained":"outlined"}
                                        onClick={() => {changeGradeHanler(3)}} >3+</Button>
                            <Button sx={{ mr: '16px', mt: "16px" }} size='small' variant={driversGrade === 4?"contained":"outlined"}
                                        onClick={() => {changeGradeHanler(4)}}>4+</Button>
                            <Button sx={{ mr: '16px', mt: "16px" }} size='small' variant={driversGrade === 5?"contained":"outlined"}
                                        onClick={() => {changeGradeHanler(5)}}>5+</Button>
                        </List>
                    </Collapse>
                </List>
            </Box>
            <Divider />
            <Box py="44px" display="flex" justifyContent="space-between">
                <Button variant='outlined' onClick={toggleDrawer(anchor, false)} sx={{
                    width: '120px',
                    height: "40px",
                    borderRadius: "25px"
                }}>{t("Cancel")}</Button>
                <Button variant='contained' onClick={toggleDrawer(anchor, false)} sx={{
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
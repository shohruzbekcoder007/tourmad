import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { GlobalParagraph, WelcomeMainText } from '../../global_styles/styles';
import { Divider, Grid, TextField } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { CustomAutocomplete } from '../../helper_components';
import trip_photo from './../../media/images/trip-card-phot.webp'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

type PropsType = {
    btnText: string
}

type Anchor = 'right';

type Option = {
    label: string,
    value: string
}

const options: Option[] = [
    { label: 'The Shawshank Redemption', value: "1994" },
    { label: 'The Godfather', value: "1972" },
    { label: 'The Godfather: Part II', value: "1974" },
    { label: 'The Dark Knight', value: "2008" },
    { label: '12 Angry Men', value: "1957" },
    { label: "Schindler's List", value: "1993" },
    { label: 'Pulp Fiction', value: "1994" },
]

const SwipeDrawer: React.FC<PropsType> = (props) => {
    const [state, setState] = React.useState({
        right: false,
    });

    const [from, setFrom] = useState<Option | null>(null)

    const getChangeOptionFrom = (newValue: Option | null) => {
        setFrom(newValue)
    }

    useEffect(() => { }, [from])

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
            sx={{ width: { xl: 500, md: 400, sm: 350, xs: 300 } }}
            p="24px"
            pt="44px"
            role="presentation"
        // onClick={toggleDrawer(anchor, false)}
        // onKeyDown={toggleDrawer(anchor, false)}
        >
            <Box pb='32px'>
                <WelcomeMainText fontSize='32px' part="true" mediafontsize='24px'>
                    My Trips
                </WelcomeMainText>
                <Box borderRadius='8px' display='flex' justifyContent='flex-start' gap={{xl: '32px', md: '32px', sm: 0, xs: 0}}
                    flexWrap='wrap' boxShadow={1} mt='32px' width='100%'
                    height={{ xl: "150px", md: "150px", sm: "auto", xs: "auto" }}>
                    <Box borderRadius={{ xl: '8px 0 0 8px', md: '8px 0 0 8px', sm: '8px 0 0 8px', xs: '8px 8px 0 0' }}
                        width={{ xl: "35%", md: "35%", sm: "100%", xs: "100%" }} height='100%' overflow="hidden">
                        <img src={trip_photo} width='100%' height='100%' style={{ objectFit: "cover" }} alt="" />
                    </Box>
                    <Box width={{ xl: "45%", md: "45%", sm: "100%", xs: "100%" }} pb={{xl: 0, md: 0, sm: "8px", xs: '8px'}}   ml={{ xl: 0, md: 0, sm: '20px', xs: "20px" }}>
                        <GlobalParagraph fontSize='24px' fontWeight='700' mediafontsize='16px'>Samarqand</GlobalParagraph>
                        <Box mt='16px' display='flex' justifyContent='flex-start' flexWrap='wrap' gap='16px'>
                            <Box display='flex' alignItems='center' justifyContent='flex-start' gap='5px'>
                                <CalendarMonthIcon />
                                <GlobalParagraph fontSize='14px' fontWeight='400'>Jun 6 → Jun 14, 2024</GlobalParagraph>
                            </Box>
                            <Box display='flex' alignItems='center' justifyContent='flex-start' gap='5px'>
                                <LocationOnIcon />
                                <GlobalParagraph fontSize='14px' fontWeight='400'>Samarqand</GlobalParagraph>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <WelcomeMainText fontSize='32px' paddingbottom='44px' part="true" mediafontsize='24px'>
                New Trip
            </WelcomeMainText>
            <Box pb="44px">
                <GlobalParagraph fontSize='16px' fontWeight='700' paddingbottom='16px'>Trip Name</GlobalParagraph>
                <TextField fullWidth type='text' variant='outlined' label="Trip Name" />
            </Box>
            <Box pb="44px">
                <GlobalParagraph fontSize='16px' fontWeight='700' paddingbottom='16px'>Destination</GlobalParagraph>
                <CustomAutocomplete
                    options={options}
                    placeholder="Location"
                    getChange={getChangeOptionFrom}
                    icon={<LocationOnIcon />}
                />
            </Box>
            <Box pb="44px">
                <GlobalParagraph fontSize='16px' fontWeight='700' paddingbottom='16px'>Dates or Length of stay</GlobalParagraph>
                <Grid container spacing={2}>
                    <Grid item xl={6} md={6} sm={12} xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label="Start Data" />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xl={6} md={6} sm={12} xs={12}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label="End Data" />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                </Grid>
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
                }}>Create Trip</Button>
            </Box>
        </Box>
    );

    return (
        <div>
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer("right", true)} sx={{ height: "48px" }} variant='contained'>{props.btnText}</Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state["right"]}
                        onClose={toggleDrawer("right", false)}
                        onOpen={toggleDrawer("right", true)}
                    >
                        {list("right")}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    )
}

export default SwipeDrawer
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import { GlobalParagraph, WelcomeMainText } from '../../global_styles/styles'
import { Alert, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, TextField } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { CustomAutocomplete } from '../../helper_components'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getCommonLocationList, getCommonLocations, getStatusCommonLocation } from '../../redux/slices/commonLocationSlicer'
import { addHotelToTrip, createTrip, getAddHotel, getNewTrip, getTripList, getTrips } from '../../redux/slices/tripSlice'
import { LocationType, TripType } from '../../utils/response_types'
import dayjs from 'dayjs'
import { HotelToTripType } from '../../utils/request_types'
import NotificationAlert from '../../helper_components/NotificationAlert'

type PropsType = {
    button: React.ReactNode,
    hotel_id?: number | null,
    addType?: "hotel" | "restaurant"
}

type Anchor = 'right';

type Option = {
    label: string,
    value: string
}

const SwipeDrawer: React.FC<PropsType> = (props) => {

    const [state, setState] = React.useState({
        right: false,
    });
    const [from, setFrom] = useState<Option | null>(null)

    const dispatch = useAppDispatch()
    const statusCommonLocation = useAppSelector(getStatusCommonLocation)
    const commonLocationList = useAppSelector(getCommonLocations)
    const newTrip = useAppSelector(getNewTrip)
    const trips = useAppSelector(getTrips)
    const addHotel = useAppSelector(getAddHotel)

    const getChangeOptionFrom = (newValue: Option | null) => {
        setFrom(newValue)
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);
        const title = data.get('title') as string;
        const location: number | null | number[] = from?.value ? parseInt(from.value) : null
        const start_time = data.get('start_time') as string | null;
        const end_time = data.get('end_time') as string | null;
        const start_date = start_time ? new Date(start_time) : null;
        const end_date = end_time ? new Date(end_time) : null;

        const startDateFormatted = start_date ? start_date.toISOString().substring(0, 10) : null;
        const endDateFormatted = end_date ? end_date.toISOString().substring(0, 10) : null;

        dispatch(createTrip({
            title,
            location: [location],
            start_time: startDateFormatted,
            end_time: endDateFormatted
        }))
    }

    const addToTrip = (trip_id: number | null, startDate: string | null, endDate: string | null) => {
        const newTrip: HotelToTripType = {
            hotel: props?.hotel_id as number,
            trip: trip_id as number,
            start_time: startDate as string,
            end_time: endDate as string
        }
        if(props?.addType === "hotel"){
            dispatch(addHotelToTrip(newTrip))
        }
    }

    useEffect(() => {
        if (statusCommonLocation === 'idle') {
            dispatch(getCommonLocationList())
        }
    }, [statusCommonLocation, dispatch])

    useEffect(() => {
        if (trips.tripListStatus === "idle") {
            dispatch(getTripList())
        }
    }, [trips, dispatch])

    const filterLocation = commonLocationList?.filter((item) => {
        return item.parent !== null
    })

    const newOption: Option[] | undefined = filterLocation?.map((item) => {
        return { label: item.name, value: "" + item.id }
    })

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
        >
            <Box pb='32px'>
                <WelcomeMainText fontSize='32px' part="true" mediafontsize='24px'>
                    My Trips
                </WelcomeMainText>
                <p>{`${addHotel.status}`}</p> 
                {
                    trips?.tripList?.map((elem: TripType, index: number) => {
                        return <SimpleTrip addHotelToTripFunction={(id, startDate, endDate) => {addToTrip(id, startDate, endDate) }} key={index} id={elem.id} title={elem?.title} time={`${elem.start_time} → ${elem.end_time}`} location={elem.location} />
                    })
                }
            </Box>
            <Box
                component="form"
                onSubmit={submitHandler}
            >
                <WelcomeMainText fontSize='32px' paddingbottom='20px' part="true" mediafontsize='24px'>
                    New Trip
                </WelcomeMainText>
                {newTrip.newTripCreateMessage ? <Alert
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%', marginBottom: '20px' }}
                >
                    {newTrip.newTripCreateMessage}
                </Alert> : <></>}
                <Box pb="30px">
                    <GlobalParagraph fontSize='16px' fontWeight='700' paddingbottom='16px'>Trip Name</GlobalParagraph>
                    <TextField
                        name="title"
                        fullWidth
                        type='text'
                        variant='outlined'
                        label="Trip Name"
                        disabled={newTrip.newTripCreateLoading as boolean}
                    />
                </Box>
                <Box pb="30px">
                    <GlobalParagraph fontSize='16px' fontWeight='700' paddingbottom='16px'>Destination</GlobalParagraph>
                    <CustomAutocomplete
                        options={newOption === undefined ? [] : newOption}
                        placeholder="Location"
                        getChange={getChangeOptionFrom}
                        icon={<LocationOnIcon />}
                        disabled={newTrip.newTripCreateLoading as boolean}
                    />
                </Box>
                <Box pb="30px">
                    <GlobalParagraph fontSize='16px' fontWeight='700' paddingbottom='16px'>Dates or Length of stay</GlobalParagraph>
                    <Grid container spacing={2}>
                        <Grid item xl={6} md={6} sm={12} xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                        name='start_time'
                                        label="Start Date"
                                        disabled={newTrip.newTripCreateLoading as boolean}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xl={6} md={6} sm={12} xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                        name='end_time'
                                        label="End Date"
                                        disabled={newTrip.newTripCreateLoading as boolean}
                                    />
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
                    <Button
                        disabled={newTrip.newTripCreateLoading as boolean}
                        variant='contained'
                        sx={{
                            width: '120px',
                            height: "40px",
                            borderRadius: "25px"
                        }}
                        type='submit'
                    >
                        {newTrip.newTripCreateLoading ? "Loading..." : 'Create Trip'}
                    </Button>
                </Box>
                <NotificationAlert alert={addHotel.status} alertType={addHotel.error?"error":"success"}/>
            </Box>
        </Box>
    );

    return (
        <div>
            {(['right'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Box onClick={toggleDrawer("right", true)}>{props.button}</Box>
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

const SimpleTrip = ({
    id,
    title,
    time,
    location,
    addHotelToTripFunction
}: {
    id: number | null,
    title?: string | null,
    time?: string,
    location?: LocationType[] | null
    addHotelToTripFunction: (id: number | null, startDate: string | null, endDate: string | null) => void
}) => {

    const [openModal, setOpenModal] = useState(false);
    const [startDate, setStartDate] = useState<string | null>(null)
    const [endDate, setEndDate] = useState<string | null>(null)

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    const handleCloseModal = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        setOpenModal(false);
    }

    const addHotelAndCloseModal = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        setOpenModal(false);
        addHotelToTripFunction(id, startDate, endDate);
    }

    const changeStartDate = (date: dayjs.Dayjs | null) => {
        if(date !== null) {
            const start_date = date.toISOString().substring(0, 10) || null;
            setStartDate(start_date);
        }
    }

    const changeEndDate = (date: dayjs.Dayjs | null) => {
        if(date !== null){
            const end_date = date.toISOString().substring(0, 10) || null;
            setEndDate(end_date);
        }
    }

    return (
        <Box
            borderRadius='8px'
            display='flex'
            justifyContent='flex-start'
            gap={{ xl: '32px', md: '32px', sm: 0, xs: 0 }}
            sx={{ cursor: 'pointer', "&:hover": { boxShadow: 3 } }}
            flexWrap='wrap'
            boxShadow={1}
            mt='32px'
            width='100%'
            height={{ xl: "150px", md: "150px", sm: "auto", xs: "auto" }}
            onClick={handleOpenModal}
        >
            <Dialog
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
            >
                <DialogTitle id="dialog-title">Confirm Action</DialogTitle>
                <DialogContent>
                    <GlobalParagraph fontSize='16px' fontWeight='700' paddingbottom='16px'>Choose your time frame to stay</GlobalParagraph>
                    <Grid container spacing={2}>
                        <Grid item xl={6} md={6} sm={12} xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                        label="Start Date"
                                        onChange={changeStartDate}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xl={6} md={6} sm={12} xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                        label="End Date"
                                        onChange={changeEndDate}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseModal} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={addHotelAndCloseModal} color="primary" autoFocus>
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
            <Box borderRadius={{ xl: '8px 0 0 8px', md: '8px 0 0 8px', sm: '8px 0 0 8px', xs: '8px 8px 0 0' }}
                width={{ xl: "35%", md: "35%", sm: "100%", xs: "100%" }} height='100%' overflow="hidden">
                <img src={`${location?.[0].photo}`} width='100%' height='100%' style={{ objectFit: "cover" }} alt={`${location?.[0].name}`} />
            </Box>
            <Box width={{ xl: "45%", md: "45%", sm: "100%", xs: "100%" }} pb={{ xl: 0, md: 0, sm: "8px", xs: '8px' }} ml={{ xl: 0, md: 0, sm: '20px', xs: "20px" }}>
                <GlobalParagraph fontSize='24px' fontWeight='700' mediafontsize='16px'>{title}</GlobalParagraph>
                <Box mt='16px' display='flex' justifyContent='flex-start' flexWrap='wrap' gap='16px'>
                    <Box display='flex' alignItems='center' justifyContent='flex-start' gap='5px'>
                        <CalendarMonthIcon />
                        <GlobalParagraph fontSize='14px' fontWeight='400'>{time}</GlobalParagraph>
                    </Box>
                    <Box display='flex' alignItems='center' justifyContent='flex-start' gap='5px'>
                        <LocationOnIcon />
                        <GlobalParagraph fontSize='14px' fontWeight='400'>{location?.[0]?.name}</GlobalParagraph>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SwipeDrawer
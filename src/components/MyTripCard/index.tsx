import { Box, Button, Modal, Stack, TextField, Typography, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { GlobalParagraph } from '../../global_styles/styles'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsIcon from '@mui/icons-material/Settings';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteIcon from '@mui/icons-material/Delete';
import { CustomAutocomplete } from '../../helper_components';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TripType } from '../../utils/response_types';
import { deleteTrip } from '../../redux/slices/tripSlice';
import { useAppDispatch } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

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

interface PropsType {
    trip?: TripType
}

const MyTripCard: React.FC<PropsType> = ({ trip }) => {
    const {t} = useTranslation()
    const navigate= useNavigate()
    
    const [openDelete, setOpenDelete] = React.useState(false);
    const handleOpenDelete = () => setOpenDelete(true);
    const handleCloseDelete = () => setOpenDelete(false);
    const [openEdit, setOpenEdit] = React.useState(false);
    // const handleOpenEdit = () => setOpenEdit(true);
    const handleCloseEdit = () => setOpenEdit(false);
    const [from, setFrom] = useState<Option | null>(null)

    const dispatch = useAppDispatch();

    const getChangeOptionFrom = (newValue: Option | null) => {
        setFrom(newValue)
    }

    useEffect(() => { }, [from]) 

    const deleteTripHandler = (trip_id: number) => {
        dispatch(deleteTrip(trip_id))
    }

    function navigateFunc() {
        navigate(`/trip-detail/${trip?.id}`)
    }
    
    return (
        <Stack onClick={navigateFunc} sx={{cursor: "pointer"}}>
            <Box borderRadius='8px' display='flex' justifyContent='flex-start' gap='32px'
                flexWrap='wrap' boxShadow={1} mt='32px' width='100%'
                height={{ xl: "250px", md: "250px", sm: "250px", xs: "auto" }}>
                <Box borderRadius={{ xl: '8px 0 0 8px', md: '8px 0 0 8px', sm: '8px 0 0 8px', xs: '8px 8px 0 0' }}
                    width={{ xl: "35%", md: "35%", sm: "35%", xs: "100%" }} height='100%' overflow="hidden">
                    <img src={`${trip?.location?.[0].photo}`} width='100%' height='100%' style={{ objectFit: "cover" }} alt="" />
                </Box>
                <Box width={{ xl: "45%", md: "45%", sm: "45%", xs: "100%" }} pt={{ xl: '40px', md: '40px', sm: '40px', xs: 0 }} ml={{ xl: 0, md: 0, sm: 0, xs: "32px" }}>
                    <GlobalParagraph fontSize='24px' fontWeight='700' mediafontsize='16px'>{trip?.title}</GlobalParagraph>
                    <GlobalParagraph fontSize='20px' fontWeight='700'  mediafontsize='16px' paddingbottom='12px' paddingtop='24px'>{trip?.price}$</GlobalParagraph>
                    <Box mt='16px' display='flex' flexWrap='wrap' justifyContent='flex-start' gap='16px'>
                        <Box display='flex' alignItems='center' justifyContent='flex-start' gap='5px'>
                            <CalendarMonthIcon />
                            <GlobalParagraph fontSize='14px' fontWeight='400'>{`${trip?.start_time} → ${trip?.end_time}`}</GlobalParagraph>
                        </Box>
                        <Box display='flex' width={{xl: "auto", md: "auto", sm: "auto", xs: "100%"}} alignItems='center' justifyContent='flex-start' gap='5px'>
                            <LocationOnIcon />
                            <GlobalParagraph fontSize='14px' fontWeight='400'>{trip?.location?.[0]?.name}</GlobalParagraph>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ height: { xl: 250, md: 250, sm: 250, xs: "auto" }, transform: 'translateZ(0px)', flexGrow: 1 }}>
                    <SpeedDial
                        ariaLabel="SpeedDial basic example"
                        sx={{ position: 'absolute', bottom: 16, right: 16 }}
                        icon={<SettingsIcon />}
                    >
                        <SpeedDialAction
                            onClick={handleOpenDelete}
                            icon={<DeleteIcon />}
                            tooltipTitle="Delete"
                        />
                        {/* <SpeedDialAction
                            onClick={handleOpenEdit}
                            icon={<EditIcon />}
                            tooltipTitle="Edit"
                        /> */}
                    </SpeedDial>
                </Box>
                <Modal
                    open={openDelete}
                    onClose={handleCloseDelete}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} borderRadius='8px' width={{xl: 500, md: 500, sm: 400, xs: 300}}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Trip Name
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Are you sure you want to delete?
                        </Typography>
                        <Button 
                            sx={{ mt: '20px' }}
                            color='warning'
                            onClick={() => {deleteTripHandler(trip?.id as number)}}
                        >
                            Delete
                        </Button>
                    </Box>
                </Modal>
                <Modal
                    open={openEdit}
                    onClose={handleCloseEdit}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} borderRadius='8px' width={{xl: 500, md: 500, sm: 400, xs: 300}}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Edit Trip
                        </Typography>
                        <Box mt='16px'>
                            <GlobalParagraph fontSize='14px' fontWeight='700' paddingbottom='16px'>Trip Name</GlobalParagraph>
                            <TextField fullWidth type='text' variant='outlined' label="Trip Name" />
                        </Box>
                        <Box mt='16px'>
                            <GlobalParagraph fontSize='14px' fontWeight='700' paddingbottom='16px'>Destination</GlobalParagraph>
                            <CustomAutocomplete
                                options={options}
                                placeholder="Location"
                                getChange={getChangeOptionFrom}
                                icon={<LocationOnIcon />}
                            />
                        </Box>
                        <Box mt='16px'>
                            <GlobalParagraph fontSize='14px' fontWeight='700' paddingbottom='16px'>Dates or Length of stay</GlobalParagraph>
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
                        <Button sx={{ mt: '20px' }} color='warning'>Edit Trip</Button>
                    </Box>
                </Modal>
            </Box>
        </Stack>
    )
}

export default MyTripCard
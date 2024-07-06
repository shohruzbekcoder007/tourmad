import { Box, Button,  Pagination, Paper, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { WelcomeMainText } from '../../global_styles/styles'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { CustomAutocomplete } from '../../helper_components';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import HotelFilterCard from '../HotelFilterCard';
import { useNavigate } from 'react-router-dom';
import PlanCategory from '../PlanCategory';

type Option = {
    label: string,
    value: string
}

const RestaurantFilter: React.FC = () => {
    const [from, setFrom] = useState<Option | null>(null)
    const navigate = useNavigate()

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
        <Stack mt='40px'>
            <Box pb="40px" display="flex" justifyContent="space-between">
                <WelcomeMainText fontSize="32px" mediafontsize="18px" texttransform="capitalize" part="true">Restaurant Filter</WelcomeMainText>
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
                            options={options}
                            placeholder="Location"
                            getChange={getChangeOptionFrom}
                            icon={<LocationOnIcon />}
                        />
                    </Box>
                    <Box mt="16px" minWidth={{ xl: "45%", md: "45%", sm: "40%", xs: "100%" }}>
                        <CustomAutocomplete
                            options={options}
                            placeholder="Restaurant Name"
                            getChange={getChangeOptionFrom}
                            icon={<RestaurantIcon />}
                        />
                    </Box>
                    <Box mt="16px" width={{ xl: '56px', md: '56px', sm: '56px', xs: "100%" }}>
                        <Button sx={{ height: '56px' }} fullWidth variant='contained'>
                            <SearchIcon />
                        </Button>
                    </Box>
                </Box>
            </Paper>
            <PlanCategory />
            <Box width='100%'>
                <HotelFilterCard />
            </Box>
            <Box display="flex" justifyContent="flex-end">
                <Pagination count={10} color="primary" />
            </Box>
        </Stack>
    )
}

export default RestaurantFilter
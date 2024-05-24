import { Button, Chip, Grid, Stack } from '@mui/material'
import React from 'react'
import { Container, GlobalParagraph, WelcomeMainText } from '../../global_styles/styles'
import LocationCityIcon from '@mui/icons-material/LocationCity';

const PlanCategory: React.FC = () => (
    <Stack py="40px" mb="40px" bgcolor="#edececee">
        <Container>
            <Grid container pb="32px">
                <Grid item xl={8} md={8} sm={6} xs={8}>
                    <WelcomeMainText paddingbottom={"16px"} texttransform='capitalize' fontSize={"24px"} part="true">Explore popolar experiences</WelcomeMainText>
                    <GlobalParagraph fontSize={"16px"} fontWeight="400">See what other travels like to do, bosed on ratings and number of bookings.</GlobalParagraph>
                </Grid>
                <Grid item xl={4} md={4} sm={6} xs={4} display='flex' justifyContent='flex-end' alignItems='center'>
                    <Button variant="outlined">See All</Button>
                </Grid>
            </Grid>
            <Stack display='flex' flexWrap="wrap" flexDirection="row" justifyContent="flex-start" gap="10px">
                <Chip sx={{bgcolor: "#fff",}} icon={<LocationCityIcon />} label="City Tower (22)" variant="outlined" />
                <Chip sx={{bgcolor: "#fff",}} icon={<LocationCityIcon />} label="City Tower" variant="outlined" />
                <Chip sx={{bgcolor: "#fff",}} icon={<LocationCityIcon />} label="City Tower" variant="outlined" />
                <Chip sx={{bgcolor: "#fff",}} icon={<LocationCityIcon />} label="City Tower" variant="outlined" />
                <Chip sx={{bgcolor: "#fff",}} icon={<LocationCityIcon />} label="City Tower" variant="outlined" />
                <Chip sx={{bgcolor: "#fff",}} icon={<LocationCityIcon />} label="City Tower" variant="outlined" />
                <Chip sx={{bgcolor: "#fff",}} icon={<LocationCityIcon />} label="City Tower" variant="outlined" />
                <Chip sx={{bgcolor: "#fff",}} icon={<LocationCityIcon />} label="City Tower" variant="outlined" />
            </Stack>
        </Container>
    </Stack>
)

export default PlanCategory
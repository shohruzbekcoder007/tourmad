import { Button, Grid, Stack } from '@mui/material'
import React from 'react'
import { Container, GlobalParagraph, WelcomeMainText } from '../../global_styles/styles'
import LocationCityIcon from '@mui/icons-material/LocationCity';

const CunsultingPlanCategory: React.FC = () => (
    <Stack py="40px" mb="40px"  bgcolor="#edececee">
        <Container>
            <Grid container pb="32px">
                <Grid item xl={8} md={8} sm={6} xs={8}>
                    <WelcomeMainText paddingbottom={"16px"} texttransform='capitalize' fontSize={"24px"} part="true">Consulting</WelcomeMainText>
                    <GlobalParagraph fontSize={"16px"} fontWeight="400">Consulting</GlobalParagraph>
                </Grid>
            </Grid>
            <Stack display='flex' flexWrap="wrap" flexDirection="row" justifyContent="flex-start" gap="10px">
                <Button sx={{
                    backgroundColor: '#fff',
                    padding: '10px',
                    border: '1px solid black',
                    borderRadius: '10px'
                }}><LocationCityIcon/> City Tower (22)</Button>
                <Button sx={{
                    backgroundColor: '#fff',
                    padding: '10px',
                    border: '1px solid black',
                    borderRadius: '10px'
                }}><LocationCityIcon/> City Tower (22)</Button>
                <Button sx={{
                    backgroundColor: '#fff',
                    padding: '10px',
                    border: '1px solid black',
                    borderRadius: '10px'
                }}><LocationCityIcon/> City Tower (22)</Button>
                <Button sx={{
                    backgroundColor: '#fff',
                    padding: '10px',
                    border: '1px solid black',
                    borderRadius: '10px'
                }}><LocationCityIcon/> City Tower (22)</Button>
            </Stack>
        </Container>
    </Stack>
)

export default CunsultingPlanCategory
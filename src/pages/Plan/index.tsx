import React from 'react'
import { Container, GlobalParagraph, WelcomeMainText } from '../../global_styles/styles'
import Banner from '../../components/Banner'
import banner_photo from './../../media/images/banner-plan.jpg';
import IntoTravel from '../../components/IntoTravel';
import { Box, Button, Grid } from '@mui/material';
import ResentSearch from '../../components/ResentSearch';
import { useNavigate } from 'react-router-dom'

const Plan: React.FC = () => {
    const navigate = useNavigate();
    return (
        <>
            <Banner bgimage={banner_photo} heightprops='400px'
                bannersubtitle='Special offers to suit your plan' bannertitle='Make the best travel plan.' />
            <Container>
                <ResentSearch title='Your Location for plan'/>
                <Grid container>
                    <Grid item xl={8} md={8} sm={6} xs={8}>
                        <WelcomeMainText paddingbottom={"16px"} mediafontsize="24px" texttransform='capitalize' fontSize={"32px"} part="true">Fall into travel</WelcomeMainText>
                        <GlobalParagraph fontSize={"16px"} mediafontsize='14px' fontWeight="400">Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</GlobalParagraph>
                    </Grid>
                    <Grid item xl={4} md={4} sm={6} xs={4} display='flex' justifyContent='flex-end' alignItems='center'>
                        <Button onClick={() => navigate('/plan-filter')} variant="outlined" >See All</Button>
                    </Grid>
                </Grid>
                <IntoTravel data={null}/>
            </Container>
           
            
        </>
    )
}

export default Plan
import React from 'react'
import { Container, WelcomeMainText } from '../../global_styles/styles'
import Banner from '../../components/Banner'
import banner_photo from './../../media/images/banner-plan.jpg';
import PlanCategory from '../../components/PlanCategory';
import IntoTravel from '../../components/IntoTravel';
import SwipeDrawer from '../../components/SwipeDrawer';
import { Box } from '@mui/material';

const Plan: React.FC = () => {
    return (
        <>
            <Banner bgimage={banner_photo} heightprops='400px'
                bannersubtitle='Special offers to suit your plan' bannertitle='Make the best travel plan.' />
            <Container>
                <Box pt={{xl: 0, md: 0, sm: "60px", xs: "60px"}}>
                    <WelcomeMainText part="true" texttransform='capitalize' fontSize='32px' mediafontsize='24px' paddingbottom='32px'>This to Do in Trip Name</WelcomeMainText>
                </Box>
            </Container>
            <PlanCategory />
            <Container>
                <IntoTravel data={null}/>
                <SwipeDrawer btnText='Create Trip' />
            </Container>
        </>
    )
}

export default Plan
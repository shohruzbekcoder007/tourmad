import React from 'react'
import { Container, WelcomeMainText } from '../../global_styles/styles'
import Banner from '../../components/Banner'
import banner_photo from './../../media/images/banner-plan.jpg';
import PlanCategory from '../../components/PlanCategory';
import IntoTravel from '../../components/IntoTravel';

const Plan: React.FC = () => {
    return (
        <>
            <Banner bgimage={banner_photo} heightprops='400px'
                bannersubtitle='Special offers to suit your plan' bannertitle='Make the best travel plan.' />
            <Container>
                <WelcomeMainText part="true" texttransform='capitalize' fontSize='32px' paddingbottom='32px'>This to Do in Trip Name</WelcomeMainText>
            </Container>
            <PlanCategory />
            <Container>
                <IntoTravel />
            </Container>
        </>
    )
}

export default Plan
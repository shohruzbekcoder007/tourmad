import React, { useEffect } from 'react'
import { Container, GlobalParagraph, WelcomeMainText } from '../../global_styles/styles'
import Banner from '../../components/Banner'
import ResentSearch from '../../components/ResentSearch'
import IntoTravel from '../../components/IntoTravel'
import banner_photo from './../../media/images/banner-hotel.jpg'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getHotelRecommendationList, getRecommendationTripHotel, getStatusLastRecommendationHotel } from '../../redux/slices/hotelSlice'
import { Button, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Hotel: React.FC = () => {

    const navigate = useNavigate();
    const statusLastRecommendationHotel = useAppSelector(getStatusLastRecommendationHotel)
    const hotelRecommendationList = useAppSelector(getHotelRecommendationList)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (statusLastRecommendationHotel === 'idle') {
            dispatch(getRecommendationTripHotel())
        }
    }, [statusLastRecommendationHotel, dispatch])

    return (
        <>
            <Banner heightprops='400px' 
            bgimage={banner_photo} 
            bannertitle='Make your travel whishlist, we’ll do the rest'
            bannersubtitle='Special offers to suit your plan'/>
            <Container>
                <ResentSearch />
                <Grid container>
                    <Grid item xl={8} md={8} sm={6} xs={8}>
                        <WelcomeMainText paddingbottom={"16px"} mediafontsize="24px" texttransform='capitalize' fontSize={"32px"} part="true">Fall into travel</WelcomeMainText>
                        <GlobalParagraph fontSize={"16px"} mediafontsize='14px' fontWeight="400">Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</GlobalParagraph>
                    </Grid>
                    <Grid item xl={4} md={4} sm={6} xs={4} display='flex' justifyContent='flex-end' alignItems='center'>
                        <Button onClick={() => navigate("/hotel-filter")} variant="outlined" >See All</Button>
                    </Grid>
                </Grid>
                <IntoTravel data={hotelRecommendationList}/>
            </Container>
        </>
    )
}

export default Hotel
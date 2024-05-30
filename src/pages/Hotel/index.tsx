import React, { useEffect } from 'react'
import { Container } from '../../global_styles/styles'
import Banner from '../../components/Banner'
import ResentSearch from '../../components/ResentSearch'
import IntoTravel from '../../components/IntoTravel'
import banner_photo from './../../media/images/banner-hotel.jpg'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getHotelRecommendationList, getRecommendationTripHotel, getStatusLastRecommendationHotel } from '../../redux/slices/hotelSlice'

const Hotel: React.FC = () => {

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
                <IntoTravel data={hotelRecommendationList}/>
            </Container>
        </>
    )
}

export default Hotel
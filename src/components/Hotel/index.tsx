import React, { useEffect } from 'react'
import Banner from '../Banner'
import { Stack } from '@mui/material'
import banner_photo from './../../media/images/banner-hotel.jpg'
import TicketTable from '../TicketTable'
import ResentSearch from '../ResentSearch'
import { Container } from '../../global_styles/styles'
import IntoTravel from '../IntoTravel'

import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getHotelRecommendationList, getRecommendationTripHotel, getStatusLastRecommendationHotel } from '../../redux/slices/hotelSlice'

const Hotel : React.FC = () => {

  const statusLastRecommendationHotel = useAppSelector(getStatusLastRecommendationHotel)
    const hotelRecommendationList = useAppSelector(getHotelRecommendationList)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (statusLastRecommendationHotel === 'idle') {
            dispatch(getRecommendationTripHotel())
        }
    }, [dispatch])

  return (
    <Stack>
        <Banner
          heightprops='537px'
          bgimage={banner_photo}
          bannersubtitle='Special offers to suit your plan'
          bannertitle='Make your travel whishlist, we’ll do the rest'
        />
        <TicketTable data={hotelRecommendationList}/>
        <Container>
            <ResentSearch />
            <IntoTravel />
        </Container>
    </Stack>
  )
}

export default Hotel
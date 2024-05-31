import React, { useEffect } from 'react'
import { Container } from '../../global_styles/styles'
import Banner from '../../components/Banner'
import ResentSearch from '../../components/ResentSearch'
import IntoTravel from '../../components/IntoTravel'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getRecommendationRestaurantList, getRestaurantRecommendationList, getStatusLastRecommendationRestaurant } from '../../redux/slices/restaurantSlice'

const Restaurant: React.FC = () => {

  const statusLastRecommendationRestaurant = useAppSelector(getStatusLastRecommendationRestaurant)
  const restaurantRecommendationList = useAppSelector(getRestaurantRecommendationList)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (statusLastRecommendationRestaurant === 'idle') {
      dispatch(getRecommendationRestaurantList())
    }
  }, [statusLastRecommendationRestaurant, dispatch])

  return (
    <>
            <Banner heightprops='400px' bgimage={require('./../../media/images/restaurant.jpg')}
            bannersubtitle='Make your travel whishlist, we’ll do the rest'
            bannertitle='Special offers to suit your plan' />
            <Container>
                <ResentSearch />
                <IntoTravel data={restaurantRecommendationList}/>
            </Container>
        </>
  )
}

export default Restaurant
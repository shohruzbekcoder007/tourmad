import React, { useEffect } from 'react'
import { Container } from '../../global_styles/styles'
import Banner from '../../components/Banner'
import banner_photo from './../../media/images/banner-drive.webp'
// import DriverCard from '../../components/DriverCard'
import ResentSearch from '../../components/ResentSearch'
import IntoTravel from '../../components/IntoTravel'
import { getDriverRecommendationList, getRecommendationDriverList, getStatusLastRecommendationDriver } from '../../redux/slices/DriverSliser'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

const Drive: React.FC = () => {

    const statusLastRecommendationDriver = useAppSelector(getStatusLastRecommendationDriver)
    const driverRecommendationList = useAppSelector(getDriverRecommendationList)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (statusLastRecommendationDriver === 'idle') {
            dispatch(getRecommendationDriverList())
        }
    }, [statusLastRecommendationDriver, dispatch])

    return (
        <>
            <Banner bgimage={banner_photo} heightprops='400px'
                bannersubtitle='Special offers to suit your plan' bannertitle='Smart, polite, courteous drivers for customers' />
            <Container>
                <ResentSearch />
                <IntoTravel data={driverRecommendationList} daily={true}/>
                {/* <DriverCard /> */}
            </Container>
        </>
    )
}

export default Drive
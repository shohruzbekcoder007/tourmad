import React, { useEffect } from 'react'
import { Container, GlobalParagraph, WelcomeMainText } from '../../global_styles/styles'
import Banner from '../../components/Banner'
import banner_photo from './../../media/images/banner-drive.webp'
import ResentSearch from '../../components/ResentSearch'
import IntoTravel from '../../components/IntoTravel'
import { getDriverRecommendationList, getLoacationList, getLocationList, getRecommendationDriverList, getStatusLastRecommendationDriver, getStatusLastSearchDriver } from '../../redux/slices/driverSliser'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Button, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Drive: React.FC = () => {
    const navigate = useNavigate();
    const statusLastRecommendationDriver = useAppSelector(getStatusLastRecommendationDriver)
    const driverRecommendationList = useAppSelector(getDriverRecommendationList)
    const statusLastSearchDriver = useAppSelector(getStatusLastSearchDriver)
    const driverLocationList = useAppSelector(getLocationList)
    const dispatch = useAppDispatch()
const {t} = useTranslation()
    useEffect(() => {
        if (statusLastRecommendationDriver === 'idle') {
            dispatch(getRecommendationDriverList())
        }
    }, [statusLastRecommendationDriver, dispatch])

    useEffect(() => {
        if (statusLastSearchDriver === 'idle') {
            dispatch(getLoacationList())
        }
    }, [statusLastSearchDriver, dispatch])

    useEffect(() => {
        console.log(driverLocationList)
    }, [driverLocationList])

    return (
        <>
            <Banner bgimage={banner_photo} heightprops='400px'
                bannersubtitle={t("Special offers to suit your plan")} bannertitle={t("Smart, polite, courteous drivers for customers")} />
            <Container>
                <ResentSearch statusLastSearch={statusLastSearchDriver} locationList={driverLocationList}/>
                <Grid container>
                    <Grid item xl={8} md={8} sm={6} xs={8}>
                        <WelcomeMainText paddingbottom={"16px"} mediafontsize="24px" texttransform='capitalize' fontSize={"32px"} part="true">{t("Fall into travel")}</WelcomeMainText>
                        <GlobalParagraph fontSize={"16px"} mediafontsize='14px' fontWeight="400">{t("Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.")}</GlobalParagraph>
                    </Grid>
                    <Grid item xl={4} md={4} sm={6} xs={4} display='flex' justifyContent='flex-end' alignItems='center'>
                        <Button variant="outlined" onClick={() => navigate("/drive-filter")}>{t("See All")}</Button>
                    </Grid>
                </Grid>
                <IntoTravel link="drive" data={driverRecommendationList} daily={true} />
                {/* <DriverCard /> */}
            </Container>
        </>
    )
}

export default Drive
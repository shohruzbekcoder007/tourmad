import React, { useEffect } from 'react'
import { Container, GlobalParagraph, WelcomeMainText } from '../../global_styles/styles'
import Banner from '../../components/Banner'
import ResentSearch from '../../components/ResentSearch'
import IntoTravel from '../../components/IntoTravel'
import banner_photo from './../../media/images/banner-hotel.jpg'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
// import { getDailyLocationList, getDailyRecommendationList, getLoacationList, getRecommendationTripDaily, getStatusLastRecommendationDaily, getStatusLastSearchDaily } from '../../redux/slices/dailySlice'
import { Button, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { getDailyLocationList, getDailyRecommendationList, getRecommendationTripDaily, getStatusLastRecommendationDaily, getStatusLastSearchDaily } from '../../redux/slices/dailySlice'
import { getLoacationList } from '../../redux/slices/dailySlice'
import { useTranslation } from 'react-i18next'

const Daily: React.FC = () => {

    const navigate = useNavigate();
    const statusLastRecommendationDaily = useAppSelector(getStatusLastRecommendationDaily)
    const dailyRecommendationList = useAppSelector(getDailyRecommendationList)
    const statusLastSearchDaily = useAppSelector(getStatusLastSearchDaily)
    const dailyLocationList = useAppSelector(getDailyLocationList)
    const dispatch = useAppDispatch()
    const {t} = useTranslation()
    useEffect(() => {
        if (statusLastRecommendationDaily === 'idle') {
            dispatch(getRecommendationTripDaily())
        }
    }, [statusLastRecommendationDaily, dispatch])

    useEffect(() => {
        if (statusLastSearchDaily === 'idle') {
            dispatch(getLoacationList())
        }
    }, [statusLastSearchDaily, dispatch])

    return (
        <>
            <Banner heightprops='400px' 
            bgimage={banner_photo} 
            bannertitle={t("Make your travel whishlist, we’ll do the rest")}
            bannersubtitle='Special offers to suit your plan'/>
            <Container>
                <ResentSearch statusLastSearch={statusLastSearchDaily} locationList={dailyLocationList}/>
                <Grid container>
                    <Grid item xl={8} md={8} sm={6} xs={8}>
                        <WelcomeMainText paddingbottom={"16px"} mediafontsize="24px" texttransform='capitalize' fontSize={"32px"} part="true">{t("Fall into travel")}</WelcomeMainText>
                        <GlobalParagraph fontSize={"16px"} mediafontsize='14px' fontWeight="400">{t("Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.")}</GlobalParagraph>
                    </Grid>
                    <Grid item xl={4} md={4} sm={6} xs={4} display='flex' justifyContent='flex-end' alignItems='center'>
                        <Button onClick={() => navigate("/daily-filter")} variant="outlined" >{t("See All")}</Button>
                    </Grid>
                </Grid>
                <IntoTravel link='daily' data={dailyRecommendationList} type="daily"/>
            </Container>
        </>
    )
}

export default Daily
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import Header from '../Header'
import { WelcomeMainText } from '../../global_styles/styles'
import AuthUserInfo from './AuthUserInfo'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { getHomeBanner, getHomeBannerPhotos } from '../../redux/slices/homeSlice'
import { useTranslation } from 'react-i18next'

// shu joyiga ruyhatdan utgan utmagani tugirlandi

const Welcome: React.FC = () => {
    const homeBanner = useAppSelector(getHomeBannerPhotos)
    const {t} = useTranslation()

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getHomeBanner())
    },[dispatch])

    return (
        <Box
            padding="30px"
        >
            <Box
                borderRadius="24px"
                sx={{
                    backgroundImage: `url(${homeBanner.banner?.banner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: {xl: '600px', md: "500px", sm: "400px", xs: "400px" }
                }}
            >
                <Box
                borderRadius="24px"
                bgcolor="#00000080"
                    padding={{xl: "0 32px", md: "0 32px", sm: "0 16px", xs: "0 16px"}}
                    sx={{
                        height: {xl: '600px', md: "500px", sm: "400px", xs: "400px" }
                    }}
                >
                    <Header
                        logo={true}
                        auth={<AuthUserInfo/>}
                    />
                    <Box
                        sx={{
                            height: {xl: '600px', md: "500px", sm: "400px", xs: "300px" },
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <WelcomeMainText fontSize={"45px"} mediafontsize='20px' paddingbottom="4px">{t("Helping Others")}</WelcomeMainText>
                        <WelcomeMainText fontSize={"80px"} mediafontsize='28px' paddingbottom="16px">{t("Live & Travel")}</WelcomeMainText>
                        <WelcomeMainText fontSize={"20px"} mediafontsize='12px'>{t("Special offers to suit your plan")}</WelcomeMainText>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Welcome
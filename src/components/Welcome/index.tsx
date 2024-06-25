import { Box } from '@mui/material'
import React from 'react'
import welcome_bg from './../../media/images/body-bg.jpg'
import Header from '../Header'
import { WelcomeMainText } from '../../global_styles/styles'
import AuthUserInfo from './AuthUserInfo'

// shu joyiga ruyhatdan utgan utmagani tugirlandi

const Welcome: React.FC = () => {
    return (
        <Box
            padding="30px"
        >
            <Box
                borderRadius="24px"
                sx={{
                    backgroundImage: `url(${welcome_bg})`,
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
                        <WelcomeMainText fontSize={"45px"} mediafontsize='20px' paddingbottom="4px">Helping Others</WelcomeMainText>
                        <WelcomeMainText fontSize={"80px"} mediafontsize='28px' paddingbottom="16px">Live & Travel</WelcomeMainText>
                        <WelcomeMainText fontSize={"20px"} mediafontsize='12px'>Special offers to suit your plan</WelcomeMainText>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Welcome
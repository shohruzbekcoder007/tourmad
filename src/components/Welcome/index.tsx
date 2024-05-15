import { Box, Button } from '@mui/material'
import React from 'react'
import welcome_bg from './../../media/images/body-bg.jpg'
import Header from '../Header'
import { WelcomeMainText } from '../../global_styles/styles'
import { AuthUser } from './styles'

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
                    height: "600px"
                }}
            >
                <Box
                borderRadius="24px"
                bgcolor="#00000080"
                    padding="0 32px"
                >
                    <Header
                        logo={true}
                        auth={
                            (<>
                                <AuthUser>
                                    <Button
                                        color="secondary"
                                        sx={{
                                            borderRadius: "8px",
                                            padding: "15px 24px"
                                        }}
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        color="secondary"
                                        variant="contained"
                                        sx={{
                                            borderRadius: "8px",
                                            padding: "15px 24px"
                                        }}
                                    >
                                        <span>
                                            Sign up
                                        </span>
                                    </Button>
                                </AuthUser>
                            </>)
                        }
                    />
                    <Box
                        sx={{
                            height: "500px",
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <WelcomeMainText fontSize={"45px"} paddingbottom="4px">Helping Others</WelcomeMainText>
                        <WelcomeMainText fontSize={"80px"} paddingbottom="16px">Live & Travel</WelcomeMainText>
                        <WelcomeMainText fontSize={"20px"}>Special offers to suit your plan</WelcomeMainText>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Welcome
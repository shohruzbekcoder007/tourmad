import { Box, Stack } from '@mui/material'
import React from 'react'
import { Container, GlobalParagraph, WelcomeMainText } from '../../global_styles/styles'
import ServicesLinkForAllPages from '../ServicesLink/ServicesLinkForAllPages'

type PropsType = {
    heightprops: string
    bgimage: string
    bannertitle: string
    bannersubtitle: string
}

const Banner: React.FC<PropsType> = (props) => {
    return (
        <>
            <Stack width="100%"
                height={props.heightprops}
                sx={{
                    backgroundImage: `url(${props.bgimage})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right"
                }}>
                <Box width="100%" pt="80px" height="100%" sx={{ backgroundImage: "linear-gradient(90deg, rgba(0, 35, 77, 0.63) 11.46%, rgba(0, 35, 77, 0.00) 77.37%)" }}>
                    <Container>
                        <Box width={{xl: "50%", md: "70%", sm: "80%", xs: "90%"}}>
                            <WelcomeMainText fontSize='45px' mediafontsize='32px' paddingbottom='8px'>{props.bannertitle}</WelcomeMainText>
                        </Box>
                        <GlobalParagraph fontSize='20px' color='neutrals' mediafontsize='14px' fontWeight='500'>{props.bannersubtitle}</GlobalParagraph>
                    </Container>
                </Box>
            </Stack>
            <Box
                sx={{
                    transform: "translateY(-60px)",
                    marginBottom: "-30px"
                }}
            >
                <ServicesLinkForAllPages />
            </Box>
        </>
    )
}

export default Banner
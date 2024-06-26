import React, { useEffect, useState } from 'react'
import { AuthUserInfo, Footer, Header, ProtectedLinks, } from '../../components'
import { Box, Button, Container, Stack } from '@mui/material'
import { HeaderWrapper } from './styles'
import { GlobalParagraph, WelcomeMainText } from '../../global_styles/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import DetailBanner from '../../components/DetailBanner';
import DetailDescription from '../../components/DetailDescription';
import DetailReviews from '../../components/DetailReviews';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DriveOrder from '../../components/DriveOrder';

const MyDriveDetail: React.FC = () => {
    const [topNavbar, setTopNavbar] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY <= 400) {
                setTopNavbar(false)
            } else if (window.scrollY >= 450) {
                setTopNavbar(true)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    

    return (
        <Stack>
            <HeaderWrapper>
                <Container>
                    <Header logo={require("../../media/images/logo2.png")} type="dark" auth={<AuthUserInfo />} />
                    {
                        topNavbar && <ProtectedLinks />
                    }
                </Container>
            </HeaderWrapper>
            <Container>
                <Box mt='32px' pb="32px" display="flex" justifyContent="space-between" gap="16px" flexWrap="wrap">
                    <Box>
                        <Box pb="12px" display="flex" justifyContent="flex-start" gap="5px" alignItems="center" flexWrap="wrap">
                            <WelcomeMainText fontSize='24px' mediafontsize='18px' part="true" texttransform='capitalize'>Sevda Apa</WelcomeMainText>
                        </Box>
                        <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
                            <DirectionsCarIcon />
                            <GlobalParagraph fontSize="14px" fontWeight="700">Malibu</GlobalParagraph>
                            <Box ml='5px' display='flex' borderRadius='5px' justifyContent='flex-start' gap='5px' p='5px' border='solid 2px #000'>
                                <Box pr='5px' borderRight="solid 2px #000">
                                    <GlobalParagraph fontSize="12px" fontWeight="700">30</GlobalParagraph>
                                </Box>
                                <Box display='flex' justifyContent='flex-start'>
                                    <Box pr='5px'>
                                        <GlobalParagraph fontSize="12px" fontWeight="700">A777BC</GlobalParagraph>
                                    </Box>
                                    <Box pl='5px' borderLeft="solid 2px #000">
                                        <GlobalParagraph fontSize="12px" fontWeight="700">UZ</GlobalParagraph>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
                            <LocationOnIcon />
                            <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">Toshkent</GlobalParagraph>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="flex-start" gap="5px">
                            <Button variant="outlined">4.2</Button>
                            <GlobalParagraph fontSize="12px" fontWeight="700">Very Good</GlobalParagraph>
                            <GlobalParagraph fontSize="12px" fontWeight="500">371 reviews</GlobalParagraph>
                        </Box>
                    </Box>
                    <Box textAlign={{ xl: 'right', md: "left", sm: "left", xs: "left" }}>
                        <GlobalParagraph fontSize="12px" fontWeight="500">starting from</GlobalParagraph>
                        <GlobalParagraph paddingbottom='16px' fontSize="24px" fontWeight="700" color="slamon">$240/day</GlobalParagraph>
                        <Box display="flex" justifyContent="flex-start" gap="16px">
                            <Button variant='outlined'><FavoriteBorderIcon /></Button>
                            <Button variant='outlined'><ShareIcon /></Button>
                            <DriveOrder btnText='Book Now' />
                        </Box>
                    </Box>
                </Box>
                <DetailBanner bgimage='' />
                <DetailDescription />
                {/* <DetailReviews /> */}
            </Container>
            <Box
                paddingTop="170px"
            >
                <Footer />
            </Box>
        </Stack>
    )
}

export default MyDriveDetail
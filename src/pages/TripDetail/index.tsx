import React, { useEffect, useState } from 'react'
import { FavouritesUser, Footer, Header, ProtectedLinks, ServicesLink } from '../../components'
import { Box, Container, Stack } from '@mui/material'
import { HeaderWrapper } from './styles'
import banner_trip from './../../media/images/banner-trip.jpg'
import BannerMain from '../../components/BannerMain'
import { GlobalParagraph } from '../../global_styles/styles'
import trip_photo from './../../media/images/trip-card-phot.webp'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DriveFilterCard from '../../components/DriverFilterCard'

const MyTrip: React.FC = () => {

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
        <>
            <HeaderWrapper>
                <Container>
                    <Header logo={require("../../media/images/logo2.png")} type="dark" auth={<FavouritesUser />} />
                    {
                        topNavbar && <ProtectedLinks />
                    }
                </Container>
            </HeaderWrapper>
            <BannerMain bgimage={banner_trip}
                bannersubtitle='Embark on a Journey of Discovery! Explore, Experience, and Enrich Your Soul.'
                bannertitle='Join Us on an Unforgettable Adventure!' heightprops='400px' />
            <ServicesLink />
            <Container>
                <Stack>
                    <Box mt={{xl: 0, md: 0, sm: '32px', xs: '32px'}} display='flex' flexWrap='wrap' justifyContent='space-between'>
                        <Box width={{ xl: "55%", md: "55%", sm: "100%", xs: "100%" }}>             
                            <Box  boxShadow={1} borderRadius="8px" position='relative'
                                width="100%" height='250px'>
                                <img src={trip_photo} width='100%' height='100%' style={{ objectFit: "cover", borderRadius: "8px" }} alt="" />           
                                <Box position='absolute' top='0' borderRadius='8px' width='100%' height='100%' bgcolor='#00000050'>
                                    <Box position='absolute' bottom='10px' left='10px'>
                                        <GlobalParagraph color='neutrals' fontSize='24px' fontWeight='700' mediafontsize='16px'>Samarqand</GlobalParagraph>
                                        <Box mt='16px' display='flex' flexWrap='wrap' justifyContent='flex-start' gap='16px'>
                                            <Box display='flex' alignItems='center' justifyContent='flex-start' gap='5px'>
                                                <CalendarMonthIcon />
                                                <GlobalParagraph color='neutrals' fontSize='14px' fontWeight='400'>Jun 6 → Jun 14, 2024</GlobalParagraph>
                                            </Box>
                                            <Box display='flex' width={{ xl: "auto", md: "auto", sm: "auto", xs: "100%" }} alignItems='center' justifyContent='flex-start' gap='5px'>
                                                <LocationOnIcon />
                                                <GlobalParagraph color='neutrals' fontSize='14px' fontWeight='400'>Samarqand</GlobalParagraph>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box mt='32px'>
                                <GlobalParagraph fontSize='24px' mediafontsize='16px' fontWeight='600' paddingbottom='16px'>Date: Year</GlobalParagraph>
                                <DriveFilterCard />
                                <DriveFilterCard />
                            </Box>
                        </Box>
                        <Box width={{xl: "40%", md: "40%", sm: '100%', xs: "100%"}} height={{xl: "600px", md: '600px', sm: "auto", xs: "auto"}} 
                        position={{xl: 'sticky', md: 'sticky', sm: "static", xs: "static"}} top={{xl: '120px', md: '120px', sm: "0", xs: 0 }} right="0">
                            <iframe title='Anor Plaza' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11979.44075980614!2d69.2852827!3d41.3553925!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8d11aa1a6c3f%3A0x376ab77baf387727!2z0JDQvdC-0YAg0LzQsNGA0LrQtdGC!5e0!3m2!1sru!2s!4v1717198941300!5m2!1sru!2s" width="100%" height="100%" style={{border: 0, borderRadius: "16px"}} allowFullScreen loading="lazy" referrerPolicy='no-referrer-when-downgrade' />
                        </Box>
                    </Box>
                </Stack>
            </Container>
            <Box
                paddingTop="170px"
            >
                <Footer />
            </Box>
        </>
    )
}

export default MyTrip

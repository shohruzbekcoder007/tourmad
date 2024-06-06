import React, { useEffect, useState } from 'react'
import { FavouritesUser, Footer, Header, ProtectedLinks, ServicesLink } from '../../components'
import { Box, Container } from '@mui/material'
import { HeaderWrapper } from './styles'
import banner_trip from './../../media/images/banner-trip.jpg'
import none_trip from './../../media/images/none-trip.webp'
import BannerMain from '../../components/BannerMain'
import { GlobalParagraph } from '../../global_styles/styles'
import SwipeDrawer from '../../components/SwipeDrawer'
import MyTripCard from '../../components/MyTripCard'

const MyTrip: React.FC = () => {

    const [topNavbar, setTopNavbar] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
          if(window.scrollY <= 400){
            setTopNavbar(false)
          }else if (window.scrollY >= 450){
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
                    <Header logo={require("../../media/images/logo2.png")} type="dark" auth={<FavouritesUser/>} />
                    {
                        topNavbar && <ProtectedLinks/>
                    }
                </Container>
            </HeaderWrapper>
            <BannerMain bgimage={banner_trip} 
            bannersubtitle='Embark on a Journey of Discovery! Explore, Experience, and Enrich Your Soul.' 
            bannertitle='Join Us on an Unforgettable Adventure!' heightprops='400px'/>
            <ServicesLink />
            <Container>
                <Box display='flex' alignItems="center" mt={{xl: 0, md: 0, sm: "32px", xs: "32px"}} justifyContent='space-between'>
                    <GlobalParagraph fontSize='32px' fontWeight='700' mediafontsize='18px'>My Trips</GlobalParagraph>
                    <SwipeDrawer btnText='Create Trip' />
                </Box>
                <Box textAlign='center'>
                    <img src={none_trip} width='300px' alt="" />
                    <GlobalParagraph fontSize='14px' fontWeight='400' oposity='0.75'>You haven't created a trip yet</GlobalParagraph>
                </Box>
                <MyTripCard />
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
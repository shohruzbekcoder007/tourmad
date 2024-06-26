import React, { useEffect, useState } from 'react'
import { AuthUserInfo, Footer, Header, ProtectedLinks, } from '../../components'
import { Box, Button, Container, Rating, Stack } from '@mui/material'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { HeaderWrapper } from './styles'
import { GlobalParagraph, WelcomeMainText } from '../../global_styles/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import DetailBanner from '../../components/DetailBanner';
import DetailDescription from '../../components/DetailDescription';
import HotelRooms from '../../components/HotelRooms';
import DetailMap from '../../components/DetailMap';
import DetailReviews from '../../components/DetailReviews';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const HotelDetail: React.FC = () => {
    const value: number | null = 5;
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
                <Box my="32px">
                    <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/">
                                Toshkent
                            </Link>
                            <Typography color="text.primary">Anor Plaza</Typography>
                        </Breadcrumbs>
                    </div>
                </Box>
                <Box pb="32px" display="flex" justifyContent="space-between" gap="16px" flexWrap="wrap">
                    <Box>
                        <Box pb="12px" display="flex" justifyContent="flex-start" gap="5px" alignItems="center" flexWrap="wrap">
                            <WelcomeMainText fontSize='24px' mediafontsize='18px' part="true" texttransform='capitalize'>CVK Park Bosphorus Hotel Istanbul</WelcomeMainText>
                            <Rating name="disabled" value={value} disabled />
                            <GlobalParagraph fontSize="12px" fontWeight="500">5 Star Hotel</GlobalParagraph>
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
                    <Box textAlign={{xl: 'right', md: "left", sm: "left", xs: "left"}}>
                        <GlobalParagraph paddingbottom='16px' fontSize="24px" fontWeight="700" color="slamon">$240/night</GlobalParagraph>
                        <Box display="flex" justifyContent="flex-start" gap="16px">
                            <Button variant='outlined'><FavoriteBorderIcon /></Button>
                            <Button variant='outlined'><ShareIcon /></Button>
                            <Button variant='contained'>Book Now</Button>
                        </Box>
                    </Box>
                </Box>
                <DetailBanner bgimage='' />
                <DetailDescription />
                <HotelRooms />
                <DetailMap />
                {/* <DetailReviews />    */}
            </Container>
            <Box
                paddingTop="170px"
            >
                <Footer />
            </Box>
        </Stack>
    )
}

export default HotelDetail
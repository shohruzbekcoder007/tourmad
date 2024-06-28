import React, { useEffect, useState } from 'react'
import { AuthUserInfo, Footer, Header, ProtectedLinks, } from '../../components'
import { Box, Button, Container, Stack } from '@mui/material'
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
import DetailMap from '../../components/DetailMap';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { getRestaurantDetail, getRestaurantDetailInfo } from '../../redux/slices/restaurantSlice';
// import DetailReviews from '../../components/DetailReviews';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const RestaurantDetail: React.FC = () => {
    const [topNavbar, setTopNavbar] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const { restaurant }  = useAppSelector(getRestaurantDetail);

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        dispatch(getRestaurantDetailInfo(id as string))
    }, [])

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
                                {restaurant?.location?.name}
                            </Link>
                            <Typography color="text.primary">{restaurant?.name}</Typography>
                        </Breadcrumbs>
                    </div>
                </Box>
                <Box pb="32px" display="flex" justifyContent="space-between" gap="16px" flexWrap="wrap">
                    <Box>
                        <Box pb="12px" display="flex" justifyContent="flex-start" gap="5px" alignItems="center" flexWrap="wrap">
                            <WelcomeMainText fontSize='24px' mediafontsize='18px' part="true" texttransform='capitalize'>{restaurant?.name}</WelcomeMainText>
                        </Box>
                        <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
                            <LocationOnIcon />
                            <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">{restaurant?.location?.name}</GlobalParagraph>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="flex-start" gap="5px">
                            <Button variant="outlined">{restaurant?.rate}</Button>
                            <GlobalParagraph fontSize="12px" fontWeight="700">Very Good</GlobalParagraph>
                            <GlobalParagraph fontSize="12px" fontWeight="500">{restaurant?.reviews_count} reviews</GlobalParagraph>
                        </Box>
                    </Box>
                    <Box textAlign={{xl: 'right', md: "left", sm: "left", xs: "left"}}>
                        <Box display="flex" justifyContent="flex-start" gap="16px">
                            <Button variant='outlined'><FavoriteBorderIcon /></Button>
                            <Button variant='outlined'><ShareIcon /></Button>
                            <Button variant='contained'>Book Now</Button>
                        </Box>
                    </Box>
                </Box>
                <DetailBanner bgimage={`${restaurant?.banner}`} />
                <DetailDescription>
                    {parse((restaurant?.body as string) || "")}
                </DetailDescription>
                <DetailMap longitude={restaurant?.longitude} latitude={restaurant?.latitude} />
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

export default RestaurantDetail
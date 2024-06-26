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
import { useAppSelector } from '../../redux/hooks';
import { getDriverDetail, getDriverDetailAction } from '../../redux/slices/driverSliser';
import { AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import TranslateIcon from '@mui/icons-material/Translate';
import parse from 'html-react-parser';
// import { ReviewsType } from '../../utils/response_types';

const MyDriverDetail: React.FC = () => {
    const [topNavbar, setTopNavbar] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();

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

    // redux
    const driverDetail = useAppSelector(getDriverDetail)

    // redux dispatch
    const dispatch: AppDispatch = useDispatch()

    useEffect(() =>{
        dispatch(getDriverDetailAction(id as string))
    }, [])

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
                            <WelcomeMainText fontSize='24px' mediafontsize='18px' part="true" texttransform='capitalize'>
                                {driverDetail.driver?.user?.first_name} {driverDetail.driver?.user?.last_name}
                            </WelcomeMainText>
                        </Box>
                        <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
                            <DirectionsCarIcon />
                            <GlobalParagraph fontSize="14px" fontWeight="700">{driverDetail.driver?.auto_model?.name}</GlobalParagraph>
                            <Box ml='5px' display='flex' borderRadius='5px' justifyContent='flex-start' gap='5px' p='5px' border='solid 2px #000'>
                                <Box pr='5px' borderRight="solid 2px #000">
                                    <GlobalParagraph fontSize="12px" fontWeight="700">{driverDetail.driver?.auto_number?.region}</GlobalParagraph>
                                </Box>
                                <Box display='flex' justifyContent='flex-start'>
                                    <Box pr='5px'>
                                        <GlobalParagraph fontSize="12px" fontWeight="700">{driverDetail.driver?.auto_number?.number}</GlobalParagraph>
                                    </Box>
                                    <Box pl='5px' borderLeft="solid 2px #000">
                                        <GlobalParagraph fontSize="12px" fontWeight="700">{driverDetail.driver?.auto_number?.country}</GlobalParagraph>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
                            <LocationOnIcon />
                            <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">{driverDetail.driver?.location?.name}</GlobalParagraph>
                        </Box>
                        <Box  display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
                        <TranslateIcon />
                        <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">
                            {
                            driverDetail.driver?.languages?.map((lang) => {
                                return `${lang.lang}, `
                            })
                            }
                        </GlobalParagraph>
                        </Box>
                        <Box display="flex" mt={2} alignItems="center" justifyContent="flex-start" gap="5px">
                            <Button variant="outlined">{driverDetail.driver?.avg_rate}</Button>
                            <GlobalParagraph fontSize="12px" fontWeight="700">Very Good</GlobalParagraph>
                            <GlobalParagraph fontSize="12px" fontWeight="500">{driverDetail.driver?.orders_count} reviews</GlobalParagraph>
                        </Box>
                    </Box>
                    <Box textAlign={{ xl: 'right', md: "left", sm: "left", xs: "left" }}>
                        <GlobalParagraph fontSize="14px" fontWeight="700" paddingbottom='8px'>{driverDetail.driver?.auto_model?.status}</GlobalParagraph>
                        <GlobalParagraph fontSize="12px" fontWeight="500">starting from</GlobalParagraph>
                        <GlobalParagraph paddingbottom='16px' fontSize="24px" fontWeight="700" color="slamon">${driverDetail.driver?.price}/h</GlobalParagraph>
                        <Box display="flex" justifyContent="flex-start" gap="16px">
                            <Button variant='outlined'><FavoriteBorderIcon /></Button>
                            <Button variant='outlined'><ShareIcon /></Button>
                            <DriveOrder btnText='Book Now' />
                        </Box>
                    </Box>
                </Box>
                <DetailBanner bgimage={driverDetail.driver?.banner} />
                <DetailDescription >
                    {parse((driverDetail.driver?.description as string)||"")}
                </DetailDescription>
                {/* {
                    driverDetail.driver?.orders.map((item: ReviewsType, index: number) => {
                        return (
                            <DetailReviews 
                            key={index+1}
                            avg_rate={driverDetail.driver?.avg_rate}
                            user={item.user}
                            rate={item.rate}
                            id={item.id}
                            review={item.review}/>
                        )
                    })
                } */}
            </Container>
            <Box
                paddingTop="170px"
            >
                <Footer />
            </Box>
        </Stack>
    )
}

export default MyDriverDetail
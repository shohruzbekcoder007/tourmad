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
import DetailMap from '../../components/DetailMap';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getConsultingDetail, getConsultingDetailInfo } from '../../redux/slices/consultingSlice';
// import DetailReviews from '../../components/DetailReviews';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const ConsultingDetail: React.FC = () => {
    const value: number | null = 5;
    const [topNavbar, setTopNavbar] = useState<boolean>(false);
    const dispatch = useAppDispatch()
    const {consulting} = useAppSelector(getConsultingDetail)
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        dispatch(getConsultingDetailInfo(id as string))
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
    console.log(consulting, "consulting detail")
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
                                Samarqand
                            </Link>
                            <Typography color="text.primary">{consulting?.name}</Typography>
                        </Breadcrumbs>
                    </div>
                </Box>
                <Box pb="32px" display="flex" justifyContent="space-between" gap="16px" flexWrap="wrap">
                    <Box>
                        <Box pb="12px" display="flex" justifyContent="flex-start" gap="5px" alignItems="center" flexWrap="wrap">
                            <WelcomeMainText fontSize='24px' mediafontsize='18px' part="true" texttransform='capitalize'>{consulting?.name}</WelcomeMainText>
                            <Rating name="disabled" value={value} disabled />
                            <GlobalParagraph fontSize="12px" fontWeight="500">5 Star consulting</GlobalParagraph>
                        </Box>
                        <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
                            <LocationOnIcon />
                            <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">Samarqand</GlobalParagraph>
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
                            <Button variant='contained'>Add trip</Button>
                        </Box>
                    </Box>
                </Box>
                <DetailBanner />
                <DetailDescription />
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

export default ConsultingDetail
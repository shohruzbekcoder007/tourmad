import React, { useEffect, useState } from 'react'
import { AuthUserInfo, Footer, Header, ProtectedLinks, } from '../../components'
import { Box, Button, Container, IconButton, Popover, Snackbar, Stack } from '@mui/material'
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
import { getHistoryDetail, getHistoryDetailInfo } from '../../redux/slices/historySlice';
import parse from 'html-react-parser';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkIcon from '@mui/icons-material/Link';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SwipeDrawer from '../../components/SwipeDrawer';
import { useTranslation } from 'react-i18next';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const HistoryDetail: React.FC = () => {
    const {t} = useTranslation()

    const [topNavbar, setTopNavbar] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const dispatch = useAppDispatch();
    const { history } = useAppSelector(getHistoryDetail);

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        dispatch(getHistoryDetailInfo(id as string))
    }, [id, dispatch])

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

    const handleClickShare = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCopyLink = () => {
        setSnackbarOpen(true);
        setAnchorEl(null); // Close popover after copying
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    const open = Boolean(anchorEl);
    const popoverId = open ? 'share-popover' : undefined; // Renamed to popoverId
    return (
        <Stack>
            <HeaderWrapper>
                <Container>
                    <Header logo={require("../../media/images/logo2.png")} type="dark" auth={<AuthUserInfo />} />
                    {topNavbar && <ProtectedLinks />}
                </Container>
            </HeaderWrapper>
            <Container>
                <Box my="32px">
                    <div role="presentation" onClick={handleClick}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/">
                                {history?.location?.name}
                            </Link>
                            <Typography color="text.primary">{history?.name}</Typography>
                        </Breadcrumbs>
                    </div>
                </Box>
                <Box pb="32px" display="flex" justifyContent="space-between" gap="16px" flexWrap="wrap">
                    <Box>
                        <Box pb="12px" display="flex" justifyContent="flex-start" gap="5px" alignItems="center" flexWrap="wrap">
                            <WelcomeMainText fontSize='24px' mediafontsize='18px' part="true" texttransform='capitalize'>{history?.name}</WelcomeMainText>
                        </Box>
                        <Box pb="12px" display="flex" alignItems="center" justifyContent="flex-start" gap="2px">
                            <LocationOnIcon />
                            <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">{history?.location?.name}</GlobalParagraph>
                        </Box>
                    </Box>
                    <Box textAlign={{ xl: 'right', md: "left", sm: "left", xs: "left" }}>
                        <Box display="flex" justifyContent="flex-start" gap="16px">
                            <Button variant='outlined'><FavoriteBorderIcon /></Button>
                            <Button variant='outlined' onClick={handleClickShare}><ShareIcon /></Button>
                            <Popover
                                id={popoverId} // Updated to popoverId
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <Box display="flex" flexDirection="column" padding="16px" gap="8px">
                                    {/* Social media share buttons */}
                                    <FacebookShareButton url={window.location.href}>
                                        <IconButton color="primary">
                                            <FacebookIcon />
                                        </IconButton>
                                    </FacebookShareButton>
                                    <TwitterShareButton url={window.location.href}>
                                        <IconButton color="primary">
                                            <TwitterIcon />
                                        </IconButton>
                                    </TwitterShareButton>
                                    <WhatsappShareButton url={window.location.href}>
                                        <IconButton color="primary">
                                            <WhatsAppIcon />
                                        </IconButton>
                                    </WhatsappShareButton>

                                    {/* Copy to clipboard button */}
                                    <CopyToClipboard text={window.location.href} onCopy={handleCopyLink}>
                                        <Button variant="outlined" startIcon={<LinkIcon />}>
                                            Copy Link
                                        </Button>
                                    </CopyToClipboard>
                                </Box>
                            </Popover>

                            <Snackbar
                                open={snackbarOpen}
                                autoHideDuration={3000}
                                onClose={handleSnackbarClose}
                                message="Link copied to clipboard!"
                            />
                            <SwipeDrawer
                                restaurant_id={parseInt(("" + history?.id) as string)}
                                addType={'history'}
                                button={<Button variant='contained'>{t("Add trip")}</Button>}
                            />
                            {/* <Button variant='contained'>Add trip</Button> */}
                        </Box>
                    </Box>
                </Box>
                <DetailBanner bgimage={history?.banner as string} gallery={history?.gallery} name={history?.name}/>
                <DetailDescription>
                    {parse((history?.body as string) || "")}
                </DetailDescription>
                <DetailMap longitude={history?.longitude} latitude={history?.latitude} />
            </Container>
            <Box paddingTop="170px">
                <Footer />
            </Box>
        </Stack>
    )
}

export default HistoryDetail

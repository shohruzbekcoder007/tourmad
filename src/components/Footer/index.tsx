import { Box, Stack, IconButton, TextField, Button } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FooterPhoto from './../../media/images/FooterPhoto.png';
import logoFooter from './../../media/images/logo2.png'
import React from "react";
import { FooterBottom, FooterBox, FooterLink, FooterList, FooterLogo, FooterLogoImg, FooterSubscribe, FooterTop, FooterTopPhoto } from "./styles";
import { Container, GlobalParagraph, WelcomeMainText } from "../../global_styles/styles";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { getAccountSubscribe } from "../../redux/slices/accountSlice";
import { enqueueSnackbar } from "notistack";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
    const {t} = useTranslation()
    const [email, setEmail] = React.useState('');
    const dispatch: AppDispatch = useDispatch()

    function accountSubscribe () {
        dispatch(getAccountSubscribe({email: email}))
        setEmail("")
        enqueueSnackbar(`Rahmat sizga so'rovingiz qabul qilindi!`, {
            variant: "success"
          })
    }

    return (
        <FooterBox>
            <Container>
                <Box position='relative'>
                    <FooterTop>
                        <FooterSubscribe>
                            <WelcomeMainText mediafontsize="24px" fontSize="44px" paddingbottom="24px" part="true">
                                {t("Subscribe")} <br /> {t("Newsletter")}
                            </WelcomeMainText>
                            <GlobalParagraph oposity="0.8" fontSize="20px" fontWeight="700" paddingbottom="8px">
                                {t("The Travel")}
                            </GlobalParagraph>
                            <GlobalParagraph fontSize="16px" fontWeight="500" paddingbottom="16px" oposity="0.7">
                                {t("Get inspired! Receive travel discounts, tips and behind the scenes stories.")}
                            </GlobalParagraph>
                            <Box>
                                <TextField id="outlined-basic" type="email" label="Your email address" 
                                    value={email}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                      setEmail(event.target.value);
                                    }}
                                variant="outlined" sx={{
                                    background: "#fff",
                                    border: "none",
                                    borderRadius: "4px",
                                    width: {xl: "450px", md: "450px", sm: "250px", xs: "100%"},
                                }}/>
                                <Button onClick={accountSubscribe}  variant="contained" sx={{
                                    color: "#fff",
                                    background: "#000", 
                                    marginLeft: {xl: "24px", md: "24px", sm: "24px", xs: 0},
                                    mt: {xl: 0, md: 0, sm: 0, xs: "24px"},
                                    width: {xl: "auto", md: "auto", sm: "auto", xs: "100%"},
                                    height: "56px"
                                }}>
                                    {t("Subscribe")}
                                </Button>
                            </Box>
                        </FooterSubscribe>
                        <FooterTopPhoto>
                            <img src={FooterPhoto} alt="Email" />
                        </FooterTopPhoto>
                    </FooterTop>
                </Box>
                <Box pb="52px" pt="24px">
                    <FooterBottom>
                        <FooterLogo>
                            <FooterLogoImg>
                                <img src={logoFooter} alt="" />
                            </FooterLogoImg>
                            <Stack direction="row" ml={-1} spacing={0}>
                                <IconButton >
                                    <FacebookIcon fontSize="small" sx={{color: '#112211'}} />
                                </IconButton>
                                <IconButton   >
                                    <TwitterIcon fontSize="small" sx={{color: '#112211'}} />
                                </IconButton>
                                <IconButton >
                                    <YouTubeIcon fontSize="small" sx={{color: '#112211'}} />
                                </IconButton>
                                <IconButton >
                                    <InstagramIcon fontSize="small" sx={{color: '#112211'}} />
                                </IconButton>
                                </Stack>
                        </FooterLogo>  
                        <FooterLink>
                            <GlobalParagraph fontSize="16px" fontWeight="700" paddingbottom="16px">
                                {t("Our Activities")}
                            </GlobalParagraph>
                            <ul typeof="none">
                                <li>
                                    <FooterList><Link to="/protected">{t("Trip Advisor")}</Link></FooterList>
                                </li>
                                <li>
                                    <FooterList><Link to="/my-driver">{t("My Driver")}</Link></FooterList>
                                </li>
                                <li>
                                    <FooterList><Link to="/consulting">{t("Consulting")}</Link></FooterList>
                                </li>
                                <li>
                                    <FooterList><Link to="/history">{t("History")}</Link></FooterList>
                                </li>
                            </ul>
                        </FooterLink> 
                        <FooterLink>
                            <GlobalParagraph fontSize="16px" fontWeight="700" paddingbottom="16px">
                                {t("Trips")}
                            </GlobalParagraph>
                            <ul typeof="none">
                            <li>
                                    <FooterList><Link to="/protected/daily">{t("Daily")}</Link></FooterList>
                                </li>
                                <li>
                                    <FooterList><Link to="/protected/hotel">{t("Hotel")}</Link></FooterList>
                                </li>
                                <li>
                                    <FooterList><Link to="/protected/ticket">{t("Ticket")}</Link></FooterList>
                                </li>
                                <li>
                                    <FooterList><Link to="/protected/restaurant">{t("Restaurant")}</Link></FooterList>
                                </li>
                                <li>
                                    <FooterList><Link to="/protected/drive">{t("Driver")}</Link></FooterList>
                                </li>
                                <li>
                                    <FooterList><Link to="/protected/plan">{t("Plan")}</Link></FooterList>
                                </li>
                            </ul>
                        </FooterLink>  
                    </FooterBottom>   
                </Box>
            </Container>
        </FooterBox>
    );
};

export default Footer;
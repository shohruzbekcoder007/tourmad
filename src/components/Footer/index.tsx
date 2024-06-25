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

const Footer: React.FC = () => {
    return (
        <FooterBox>
            <Container>
                <Box position='relative'>
                    <FooterTop>
                        <FooterSubscribe>
                            <WelcomeMainText mediafontsize="24px" fontSize="44px" paddingbottom="24px" part="true">
                                Subscribe <br /> Newsletter
                            </WelcomeMainText>
                            <GlobalParagraph oposity="0.8" fontSize="20px" fontWeight="700" paddingbottom="8px">
                                The Travel
                            </GlobalParagraph>
                            <GlobalParagraph fontSize="16px" fontWeight="500" paddingbottom="16px" oposity="0.7">
                                Get inspired! Receive travel discounts, tips and behind the scenes stories.
                            </GlobalParagraph>
                            <Box>
                                <TextField id="outlined-basic" label="Your email address" variant="outlined" sx={{
                                    background: "#fff",
                                    border: "none",
                                    borderRadius: "4px",
                                    width: {xl: "450px", md: "450px", sm: "250px", xs: "100%"},
                                }}/>
                                <Button  variant="contained" sx={{
                                    color: "#fff",
                                    background: "#000", 
                                    marginLeft: {xl: "24px", md: "24px", sm: "24px", xs: 0},
                                    mt: {xl: 0, md: 0, sm: 0, xs: "24px"},
                                    width: {xl: "auto", md: "auto", sm: "auto", xs: "100%"},
                                    height: "56px"
                                }}>
                                    Subscribe
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
                                Our Destinations
                            </GlobalParagraph>
                            <ul typeof="none">
                                <li>
                                    <FooterList>Canada</FooterList>
                                </li>
                                <li>
                                    <FooterList>Alaksa</FooterList>
                                </li>
                                <li>
                                    <FooterList>France</FooterList>
                                </li>
                                <li>
                                    <FooterList>Iceland</FooterList>
                                </li>
                            </ul>
                        </FooterLink>  
                        <FooterLink>
                            <GlobalParagraph fontSize="16px" fontWeight="700" paddingbottom="16px">
                                Our Activities
                            </GlobalParagraph>
                            <ul typeof="none">
                                <li>
                                    <FooterList>Northern Lights</FooterList>
                                </li>
                                <li>
                                    <FooterList>Cruising & sailing</FooterList>
                                </li>
                                <li>
                                    <FooterList>Multi-activities</FooterList>
                                </li>
                                <li>
                                    <FooterList>Kayaing</FooterList>
                                </li>
                            </ul>
                        </FooterLink>
                        <FooterLink>
                            <GlobalParagraph fontSize="16px" fontWeight="700" paddingbottom="16px">
                                Travel Blogs
                            </GlobalParagraph>
                            <ul typeof="none">
                                <li>
                                    <FooterList>Bali Travel Guide</FooterList>
                                </li>
                                <li>
                                    <FooterList>Sri Lanks Travel Guide</FooterList>
                                </li>
                                <li>
                                    <FooterList>Peru Travel Guide</FooterList>
                                </li>
                                <li>
                                    <FooterList>Bali Travel Guide</FooterList>
                                </li>
                            </ul>
                        </FooterLink>
                        <FooterLink>
                            <GlobalParagraph fontSize="16px" fontWeight="700" paddingbottom="16px">
                                About Us
                            </GlobalParagraph>
                            <ul typeof="none">
                                <li>
                                    <FooterList>Our Story</FooterList>
                                </li>
                                <li>
                                    <FooterList>Work with us</FooterList>
                                </li>
                            </ul>
                        </FooterLink>
                        <FooterLink>
                            <GlobalParagraph fontSize="16px" fontWeight="700" paddingbottom="16px">
                                Contact Us
                            </GlobalParagraph>
                            <ul typeof="none">
                                <li>
                                    <FooterList>Our Story</FooterList>
                                </li>
                                <li>
                                    <FooterList>Work with us</FooterList>
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
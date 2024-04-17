import { Box, Stack, IconButton, TextField, Button } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FooterPhoto from './../../media/images/FooterPhoto.png'
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
                                    width: {xl: "450px", md: "450px", sm: "250px", xs: "250px"},
                                    height: "56px",
                                }}/>
                                <Button variant="contained" sx={{
                                    color: "#fff",
                                    background: "#000", 
                                    marginLeft: "24px",
                                    height: "56px",
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
                <Box pb="52px">
                    <FooterBottom>
                        <FooterLogo>
                            <FooterLogoImg>
                                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.0157 6.06421L19.5155 8.70821L17.3775 11.4284C18.8536 13.0987 19.3976 15.0046 19.3976 17.1046C19.3976 19.4748 18.5037 22.8188 15.3539 24.2569C18.5418 25.8509 19.318 28.1449 19.318 30.5948C19.318 35.8828 15.2742 39.1471 9.71615 39.1471C4.15812 39.1471 0 35.765 0 30.5948H4.70215C4.70215 33.0829 6.99604 34.715 9.71615 34.715C12.4363 34.715 14.5742 33.2388 14.5742 30.5948C14.5742 27.9508 12.0863 26.7449 9.71615 26.7449C3.73192 26.7449 0 23.0925 0 17.1046C0 11.1166 4.35217 7.38448 9.71961 7.38448C11.2373 7.38448 12.7897 7.57853 14.1134 8.47257L16.0157 6.06421ZM4.70215 17.1046C4.70215 20.4485 6.95793 22.4307 9.71615 22.4307C12.4363 22.4307 14.692 20.4104 14.692 17.1046C14.692 13.7987 12.4397 11.7022 9.71961 11.7022C6.95793 11.7022 4.70215 13.7606 4.70215 17.1046Z" fill="#112211"/>
                                <path d="M54.9873 0V27.1746H50.2852V0H54.9873Z" fill="#112211"/>
                                <path d="M76.1175 17.6105C76.1175 23.1307 72.3474 27.6008 66.1276 27.6008C59.9077 27.6008 56.1758 23.1307 56.1758 17.6105C56.1758 12.1284 59.9839 7.62012 66.0894 7.62012C72.195 7.62012 76.1175 12.1284 76.1175 17.6105ZM60.916 17.6105C60.916 20.5248 62.6659 23.2485 66.1241 23.2485C69.5823 23.2485 71.3321 20.5282 71.3321 17.6105C71.3321 14.7343 69.312 11.9344 66.1241 11.9344C62.704 11.9344 60.916 14.7343 60.916 17.6105Z" fill="#112211"/>
                                <path d="M82.0465 0V10.6141C83.1726 8.63198 86.3224 7.54389 88.3426 7.54389C93.9387 7.54389 98.1003 10.9641 98.1003 17.5724C98.1003 23.8688 93.8625 27.6009 88.2282 27.6009C85.8962 27.6009 83.5261 26.8246 82.0465 24.5306L81.7346 27.1746H77.3027V0H82.0465ZM82.3549 17.5724C82.3549 21.0307 84.919 23.2104 87.9129 23.2104C90.9448 23.2104 93.3566 20.9163 93.3566 17.5724C93.3566 14.114 90.9448 11.976 87.9129 11.976C84.9225 11.9725 82.3549 14.2284 82.3549 17.5724Z" fill="#112211"/>
                                <path d="M105.152 20.9129C106.254 23.0336 108.776 23.9381 111.919 22.7945C113.561 22.195 115.492 20.7916 116.129 19.3604L120.003 21.1347C118.821 23.7994 116.063 25.8786 113.322 26.8766C107.113 29.136 102.026 26.6444 99.9263 20.8713C97.9304 15.3927 100.221 10.0908 106.066 7.96318C112.092 5.76966 117.214 8.12604 119.216 15.7947L105.152 20.9129ZM113.6 13.6601C112.456 11.4284 110.204 10.926 107.647 11.8547C105.235 12.7314 103.689 14.62 103.883 17.1946L113.6 13.6601Z" fill="#112211"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M43.2386 13.0379C41.7013 9.83054 38.4964 7.62012 34.2213 7.62012C28.1158 7.62012 24.3076 12.1284 24.3076 17.6105C24.3076 21.1103 25.8077 24.1881 28.491 25.9722C28.6439 25.8578 28.7359 25.7835 28.7359 25.7835C30.0743 24.9103 31.3799 23.991 32.6506 23.0277C30.2567 22.3233 29.0479 20.0327 29.0479 17.6105C29.0479 14.7343 30.8393 11.9344 34.2559 11.9344C37.2647 11.9344 39.2333 14.4285 39.445 17.1269C40.7639 15.818 42.0295 14.454 43.2386 13.0379ZM33.7754 27.5917C37.5614 24.9081 41.0621 21.8426 44.2201 18.4459C43.8586 23.5747 40.1622 27.6008 34.2594 27.6008C34.0963 27.6008 33.935 27.5978 33.7754 27.5917Z" fill="white"/>
                                <path d="M47.1044 4.93457C42.2601 3.15342 38.7777 6.986 38.7777 6.986L42.08 8.90576C43.317 8.19538 43.868 8.88497 44.01 9.26268C44.1105 9.52951 43.9754 9.82059 43.868 9.97999L43.064 10.9953C38.7257 16.2279 33.6251 20.7743 27.9319 24.4891C27.9319 24.4891 26.2133 25.8752 25.2985 25.896C24.5292 25.9133 24.1862 25.2653 24.8341 24.3366L23.2402 20.7396C23.2402 20.7396 19.0925 23.4564 19.8964 28.2316C20.2359 30.2483 22.1314 31.683 24.1446 31.3191C25.1737 31.1354 26.4454 30.633 28.0012 29.6038L30.8634 27.7326C36.5566 24.0109 41.6607 19.4506 45.9955 14.2111L46.9796 13.0225C48.4627 11.3349 49.128 9.94534 49.3532 8.84685C49.6997 7.1662 48.7052 5.52366 47.1044 4.93457Z" fill="white"/>
                                </svg>
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
import { Box } from "@mui/material";
import React from "react";
import { FooterBottom, FooterBox, FooterLink, FooterLogo } from "./styles";
import { Container, GlobalParagraph } from "../../global_styles/styles";

const Footer: React.FC = () => {
    return (
        <FooterBox>
            <Container>
                <Box pb="64px">
                    <FooterBottom>
                        <FooterLogo>
                            Logo
                        </FooterLogo>
                        <FooterLink>
                            <GlobalParagraph fontSize="16px" fontWeight="700" paddingbottom="16px">
                                Our Destinations
                            </GlobalParagraph>
                        </FooterLink>  
                        <FooterLink>
                            <GlobalParagraph fontSize="16px" fontWeight="700" paddingbottom="16px">
                                Our Activities
                            </GlobalParagraph>
                        </FooterLink>
                        <FooterLink>
                            <GlobalParagraph fontSize="16px" fontWeight="700" paddingbottom="16px">
                                Travel Blogs
                            </GlobalParagraph>
                        </FooterLink>
                        <FooterLink>
                            <GlobalParagraph fontSize="16px" fontWeight="700" paddingbottom="16px">
                                About Us
                            </GlobalParagraph>
                        </FooterLink>
                        <FooterLink>
                            <GlobalParagraph fontSize="16px" fontWeight="700" paddingbottom="16px">
                                Contact Us
                            </GlobalParagraph>
                        </FooterLink>  
                    </FooterBottom>   
                </Box>
            </Container>
        </FooterBox>
    );
};

export default Footer;
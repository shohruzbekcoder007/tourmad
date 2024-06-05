import React, { useEffect, useState } from "react";
import { Container, WelcomeMainText } from "../../global_styles/styles";
import { AuthUserInfo, ConsultingBanner, ConsultingCards, ConsultingSearch, CunsultingPlanCategory, Footer, Header, ProtectedLinks } from "../../components";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Box, Button } from "@mui/material";
import { HeaderWrapper } from "../../components/Header/styles";
const Consulting: React.FC = () => {
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
        <>
        <HeaderWrapper>
            <Container>
                <Header logo={require("../../media/images/logo2.png")} type="dark" auth={<AuthUserInfo />} />
                {
                    topNavbar && <ProtectedLinks />
                }
            </Container>
        </HeaderWrapper>
            <ConsultingBanner bgimage='https://media.istockphoto.com/id/1213916289/photo/ancient-city-walls-of-khiva-uzbekistan-in-sunset-twilight.jpg?s=612x612&w=0&k=20&c=Ey6m_BCjsI1PsO7WzZYouN0dQPMJKKrsKydm5OX0E44=' heightprops="400px"
                bannersubtitle="consulting" bannertitle="consulting" />
            <Container>
                <Box pt="40px" display="flex" justifyContent="space-between">
                    <WelcomeMainText fontSize="32px" mediafontsize="18px" texttransform="capitalize" part="true">Consulting</WelcomeMainText>
                    <Button variant="outlined"><KeyboardBackspaceIcon /></Button>
                </Box>
                <ConsultingSearch />
            </Container>
            <CunsultingPlanCategory />
            <Container>
                <ConsultingCards />
            </Container>
            <Footer />
        </>
    )
}
export default Consulting
import React, { useEffect, useState } from "react";
import { Container, WelcomeMainText } from "../../global_styles/styles";
import { AuthUserInfo, ConsultingCards, ConsultingSearch, CunsultingPlanCategory, Footer, Header, ProtectedLinks } from "../../components";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Box, Button } from "@mui/material";
import { HeaderWrapper } from "../../components/Header/styles";
import BannerMain from "../../components/BannerMain";
import consultingbannerimage from '../../media/images/consulting-banner.jpeg'
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Consulting: React.FC = () => {
    const {t} = useTranslation()
    const [topNavbar, setTopNavbar] = useState<boolean>(false);
    const navigate = useNavigate()
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
            <BannerMain bgimage={consultingbannerimage} heightprops="400px"
                bannersubtitle={t("Turizm Biznesingizni Rivojlantirishda Bizning Konsalting Xizmatlarimizdan Foydalaning")} bannertitle={t("Turizm Konsalting Xizmatlari")} />
            <Container>
                <Box pt="40px" display="flex" justifyContent="space-between">
                    <WelcomeMainText fontSize="32px" mediafontsize="18px" texttransform="capitalize" part="true">{t("Consulting")}</WelcomeMainText>
                    <Button variant="outlined" onClick={() => navigate(-1)}><KeyboardBackspaceIcon /></Button>
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
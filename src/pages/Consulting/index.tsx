import React from "react";
import { Container } from "../../global_styles/styles";
import { AuthUserInfo, ConsultingBanner, ConsultingCards, ConsultingSearch, CunsultingPlanCategory, Footer, Header } from "../../components";
const Consulting: React.FC = () => {

    return (
        <>
            <Container>
                <Header logo={require("../../media/images/logo2.png")} type="dark" auth={<AuthUserInfo />} />
            </Container>
            <ConsultingBanner bgimage='https://media.istockphoto.com/id/1213916289/photo/ancient-city-walls-of-khiva-uzbekistan-in-sunset-twilight.jpg?s=612x612&w=0&k=20&c=Ey6m_BCjsI1PsO7WzZYouN0dQPMJKKrsKydm5OX0E44=' heightprops="400px"
                bannersubtitle="consulting" bannertitle="consulting" />
            <Container>
                <ConsultingSearch />
            </Container>
            <CunsultingPlanCategory />
            <Container>
                <ConsultingCards />
            </Container>
            <Footer/>
        </>
    )
}
export default Consulting
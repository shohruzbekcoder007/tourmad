import React, { useEffect, useState } from 'react'
import { Container} from '../../global_styles/styles'
import { HeaderWrapper } from '../Protected/styles';
import { AuthUserInfo, Footer, Header, HistoryService, ProtectedLinks } from '../../components';
import BannerMain from '../../components/BannerMain';
import banner_photo from './../../media/images/Samarkand_registan.jpg';
import { Box } from '@mui/material';

const History: React.FC = () => {
    const [topNavbar, setTopNavbar] = useState<boolean>(false);
    useEffect(() => {
        const handleScroll = () => {
          if(window.scrollY <= 400){
            setTopNavbar(false)
          }else if (window.scrollY >= 450){
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
            <BannerMain bgimage={banner_photo} heightprops='400px'
                bannersubtitle='Hitory' bannertitle='Hitory.' />
            <Container>
                <HistoryService />
            </Container>
            <Box
                paddingTop="170px"
            >
                <Footer />
            </Box>

            
        </>
    )
}

export default History
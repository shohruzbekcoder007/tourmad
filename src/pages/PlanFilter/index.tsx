import React, { useEffect, useState } from 'react'
import { AuthUserInfo, Footer, Header, PlanFilters, ProtectedLinks } from '../../components'
import { Box, Container } from '@mui/material'
import { HeaderWrapper } from './styles';

const PlanFilter: React.FC = () => {
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
            <Container>
                <PlanFilters />
            </Container>
            <Box
                paddingTop="170px"
            >
                <Footer />
            </Box>
        </>
    )
}

export default PlanFilter
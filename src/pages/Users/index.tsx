import React, { useEffect, useState } from 'react'
import { FavouritesUser, Footer, Header, ProtectedLinks } from '../../components'
import { Box, Container } from '@mui/material'
import { HeaderWrapper } from '../Protected/styles'
import UsersBanner from '../../components/UserBanner'
import UserTabs from '../../components/UserTabs'

const Users: React.FC = () => {
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
                    <Header logo={require("../../media/images/logo2.png")} type="dark" auth={<FavouritesUser />} />
                    {
                        topNavbar && <ProtectedLinks />
                    }
                </Container>
            </HeaderWrapper>
            <Container>
                <UsersBanner />
                <UserTabs />
            </Container>
            <Box
                paddingTop="170px"
            >
                <Footer />
            </Box>
        </>
    )
}

export default Users
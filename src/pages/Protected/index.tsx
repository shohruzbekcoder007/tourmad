import React from 'react'
import { FavouritesUser, Footer, Header } from '../../components'
import { Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { HeaderWrapper } from './styles'

const Protected: React.FC = () => {
    return (
        <>
            <HeaderWrapper>
                <Container>
                    <Header logo={require("../../media/images/logo2.png")} type="dark" auth={<FavouritesUser/>} />
                </Container>
            </HeaderWrapper>
            {/* <Box
                margin="30px 0 0 0"
            >
                <ServicesLinkForAllPages/>
            </Box> */}
            <Outlet/>
            <Box
                paddingTop="170px"
            >
                <Footer />
            </Box>
        </>
    )
}

export default Protected
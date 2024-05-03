import React from 'react'
import { Footer, Header } from '../../components'
import { Box, Container, Paper } from '@mui/material'
import { Outlet } from 'react-router-dom'

const Protected: React.FC = () => {
    return (
        <>
            <Paper>
                <Container>
                    <Header logo={require("../../media/images/logo2.png")} type="dark" auth={<p>salom</p>} />
                </Container>
            </Paper>
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
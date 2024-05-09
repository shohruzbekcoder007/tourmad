import React from 'react'
import { Box } from '@mui/material'
import ServicesLinkForAllPages from './ServicesLinkForAllPages'


const ServicesLink: React.FC = () => {
    return (
        <Box
            sx={{ transform: 'translateY(-60px)' }}
        >
            <ServicesLinkForAllPages/>
        </Box>


    )
}

export default ServicesLink
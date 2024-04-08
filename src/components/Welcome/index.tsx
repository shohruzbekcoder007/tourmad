import { Box } from '@mui/material'
import React from 'react'
import welcome_bg from './../../media/images/welcome.png'
import Header from '../Header'

const  Welcome: React.FC = () => {
  return (
    <Box
        padding="30px"
    >
        <Box
            borderRadius="24px"
            sx={{
                backgroundImage: `url(${welcome_bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <Box
                padding="0 32px"
            >
                <Header/>
            </Box>
        </Box>
    </Box>
  )
}

export default Welcome
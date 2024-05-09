import { Box } from '@mui/material'
import React from 'react'

type PageWelcomeProps = {
    children: React.ReactNode
}

const PageWelcome: React.FC<PageWelcomeProps> = ({children}) => {
    return (
        <Box
            height="400px"
            width="100%"
            position="relative"
            sx={{
                "& img": {
                    display: "inline-block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }
            }}
        >
            {children}
        </Box>
    )
}

export default PageWelcome
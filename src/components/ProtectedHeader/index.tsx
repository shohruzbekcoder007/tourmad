import React from 'react'
import { PageWelcome, ServicesLinkForAllPages } from '../../components'
import { Box } from '@mui/material'

type ProtectedHeaderProps = {
    children: React.ReactNode
}

const ProtectedHeader: React.FC<ProtectedHeaderProps> = ({ children }) => {
    return (
        <>
            <PageWelcome>
                {children}
            </PageWelcome>
            <Box
                sx={{
                    transform: "translateY(-60px)",
                    marginBottom: "-30px"
                }}
            >
                <ServicesLinkForAllPages />
            </Box>
        </>
    )
}

export default ProtectedHeader
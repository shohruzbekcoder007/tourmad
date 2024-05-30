import { Box } from '@mui/material'
import React from 'react'
import { SubLink } from './styles'
import { sublink } from './types'

let items: sublink[] = [
    {
        name: "Hotel",
        to: "hotel"
    },
    {
        name: "Ticket",
        to: "ticket"
    },
    {
        name: "Restaurant",
        to: "restaurant"
    },
    {
        name: "Drive",
        to: "drive"
    },
    {
        name: "Plan",
        to: "plan"
    }
];

const ProtectedLinks: React.FC = () => {
    return (
        <Box display={{xl: 'block', md: "block", sm: "none", xs: "none"}}>
            <Box
                display="flex"
                justifyContent="flex-start"
                flexWrap="wrap"
            >
                {
                    items.map((item, index) => (
                        <>
                            <SubLink
                                key={index}
                                to={item.to}
                                className={(navData) => (navData.isActive ? 'active' : '')}
                            >
                                {item.name}
                            </SubLink>
                        </>
                        
                    ))
                }
            </Box>
        </Box>
    )
}

export default ProtectedLinks
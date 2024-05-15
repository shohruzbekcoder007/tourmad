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
        <Box>
            <Box
                display="flex"
                justifyContent="flex-start"
            >
                {
                    items.map((item, index) => (
                        <SubLink
                            key={index}
                            to={item.to} 
                            isActive={(window.location.pathname === `/protected/${item.to}`)}
                        >
                            {item.name}
                        </SubLink>
                    ))
                }
            </Box>
        </Box>
    )
}

export default ProtectedLinks
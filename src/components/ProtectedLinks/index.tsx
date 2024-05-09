import { Box } from '@mui/material'
import React from 'react'
import { SubLink } from './styles'
import { sublink } from './types'

let items: sublink[] = [
    {
        name: "hotel",
        to: "hotel"
    },
    {
        name: "ticket",
        to: "ticket"
    },
    {
        name: "restaurant",
        to: "restaurant"
    },
    {
        name: "drive",
        to: "drive"
    },
    {
        name: "plan",
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
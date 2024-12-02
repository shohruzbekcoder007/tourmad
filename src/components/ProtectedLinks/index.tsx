import { Box } from '@mui/material'
import React from 'react'
import { SubLink } from './styles'
import { sublink } from './types'
import { useTranslation } from 'react-i18next';

let items: sublink[] = [
    {
        name: "Daily",
        to: "daily"
    },
    {
        name: "Hotel",
        to: "hotel"
    },
    {
        name: "Trip",
        to: "trip"
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
    },
    {
        name: "Map",
        to: "map"
    }
];

const ProtectedLinks: React.FC = () => {
    const {t} = useTranslation()
    return (
        <Box display={{xl: 'block', md: "block", sm: "none", xs: "none"}}>
            <Box
                display="flex"
                justifyContent="flex-start"
                flexWrap="wrap"
            >
                {
                    items.map((item, index) => (
                        <SubLink
                            key={index}
                            to={`/protected/${item.to}`}
                            className={(navData) => (navData.isActive ? 'active' : '')}
                        >
                            {t(`${item.name}`)}
                        </SubLink>
                    ))
                }
            </Box>
        </Box>
    )
}

export default ProtectedLinks
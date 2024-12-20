import React from 'react'
import { NavLink } from 'react-router-dom'
import Chip from '@mui/material/Chip'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import HotelIcon from '@mui/icons-material/Hotel'
import LuggageIcon from '@mui/icons-material/Luggage';
import GiteIcon from '@mui/icons-material/Gite';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'
import { ServicesLinks } from './styles'
import { sublink } from './types'
import { Container } from '../../global_styles/styles'
import { Paper } from '@mui/material'
import MapIcon from '@mui/icons-material/Map';
import { useTranslation } from 'react-i18next'

let items: sublink[] = [
    {
        name: "Daily",
        to: "daily",
        iconc: <GiteIcon />
    },
    {
        name: "Hotel",
        to: "hotel",
        iconc: <HotelIcon />
    },
    {
        name: "Trip",
        to: "trip",
        iconc: <LuggageIcon />
    },
    {
        name: "Ticket",
        to: "ticket",
        iconc: <FlightTakeoffIcon />
    },
    {
        name: "Restaurant",
        to: "restaurant",
        iconc: <RestaurantMenuIcon />
    },
    {
        name: "Drive",
        to: "drive",
        iconc: <LocalTaxiIcon />
    },
    {
        name: "Plan",
        to: "plan",
        iconc: <BookmarkAddIcon />
    },
    {
        name: "Map",
        to: "map",
        iconc: <MapIcon />
    }
];

const ServicesLinkForAllPages: React.FC = () => {
    const {t} = useTranslation()

    return (
            <Container>
                <Paper
                    elevation={0}
                    sx={{
                        boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
                        borderRadius: "16px",
                        padding: "32px",
                        display: {xl: "block", md: "block", sm: "none", xs: "none"}
                    }}
                >
                    <ServicesLinks>
                        {items.map((item, index) => (
                            <NavLink
                                
                                key={index}
                                to={`/protected/${item.to}`}
                                style={{ textDecoration: 'none' }}
                            >
                                {
                                    window.location.pathname === `/protected/${item.to}` ?
                                        <Chip color='primary' sx={{
                                            width: "120px",
                                            height: "40px",
                                        }}
                                            icon={item.iconc}
                                            label={t(`${item.name}`)}
                                        />:
                                        <Chip color='primary' sx={{
                                            width: "120px",
                                            height: "40px"
                                        }}
                                            icon={item.iconc}
                                            label={t(`${item.name}`)}
                                            variant='outlined'
                                        /> 
                                }
                            </NavLink>

                        ))}
                    </ServicesLinks>
                </Paper>
            </Container>
    )
}

export default ServicesLinkForAllPages
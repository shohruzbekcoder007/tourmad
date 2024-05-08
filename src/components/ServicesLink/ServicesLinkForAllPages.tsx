import React from 'react'
import { NavLink } from 'react-router-dom'
import Chip from '@mui/material/Chip'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import HotelIcon from '@mui/icons-material/Hotel'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd'
import { ServicesLinks } from './styles'
import { sublink } from './types'
import { Container } from '../../global_styles/styles'
import { Paper } from '@mui/material'

let items: sublink[] = [
    {
        name: "hotel",
        to: "/hotel",
        iconc: <HotelIcon />
    },
    {
        name: "ticket",
        to: "/",
        iconc: <FlightTakeoffIcon />
    },
    {
        name: "restaurant",
        to: "/",
        iconc: <RestaurantMenuIcon />
    },
    {
        name: "drive",
        to: "/",
        iconc: <LocalTaxiIcon />
    },
    {
        name: "plan",
        to: "/",
        iconc: <BookmarkAddIcon />
    }
];

const ServicesLinkForAllPages: React.FC = () => {

    return (
            <Container>
                <Paper
                    elevation={0}
                    sx={{
                        boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
                        borderRadius: "16px",
                        padding: "32px"
                    }}
                >
                    <ServicesLinks>
                        {items.map((item, index) => (
                            <NavLink
                                key={index}
                                to={`/`}
                                style={{ textDecoration: 'none' }}
                            >
                                {
                                    window.location.pathname === item.to ?
                                        <Chip
                                            icon={item.iconc}
                                            label={item.name}
                                            variant='outlined'
                                        /> :
                                        <Chip
                                            icon={item.iconc}
                                            label={item.name}
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
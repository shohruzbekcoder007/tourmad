import React from 'react'
import Banner from '../Banner'
import { Stack } from '@mui/material'
import banner_photo from './../../media/images/banner-hotel.jpg'
import TicketTable from '../TicketTable'
import ResentSearch from '../ResentSearch'
import { Container } from '../../global_styles/styles'
import IntoTravel from '../IntoTravel'

const Hotel : React.FC = () => {
  return (
    <Stack>
        <Banner heightprops='537px' bgimage={banner_photo} 
        bannersubtitle='Special offers to suit your plan' 
        bannertitle='Make your travel whishlist, we’ll do the rest' />
        <TicketTable />
        <Container>
            <ResentSearch />
            <IntoTravel />
        </Container>
    </Stack>
  )
}

export default Hotel
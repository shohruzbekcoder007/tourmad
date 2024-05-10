import React from 'react'
import { Container } from '../../global_styles/styles'
import Banner from '../../components/Banner'
import banner_photo from './../../media/images/banner-flight.jpg'
import { TravelFilters } from '../../components'

const Ticket: React.FC = () => {
    return (
        <>
            <Banner bgimage={banner_photo} heightprops='400px'
            bannertitle='Make your travel whishlist, we’ll do the rest'
            bannersubtitle='Special offers to suit your plan'/>
            <Container>
                <TravelFilters />
            </Container>
        </>
    )
}

export default Ticket
import React from 'react'
import { Container } from '../../global_styles/styles'
import Banner from '../../components/Banner'
import ResentSearch from '../../components/ResentSearch'
import IntoTravel from '../../components/IntoTravel'
import banner_photo from './../../media/images/banner-hotel.jpg'

const Hotel: React.FC = () => {
    return (
        <>
            <Banner heightprops='400px' 
            bgimage={banner_photo} 
            bannertitle='Make your travel whishlist, we’ll do the rest'
            bannersubtitle='Special offers to suit your plan'/>
            <Container>
                <ResentSearch />
                <IntoTravel />
            </Container>
        </>
    )
}

export default Hotel
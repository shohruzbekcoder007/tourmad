import React from 'react'
import { Container } from '../../global_styles/styles'
import Banner from '../../components/Banner'
import banner_photo from './../../media/images/banner-drive.webp'
import DriverCard from '../../components/DriverCard'
import ResentSearch from '../../components/ResentSearch'

const Drive: React.FC = () => {
    return (
        <>
            <Banner bgimage={banner_photo} heightprops='400px' 
            bannersubtitle='Special offers to suit your plan' bannertitle='Smart, polite, courteous drivers for customers'/>
            <Container>
                <ResentSearch />    
                <DriverCard />
            </Container>
        </>
    )
}

export default Drive
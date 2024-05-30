import React from 'react'
import { Container } from '../../global_styles/styles'
import Banner from '../../components/Banner'
import ResentSearch from '../../components/ResentSearch'
import IntoTravel from '../../components/IntoTravel'

const Restaurant: React.FC = () => {
  return (
    <>
            <Banner heightprops='400px' bgimage={require('./../../media/images/restaurant.jpg')}
            bannersubtitle='Make your travel whishlist, we’ll do the rest'
            bannertitle='Special offers to suit your plan' />
            <Container>
                <ResentSearch />
                <IntoTravel data={null}/>
            </Container>
        </>
  )
}

export default Restaurant
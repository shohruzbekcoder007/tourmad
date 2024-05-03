import React from 'react'
import { Container } from '../../global_styles/styles'
import { TravelFilters as TravelFiltersComponent } from '../../components'

const TravelFilters: React.FC = () => {
  return (
    <Container>
        <TravelFiltersComponent/>
    </Container>
  )
}

export default TravelFilters
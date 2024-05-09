import React from 'react'
import { Container } from '../../global_styles/styles'
import { FlightDetail as FlightDetailComponent } from '../../components'

const FlightDetail: React.FC = () => {
  return (
    <Container>
        <FlightDetailComponent/>
    </Container>
  )
}

export default FlightDetail
import React from 'react'
import { Container } from '../../global_styles/styles'
import ProtectedHeader from '../../components/ProtectedHeader'

const Ticket: React.FC = () => {
  return (
    <>
            <ProtectedHeader>
                <img src={require('./../../media/images/plan.jpg')} alt="hotel welcome" />
            </ProtectedHeader>
            <Container>
                <p>Ticket</p>
                {
                    [1,2,3,4,5,6,7,8,9,10].map((_, index) => (
                        <p key={index}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit et rerum velit quam unde tempora, praesentium modi a voluptate nam voluptates aspernatur corrupti odio minima, dolorem neque qui illo error!</p>
                    ))
                }
            </Container>
        </>
  )
}

export default Ticket
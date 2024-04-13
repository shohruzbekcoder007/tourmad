import { Paper } from '@mui/material'
import React from 'react'
import { Container } from '../../global_styles/styles'
import Header from '../Header'

const TicketTable: React.FC = () => {
  return (
    <Container>
        <Paper 
            elevation={0}
            sx={{
                boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
                borderRadius: "16px",
                padding: "16px 32px 32px 32px"
            }}
        >
            <Header logo={false}/>
        </Paper>
    </Container>
  )
}

export default TicketTable
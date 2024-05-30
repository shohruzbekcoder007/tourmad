import { Box, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Container } from '../../global_styles/styles'
import Header from '../Header'
import { CustomAutocomplete } from '../../helper_components'
import { HotelRecommendationType } from '../../utils/response_types'

type Option = {
  label: string,
  value: string
}

type TicketTablePropsType = {
  data:  HotelRecommendationType[] | null
}

const TicketTable: React.FC<TicketTablePropsType> = ({data}) => {

  const [from, setFrom] = useState<Option | null>(null)
  const [depart, setDepart] = useState<Option | null>(null)

  const options: Option[] = [
    { label: 'The Shawshank Redemption', value: "1994" },
    { label: 'The Godfather', value: "1972" },
    { label: 'The Godfather: Part II', value: "1974" },
    { label: 'The Dark Knight', value: "2008" },
    { label: '12 Angry Men', value: "1957" },
    { label: "Schindler's List", value: "1993" },
    { label: 'Pulp Fiction', value: "1994" },
  ]


  useEffect(() => {}, [from, depart]) //for error fixed

  const getChangeOptionFrom = (newValue: Option | null) => {
    setFrom(newValue)
  }

  const getChangeOptionDepart = (newValue: Option | null) => {
    setDepart(newValue)
  }

  return (
    <Container>
      <Paper
        elevation={0}
        sx={{
          boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
          borderRadius: "16px",
          padding: "16px 32px 32px 32px",
          transform: 'translateY(-80px)'
        }}
      >
        <Box paddingBottom="30px">
          <Header logo={false} type="dark" divider={true} />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="24px"
          flexWrap="wrap"
        >

          <Box width='300px'>
            <CustomAutocomplete
              options={options}
              placeholder="From - To"
              getChange={getChangeOptionFrom}
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g id="ion:swap-horizontal">
                  <path id="Vector" d="M14.25 2.25L19.5 7.5L14.25 12.75M18.697 7.5H4.5M9.75 21.75L4.5 16.5L9.75 11.25M5.34375 16.5H19.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>}
            />
          </Box>

          <Box width='300px'>
            <CustomAutocomplete
              options={options}
              placeholder="From - To"
              getChange={getChangeOptionDepart}
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g id="ion:swap-horizontal">
                  <path id="Vector" d="M14.25 2.25L19.5 7.5L14.25 12.75M18.697 7.5H4.5M9.75 21.75L4.5 16.5L9.75 11.25M5.34375 16.5H19.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>}
            />
          </Box>

          <Box width='300px'  >
            <CustomAutocomplete
              options={options}
              placeholder="From - To"
              getChange={getChangeOptionDepart}
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g id="ion:swap-horizontal">
                  <path id="Vector" d="M14.25 2.25L19.5 7.5L14.25 12.75M18.697 7.5H4.5M9.75 21.75L4.5 16.5L9.75 11.25M5.34375 16.5H19.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>}
            />
          </Box>

        </Box>
      </Paper>
    </Container>
  )
}

export default TicketTable

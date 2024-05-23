import { Stack } from '@mui/material'
import React from 'react'
import { GlobalParagraph } from '../../global_styles/styles'
import { BoxStyle } from './styles'


const UserHistory: React.FC = () => {
  return (
    <Stack>
      <GlobalParagraph fontSize='32px' fontWeight='700' paddingbottom='16px'>
        Bookings 
      </GlobalParagraph>
      <BoxStyle>
        
      </BoxStyle>
    </Stack>
  )
}

export default UserHistory
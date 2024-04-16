import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram'
import { CustomButtonStyle } from './styles'

const CustomButton: React.FC = () => {
  return (
    <CustomButtonStyle  variant="contained" startIcon={<TelegramIcon />}>Show Hotels</CustomButtonStyle>
  )
}

export default CustomButton
import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram'
import { CustomButtonStyle } from './styles'
import { useTranslation } from 'react-i18next'

const CustomButton: React.FC = () => {
  const {t} = useTranslation()
  return (
    <CustomButtonStyle  variant="contained" startIcon={<TelegramIcon />}>{t("Show Hotels")}</CustomButtonStyle>
  )
}

export default CustomButton
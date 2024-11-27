import { Box, Button, Stack } from '@mui/material'
import React from 'react'
import { GlobalParagraph } from '../../global_styles/styles'
import { useTranslation } from 'react-i18next'


type PropsType = {
  longitude?: number | null,
  latitude?: number | null
}

const DetailMap: React.FC<PropsType> = ({ longitude, latitude }) => {
  const {t} = useTranslation()
  const handleClick = () => {
    const url = `https://www.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&output=embed`;
    window.open(url, '_blank'); 
  };
  return (
    <Stack mt='64px'>
        <Box pb="32px" display="flex" justifyContent="space-between">
            <GlobalParagraph fontSize='20px' fontWeight='700' mediafontsize='16px'>{t("Location/Map")}</GlobalParagraph>
            <Button variant='contained' onClick={handleClick}>{t("View on google maps")}</Button>
        </Box>
        <Box>
            <iframe title='Anor Plaza' src={`https://www.google.com/maps?q=${latitude},${longitude}&hl=es;z=${14}&output=embed`} width="100%" height="450" style={{border: 0, borderRadius: "16px"}} allowFullScreen loading="lazy" referrerPolicy='no-referrer-when-downgrade' />
        </Box>
    </Stack>
  )
}

export default DetailMap
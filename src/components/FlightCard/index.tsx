import { Box, Divider } from '@mui/material'
import airlines_photo from "./../../media/images/image 40.png";
import React from 'react'
import { GlobalParagraph } from '../../global_styles/styles'
import { BoxStyle } from './styles'
import FlightIcon from '@mui/icons-material/Flight';
import WifiIcon from '@mui/icons-material/Wifi';
import TimerIcon from '@mui/icons-material/Timer';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';

const FlightCard : React.FC = () => {
  return (
    <BoxStyle>
        <Box pb="24px" display="flex" justifyContent="space-between">
            <GlobalParagraph fontSize='20px' fontWeight='700'>Return Wed, Dec 8</GlobalParagraph>
            <GlobalParagraph fontSize='20px' fontWeight='500' oposity='0.75'>2h 28m</GlobalParagraph>
        </Box>
        <Box pb="40px" display="flex" justifyContent="space-between">
            <Box p="16px 32px" display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" gap="24px">
                <Box width="64px" mt="19px" height="45px" >
                    <img src={airlines_photo} width="100%" height="100%" style={{objectFit: "cover"}} alt='Emirats' />
                </Box>
                <Box>
                    <GlobalParagraph fontSize='24px' fontWeight='600' paddingbottom='8px'>Emirates</GlobalParagraph>
                    <GlobalParagraph fontSize='14px' fontWeight='500' oposity='0.6'>Airbus A320</GlobalParagraph>
                </Box>
            </Box>
            <Box p="16px 24px" display='flex' flexDirection='row' alignItems="center" gap="24px" >
                <FlightIcon   />
                <Divider orientation="vertical" variant="middle" flexItem/>
                <WifiIcon   />
                <Divider orientation="vertical" variant="middle" flexItem />
                <TimerIcon   />
                <Divider orientation="vertical" variant="middle" flexItem/>
                <FastfoodIcon   />
                <Divider orientation="vertical" variant="middle" flexItem/>
                <AirlineSeatReclineNormalIcon   />
            </Box>
        </Box>   
    </BoxStyle>
  )
}

export default FlightCard
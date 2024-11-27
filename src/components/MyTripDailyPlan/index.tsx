import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import { GlobalParagraph } from '../../global_styles/styles';
import { DailyPlanDataType } from '../../utils/request_types';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import daily_plan_photo from "../../media/images/dailyplan.gif";
import { useTranslation } from 'react-i18next';

const MyTripDailyPlan: React.FC <DailyPlanDataType> = ({hotels, restaurants, drivers, date, daily_price, history_or_places}) => {
  const {t} = useTranslation()
  return (
    <div>
        <Accordion sx={{marginBottom: "24px"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Box width='95%' display="flex" justifyContent="space-between">
            <GlobalParagraph fontSize='20px' fontWeight='700' mediafontsize='16px' >{date}</GlobalParagraph>
            <GlobalParagraph fontSize='20px' fontWeight='700' mediafontsize='16px' >{daily_price}$</GlobalParagraph>
          </Box>
        </AccordionSummary>
        <AccordionDetails >

          {
            hotels?.length !== 0 || drivers?.length !== 0 || restaurants?.length !== 0 || history_or_places?.length !== 0 ?
            <>
            {
                hotels?.length !== 0 && <GlobalParagraph fontSize='20px' fontWeight='700' mediafontsize='16px' paddingbottom='12px'>{t("Hotels")}</GlobalParagraph>
            }
              {
                hotels?.map((item, index) => {
                  return (
                    <Box key={index + 1} display="flex" justifyContent='flex-start'  flexWrap='wrap'  gap='20px'>
                      <Box width={{xl: "40%", md: "40%", sm: "40%", xs: "100%"}}>
                        <img src={`${item.card}`} width='100%' style={{ objectFit: "cover", borderRadius: '8px'}} alt={`${item.title}`} />
                      </Box>
                      <Box width={{xl: "55%", md: "55%", sm: "55%", xs: "100%"}}>
                        <GlobalParagraph fontSize='20px' fontWeight='700' mediafontsize='15px' paddingbottom='12px'>{item.title}</GlobalParagraph>
                        <GlobalParagraph fontSize='14px' fontWeight='400' paddingbottom='12px'>{item.description}</GlobalParagraph>
                      </Box>
                    </Box>
                  )
                })
              }
            {
                restaurants?.length !== 0 && <GlobalParagraph fontSize='20px' fontWeight='700' mediafontsize='16px' paddingbottom='12px'>Restaurants</GlobalParagraph>
            }
              {
                restaurants?.map((item, index) => {
                  return (
                    <Box key={index + 1} display="flex" flexWrap='wrap' justifyContent='flex-start' gap='20px'>
                      <Box width={{xl: "40%", md: "40%", sm: "40%", xs: "100%"}}>
                        <img src={`${item.card}`}  width='100%' style={{ objectFit: "cover", borderRadius: '8px'}} alt={`${item.card}`} />
                      </Box>
                      <Box width={{xl: "55%", md: "55%", sm: "55%", xs: "100%"}}>
                        <GlobalParagraph fontSize='20px' fontWeight='700' mediafontsize='15px' paddingbottom='12px'>{item.title}</GlobalParagraph>
                        <GlobalParagraph fontSize='14px' fontWeight='400' paddingbottom='12px'>{item.description}</GlobalParagraph>
                      </Box>
                    </Box>
                  )
                })
              }
            {
                drivers?.length !== 0 && <GlobalParagraph fontSize='20px' fontWeight='700' mediafontsize='16px' paddingbottom='12px'>Drivers</GlobalParagraph>
            }
              {
                drivers?.map((item, index) => {
                  return (
                    <Box key={index + 1} display="flex" flexWrap='wrap' justifyContent='flex-start' gap='20px'>
                      <Box width={{xl: "40%", md: "40%", sm: "40%", xs: "100%"}}>
                        <img src={`${item.card}`} width='100%' style={{ objectFit: "cover", borderRadius: '8px'}} alt={`${item.driver}`} />
                      </Box>
                      <Box width={{xl: "55%", md: "55%", sm: "55%", xs: "100%"}}>
                        <GlobalParagraph fontSize='20px' fontWeight='700' mediafontsize='15px' paddingbottom='12px'>{item.driver}</GlobalParagraph>
                        <Box display='flex' justifyContent='space-between'>
                          <Box
                            pb="12px"
                            display="flex"
                            alignItems="center"
                            justifyContent="flex-start"
                            gap="2px"
                          >
                            <DirectionsCarIcon />
                            <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">
                              {item.auto_model}
                            </GlobalParagraph>
                          </Box>
                          <Box
                            pb="12px"
                            display="flex"
                            alignItems="center"
                            justifyContent="flex-start"
                            gap="2px"
                          >
                            
                            <GlobalParagraph fontSize="12px" fontWeight="500" oposity="0.75">
                              {item.auto_number}
                            </GlobalParagraph>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  )
                })
              }
            {
                history_or_places?.length !== 0 && <GlobalParagraph fontSize='20px' fontWeight='700' mediafontsize='16px' paddingbottom='12px'>History or Places</GlobalParagraph>
            }
              {
                history_or_places?.map((item, index) => {
                  return (
                    <Box key={index + 1} display="flex" justifyContent='flex-start'  flexWrap='wrap'  gap='20px'>
                      <Box width={{xl: "40%", md: "40%", sm: "40%", xs: "100%"}}>
                        <img src={`${item.card}`} width='100%' style={{ objectFit: "cover", borderRadius: '8px'}} alt={`${item.title}`} />
                      </Box>
                      <Box width={{xl: "55%", md: "55%", sm: "55%", xs: "100%"}}>
                        <GlobalParagraph fontSize='20px' fontWeight='700' mediafontsize='15px' paddingbottom='12px'>{item.title}</GlobalParagraph>
                        <GlobalParagraph fontSize='14px' fontWeight='400' paddingbottom='12px'>{item.description}</GlobalParagraph>
                      </Box>
                    </Box>
                  )
                })
              }
            </>
            : <Box display='flex' justifyContent='center' flexWrap='wrap'>
                <img width='50%' src={daily_plan_photo} alt="Plan" />
                <Box mt='12px' width='100%' textAlign='center'>
                  <GlobalParagraph fontSize="16px" fontWeight="500" oposity="0.75">
                    No Plan!!
                  </GlobalParagraph>
                </Box>
            </Box>
          }
          
          
          
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MyTripDailyPlan
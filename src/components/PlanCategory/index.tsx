import { Chip, Grid, Stack } from '@mui/material'
import React from 'react'
import { Container, GlobalParagraph, WelcomeMainText } from '../../global_styles/styles'
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { HistoryOrPlaceCategryType } from '../../utils/response_types';

type data = {dataCategory: HistoryOrPlaceCategryType[] | null}

const PlanCategory: React.FC<data> = ({dataCategory}) => (    
    <Stack p="40px" mb="40px"  bgcolor="#edececee">
            <Grid container pb="32px">
                <Grid item xl={8} md={8} sm={6} xs={8}>
                    <WelcomeMainText paddingbottom={"16px"} texttransform='capitalize' fontSize={"24px"} part="true">Explore popolar experiences</WelcomeMainText>
                    <GlobalParagraph fontSize={"16px"} fontWeight="400">See what other travels like to do, bosed on ratings and number of bookings.</GlobalParagraph>
                </Grid>
            </Grid>
            <Stack display='flex' flexWrap="wrap" flexDirection="row" justifyContent="flex-start" gap="10px">
                
                {
                    
                    dataCategory?.map((planCategory: HistoryOrPlaceCategryType, index: number) => {
                        return (
                            <Chip  key={index} sx={{bgcolor: "#fff",
                                '&:hover': {
                                    boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                                    cursor: 'pointer'
                                }}}
                                icon={<LocationCityIcon />}
                                label={`${planCategory.title}  (${planCategory.count})`} 
                                variant="outlined" />
                        )
                    })
                    
                }
              
            </Stack>
    </Stack>
)

export default PlanCategory
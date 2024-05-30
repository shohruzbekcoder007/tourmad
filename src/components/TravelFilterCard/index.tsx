import { Box, Button, Checkbox, Divider, Paper, Stack } from '@mui/material'
import airlines_photo from "./../../media/images/image 40.png";
import airlines_photo1 from "./../../media/images/image 43.png";
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { GlobalParagraph } from '../../global_styles/styles';

const TravelFilterCard:  React.FC = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Stack>
      <Paper elevation={0}
      sx={{
        boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
        borderRadius: "12px",
        padding: "24px 16px",
        mb: "32px",
        '&:hover': {
          boxShadow: "0px 4px 16px 0px rgba(164, 168, 167, 0.413)",
        }
      }}>
        <Box display='flex' justifyContent='space-between' flexWrap="wrap">
          <Box margin={{xl: 0, md: 0, sm: 0, xs: "0 auto"}} width={{xl: "160px", md: "100px", sm: "80px", xs: "160px"}}>
            <img src={airlines_photo}  width="100%" alt="" />
          </Box>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: "24px"}} width={{xl: "550px", md: "400px", sm: "400px", xs: "100%"}}>
            <Box pb='16px' display='flex' alignItems='center' justifyContent="space-between">
              <Box width='40%' alignItems='center' display='flex' justifyContent="flex-start" gap='8px'>
                <Button variant='outlined'>4.2</Button>
                <GlobalParagraph fontSize='12px' mediafontsize='10px' fontWeight='700'>Very Good</GlobalParagraph>
                <GlobalParagraph fontSize='12px' mediafontsize='10px' fontWeight='500'>54 reviews</GlobalParagraph>
              </Box>
              <Box textAlign='right'>
                <GlobalParagraph fontSize='12px' mediafontsize='10px' fontWeight='500'>starting from</GlobalParagraph>
                <GlobalParagraph fontSize='24px' mediafontsize='18px' fontWeight='700' color="#FF8682">$104</GlobalParagraph>
              </Box>
            </Box>
            <Box pb='16px' display='flex' justifyContent='flex-start' gap="40px">   
              <Box display='flex' justifyContent='flex-start' gap='12px'>
                <Checkbox
                  sx={{mt: '-10px'}}
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                <Box>
                  <GlobalParagraph fontSize='16px' mediafontsize='14px' fontWeight='600'>
                    12:00 pm - 01:28 pm
                  </GlobalParagraph>
                  <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='400' oposity='0.4'>
                    Emirats
                  </GlobalParagraph>
                </Box>
              </Box>
              <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='600' oposity='0.78'>
                non stop
              </GlobalParagraph>
              <Box>
                  <GlobalParagraph fontSize='16px' mediafontsize='14px' fontWeight='600' oposity='0.78'>
                    2h 28m
                  </GlobalParagraph>
                  <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='400' oposity='0.4'>
                    EWR-BNA
                  </GlobalParagraph>
                </Box>
            </Box>
            <Box pb='16px' display='flex' justifyContent='flex-start' gap="40px">   
              <Box display='flex' justifyContent='flex-start' gap='12px'>
                <Checkbox
                  sx={{mt: '-10px'}}
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                <Box>
                  <GlobalParagraph fontSize='16px' mediafontsize='14px' fontWeight='600'>
                    12:00 pm - 01:28 pm
                  </GlobalParagraph>
                  <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='400' oposity='0.4'>
                    Emirats
                  </GlobalParagraph>
                </Box>
              </Box>
              <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='600' oposity='0.78'>
                non stop
              </GlobalParagraph>
              <Box>
                  <GlobalParagraph fontSize='16px' mediafontsize='14px' fontWeight='600' oposity='0.78'>
                    2h 28m
                  </GlobalParagraph>
                  <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='400' oposity='0.4'>
                    EWR-BNA
                  </GlobalParagraph>
                </Box>
            </Box>
            <Divider />
            <Box pt='16px' display='flex' justifyContent='space-between'>
              <Button variant='outlined'>
                <FavoriteBorderIcon />
              </Button>
              <Box width={{xl: "85%", md: "70%", sm: "80%", xs: "70%"}}>
                <Button variant='contained' fullWidth>View Deals</Button>
              </Box>
            </Box>
          </Box>
        </Box>     
      </Paper>
      <Paper elevation={0}
      sx={{
        boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
        borderRadius: "12px",
        padding: "24px 16px",
        mb: "32px",
        '&:hover': {
          boxShadow: "0px 4px 16px 0px rgba(164, 168, 167, 0.413)",
        }
      }}>
        <Box display='flex' justifyContent='space-between' flexWrap="wrap">
          <Box margin={{xl: 0, md: 0, sm: 0, xs: "0 auto"}} width={{xl: "160px", md: "100px", sm: "80px", xs: "160px"}}>
            <img src={airlines_photo1}  width="100%" alt="" />
          </Box>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: "24px"}} width={{xl: "550px", md: "400px", sm: "400px", xs: "100%"}}>
            <Box pb='16px' display='flex' alignItems='center' justifyContent="space-between">
              <Box width='40%' alignItems='center' display='flex' justifyContent="flex-start" gap='8px'>
                <Button variant='outlined'>4.2</Button>
                <GlobalParagraph fontSize='12px' mediafontsize='10px' fontWeight='700'>Very Good</GlobalParagraph>
                <GlobalParagraph fontSize='12px' mediafontsize='10px' fontWeight='500'>54 reviews</GlobalParagraph>
              </Box>
              <Box textAlign='right'>
                <GlobalParagraph fontSize='12px' mediafontsize='10px' fontWeight='500'>starting from</GlobalParagraph>
                <GlobalParagraph fontSize='24px' mediafontsize='18px' fontWeight='700' color="#FF8682">$104</GlobalParagraph>
              </Box>
            </Box>
            <Box pb='16px' display='flex' justifyContent='flex-start' gap="40px">   
              <Box display='flex' justifyContent='flex-start' gap='12px'>
                <Checkbox
                  sx={{mt: '-10px'}}
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                <Box>
                  <GlobalParagraph fontSize='16px' mediafontsize='14px' fontWeight='600'>
                    12:00 pm - 01:28 pm
                  </GlobalParagraph>
                  <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='400' oposity='0.4'>
                    Emirats
                  </GlobalParagraph>
                </Box>
              </Box>
              <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='600' oposity='0.78'>
                non stop
              </GlobalParagraph>
              <Box>
                  <GlobalParagraph fontSize='16px' mediafontsize='14px' fontWeight='600' oposity='0.78'>
                    2h 28m
                  </GlobalParagraph>
                  <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='400' oposity='0.4'>
                    EWR-BNA
                  </GlobalParagraph>
                </Box>
            </Box>
            <Box pb='16px' display='flex' justifyContent='flex-start' gap="40px">   
              <Box display='flex' justifyContent='flex-start' gap='12px'>
                <Checkbox
                  sx={{mt: '-10px'}}
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                <Box>
                  <GlobalParagraph fontSize='16px' mediafontsize='14px' fontWeight='600'>
                    12:00 pm - 01:28 pm
                  </GlobalParagraph>
                  <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='400' oposity='0.4'>
                    Emirats
                  </GlobalParagraph>
                </Box>
              </Box>
              <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='600' oposity='0.78'>
                non stop
              </GlobalParagraph>
              <Box>
                  <GlobalParagraph fontSize='16px' mediafontsize='14px' fontWeight='600' oposity='0.78'>
                    2h 28m
                  </GlobalParagraph>
                  <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='400' oposity='0.4'>
                    EWR-BNA
                  </GlobalParagraph>
                </Box>
            </Box>
            <Divider />
            <Box pt='16px' display='flex' justifyContent='space-between'>
              <Button variant='outlined'>
                <FavoriteBorderIcon />
              </Button>
              <Box width={{xl: "85%", md: "70%", sm: "80%", xs: "70%"}}>
                <Button variant='contained' fullWidth>View Deals</Button>
              </Box>
            </Box>
          </Box>
        </Box>     
      </Paper>
      <Paper elevation={0}
      sx={{
        boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
        borderRadius: "12px",
        padding: "24px 16px",
        mb: "32px",
        '&:hover': {
          boxShadow: "0px 4px 16px 0px rgba(164, 168, 167, 0.413)",
        }
      }}>
        <Box display='flex' justifyContent='space-between' flexWrap="wrap">
          <Box margin={{xl: 0, md: 0, sm: 0, xs: "0 auto"}} width={{xl: "160px", md: "100px", sm: "80px", xs: "160px"}}>
            <img src={airlines_photo}  width="100%" alt="" />
          </Box>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: "24px"}} width={{xl: "550px", md: "400px", sm: "400px", xs: "100%"}}>
            <Box pb='16px' display='flex' alignItems='center' justifyContent="space-between">
              <Box width='40%' alignItems='center' display='flex' justifyContent="flex-start" gap='8px'>
                <Button variant='outlined'>4.2</Button>
                <GlobalParagraph fontSize='12px' mediafontsize='10px' fontWeight='700'>Very Good</GlobalParagraph>
                <GlobalParagraph fontSize='12px' mediafontsize='10px' fontWeight='500'>54 reviews</GlobalParagraph>
              </Box>
              <Box textAlign='right'>
                <GlobalParagraph fontSize='12px' mediafontsize='10px' fontWeight='500'>starting from</GlobalParagraph>
                <GlobalParagraph fontSize='24px' mediafontsize='18px' fontWeight='700' color="#FF8682">$104</GlobalParagraph>
              </Box>
            </Box>
            <Box pb='16px' display='flex' justifyContent='flex-start' gap="40px">   
              <Box display='flex' justifyContent='flex-start' gap='12px'>
                <Checkbox
                  sx={{mt: '-10px'}}
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                <Box>
                  <GlobalParagraph fontSize='16px' mediafontsize='14px' fontWeight='600'>
                    12:00 pm - 01:28 pm
                  </GlobalParagraph>
                  <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='400' oposity='0.4'>
                    Emirats
                  </GlobalParagraph>
                </Box>
              </Box>
              <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='600' oposity='0.78'>
                non stop
              </GlobalParagraph>
              <Box>
                  <GlobalParagraph fontSize='16px' mediafontsize='14px' fontWeight='600' oposity='0.78'>
                    2h 28m
                  </GlobalParagraph>
                  <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='400' oposity='0.4'>
                    EWR-BNA
                  </GlobalParagraph>
                </Box>
            </Box>
            <Box pb='16px' display='flex' justifyContent='flex-start' gap="40px">   
              <Box display='flex' justifyContent='flex-start' gap='12px'>
                <Checkbox
                  sx={{mt: '-10px'}}
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                <Box>
                  <GlobalParagraph fontSize='16px' mediafontsize='14px' fontWeight='600'>
                    12:00 pm - 01:28 pm
                  </GlobalParagraph>
                  <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='400' oposity='0.4'>
                    Emirats
                  </GlobalParagraph>
                </Box>
              </Box>
              <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='600' oposity='0.78'>
                non stop
              </GlobalParagraph>
              <Box>
                  <GlobalParagraph fontSize='16px' mediafontsize='14px' fontWeight='600' oposity='0.78'>
                    2h 28m
                  </GlobalParagraph>
                  <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='400' oposity='0.4'>
                    EWR-BNA
                  </GlobalParagraph>
                </Box>
            </Box>
            <Divider />
            <Box pt='16px' display='flex' justifyContent='space-between'>
              <Button variant='outlined'>
                <FavoriteBorderIcon />
              </Button>
              <Box width={{xl: "85%", md: "70%", sm: "80%", xs: "70%"}}>
                <Button variant='contained' fullWidth>View Deals</Button>
              </Box>
            </Box>
          </Box>
        </Box>     
      </Paper>
      <Paper elevation={0}
      sx={{
        boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
        borderRadius: "12px",
        padding: "24px 16px",
        mb: "32px",
        '&:hover': {
          boxShadow: "0px 4px 16px 0px rgba(164, 168, 167, 0.413)",
        }
      }}>
        <Box display='flex' justifyContent='space-between' flexWrap="wrap">
          <Box margin={{xl: 0, md: 0, sm: 0, xs: "0 auto"}} width={{xl: "160px", md: "100px", sm: "80px", xs: "160px"}}>
            <img src={airlines_photo1}  width="100%" alt="" />
          </Box>
          <Box mt={{xl: 0, md: 0, sm: 0, xs: "24px"}} width={{xl: "550px", md: "400px", sm: "400px", xs: "100%"}}>
            <Box pb='16px' display='flex' alignItems='center' justifyContent="space-between">
              <Box width='40%' alignItems='center' display='flex' justifyContent="flex-start" gap='8px'>
                <Button variant='outlined'>4.2</Button>
                <GlobalParagraph fontSize='12px' mediafontsize='10px' fontWeight='700'>Very Good</GlobalParagraph>
                <GlobalParagraph fontSize='12px' mediafontsize='10px' fontWeight='500'>54 reviews</GlobalParagraph>
              </Box>
              <Box textAlign='right'>
                <GlobalParagraph fontSize='12px' mediafontsize='10px' fontWeight='500'>starting from</GlobalParagraph>
                <GlobalParagraph fontSize='24px' mediafontsize='18px' fontWeight='700' color="#FF8682">$104</GlobalParagraph>
              </Box>
            </Box>
            <Box pb='16px' display='flex' justifyContent='flex-start' gap="40px">   
              <Box display='flex' justifyContent='flex-start' gap='12px'>
                <Checkbox
                  sx={{mt: '-10px'}}
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                <Box>
                  <GlobalParagraph fontSize='16px' mediafontsize='14px' fontWeight='600'>
                    12:00 pm - 01:28 pm
                  </GlobalParagraph>
                  <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='400' oposity='0.4'>
                    Emirats
                  </GlobalParagraph>
                </Box>
              </Box>
              <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='600' oposity='0.78'>
                non stop
              </GlobalParagraph>
              <Box>
                  <GlobalParagraph fontSize='16px' mediafontsize='14px' fontWeight='600' oposity='0.78'>
                    2h 28m
                  </GlobalParagraph>
                  <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='400' oposity='0.4'>
                    EWR-BNA
                  </GlobalParagraph>
                </Box>
            </Box>
            <Box pb='16px' display='flex' justifyContent='flex-start' gap="40px">   
              <Box display='flex' justifyContent='flex-start' gap='12px'>
                <Checkbox
                  sx={{mt: '-10px'}}
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />
                <Box>
                  <GlobalParagraph fontSize='16px' mediafontsize='14px' fontWeight='600'>
                    12:00 pm - 01:28 pm
                  </GlobalParagraph>
                  <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='400' oposity='0.4'>
                    Emirats
                  </GlobalParagraph>
                </Box>
              </Box>
              <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='600' oposity='0.78'>
                non stop
              </GlobalParagraph>
              <Box>
                  <GlobalParagraph fontSize='16px' mediafontsize='14px' fontWeight='600' oposity='0.78'>
                    2h 28m
                  </GlobalParagraph>
                  <GlobalParagraph fontSize='14px' mediafontsize='12px' fontWeight='400' oposity='0.4'>
                    EWR-BNA
                  </GlobalParagraph>
                </Box>
            </Box>
            <Divider />
            <Box pt='16px' display='flex' justifyContent='space-between'>
              <Button variant='outlined'>
                <FavoriteBorderIcon />
              </Button>
              <Box width={{xl: "85%", md: "70%", sm: "80%", xs: "70%"}}>
                <Button variant='contained' fullWidth>View Deals</Button>
              </Box>
            </Box>
          </Box>
        </Box>     
      </Paper>
    </Stack>
  )
}

export default TravelFilterCard
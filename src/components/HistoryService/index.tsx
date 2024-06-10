import {
  Stack,
  Box,
  Button,
  Paper,
  Grid,
  IconButton,
  Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { GlobalParagraph, WelcomeMainText } from "../../global_styles/styles";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { CustomAutocomplete } from "../../helper_components";
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ResentSearch from "../ResentSearch";
import photo1 from "./../../media/images/Samarkand_registan.jpg";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from "react-router-dom";


type Option = {
  label: string,
  value: string
}

const HistoryService: React.FC = () => {
  const [from, setFrom] = useState<Option | null>(null)
    const navigate = useNavigate()

  const options: Option[] = [
    { label: 'The Shawshank Redemption', value: "1994" },
    { label: 'The Godfather', value: "1972" },
    { label: 'The Godfather: Part II', value: "1974" },
    { label: 'The Dark Knight', value: "2008" },
    { label: '12 Angry Men', value: "1957" },
    { label: "Schindler's List", value: "1993" },
    { label: 'Pulp Fiction', value: "1994" },
  ]


  useEffect(() => { }, [from]) //for error fixed

  const getChangeOptionFrom = (newValue: Option | null) => {
    setFrom(newValue)
  }

  return (
    <Stack mt="40px">
      <Box pb="40px" display="flex" justifyContent="space-between">
        <WelcomeMainText fontSize="32px" mediafontsize="18px" texttransform="capitalize" part="true">History</WelcomeMainText>
        <Button variant="outlined" onClick={() => navigate(-1)}><KeyboardBackspaceIcon /></Button>
      </Box>
      <Paper
        elevation={0}
        sx={{
          boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
          borderRadius: "16px",
          padding: "16px 24px 32px 24px",
          mb: "32px",
        }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box mt="16px" minWidth={{ xl: "90%", md: "90%", sm: "85%", xs: "70%" }}>
            <CustomAutocomplete
              options={options}
              placeholder="Search"
              getChange={getChangeOptionFrom}
              icon={<LocationOnIcon />}
            />
          </Box>
          <Box mt="16px" width={'56px'}>
            <Button sx={{ height: '56px' }} fullWidth variant='contained'>
              <SearchIcon />
            </Button>
          </Box>
        </Box>
      </Paper>
      <ResentSearch />
      <Grid container>
          <Grid item xl={8} md={8} sm={6} xs={8}>
              <WelcomeMainText paddingbottom={"16px"} mediafontsize="24px" texttransform='capitalize' fontSize={"32px"} part="true">Fall into travel</WelcomeMainText>
              <GlobalParagraph fontSize={"16px"} mediafontsize='14px' fontWeight="400">Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination.</GlobalParagraph>
          </Grid>
      </Grid>
      <Box display="flex" width="100%" justifyContent="flex-start" flexWrap={'wrap'} gap="31px">
          <Box 
            sx={{backgroundImage: `url(${photo1})`,
            backgroundRepeat: "no-repeat",
            p: "24px",
            display : "flex",
            alignItems: 'flex-end',
            borderRadius: "12px",
            height: "420px",
            mt: "32px",
            backgroundPosition: "center", 
            backgroundSize: "cover",
            position: "relative",
            width: {xl: "23%", md: "30%", sm: "48%", xs: "100%"},
            '&:hover': {
                boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                cursor: 'pointer',
            }}}>
                <IconButton sx={{position: 'absolute', top: "10px", right: "10px"}} aria-label="favorite" color="primary">
                    <FavoriteBorderIcon />
                </IconButton>
                <Box width="100%">
                    <Box pb="16px" width="100%" display="flex" justifyContent="space-between" alignItems="flex-end">
                        <Box>
                            <GlobalParagraph fontSize='24px' fontWeight='600' mediafontsize='18px' color='neutrals'>Registon</GlobalParagraph>
                            <GlobalParagraph fontSize='14px' fontWeight='400' mediafontsize='12px' color='neutrals'>Samarqand</GlobalParagraph>
                        </Box>
                    </Box>
                    <Button sx={{height: "48px"}} fullWidth variant='contained' onClick={() => navigate("/history-detail")}>View History</Button>
                </Box>
          </Box>
          <Box 
            sx={{backgroundImage: `url(${photo1})`,
            backgroundRepeat: "no-repeat",
            p: "24px",
            display : "flex",
            alignItems: 'flex-end',
            borderRadius: "12px",
            height: "420px",
            mt: "32px",
            backgroundPosition: "center", 
            backgroundSize: "cover",
            position: "relative",
            width: {xl: "23%", md: "30%", sm: "48%", xs: "100%"},
            '&:hover': {
                boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                cursor: 'pointer',
            }}}>
                <IconButton sx={{position: 'absolute', top: "10px", right: "10px"}} aria-label="favorite" color="primary">
                    <FavoriteBorderIcon />
                </IconButton>
                <Box width="100%">
                    <Box pb="16px" width="100%" display="flex" justifyContent="space-between" alignItems="flex-end">
                        <Box>
                            <GlobalParagraph fontSize='24px' fontWeight='600' mediafontsize='18px' color='neutrals'>Registon</GlobalParagraph>
                            <GlobalParagraph fontSize='14px' fontWeight='400' mediafontsize='12px' color='neutrals'>Samarqand</GlobalParagraph>
                        </Box>
                    </Box>
                    <Button sx={{height: "48px"}} fullWidth variant='contained'>View History</Button>
                </Box>
          </Box>
          <Box 
            sx={{backgroundImage: `url(${photo1})`,
            backgroundRepeat: "no-repeat",
            p: "24px",
            display : "flex",
            alignItems: 'flex-end',
            borderRadius: "12px",
            height: "420px",
            mt: "32px",
            backgroundPosition: "center", 
            backgroundSize: "cover",
            position: "relative",
            width: {xl: "23%", md: "30%", sm: "48%", xs: "100%"},
            '&:hover': {
                boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                cursor: 'pointer',
            }}}>
                <IconButton sx={{position: 'absolute', top: "10px", right: "10px"}} aria-label="favorite" color="primary">
                    <FavoriteBorderIcon />
                </IconButton>
                <Box width="100%">
                    <Box pb="16px" width="100%" display="flex" justifyContent="space-between" alignItems="flex-end">
                        <Box>
                            <GlobalParagraph fontSize='24px' fontWeight='600' mediafontsize='18px' color='neutrals'>Registon</GlobalParagraph>
                            <GlobalParagraph fontSize='14px' fontWeight='400' mediafontsize='12px' color='neutrals'>Samarqand</GlobalParagraph>
                        </Box>
                    </Box>
                    <Button sx={{height: "48px"}} fullWidth variant='contained'>View History</Button>
                </Box>
          </Box>
          <Box 
            sx={{backgroundImage: `url(${photo1})`,
            backgroundRepeat: "no-repeat",
            p: "24px",
            display : "flex",
            alignItems: 'flex-end',
            borderRadius: "12px",
            height: "420px",
            mt: "32px",
            backgroundPosition: "center", 
            backgroundSize: "cover",
            position: "relative",
            width: {xl: "23%", md: "30%", sm: "48%", xs: "100%"},
            '&:hover': {
                boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                cursor: 'pointer',
            }}}>
                <IconButton sx={{position: 'absolute', top: "10px", right: "10px"}} aria-label="favorite" color="primary">
                    <FavoriteBorderIcon />
                </IconButton>
                <Box width="100%">
                    <Box pb="16px" width="100%" display="flex" justifyContent="space-between" alignItems="flex-end">
                        <Box>
                            <GlobalParagraph fontSize='24px' fontWeight='600' mediafontsize='18px' color='neutrals'>Registon</GlobalParagraph>
                            <GlobalParagraph fontSize='14px' fontWeight='400' mediafontsize='12px' color='neutrals'>Samarqand</GlobalParagraph>
                        </Box>
                    </Box>
                    <Button sx={{height: "48px"}} fullWidth variant='contained'>View History</Button>
                </Box>
          </Box>
          <Box 
            sx={{backgroundImage: `url(${photo1})`,
            backgroundRepeat: "no-repeat",
            p: "24px",
            display : "flex",
            alignItems: 'flex-end',
            borderRadius: "12px",
            height: "420px",
            mt: "32px",
            backgroundPosition: "center", 
            backgroundSize: "cover",
            position: "relative",
            width: {xl: "23%", md: "30%", sm: "48%", xs: "100%"},
            '&:hover': {
                boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                cursor: 'pointer',
            }}}>
                <IconButton sx={{position: 'absolute', top: "10px", right: "10px"}} aria-label="favorite" color="primary">
                    <FavoriteBorderIcon />
                </IconButton>
                <Box width="100%">
                    <Box pb="16px" width="100%" display="flex" justifyContent="space-between" alignItems="flex-end">
                        <Box>
                            <GlobalParagraph fontSize='24px' fontWeight='600' mediafontsize='18px' color='neutrals'>Registon</GlobalParagraph>
                            <GlobalParagraph fontSize='14px' fontWeight='400' mediafontsize='12px' color='neutrals'>Samarqand</GlobalParagraph>
                        </Box>
                    </Box>
                    <Button sx={{height: "48px"}} fullWidth variant='contained'>View History</Button>
                </Box>
          </Box>
          <Box 
            sx={{backgroundImage: `url(${photo1})`,
            backgroundRepeat: "no-repeat",
            p: "24px",
            display : "flex",
            alignItems: 'flex-end',
            borderRadius: "12px",
            height: "420px",
            mt: "32px",
            backgroundPosition: "center", 
            backgroundSize: "cover",
            position: "relative",
            width: {xl: "23%", md: "30%", sm: "48%", xs: "100%"},
            '&:hover': {
                boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                cursor: 'pointer',
            }}}>
                <IconButton sx={{position: 'absolute', top: "10px", right: "10px"}} aria-label="favorite" color="primary">
                    <FavoriteBorderIcon />
                </IconButton>
                <Box width="100%">
                    <Box pb="16px" width="100%" display="flex" justifyContent="space-between" alignItems="flex-end">
                        <Box>
                            <GlobalParagraph fontSize='24px' fontWeight='600' mediafontsize='18px' color='neutrals'>Registon</GlobalParagraph>
                            <GlobalParagraph fontSize='14px' fontWeight='400' mediafontsize='12px' color='neutrals'>Samarqand</GlobalParagraph>
                        </Box>
                    </Box>
                    <Button sx={{height: "48px"}} fullWidth variant='contained'>View History</Button>
                </Box>
          </Box>
          <Box 
            sx={{backgroundImage: `url(${photo1})`,
            backgroundRepeat: "no-repeat",
            p: "24px",
            display : "flex",
            alignItems: 'flex-end',
            borderRadius: "12px",
            height: "420px",
            mt: "32px",
            backgroundPosition: "center", 
            backgroundSize: "cover",
            position: "relative",
            width: {xl: "23%", md: "30%", sm: "48%", xs: "100%"},
            '&:hover': {
                boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                cursor: 'pointer',
            }}}>
                <IconButton sx={{position: 'absolute', top: "10px", right: "10px"}} aria-label="favorite" color="primary">
                    <FavoriteBorderIcon />
                </IconButton>
                <Box width="100%">
                    <Box pb="16px" width="100%" display="flex" justifyContent="space-between" alignItems="flex-end">
                        <Box>
                            <GlobalParagraph fontSize='24px' fontWeight='600' mediafontsize='18px' color='neutrals'>Registon</GlobalParagraph>
                            <GlobalParagraph fontSize='14px' fontWeight='400' mediafontsize='12px' color='neutrals'>Samarqand</GlobalParagraph>
                        </Box>
                    </Box>
                    <Button sx={{height: "48px"}} fullWidth variant='contained'>View History</Button>
                </Box>
          </Box>
          <Box 
            sx={{backgroundImage: `url(${photo1})`,
            backgroundRepeat: "no-repeat",
            p: "24px",
            display : "flex",
            alignItems: 'flex-end',
            borderRadius: "12px",
            height: "420px",
            mt: "32px",
            backgroundPosition: "center", 
            backgroundSize: "cover",
            position: "relative",
            width: {xl: "23%", md: "30%", sm: "48%", xs: "100%"},
            '&:hover': {
                boxShadow: `0px 0px 5px 5px rgba(37, 69, 37, 0.217)`,
                cursor: 'pointer',
            }}}>
                <IconButton sx={{position: 'absolute', top: "10px", right: "10px"}} aria-label="favorite" color="primary">
                    <FavoriteBorderIcon />
                </IconButton>
                <Box width="100%">
                    <Box pb="16px" width="100%" display="flex" justifyContent="space-between" alignItems="flex-end">
                        <Box>
                            <GlobalParagraph fontSize='24px' fontWeight='600' mediafontsize='18px' color='neutrals'>Registon</GlobalParagraph>
                            <GlobalParagraph fontSize='14px' fontWeight='400' mediafontsize='12px' color='neutrals'>Samarqand</GlobalParagraph>
                        </Box>
                    </Box>
                    <Button sx={{height: "48px"}} fullWidth variant='contained'>View History</Button>
                </Box>
          </Box>
          <Box display="flex" justifyContent="center" width={"100%"}>
            <Pagination count={10} color="primary" />
          </Box>
          
      </Box>
      
    </Stack>
  );
};

export default HistoryService;

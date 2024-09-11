import { Box, Button,  Pagination, Paper, Stack, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { WelcomeMainText } from '../../global_styles/styles'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { CustomAutocomplete } from '../../helper_components';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HotelFilterCard from '../HotelFilterCard';
import { useNavigate } from 'react-router-dom';
import PlanCategory from '../PlanCategory';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCommonLocationList, getCommonLocations, getStatusCommonLocation } from '../../redux/slices/commonLocationSlicer';
import { changePage, changeSearchLocation, getCategoryPlanList, getPlanCategoryList, getPlanListCurrentPage, getPlanListTotalPages, getStatusPlanCategory } from '../../redux/slices/planSliser';

type Option = {
    label: string,
    value: string
}

const PlanFilter: React.FC = () => {
    const [from, setFrom] = useState<Option | null>(null)
    const [text, setText] = useState<string>("")

    const navigate = useNavigate()
    const statusCommonLocation = useAppSelector(getStatusCommonLocation)
    const commonLocationList = useAppSelector(getCommonLocations)

    const statusCategory = useAppSelector(getStatusPlanCategory)
    const categoryList = useAppSelector(getPlanCategoryList)

    
    const planListTotalPages = useAppSelector(getPlanListTotalPages)
    const planListCurrentPage = useAppSelector(getPlanListCurrentPage)

    const dispatch = useAppDispatch()
    const changePageHandler = (page: number) => {
        dispatch(changePage(page))
    }

    useEffect(() => { }, [from]) //for error fixed
    useEffect(() => {
        if (statusCommonLocation === 'idle') {
            dispatch(getCommonLocationList())
        }
    }, [statusCommonLocation, dispatch])


    useEffect(() => {
        if (statusCategory === 'idle') {
            dispatch(getCategoryPlanList())
        }
    }, [statusCategory, dispatch])

    const getChangeOptionFrom = (newValue: Option | null) => {
        setFrom(newValue)
    }

    const filterLocation = commonLocationList?.filter((item) => {
        return item.parent !== null
    })

    const newOption: Option[] | undefined = filterLocation?.map((item) => {
        return { label: item.name, value: "" + item.id }
    })


    return (
        <Stack mt='40px'>
            <Box pb="40px" display="flex" justifyContent="space-between">
                <WelcomeMainText fontSize="32px" mediafontsize="18px" texttransform="capitalize" part="true">Plan Filter</WelcomeMainText>
                <Button onClick={() => navigate(-1)} variant="outlined"><KeyboardBackspaceIcon /></Button>
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
                    flexWrap="wrap"
                    justifyContent="space-between"
                >
                    <Box mt="16px" minWidth={{ xl: "45%", md: "45%", sm: "40%", xs: "100%" }}>
                        <CustomAutocomplete
                            options={newOption === undefined ? [] : newOption}
                            placeholder="Location"
                            getChange={getChangeOptionFrom}
                            icon={<LocationOnIcon />}
                        />
                    </Box>
                    <Box mt="16px" minWidth={{ xl: "45%", md: "45%", sm: "40%", xs: "100%" }}>
                        <TextField value={text} onChange={e => {setText(e.target.value)}} fullWidth id="outlined-basic" label="Plan Name" variant="outlined" />
                    </Box>
                    <Box mt="16px" width={{ xl: '56px', md: '56px', sm: '56px', xs: "100%" }}>
                        <Button
                            sx={{ height: '56px' }}
                            fullWidth
                            variant='contained'
                            onClick={() => {
                                dispatch(changeSearchLocation({
                                    location: from?.value,
                                    search: text
                                }))
                              }}
                            >
                            <SearchIcon />
                        </Button>
                    </Box>
                </Box>
            </Paper>
            <PlanCategory dataCategory={categoryList || []} />
            <Box width='100%'>
                <HotelFilterCard />
            </Box>
            <Box display="flex" justifyContent="flex-end">
                <Pagination count={planListTotalPages} page={planListCurrentPage} color="primary" onChange={(_, page) => { changePageHandler(page) }} />

            </Box>
        </Stack>
    )
}

export default PlanFilter
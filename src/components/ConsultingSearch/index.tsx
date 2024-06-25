import { Box, Button, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CustomAutocomplete } from "../../helper_components";
import SearchIcon from '@mui/icons-material/Search';

type Option = {
    label: string,
    value: string
}
const ConsultingSearch: React.FC = () => {
    const [from, setFrom] = useState<Option | null>(null)

    const options: Option[] = [
        { label: 'The Shawshank Redemption', value: "1994" },
        { label: 'The Godfather', value: "1972" },
        { label: 'The Godfather: Part II', value: "1974" },
        { label: 'The Dark Knight', value: "2008" },
        { label: '12 Angry Men', value: "1957" },
        { label: "Schindler's List", value: "1993" },
        { label: 'Pulp Fiction', value: "1994" },
      ]
    useEffect(() => { }, [from])
    const getChangeOptionFrom = (newValue: Option | null) => {
        setFrom(newValue)
    }
    return (
        <>

            <Paper
                elevation={0}
                sx={{
                    boxShadow: "0px 4px 16px 0px rgba(141, 211, 187, 0.15)",
                    borderRadius: "16px",
                    padding: "16px 24px 32px 24px",
                    mb: "32px",
                    mt: "32px"
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
                        />
                    </Box>
                    <Box mt="16px" width={'56px'}>
                        <Button sx={{ height: '56px' }} fullWidth variant='contained'>
                            <SearchIcon />
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </>
    )
}
export default ConsultingSearch
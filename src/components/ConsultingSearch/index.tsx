import { Box, Button, Paper, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch } from "../../redux/hooks";
import { consultingSearch } from "../../redux/slices/consultingSlice";




const ConsultingSearch: React.FC = () => {


  useEffect(() => {}, []); //for error fixed

  const dispatch = useAppDispatch();

  const [value, setValue] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const searchFunc = () => {
    dispatch(consultingSearch(value))
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
          mt: "32px",
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box
            mt="16px"
            minWidth={{ xl: "90%", md: "90%", sm: "85%", xs: "70%" }}
          >
            <TextField
            fullWidth
              label="Search"
              variant="outlined"
              value={value}
              onChange={handleChange}
            />
          </Box>
          <Box mt="16px" width={"56px"}>
            <Button sx={{ height: "56px" }} fullWidth variant="contained" onClick={searchFunc}>
              <SearchIcon />
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};
export default ConsultingSearch;

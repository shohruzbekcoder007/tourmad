import { useAppDispatch } from '../../redux/hooks';
import { changeLanguage } from '../../redux/slices/i18nSlice';
import React, { useEffect, useState } from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';

function LanguageSelect() {

    const dispatch = useAppDispatch()
    const [language, setLanguage] = useState<any>("")
    const handleChangeLanguage = (event: any) => {
        setLanguage(event.target.value);
        dispatch(changeLanguage(event.target.value))
    };
    useEffect(() => {
      setLanguage(localStorage.getItem("i18nextLng"))
    }, [])

  return (
    <>
    <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={language === "" ? "en-GB" : language} onChange={handleChangeLanguage}
          sx={{
            outline: "none",
            background: "white",
            border: "none",
            borderRadius: "10px"
          }}
        >
          <MenuItem value="uz-GB">Uzb</MenuItem>
          <MenuItem value="en-GB">Eng</MenuItem>
          <MenuItem value="ru-GB">Rus</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
export default LanguageSelect
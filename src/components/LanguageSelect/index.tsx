import React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useTranslation } from "react-i18next";

function LanguageSelect() {
  const { i18n } = useTranslation();
  const handleChangeLanguage = (event: any) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          defaultValue={i18n.language}
          onChange={handleChangeLanguage}
          sx={{
            outline: "none",
            background: "white",
            border: "none",
            borderRadius: "10px",
          }}
        >
          <MenuItem value="uz">Uzb</MenuItem>
          <MenuItem value="en">Eng</MenuItem>
          <MenuItem value="ru">Rus</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
export default LanguageSelect;

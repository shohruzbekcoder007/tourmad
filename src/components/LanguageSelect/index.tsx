import React from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';

function LanguageSelect() {
    const { i18n } = useTranslation();

    const handleChangeLanguage = (event: any) => {
        const newLanguage = event.target.value;
        i18n.changeLanguage(newLanguage);
        localStorage.setItem("language", newLanguage); // Save language to localStorage
        window.location.reload();
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
                value={i18n.language}
                onChange={handleChangeLanguage}
                sx={{
                    background: 'white',
                    borderRadius: '10px',
                }}
            >
                <MenuItem value="uz">Uzb</MenuItem>
                <MenuItem value="en">Eng</MenuItem>
                <MenuItem value="ru">Rus</MenuItem>
            </Select>
        </FormControl>
    );
}

export default LanguageSelect;

import React, { useEffect } from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { getHomeBanner } from '../../redux/slices/homeSlice';
import { useAppDispatch } from '../../redux/hooks';
import { getRecommendationTripHotel } from '../../redux/slices/hotelSlice';
import { getRecommendationRestaurantList } from '../../redux/slices/restaurantSlice';
import { getCategoryPlanList, getRecommendationPlanList } from '../../redux/slices/planSliser';
import { getRecommendationDriverList } from '../../redux/slices/driverSliser';

function LanguageSelect() {
    const { i18n } = useTranslation();
    const dispatch = useAppDispatch()

    const handleChangeLanguage = (event: any) => {
        const newLanguage = event.target.value;
        i18n.changeLanguage(newLanguage);
        localStorage.setItem("language", newLanguage); // Save language to localStorage
    };

    // Til o'zgarganda yangi requestni yuborish
    useEffect(() => {
        dispatch(getHomeBanner());
        dispatch(getRecommendationPlanList());
        dispatch(getCategoryPlanList())
        dispatch(getRecommendationTripHotel())
        dispatch(getRecommendationRestaurantList())
        dispatch(getRecommendationDriverList())
    }, [i18n.language, dispatch]);

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

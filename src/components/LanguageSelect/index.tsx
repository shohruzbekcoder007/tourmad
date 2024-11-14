import React, { useEffect } from 'react';
import { FormControl, MenuItem, Select } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { getHomeBanner } from '../../redux/slices/homeSlice';
import { useAppDispatch } from '../../redux/hooks';
import { getCommonLanguageList } from '../../redux/slices/commonLanguage';
import { getCommonLocationList } from '../../redux/slices/commonLocationSlicer';
import { getTripConsultingCategoryList, getTripConsultingList } from '../../redux/slices/consultingSlice';
import { getLoacationList } from '../../redux/slices/hotelSlice';
import { getRecommendationTripDaily } from '../../redux/slices/dailySlice';
import { getRecommendationRestaurantList } from '../../redux/slices/restaurantSlice';

function LanguageSelect() {
    const { i18n } = useTranslation();
    const dispatch = useAppDispatch()

    const handleChangeLanguage = (event: any) => {
        i18n.changeLanguage(event.target.value);
    };

    // Til o'zgarganda yangi requestni yuborish
    useEffect(() => {
        dispatch(getHomeBanner());
        dispatch(getCommonLanguageList())
        dispatch(getCommonLocationList())
        dispatch(getTripConsultingList())
        dispatch(getTripConsultingCategoryList())
        dispatch(getLoacationList())
        dispatch(getRecommendationTripDaily())
        dispatch(getRecommendationRestaurantList())
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

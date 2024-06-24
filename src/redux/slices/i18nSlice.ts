import { createSlice } from '@reduxjs/toolkit';
import i18n from '../../i18n';

export interface I18nState {
  language: string;
}

const initialState: I18nState = {
  language: i18n.language,
};

const i18nSlice = createSlice({
  name: 'i18n',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
      i18n.changeLanguage(action.payload);
    },
  },
});

export const { changeLanguage } = i18nSlice.actions;

export default i18nSlice.reducer;
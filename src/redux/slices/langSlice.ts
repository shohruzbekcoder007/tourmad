import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface LangState {
    lang: string,
    error: string | null
}

export const initialState: LangState = {
    lang: "uz",
    error: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload
        }
    },
    extraReducers: (builder) => {

    }
})

export const {
    changeLanguage
} = authSlice.actions

export const getStudentsList = (state: RootState) => state.language.lang

export default authSlice.reducer

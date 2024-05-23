import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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

        }
    },
    extraReducers: (builder) => {

    }
})

export const {
    
} = authSlice.actions

export default authSlice.reducer

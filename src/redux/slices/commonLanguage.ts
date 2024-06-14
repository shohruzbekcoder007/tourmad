import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Language } from "../../utils/response_types"
import LanguageService from "../../services/LanguageService";
import { AxiosError } from "axios";
import { RootState } from "../store";

export interface CommonLanguage  {
    statusCommonLanguage: "idle" | "loading" | "succeeded" | "failed",
    loading: boolean,
    message: string,
    error: null,
    showMessage: boolean,
    languageList: Language[], 
}

const initialState = {
    statusCommonLanguage: "idle",
    loading: false,
    message: "",
    error: null,
    showMessage: false,
    languageList: [],
}

export const getCommonLanguageList = createAsyncThunk('language-list',
    async (_, { rejectWithValue }) => {
        try {
            const response = await LanguageService.languageList();
            const languages_list: Language[] = response.data?.results;
            return languages_list;
        } catch (error) {
            let errorMessage = 'Error';
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }
            return rejectWithValue({ message: errorMessage });
        }
    }
)

export const commonLanguageSlice = createSlice({
    name : "commonlanguage",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getCommonLanguageList.pending, (state) => {
                state.loading = true
                state.error = null
                state.statusCommonLanguage = "loading"
            })
            .addCase(getCommonLanguageList.fulfilled, (state, action: PayloadAction<Language[]>) => {
                state.loading = false
                let languages = action?.payload
                state.languageList = languages as any
                state.statusCommonLanguage = "succeeded"
                // state.error = action.payload?.message || 'Failed to fetch user';
            })
            .addCase(getCommonLanguageList.rejected, (state, _) => {
                state.loading = false
                state.statusCommonLanguage = "failed"
                state.showMessage = true
            })
        
    }
})



export const getStatusCommonLanguage = (state: RootState) => state.commonlanguage.statusCommonLanguage;
export const getLoading = (state: RootState) => state.commonlanguage.loading;
export const getMessage = (state: RootState) => state.commonlanguage.message;
export const getShowMessage = (state: RootState) => state.commonlanguage.showMessage;
export const getLanguageList = (state: RootState) => state.commonlanguage.languageList;

export default commonLanguageSlice.reducer
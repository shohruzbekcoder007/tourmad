import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import HomeService from "../../services/HomeService";
import { HomeBannerType } from "../../utils/response_types";
import { AxiosError } from "axios";
import { RootState } from "../store";

export interface HomeState {
    homeBanner: {
        status: "idle" | "loading" | "succeeded" | "failed",
        error: null,
        banner: HomeBannerType | null,
    }
}

const initialState: HomeState = {
    homeBanner: {
        status: "idle",
        error: null,
        banner: null,
    }
}

export const getHomeBanner = createAsyncThunk('home-banner',
    async (_, { rejectWithValue }) => {
        try {
            const response = await HomeService.getBanner();
            const home_banner_data: HomeBannerType = response.data.results[0];
            return home_banner_data;
        } catch (error) {
            let errorMessage = 'Error';
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }
            return rejectWithValue({ message: errorMessage });
        }
    }
)

export const homeSlice = createSlice({
    name : "home",
    initialState,
    reducers : {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getHomeBanner.fulfilled, (state, action) => {
            state.homeBanner.banner = action?.payload
            state.homeBanner.status = 'succeeded'
        })
        .addCase(getHomeBanner.pending, (state) => {
            state.homeBanner.error = null
            state.homeBanner.status = "loading"
        })
        .addCase(getHomeBanner.rejected, (state, _) => {
            state.homeBanner.status = "failed"
            state.homeBanner.error = null
        })
    }
})

export const getHomeBannerPhotos = (state: RootState) => state.home.homeBanner;

export default homeSlice.reducer
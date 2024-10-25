import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LocationType, RecommendationType } from "../../utils/response_types";
import { AxiosError } from "axios";
import { RootState } from "../store";
import TripDailyService from "../../services/TripDailyService";

export interface DailyState {
    statusLastSearchDaily: 'idle' | "loading" | "succeeded" | "failed",
    statusDailyList: 'idle' | "loading" | "succeeded" | "failed",
    statusLastRecommendationDaily: 'idle' | "loading" | "succeeded" | "failed",
    loading: boolean,
    message: string,
    showMessage: boolean,
    locationList: LocationType[] | null,
    dailyRecommendationList: RecommendationType[] | null,
    dailyList: RecommendationType[] | null,
    error: null,
    dailyListPageSize: number,
    dailyListCurrentPage: number,
    dailyListTotalPages: number,
    dailyGrade: 1 | 2 | 3 | 4 | 5,
    dailyPriceFrom: number,
    dailyPriceTo: number,
    room_style: "basic" | "premium" | "all",
    searchLocation: string | null,
}

const initialState: DailyState = {
    statusLastSearchDaily: "idle",
    statusDailyList: "idle",
    statusLastRecommendationDaily: "idle",
    loading: false,
    message: '',
    showMessage: false,
    locationList: [],
    dailyRecommendationList: [],
    dailyList: [],
    error: null,
    dailyListPageSize: 5,
    dailyListCurrentPage: 1,
    dailyListTotalPages: 1,
    dailyGrade: 3,
    dailyPriceFrom: 20,
    dailyPriceTo: 100,
    room_style: "all",
    searchLocation: ""
}

export const getLoacationList = createAsyncThunk("get-location-daily",
    async (_, { rejectWithValue }) => {
        try {
            const response = await TripDailyService.locationDailys();
            const location_list: LocationType[] = response.data?.results;
            return location_list;
        } catch (error) {
            let errorMessage = 'Error';
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }
            return rejectWithValue({ message: errorMessage });
        }
    }
)

export const getRecommendationTripDaily = createAsyncThunk('recommendation-trip-daily',
    async (_, { rejectWithValue }) => {
        try {
            const response = await TripDailyService.recommendationTripDaily();
            const location_list: RecommendationType[] = response.data?.results;
            return location_list;
        } catch (error) {
            let errorMessage = 'Error';
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }
            return rejectWithValue({ message: errorMessage });
        }
    }
)

export const dailySlice = createSlice({
    name: 'daily',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.dailyListCurrentPage = action.payload
            state.statusDailyList = "idle"
        },
        changeGrade: (state, action) => {
            state.dailyGrade = action.payload
            state.dailyListCurrentPage = 1
            state.statusDailyList = "idle"
        },
        changePriceFrom: (state, action) => {
            state.dailyPriceFrom = action.payload
            state.dailyListCurrentPage = 1
            state.statusDailyList = "idle"
        },
        changePriceTo: (state, action) => {
            state.dailyPriceTo = action.payload
            state.dailyListCurrentPage = 1
            state.statusDailyList = "idle"
        },
        changeRoomStyle: (state, action) => {
            state.room_style = action.payload
            state.dailyListCurrentPage = 1
            state.statusDailyList = "idle"
        },
        changeSearchLocation: (state, action) => {
            state.searchLocation = action.payload
            state.dailyListCurrentPage = 1
            state.statusDailyList = "idle"
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getLoacationList.pending, (state) => {
                state.loading = true
                state.error = null
                state.statusLastSearchDaily = "loading"
            })
            .addCase(getLoacationList.fulfilled, (state, action: PayloadAction<LocationType[]>) => {
                state.loading = false
                let locationList = action?.payload
                state.locationList = locationList
                state.error = null
                state.statusLastSearchDaily = "succeeded"
            })
            .addCase(getLoacationList.rejected, (state, _) => {
                state.loading = false
                state.statusLastSearchDaily = "failed"
                // state.error = action.payload?.message || 'Failed to fetch user';
            })
            .addCase(getRecommendationTripDaily.pending, (state) => {
                state.loading = true
                state.error = null
                state.statusLastRecommendationDaily = "loading"
            })
            .addCase(getRecommendationTripDaily.fulfilled, (state, action: PayloadAction<RecommendationType[]>) => {
                state.loading = false
                let locationList = action?.payload
                state.dailyRecommendationList = locationList
                state.statusLastRecommendationDaily = "succeeded"
            })
            .addCase(getRecommendationTripDaily.rejected, (state, _) => {
                state.loading = false
                state.statusLastRecommendationDaily = "failed"
                // state.error = action.payload?.message || 'Failed to fetch user';
            })
    }
})

export const { changePage, changeGrade, changePriceFrom, changePriceTo, changeSearchLocation, changeRoomStyle } = dailySlice.actions

export const getStatusLastSearchDaily = (state: RootState) => state.daily.statusLastSearchDaily
export const getStatusLastRecommendationDaily = (state: RootState) => state.daily.statusLastRecommendationDaily
export const getStatusDailyList = (state: RootState) => state.daily.statusDailyList
export const getDailyError = (state: RootState) => state.daily.error
export const getDailyLocationList = (state: RootState) => state.daily.locationList
export const getDailyLoading = (state: RootState) => state.daily.loading
export const getDailyMessage = (state: RootState) => state.daily.message
export const getDailyShowMessage = (state: RootState) => state.daily.showMessage
export const getDailyRecommendationList = (state: RootState) => state.daily.dailyRecommendationList
export const getDailyList = (state: RootState) => state.daily.dailyList
export const getDailyListPageSize = (state: RootState) => state.daily.dailyListPageSize
export const getDailyListCurrentPage = (state: RootState) => state.daily.dailyListCurrentPage
export const getDailyListTotalPages = (state: RootState) => state.daily.dailyListTotalPages
export const getDailyGrade = (state: RootState) => state.daily.dailyGrade
export const getDailyPriceFrom = (state: RootState) => state.daily.dailyPriceFrom
export const getDailyPriceTo = (state: RootState) => state.daily.dailyPriceTo
export const getRoomStyle = (state: RootState) => state.daily.room_style

export default dailySlice.reducer

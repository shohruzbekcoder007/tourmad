import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HotelLocationType, HotelRecommendationType } from "../../utils/response_types";
import { AxiosError } from "axios";
import TripHotelService from "../../services/TripHotelService";
import { RootState } from "../store";

export interface HotelState {
    statusLastSearchHotel: 'idle' | "loading" | "succeeded" | "failed",
    statusLastRecommendationHotel: 'idle' | "loading" | "succeeded" | "failed",
    loading: boolean,
    message: string,
    showMessage: boolean,
    locationList: HotelLocationType[] | null
    hotelRecommendationList: HotelRecommendationType[] | null
    error: null,
}

const initialState: HotelState = {
    statusLastSearchHotel: "idle",
    statusLastRecommendationHotel: "idle",
    loading: false,
    message: '',
    showMessage: false,
    locationList: [],
    hotelRecommendationList: [],
    error: null
}

export const getLoacationList = createAsyncThunk("get-location-hotel",
    async (_, { rejectWithValue }) => {
        try {
            const response = await TripHotelService.locationHotels();
            const location_list: HotelLocationType[] = response.data?.results;
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

export const getRecommendationTripHotel = createAsyncThunk('recommendation-trip-hotel',
    async (_, { rejectWithValue }) => {
        try {
            const response = await TripHotelService.recommendationTripHotel();
            const location_list: HotelRecommendationType[] = response.data?.results;
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

export const hotelSlice = createSlice({
    name: 'hotel',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getLoacationList.pending, (state) => {
                state.loading = true
                state.error = null
                state.statusLastSearchHotel = "loading"
            })
            .addCase(getLoacationList.fulfilled, (state, action: PayloadAction<HotelLocationType[]>) => {
                state.loading = false
                let locationList = action?.payload
                state.locationList = locationList
                state.statusLastSearchHotel = "succeeded"
            })
            .addCase(getLoacationList.rejected, (state, _) => {
                state.loading = false
                state.statusLastSearchHotel = "failed"
                // state.error = action.payload?.message || 'Failed to fetch user';
            })
            .addCase(getRecommendationTripHotel.pending, (state) => {
                state.loading = true
                state.error = null
                state.statusLastRecommendationHotel = "loading"
            })
            .addCase(getRecommendationTripHotel.fulfilled, (state, action: PayloadAction<HotelRecommendationType[]>) => {
                state.loading = false
                let locationList = action?.payload
                state.hotelRecommendationList = locationList
                state.statusLastRecommendationHotel = "succeeded"
            })
            .addCase(getRecommendationTripHotel.rejected, (state, _) => {
                state.loading = false
                state.statusLastRecommendationHotel = "failed"
                // state.error = action.payload?.message || 'Failed to fetch user';
            });
    }
})

// export const { } = hotelSlice.actions

export const getStatusLastSearchHotel = (state: RootState) => state.hotel.statusLastSearchHotel
export const getStatusLastRecommendationHotel = (state: RootState) => state.hotel.statusLastRecommendationHotel
export const getHotelError = (state: RootState) => state.hotel.error
export const getHotelLocationList = (state: RootState) => state.hotel.locationList
export const getHotelLoading = (state: RootState) => state.hotel.loading
export const getHotelMessage = (state: RootState) => state.hotel.message
export const getHotelShowMessage = (state: RootState) => state.hotel.showMessage
export const getHotelRecommendationList = (state: RootState) => state.hotel.hotelRecommendationList

export default hotelSlice.reducer
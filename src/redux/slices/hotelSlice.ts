import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LocationType, RecommendationType } from "../../utils/response_types";
import { AxiosError } from "axios";
import TripHotelService from "../../services/TripHotelService";
import { RootState } from "../store";

export interface HotelState {
    statusLastSearchHotel: 'idle' | "loading" | "succeeded" | "failed",
    statusHotelList: 'idle' | "loading" | "succeeded" | "failed",
    statusLastRecommendationHotel: 'idle' | "loading" | "succeeded" | "failed",
    loading: boolean,
    message: string,
    showMessage: boolean,
    locationList: LocationType[] | null,
    hotelRecommendationList: RecommendationType[] | null,
    hotelList: RecommendationType[] | null,
    error: null,
    hotelListPageSize: number,
    hotelListCurrentPage: number,
    hotelListTotalPages: number,
    hotelGrade: 1 | 2 | 3 | 4 | 5,
    hotelPriceFrom: number,
    hotelPriceTo: number,
    room_style: "basic" | "premium" | "all",
    searchLocation: string | null,
    hotelDetail: {
        hotel: RecommendationType | null,
        status: 'idle' | "loading" | "succeeded" | "failed",
        error: string | null
    }
}

const initialState: HotelState = {
    statusLastSearchHotel: "idle",
    statusHotelList: "idle",
    statusLastRecommendationHotel: "idle",
    loading: false,
    message: '',
    showMessage: false,
    locationList: [],
    hotelRecommendationList: [],
    hotelList: [],
    error: null,
    hotelListPageSize: 5,
    hotelListCurrentPage: 1,
    hotelListTotalPages: 1,
    hotelGrade: 3,
    hotelPriceFrom: 20,
    hotelPriceTo: 100,
    room_style: "all",
    searchLocation: "",
    hotelDetail: {
        hotel: null,
        status: "idle",
        error: null
    }
}

export const getLoacationList = createAsyncThunk("get-location-hotel",
    async (_, { rejectWithValue }) => {
        try {
            const response = await TripHotelService.locationHotels();
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

export const getRecommendationTripHotel = createAsyncThunk('recommendation-trip-hotel',
    async (_, { rejectWithValue }) => {
        try {
            const response = await TripHotelService.recommendationTripHotel();
            const location_list: RecommendationType[] = response.data;
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

export const getTripHotelList = createAsyncThunk('get-trip-hotel-list',
    async (_, { rejectWithValue, getState }) => {
        try {
            let state = getState();
            const response = await TripHotelService.tripHotels(state);
            const hotel_list: RecommendationType[] = response.data?.results;
            const total_pages: number = response.data?.total_pages || 1;
            const current_page: number = response.data?.current_page || 1;
            return { hotel_list, total_pages, current_page };
        } catch (error) {
            let errorMessage = 'Error';
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }
            return rejectWithValue({ message: errorMessage });
        }
    }
)

export const getHotelDetailInfo = createAsyncThunk('get-hotel-detail',
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await TripHotelService.getHotelDetail(id);
            const hotel_detail: RecommendationType = response.data;
            return hotel_detail;
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
        changePage: (state, action) => {
            state.hotelListCurrentPage = action.payload
            state.statusHotelList = "idle"
        },
        changeGrade: (state, action) => {
            state.hotelGrade = action.payload
            state.hotelListCurrentPage = 1
            state.statusHotelList = "idle"
        },
        changePriceFrom: (state, action) => {
            state.hotelPriceFrom = action.payload
            state.hotelListCurrentPage = 1
            state.statusHotelList = "idle"
        },
        changePriceTo: (state, action) => {
            state.hotelPriceTo = action.payload
            state.hotelListCurrentPage = 1
            state.statusHotelList = "idle"
        },
        changeRoomStyle: (state, action) => {
            state.room_style = action.payload
            state.hotelListCurrentPage = 1
            state.statusHotelList = "idle"
        },
        changeSearchLocation: (state, action) => {
            state.searchLocation = action.payload
            state.hotelListCurrentPage = 1
            state.statusHotelList = "idle"
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getLoacationList.pending, (state) => {
                state.loading = true
                state.error = null
                state.statusLastSearchHotel = "loading"
            })
            .addCase(getLoacationList.fulfilled, (state, action: PayloadAction<LocationType[]>) => {
                state.loading = false
                let locationList = action?.payload
                state.locationList = locationList
                state.error = null
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
            .addCase(getRecommendationTripHotel.fulfilled, (state, action: PayloadAction<RecommendationType[]>) => {
                state.loading = false
                let locationList = action?.payload
                state.hotelRecommendationList = locationList
                state.statusLastRecommendationHotel = "succeeded"
            })
            .addCase(getRecommendationTripHotel.rejected, (state, _) => {
                state.loading = false
                state.statusLastRecommendationHotel = "failed"
                // state.error = action.payload?.message || 'Failed to fetch user';
            })
            .addCase(getTripHotelList.pending, (state) => {
                state.loading = true
                state.error = null
                state.statusHotelList = "loading"
            })
            .addCase(getTripHotelList.fulfilled, (state, action: PayloadAction<{ hotel_list: RecommendationType[], total_pages: number, current_page: number }>) => {
                state.loading = false
                let { hotel_list, total_pages, current_page } = action?.payload || { hotel_list: [], total_pages: 1, current_page: 1 };
                state.hotelList = hotel_list
                state.hotelListTotalPages = total_pages
                state.hotelListCurrentPage = current_page
                state.statusHotelList = "succeeded"
            })
            .addCase(getTripHotelList.rejected, (state, _) => {
                state.loading = false
                state.statusHotelList = "failed"
                // state.error = action.payload?.message || 'Failed to fetch user';
            })
            .addCase(getHotelDetailInfo.pending, (state) => {
                state.hotelDetail.status = "loading"
                state.hotelDetail.error = ''
            })
            .addCase(getHotelDetailInfo.fulfilled, (state, action) => {
                state.hotelDetail.status = "succeeded"
                state.hotelDetail.hotel = action.payload
            })
            .addCase(getHotelDetailInfo.rejected, (state, _) => {
                state.hotelDetail.status = "failed"
                state.hotelDetail.error = 'Xatolik yuzaga keldi'
                // state.error = action.payload?.message || 'Failed to fetch hotel';
            })
    }
})

export const { changePage, changeGrade, changePriceFrom, changePriceTo, changeSearchLocation, changeRoomStyle } = hotelSlice.actions

export const getStatusLastSearchHotel = (state: RootState) => state.hotel.statusLastSearchHotel
export const getStatusLastRecommendationHotel = (state: RootState) => state.hotel.statusLastRecommendationHotel
export const getStatusHotelList = (state: RootState) => state.hotel.statusHotelList
export const getHotelError = (state: RootState) => state.hotel.error
export const getHotelLocationList = (state: RootState) => state.hotel.locationList
export const getHotelLoading = (state: RootState) => state.hotel.loading
export const getHotelMessage = (state: RootState) => state.hotel.message
export const getHotelShowMessage = (state: RootState) => state.hotel.showMessage
export const getHotelRecommendationList = (state: RootState) => state.hotel.hotelRecommendationList
export const getHotelList = (state: RootState) => state.hotel.hotelList
export const getHotelListPageSize = (state: RootState) => state.hotel.hotelListPageSize
export const getHotelListCurrentPage = (state: RootState) => state.hotel.hotelListCurrentPage
export const getHotelListTotalPages = (state: RootState) => state.hotel.hotelListTotalPages
export const getHotelGrade = (state: RootState) => state.hotel.hotelGrade
export const getHotelPriceFrom = (state: RootState) => state.hotel.hotelPriceFrom
export const getHotelPriceTo = (state: RootState) => state.hotel.hotelPriceTo
export const getRoomStyle = (state: RootState) => state.hotel.room_style
export const getHotelDetail = (state: RootState) => state.hotel.hotelDetail

export default hotelSlice.reducer


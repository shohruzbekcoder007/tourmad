import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LocationType, RecommendationType } from "../../utils/response_types";
import { AxiosError } from "axios";
import TripNewTripService from "../../services/TripNewTripService";
import { RootState } from "../store";

export interface NewTripState {
    statusLastSearchNewTrip: 'idle' | "loading" | "succeeded" | "failed",
    statusNewTripList: 'idle' | "loading" | "succeeded" | "failed",
    statusLastRecommendationNewTrip: 'idle' | "loading" | "succeeded" | "failed",
    loading: boolean,
    message: string,
    showMessage: boolean,
    locationList: LocationType[] | null,
    newTripRecommendationList: RecommendationType[] | null,
    newTripList: RecommendationType[] | null,
    error: null,
    newTripListPageSize: number,
    newTripListCurrentPage: number,
    newTripListTotalPages: number,
    newTripGrade: 1 | 2 | 3 | 4 | 5,
    newTripPriceFrom: number,
    newTripPriceTo: number,
    room_style: "basic" | "premium" | "all",
    searchLocation: string | null,
    newTripDetail: {
        newTrip: RecommendationType | null,
        status: 'idle' | "loading" | "succeeded" | "failed",
        error: string | null
    }
}

const initialState: NewTripState = {
    statusLastSearchNewTrip: "idle",
    statusNewTripList: "idle",
    statusLastRecommendationNewTrip: "idle",
    loading: false,
    message: '',
    showMessage: false,
    locationList: [],
    newTripRecommendationList: [],
    newTripList: [],
    error: null,
    newTripListPageSize: 5,
    newTripListCurrentPage: 1,
    newTripListTotalPages: 1,
    newTripGrade: 3,
    newTripPriceFrom: 20,
    newTripPriceTo: 100,
    room_style: "all",
    searchLocation: "",
    newTripDetail: {
        newTrip: null,
        status: "idle",
        error: null
    }
}

// export const getLoacationList = createAsyncThunk("get-location-newTrip",
//     async (_, { rejectWithValue }) => {
//         try {
//             const response = await TripNewTripService.locationNewTrips();
//             const location_list: LocationType[] = response.data?.results;
//             return location_list;
//         } catch (error) {
//             let errorMessage = 'Error';
//             if (error instanceof AxiosError && error.response?.data?.message) {
//                 errorMessage = error.response.data.message;
//             }
//             return rejectWithValue({ message: errorMessage });
//         }
//     }
// )

export const getRecommendationTripNewTrip = createAsyncThunk('recommendation-trip-newTrip',
    async (_, { rejectWithValue }) => {
        try {
            const response = await TripNewTripService.recommendationTripNewTrip();
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

// export const getTripNewTripList = createAsyncThunk('get-trip-newTrip-list',
//     async (_, { rejectWithValue, getState }) => {
//         try {
//             let state = getState();
//             const response = await TripNewTripService.tripNewTrips(state);
//             const newTrip_list: RecommendationType[] = response.data?.results;
//             const total_pages: number = response.data?.total_pages || 1;
//             const current_page: number = response.data?.current_page || 1;
//             return { newTrip_list, total_pages, current_page };
//         } catch (error) {
//             let errorMessage = 'Error';
//             if (error instanceof AxiosError && error.response?.data?.message) {
//                 errorMessage = error.response.data.message;
//             }
//             return rejectWithValue({ message: errorMessage });
//         }
//     }
// )

// export const getNewTripDetailInfo = createAsyncThunk('get-newTrip-detail',
//     async (id: string, { rejectWithValue }) => {
//         try {
//             const response = await TripNewTripService.getNewTripDetail(id);
//             const newTrip_detail: RecommendationType = response.data;
//             return newTrip_detail;
//         } catch (error) {
//             let errorMessage = 'Error';
//             if (error instanceof AxiosError && error.response?.data?.message) {
//                 errorMessage = error.response.data.message;
//             }
//             return rejectWithValue({ message: errorMessage });
//         }
//     }
// )

export const newTripSlice = createSlice({
    name: 'newTrip',
    initialState,
    reducers: {
        // changePage: (state, action) => {
        //     state.newTripListCurrentPage = action.payload
        //     state.statusNewTripList = "idle"
        // },
        // changeGrade: (state, action) => {
        //     state.newTripGrade = action.payload
        //     state.newTripListCurrentPage = 1
        //     state.statusNewTripList = "idle"
        // },
        // changePriceFrom: (state, action) => {
        //     state.newTripPriceFrom = action.payload
        //     state.newTripListCurrentPage = 1
        //     state.statusNewTripList = "idle"
        // },
        // changePriceTo: (state, action) => {
        //     state.newTripPriceTo = action.payload
        //     state.newTripListCurrentPage = 1
        //     state.statusNewTripList = "idle"
        // },
        // changeRoomStyle: (state, action) => {
        //     state.room_style = action.payload
        //     state.newTripListCurrentPage = 1
        //     state.statusNewTripList = "idle"
        // },
        // changeSearchLocation: (state, action) => {
        //     state.searchLocation = action.payload
        //     state.newTripListCurrentPage = 1
        //     state.statusNewTripList = "idle"
        // }
    },
    extraReducers: (builder) => {
        builder
    //         .addCase(getLoacationList.pending, (state) => {
    //             state.loading = true
    //             state.error = null
    //             state.statusLastSearchNewTrip = "loading"
    //         })
    //         .addCase(getLoacationList.fulfilled, (state, action: PayloadAction<LocationType[]>) => {
    //             state.loading = false
    //             let locationList = action?.payload
    //             state.locationList = locationList
    //             state.error = null
    //             state.statusLastSearchNewTrip = "succeeded"
    //         })
    //         .addCase(getLoacationList.rejected, (state, _) => {
    //             state.loading = false
    //             state.statusLastSearchNewTrip = "failed"
    //             // state.error = action.payload?.message || 'Failed to fetch user';
    //         })
            .addCase(getRecommendationTripNewTrip.pending, (state) => {
                state.loading = true
                state.error = null
                state.statusLastRecommendationNewTrip = "loading"
            })
            .addCase(getRecommendationTripNewTrip.fulfilled, (state, action: PayloadAction<RecommendationType[]>) => {
                state.loading = false
                let locationList = action?.payload
                state.newTripRecommendationList = locationList
                state.statusLastRecommendationNewTrip = "succeeded"
            })
            .addCase(getRecommendationTripNewTrip.rejected, (state, _) => {
                state.loading = false
                state.statusLastRecommendationNewTrip = "failed"
                // state.error = action.payload?.message || 'Failed to fetch user';
            })
    //         .addCase(getTripNewTripList.pending, (state) => {
    //             state.loading = true
    //             state.error = null
    //             state.statusNewTripList = "loading"
    //         })
    //         .addCase(getTripNewTripList.fulfilled, (state, action: PayloadAction<{ newTrip_list: RecommendationType[], total_pages: number, current_page: number }>) => {
    //             state.loading = false
    //             let { newTrip_list, total_pages, current_page } = action?.payload || { newTrip_list: [], total_pages: 1, current_page: 1 };
    //             state.newTripList = newTrip_list
    //             state.newTripListTotalPages = total_pages
    //             state.newTripListCurrentPage = current_page
    //             state.statusNewTripList = "succeeded"
    //         })
    //         .addCase(getTripNewTripList.rejected, (state, _) => {
    //             state.loading = false
    //             state.statusNewTripList = "failed"
    //             // state.error = action.payload?.message || 'Failed to fetch user';
    //         })
    //         .addCase(getNewTripDetailInfo.pending, (state) => {
    //             state.newTripDetail.status = "loading"
    //             state.newTripDetail.error = ''
    //         })
    //         .addCase(getNewTripDetailInfo.fulfilled, (state, action) => {
    //             state.newTripDetail.status = "succeeded"
    //             state.newTripDetail.newTrip = action.payload
    //         })
    //         .addCase(getNewTripDetailInfo.rejected, (state, _) => {
    //             state.newTripDetail.status = "failed"
    //             state.newTripDetail.error = 'Xatolik yuzaga keldi'
    //             // state.error = action.payload?.message || 'Failed to fetch newTrip';
    //         })
    }
})

// export const { changePage, changeGrade, changePriceFrom, changePriceTo, changeSearchLocation, changeRoomStyle } = newTripSlice.actions

export const getStatusLastSearchNewTrip = (state: RootState) => state.newTrip.statusLastSearchNewTrip
export const getStatusLastRecommendationNewTrip = (state: RootState) => state.newTrip.statusLastRecommendationNewTrip
export const getStatusNewTripList = (state: RootState) => state.newTrip.statusNewTripList
export const getNewTripError = (state: RootState) => state.newTrip.error
export const getNewTripLocationList = (state: RootState) => state.newTrip.locationList
export const getNewTripLoading = (state: RootState) => state.newTrip.loading
export const getNewTripMessage = (state: RootState) => state.newTrip.message
export const getNewTripShowMessage = (state: RootState) => state.newTrip.showMessage
export const getNewTripRecommendationList = (state: RootState) => state.newTrip.newTripRecommendationList
export const getNewTripList = (state: RootState) => state.newTrip.newTripList
export const getNewTripListPageSize = (state: RootState) => state.newTrip.newTripListPageSize
export const getNewTripListCurrentPage = (state: RootState) => state.newTrip.newTripListCurrentPage
export const getNewTripListTotalPages = (state: RootState) => state.newTrip.newTripListTotalPages
export const getNewTripGrade = (state: RootState) => state.newTrip.newTripGrade
export const getNewTripPriceFrom = (state: RootState) => state.newTrip.newTripPriceFrom
export const getNewTripPriceTo = (state: RootState) => state.newTrip.newTripPriceTo
export const getRoomStyle = (state: RootState) => state.newTrip.room_style
export const getNewTripDetail = (state: RootState) => state.newTrip.newTripDetail

export default newTripSlice.reducer


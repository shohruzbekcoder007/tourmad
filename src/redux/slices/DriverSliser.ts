import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import DriverService from "../../services/DriverService";
import { AxiosError } from "axios";
import { DriveDetailType, DriverType, LocationType, RecommendationType, ReviewsType } from "../../utils/response_types";

export interface DriverState {
    statusLastRecommendationDriver: "idle" | "loading" | "succeeded" | "failed",
    statusDriverList: "idle" | "loading" | "succeeded" | "failed",
    loading: boolean,
    message: string,
    showMessage: boolean,
    driverRecommendationList: RecommendationType[] | null,
    driverList: DriverType[] | null,
    error: null,
    driverGrade: 1 | 2 | 3 | 4 | 5,
    driverPriceFrom: number,
    driverPriceTo: number,
    searchLocation: string,
    searchLanguage: string,
    driverCurrentPage: number,
    driverTotalPage: number,
    driversStyle: "all" | "business" | "comfort",
    driveDetail: {
        status: "idle" | "loading" | "succeeded" | "failed",
        error: null,
        driver: DriveDetailType | null,
    }
    driveReview: {
        status: "idle" | "loading" | "succeeded" | "failed",
        error: null,
        review: ReviewsType [] | null,
        reviewCurrentPage: number,
        reviewTotelPage: number,
    },
    locationList: LocationType[] | null,
    statusLastSearchDriver: 'idle' | "loading" | "succeeded" | "failed",
}

const initialState: DriverState = {
    statusLastRecommendationDriver: "idle",
    statusDriverList: "idle",
    loading: false,
    message: '',
    showMessage: false,
    driverRecommendationList: [],
    driverList: [],
    error: null,
    driverGrade: 3,
    driverPriceFrom: 0,    
    driverPriceTo: 1000,
    searchLocation: "",
    searchLanguage: "",
    driverCurrentPage: 1,
    driverTotalPage: 1,
    driversStyle: 'all',
    driveDetail: {
        status: "idle" ,
        error: null,
        driver: null,
    },
    driveReview: {
        status: "idle",
        error: null,
        review: null,
        reviewCurrentPage: 1,
        reviewTotelPage: 1,
    },
    locationList: [],
    statusLastSearchDriver: "idle",
}

export const getRecommendationDriverList = createAsyncThunk('recommendation-trip-driver',
    async (_, { rejectWithValue }) => {
        try {
            const response = await DriverService.recommendationDrive();
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

export const getDriverList = createAsyncThunk('driver-list',
    async (_, { rejectWithValue, getState}) => {
        try {
            let state = getState();
            const response = await DriverService.drivers(state);
            const driver_list: DriverType[] = response.data?.results;
            const total_pages: number = response.data?.total_pages || 1;
            const current_page: number = response.data?.current_page || 1;
            return {driver_list, total_pages, current_page };
        } catch (error) {
            let errorMessage = 'Error';
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }
            return rejectWithValue({ message: errorMessage });
        }
    }
)

export const getDriverDetailAction = createAsyncThunk('driver-detail',
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await DriverService.getDriveDtail(id);
            const driver_detail_data: DriveDetailType = response.data;
            return driver_detail_data;
        } catch (error) {
            let errorMessage = 'Error';
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }
            return rejectWithValue({ message: errorMessage });
        }
    }
)

export const getLoacationList = createAsyncThunk("get-location-driver",
    async (_, { rejectWithValue }) => {
        try {
            const response = await DriverService.locationDrivers();
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

export const driverSlice = createSlice({
    name: 'driver',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.driverCurrentPage = action.payload
            state.statusDriverList = "idle"
        },
        changeDriversStyle: (state, action) => {
            state.driversStyle = action.payload
            state.driverCurrentPage = 1
            state.statusDriverList = "idle"
        },
        changeGrade: (state, action) => {
            state.driverGrade = action.payload
            state.driverCurrentPage = 1
            state.statusDriverList = "idle"
        },
        changePriceFrom: (state, action) => {
            state.driverPriceFrom = action.payload
            state.driverCurrentPage = 1
            state.statusDriverList = "idle"
        },
        changePriceTo: (state, action) => {
            state.driverPriceTo = action.payload
            state.driverCurrentPage = 1
            state.statusDriverList = "idle"
        },
        changeSearchLocation: (state, action) => {
            state.searchLocation = action.payload
            state.driverCurrentPage = 1
            state.statusDriverList = "idle"
        },
        changeSearchLanguage: (state, action) => {
            state.searchLanguage = action.payload
            state.driverCurrentPage = 1
            state.statusDriverList = "idle"
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRecommendationDriverList.pending, (state) => {
                state.loading = true
                state.error = null
                state.statusLastRecommendationDriver = "loading"
            })
            .addCase(getRecommendationDriverList.fulfilled, (state, action: PayloadAction<RecommendationType[]>) => {
                state.loading = false
                let locationList = action?.payload
                state.driverRecommendationList = locationList
                state.statusLastRecommendationDriver = "succeeded"
                // state.error = action.payload?.message || 'Failed to fetch user';
            })
            .addCase(getRecommendationDriverList.rejected, (state, _) => {
                state.loading = false
                state.statusDriverList = "failed"
                state.showMessage = true
            })
            .addCase(getDriverList.pending, (state) => {
                state.loading = true
                state.error = null
                state.statusDriverList = "loading"
            })
            .addCase(getDriverList.fulfilled, (state, action: PayloadAction<{driver_list: DriverType[], total_pages: number, current_page: number }>) => {
                state.loading = false
                let { driver_list, total_pages, current_page } = action?.payload || { hotel_list: [], total_pages: 1, current_page: 1 };
                state.driverList = driver_list
                state.driverTotalPage = total_pages
                state.driverCurrentPage = current_page
                state.statusDriverList = "succeeded"
                // state.error = action.payload?.message || 'Failed to fetch user';
            })
            .addCase(getDriverList.rejected, (state, _) => {
                state.loading = false
                state.statusDriverList = "failed"
                state.showMessage = true
            })
            .addCase(getDriverDetailAction.pending, (state) => {
                state.driveDetail.error = null
                state.driveDetail.status = "loading"
            })
            .addCase(getDriverDetailAction.rejected, (state, _) => {
                state.driveDetail.status = "failed"
                state.driveDetail.error = null
            })
            .addCase(getDriverDetailAction.fulfilled, (state, action) => {
                state.driveDetail.driver = action?.payload
                state.driveDetail.status = 'succeeded'
            })
            .addCase(getLoacationList.pending, (state) => {
                state.loading = true
                state.error = null
                state.statusLastSearchDriver = "loading"
            })
            .addCase(getLoacationList.fulfilled, (state, action: PayloadAction<LocationType[]>) => {
                state.loading = false
                let locationList = action?.payload
                console.log(locationList, "<-- shuda")
                state.statusLastSearchDriver = "succeeded"
                state.locationList = locationList
                state.error = null
            })
            .addCase(getLoacationList.rejected, (state, _) => {
                state.loading = false
                state.statusLastSearchDriver = "failed"
                // state.error = action.payload?.message || 'Failed to fetch user';
            })
    }
})

// export const { } = driverSlice.actions
export const {changeGrade, changePriceFrom, changePriceTo, changeSearchLanguage, changeSearchLocation, changePage, changeDriversStyle} = driverSlice.actions


export const getStatusLastRecommendationDriver = (state: RootState) => state.driver.statusLastRecommendationDriver;
export const getDriverRecommendationList = (state: RootState) => state.driver.driverRecommendationList;
export const getLoadingDriver = (state: RootState) => state.driver.loading;
export const getShowMessageDriver = (state: RootState) => state.driver.showMessage;
export const getErrorDriver = (state: RootState) => state.driver.error;
export const getMessageDriver = (state: RootState) => state.driver.message;
export const getStatusDriverList = (state: RootState) => state.driver.statusDriverList;
export const getDrivers = (state: RootState) => state.driver.driverList;
export const getDriverGrade = (state: RootState) => state.driver.driverGrade;
export const getDriverPriceFrom = (state: RootState) => state.driver.driverPriceFrom;
export const getDriverPriceto = (state: RootState) => state.driver.driverPriceTo;
export const getDriverCurrentPage = (state: RootState) => state.driver.driverCurrentPage;
export const getDriverTotalPage = (state: RootState) => state.driver.driverTotalPage;
export const getDriversStyle = (state: RootState) => state.driver.driversStyle;
export const getDriverDetail = (state: RootState) => state.driver.driveDetail;
export const getLocationList = (state: RootState) => state.driver.locationList;
export const getStatusLastSearchDriver = (state: RootState) => state.driver.statusLastSearchDriver;

export default driverSlice.reducer

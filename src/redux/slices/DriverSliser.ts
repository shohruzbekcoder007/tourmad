import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import DriverService from "../../services/DriverService";
import { AxiosError } from "axios";
import { DriverType, RecommendationType } from "../../utils/response_types";

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
            const location_list: DriverType[] = response.data?.results;
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
        changeGrade: (state, action) => {
            state.driverGrade = action.payload
            state.statusDriverList = "idle"
        },
        changePriceFrom: (state, action) => {
            state.driverPriceFrom = action.payload
            state.statusDriverList = "idle"
        },
        changePriceTo: (state, action) => {
            state.driverPriceTo = action.payload
            state.statusDriverList = "idle"
        },
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
            .addCase(getDriverList.fulfilled, (state, action: PayloadAction<DriverType[]>) => {
                state.loading = false
                let locationList = action?.payload
                state.driverList = locationList
                state.statusDriverList = "succeeded"
                // state.error = action.payload?.message || 'Failed to fetch user';
            })
            .addCase(getDriverList.rejected, (state, _) => {
                state.loading = false
                state.statusDriverList = "failed"
                state.showMessage = true
            })
    }
})

// export const { } = driverSlice.actions
export const {changeGrade, changePriceFrom, changePriceTo} = driverSlice.actions


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

export default driverSlice.reducer

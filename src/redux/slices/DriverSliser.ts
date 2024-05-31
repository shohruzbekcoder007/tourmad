import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import DriverService from "../../services/DriverService";
import { AxiosError } from "axios";
import { RecommendationType } from "../../utils/response_types";

interface DriverState {
    statusLastRecommendationDriver: "idle" | "loading" | "succeeded" | "failed",
    loading: boolean,
    message: string,
    showMessage: boolean,
    driverRecommendationList: RecommendationType[] | null,
    error: null
}

const initialState: DriverState = {
    statusLastRecommendationDriver: "idle",
    loading: false,
    message: '',
    showMessage: false,
    driverRecommendationList: null,
    error: null,
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

export const driverSlice = createSlice({
    name: 'driver',
    initialState,
    reducers: {

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
                state.statusLastRecommendationDriver = "failed"
                state.showMessage = true
            })
    }
})

// export const { } = driverSlice.actions


export const getStatusLastRecommendationDriver = (state: RootState) => state.driver.statusLastRecommendationDriver;
export const getDriverRecommendationList = (state: RootState) => state.driver.driverRecommendationList;
export const getLoadingDriver = (state: RootState) => state.driver.loading;
export const getShowMessageDriver = (state: RootState) => state.driver.showMessage;
export const getErrorDriver = (state: RootState) => state.driver.error;
export const getMessageDriver = (state: RootState) => state.driver.message;

export default driverSlice.reducer

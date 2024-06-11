import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { AxiosError } from "axios"
import CommonLocationService from "../../services/CommonLocationService"
import { CommonLocationType } from "../../utils/response_types"
import { RootState } from "../store"

export interface CommonLocationState {
    statusCommonLocation: 'idle' | "loading" | "succeeded" | "failed",
    commonLocationList: CommonLocationType[] | null,
    loading: boolean,
    message: string,
    showMessage: boolean,
    error: null,
}

const initialState: CommonLocationState = {
    statusCommonLocation: "idle",
    commonLocationList: [],
    loading: false,
    message: '',
    showMessage: false,
    error: null
}

export const getCommonLocationList = createAsyncThunk("get-common-location", async (_, { rejectWithValue }) => {
    try {
        const response = await CommonLocationService.CommonLocationList();
        const location_list: CommonLocationType[] = response.data?.results;
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

export const commonLocationSlice = createSlice({
    name: "commonLocation",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getCommonLocationList.pending, (state) => {
                state.loading = true
                state.error = null
                state.statusCommonLocation = "loading"
            })
            .addCase(getCommonLocationList.fulfilled, (state, action: PayloadAction<CommonLocationType[]>) => {
                state.loading = false
                let locationList = action?.payload
                state.commonLocationList = locationList
                state.error = null
                state.statusCommonLocation = "succeeded"
            })
            .addCase(getCommonLocationList.rejected, (state, _) => {
                state.loading = false
                state.statusCommonLocation = "failed"
                // state.error = action.payload?.message || 'Failed to fetch user';
            })
    }
})

// export const {  } = commonLocationSlice.actions

export default commonLocationSlice.reducer

export const getStatusCommonLocation = (state: RootState) => state.commonLocation.statusCommonLocation
export const getCommonLocations = (state: RootState) => state.commonLocation.commonLocationList
export const getLoading = (state: RootState) => state.commonLocation.loading
export const getMessage = (state: RootState) => state.commonLocation.message
export const getShowMessage = (state: RootState) => state.commonLocation.showMessage
export const getError = (state: RootState) => state.commonLocation.error

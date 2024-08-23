import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HistoryType } from "../../utils/response_types";
import { AxiosError } from "axios";
import HistoryService from "../../services/HistoryService"
import { RootState } from "../store";

export interface HistoryState {
    statusHistoryList: 'idle' | "loading" | "succeeded" | "failed",
    loading: boolean,
    message: string,
    showMessage: boolean,
    historyList: HistoryType[] | null,
    error: null,
    historyListPageSize: number,
    historyListCurrentPage: number,
    historyListTotalPages: number,
    searchLocation: string | null,
    hotelDetail: {
        history: HistoryType | null,
        status: 'idle' | "loading" | "succeeded" | "failed",
        error: string | null
    }
}

const initialState: HistoryState = {
    statusHistoryList: "idle",
    loading: false,
    message: '',
    showMessage: false,
    historyList: [],
    error: null,
    historyListPageSize: 8,
    historyListCurrentPage: 1,
    historyListTotalPages: 1,
    searchLocation: "",
    hotelDetail: {
        history: null,
        status: "idle",
        error: null
    }
}

export const getTripHistoryList = createAsyncThunk('get-trip-history-list',
    async (_, { rejectWithValue, getState }) => {
        try {
            let state = getState();
            const response = await HistoryService.tripHistory(state);
            const history_list: HistoryType[] = response.data?.results;
            const total_pages: number = response.data?.total_pages || 1;
            const current_page: number = response.data?.current_page || 1;
            return { history_list, total_pages, current_page };
        } catch (error) {
            let errorMessage = 'Error';
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }
            return rejectWithValue({ message: errorMessage });
        }
    }
)

export const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.historyListCurrentPage = action.payload
            state.statusHistoryList = "idle"
        },
        changeSearchLocation: (state, action) => {
            state.searchLocation = action.payload
            state.historyListCurrentPage = 1
            state.statusHistoryList = "idle"
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTripHistoryList.pending, (state) => {
                state.loading = true
                state.error = null
                state.statusHistoryList = "loading"
            })
            .addCase(getTripHistoryList.fulfilled, (state, action: PayloadAction<{ history_list: HistoryType[], total_pages: number, current_page: number }>) => {
                state.loading = false
                let { history_list, total_pages, current_page } = action?.payload || { history_list: [], total_pages: 1, current_page: 1 };
                state.historyList = history_list
                state.historyListTotalPages = total_pages
                state.historyListCurrentPage = current_page
                state.statusHistoryList = "succeeded"
            })
            .addCase(getTripHistoryList.rejected, (state, _) => {
                state.loading = false
                state.statusHistoryList = "failed"
                // state.error = action.payload?.message || 'Failed to fetch user';
            })
    }
})

export const { changePage, changeSearchLocation } = historySlice.actions

export const getStatusHistoryList = (state: RootState) => state.history.statusHistoryList
export const getHistoryError = (state: RootState) => state.history.error
export const getHistoryLoading = (state: RootState) => state.history.loading
export const getHistoryMessage = (state: RootState) => state.history.message
export const getHistoryShowMessage = (state: RootState) => state.history.showMessage
export const getHistoryList = (state: RootState) => state.history.historyList
export const getHistoryListPageSize = (state: RootState) => state.history.historyListPageSize
export const getHistoryListCurrentPage = (state: RootState) => state.history.historyListCurrentPage
export const getHistoryListTotalPages = (state: RootState) => state.history.historyListTotalPages


export default historySlice.reducer

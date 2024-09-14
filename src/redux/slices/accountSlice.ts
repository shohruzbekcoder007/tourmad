import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SubscribeType } from "../../utils/request_types";
import { AxiosError } from "axios";
import AccountService from "../../services/AccountService";
import { RootState } from "../store";

export interface Account {
    accountSubscribe: {
        status: "idle" | "loading" | "succeeded" | "failed",
        error: null,
        subscribe: SubscribeType | null,
    }
}

const initialState: Account = {
    accountSubscribe: {
        status: "idle",
        error: null,
        subscribe: null,
    }
}

export const getAccountSubscribe = createAsyncThunk('account-subscribe',
    async (data: SubscribeType, { rejectWithValue }) => {
        try {
            const response = await AccountService.getAccountSubscribe(data);
            const account_subscribe: SubscribeType = response.data?.results;
            return account_subscribe;
        } catch (error) {
            let errorMessage = 'Error';
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }
            return rejectWithValue({ message: errorMessage });
        }
    }
)

export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getAccountSubscribe.pending, (state) => {
            state.accountSubscribe.error = null;
            state.accountSubscribe.status = "loading"
        })
        .addCase(getAccountSubscribe.fulfilled, (state, action) => {
            state.accountSubscribe.subscribe = action.payload;
            state.accountSubscribe.error = null;
            state.accountSubscribe.status = "succeeded"
        })
        .addCase(getAccountSubscribe.rejected, (state, _) => {
            state.accountSubscribe.error = null;
            state.accountSubscribe.status = "failed"
        })
    }
})

export const getAccountSubscribeCreate = (state: RootState) => state.account.accountSubscribe;

export default accountSlice.reducer;
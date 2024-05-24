import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { getStorage } from '../../utils/storage'
import UserService from '../../services/UserService'
import { UserType } from '../../utils/response_types'
import { RootState } from '../store'
import { AxiosError } from 'axios'

interface UserState {
    status: 'idle' | "loading" | "succeeded" | "failed",
    loading: boolean,
    message: string,
    showMessage: boolean,
    token: string | null,
    user: UserType | null,
    error: null,
}

const initialState: UserState = {
    status: 'idle',
    loading: false,
    message: '',
    showMessage: false,
    token: getStorage() || null,
    user: null,
    error: null,
}

export const getUser = createAsyncThunk("me",
    async (_, { rejectWithValue }) => {
        try {
            const response = await UserService.me();
            const user: UserState = response.data;
            return user;
        } catch (error) {
            let errorMessage = 'Error';
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }
            return rejectWithValue({ message: errorMessage });
        }
    }
)


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getUser.fulfilled, (state, action: PayloadAction<UserState>) => {
                state.loading = false;
                let user = action.payload
                console.log(action.payload, "<-action")
                // state.user = action.payload;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false;
                // state.error = action.payload?.message || 'Failed to fetch user';
            });
    }
})

export const { } = userSlice.actions

export const getUserStatus = (state: RootState) => state.user.status
export const getUserError = (state: RootState) => state.user.error
export const getUserInfo = (state: RootState) => state.user.user
export const getUserLoading = (state: RootState) => state.user.loading
export const getUserMessage = (state: RootState) => state.user.message
export const getUserToken = (state: RootState) => state.user.token
export const getUserShowMessage = (state: RootState) => state.user.showMessage

export default userSlice.reducer
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { getStorage, removeStorage } from '../../utils/storage'
import UserService, { ChangesType } from '../../services/UserService'
import { AccountType, UserType } from '../../utils/response_types'
import { RootState } from '../store'
import { AxiosError } from 'axios'

interface UserState {
    status: 'idle' | "loading" | "succeeded" | "failed",
    loading: boolean,
    message: string,
    showMessage: boolean,
    token: string | null,
    user: UserType | null,
    account: AccountType | null,
    error: null,
}

const initialState: UserState = {
    status: 'idle',
    loading: false,
    message: '',
    showMessage: false,
    token: getStorage() || null,
    user: null,
    account: null,
    error: null,
}

export const getUser = createAsyncThunk("me",
    async (_, { rejectWithValue }) => {
        try {
            const response = await UserService.me();
            const user: UserType = response.data;
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

export const putChanges = createAsyncThunk("me-edit", 
    async (data: ChangesType, { rejectWithValue }) => {
        try {
            const response = await UserService.saveChanges(data)
            return response.data;
        }
        catch (error) {
            let errorMessage = "Error saving changes";
            if (error instanceof AxiosError && error.response?.data?.message) {
              errorMessage = error.response.data.message;
            }
            return rejectWithValue({ message: errorMessage });
          }
    }
)

export const getAccount = createAsyncThunk("account", 
    async (_, { rejectWithValue }) => {
        try {
            const response = await UserService.account()
            const account: AccountType = response?.data;
            return account;
        }
        catch (error) {
            let errorMessage = 'Error';
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }
            return rejectWithValue({ message: errorMessage });
        }
    }
)

export const logOut = createAsyncThunk('logout', async (_, { rejectWithValue }) => {
    try {
        // const response = await UserService.logOut()
        removeStorage();
        return null;
    }
    catch (error) {
        let errorMessage = 'Error';
        if (error instanceof AxiosError && error.response?.data?.message) {
            errorMessage = error.response.data.message;
        }
        return rejectWithValue({ message: errorMessage });
    }
})

export const registerUser = createAsyncThunk('register', async (data: any, { rejectWithValue }) => {
    try {
        const response = await UserService.registirUser(data)
        console.log(response.data)
        return response.data
    }
    catch (error) {
        let errorMessage = 'Error';
        if (error instanceof AxiosError && error.response?.data?.message) {
            errorMessage = error.response.data.message;
        }
        return rejectWithValue({ message: errorMessage });
    }
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.loading = true
                state.error = null
                state.status = "loading"
            })
            .addCase(getUser.fulfilled, (state, action: PayloadAction<UserType>) => {
                state.loading = false
                let user = action?.payload
                state.user = user
                state.status = "succeeded"
            })
            .addCase(getUser.rejected, (state, action) => {
                state.loading = false
                state.status = "failed"
                // state.error = action.payload?.message || 'Failed to fetch user';
            })
            .addCase(getAccount.pending, (state) => {
                state.loading = true
                state.error = null
                state.status = "loading"
            })
            .addCase(getAccount.fulfilled, (state, action: PayloadAction<AccountType>) => {
                state.loading = false
                let account = action?.payload
                state.account = account
                state.status = "succeeded"
            })
            .addCase(getAccount.rejected, (state, action) => {
                state.loading = false
                state.status = "failed"
                // state.error = action.payload?.message || 'Failed to fetch user';
            })
            .addCase(logOut.fulfilled, (state) => {
                state.loading = false
                state.token = null
                state.user = null
                state.account = null
                state.status = "idle"
            })
            .addCase(logOut.rejected, (state, action) => {
                state.loading = false
                state.status = "failed"
                // state.error = action.payload?.message || 'Failed to log out';
            })

            .addCase(putChanges.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.status = "loading";
              })
              .addCase(putChanges.fulfilled, (state, action: PayloadAction<UserType>) => {
                state.loading = false;
                state.user = action.payload;
                state.status = "succeeded";
                state.message = "Changes saved successfully!";
                state.showMessage = true;
              })
              .addCase(putChanges.rejected, (state, action) => {
                state.loading = false;
                state.status = "failed";
                // state.error = action.payload?.message || "Failed to save changes";
              })
              .addCase(registerUser.pending, (state) => {
                state.loading = true
                state.error = null
                state.status = "loading"
              })
              .addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => {
                state.loading = false
                state.user = action.payload;
                state.status = "succeeded"
              })
              .addCase(registerUser.rejected, (state, _) => {
                state.loading = false
                state.status = "failed"
                // state.error = action.payload?.message || 'Failed to register user';
              });
    }
})

// export const { } = userSlice.actions

export const getUserStatus = (state: RootState) => state.user.status
export const getUserError = (state: RootState) => state.user.error
export const getUserInfo = (state: RootState) => state.user.user
export const getAccountInfo = (state: RootState) => state.user.account
export const getUserLoading = (state: RootState) => state.user.loading
export const getUserMessage = (state: RootState) => state.user.message
export const getUserToken = (state: RootState) => state.user.token
export const getUserShowMessage = (state: RootState) => state.user.showMessage

export default userSlice.reducer

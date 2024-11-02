import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { WishlistType } from "../../utils/response_types";
import WishListService from "../../services/WishListService";
import { AxiosError } from "axios";
import { RootState } from "../store";

export interface WishListState {
    statusWishList: 'idle' | 'loading' | 'succeeded' | 'failed',
    loading: boolean,
    message: string,
    showMessage: boolean,
    wishList: WishlistType[] | null,
    error: null,
    wishListPageSize: number,
    wishListCurrentPage: number,
    wishListTotalPages: number
}
const initialState: WishListState = {
    statusWishList: 'idle',
    loading: false,
    message: '',
    showMessage: false,
    wishList: [],
    error: null,
    wishListPageSize: 10,
    wishListCurrentPage: 1,
    wishListTotalPages: 1
}

export const getWishList = createAsyncThunk('get-wishlist', 
    async (_, {rejectWithValue}) => {
        try {
            const response = await WishListService.getWishList();
            const wish_list: WishlistType[] = response?.data
            return {wish_list}
        } catch (error) {
            let errorMessage = "Error";
            if(error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response?.data?.message
            }
            return rejectWithValue({message: errorMessage})
        }
    }
)

export const wishListSlice = createSlice({
    name: "wishList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getWishList.pending, (state) => {
            state.loading = true
            state.error = null
            state.statusWishList = "loading"
        })
        .addCase(getWishList.fulfilled, (state, action: PayloadAction<{wish_list: WishlistType[]}>) => {
            state.loading= false
            let {wish_list} = action.payload ||{wish_list: []}
            state.wishList=wish_list
            state.statusWishList="succeeded"
        })
        .addCase(getWishList.rejected, (state, _) => {
            state.loading = false
            state.statusWishList = "failed"
        })
    }
})

export const getStatusWishList = (state: RootState) => state.wishList.statusWishList
export const getWishListError = (state: RootState) => state.wishList.error
export const getWishListLoading = (state: RootState) => state.wishList.loading
export const getWishListMessage = (state: RootState) => state.wishList.message
export const getWishListShowMessage = (state: RootState) => state.wishList.showMessage
export const getWishListList = (state: RootState) => state.wishList.wishList

export default wishListSlice.reducer
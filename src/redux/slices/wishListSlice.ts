import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DriverWish, HistoryPlaceWish, HotelWish, RestaurantWish, WishlistType } from "../../utils/response_types";
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
    wishListTotalPages: number,
    user_hotel_wishes: HotelWish[],
    user_restaurant_wishes: RestaurantWish[],
    driver_wishes: DriverWish[],
    user_trip_wishes: HistoryPlaceWish[]
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
    wishListTotalPages: 1,
    user_hotel_wishes: [],
    user_restaurant_wishes: [],
    driver_wishes: [],
    user_trip_wishes: []
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

export const postLikeId = createAsyncThunk(
    "like-id",
    async (id: number, {rejectWithValue}) => {
        try {
            const response = await WishListService.postLike(id)
            const new_like = response?.data
            return new_like
        }
        catch (error) {
            let errorMessage = "Error";
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message
            }
            return rejectWithValue({message: errorMessage})
        }
    }
)

export const postLikeIdR = createAsyncThunk(
    "like-id-r",
    async (id: number, {rejectWithValue}) => {
        try {
            const response = await WishListService.postLikeR(id)
            const new_like = response?.data
            return new_like
        }
        catch (error) {
            let errorMessage = "Error";
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message
            }
            return rejectWithValue({message: errorMessage})
        }
    }
)

export const postLikeIdH = createAsyncThunk(
    "like-id-h",
    async (id: number, {rejectWithValue}) => {
        try {
            const response = await WishListService.postLikeH(id)
            const new_like = response?.data
            return new_like
        }
        catch (error) {
            let errorMessage = "Error";
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message
            }
            return rejectWithValue({message: errorMessage})
        }
    }
)

export const postLikeIdHT = createAsyncThunk(
    "like-id-ht",
    async (id: number, {rejectWithValue}) => {
        try {
            const response = await WishListService.postLikeHT(id)
            const new_like = response?.data
            return new_like
        }
        catch (error) {
            let errorMessage = "Error";
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message
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

        .addCase(postLikeId.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.statusWishList = "loading"
        })
        // Add to `postLikeId.fulfilled`
        .addCase(postLikeId.fulfilled, (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
          
            // Helper function to toggle `is_liked` if the item is found
            const toggleLikeStatus = (item: { [key: string]: any }) => {
              if (item && 'is_liked' in item) {
                item.is_liked = !item.is_liked;
              }
            };
          
            // Search and update `is_liked` in each wish list category
            state.user_hotel_wishes?.forEach((wish) => {
              if (wish.hotel?.id === itemId) toggleLikeStatus(wish.hotel);
            });
          
            state.user_restaurant_wishes?.forEach((wish) => {
              if (wish.restaurant?.id === itemId) toggleLikeStatus(wish.restaurant);
            });
          
            state.driver_wishes?.forEach((wish) => {
              if (wish.driver?.id === itemId) toggleLikeStatus(wish.driver);
            });
          
            state.user_trip_wishes?.forEach((wish) => {
              if (wish.history_or_place?.id === itemId) toggleLikeStatus(wish.history_or_place);
            });
          
            state.loading = false;
            state.statusWishList = "succeeded";
          })
  
        .addCase(postLikeId.rejected, (state, _) => {
            state.loading=false
            state.statusWishList="failed"
        })

        .addCase(postLikeIdR.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.statusWishList = "loading"
        })
        // Add to `postLikeId.fulfilled`
        .addCase(postLikeIdR.fulfilled, (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
          
            // Helper function to toggle `is_liked` if the item is found
            const toggleLikeStatus = (item: { [key: string]: any }) => {
              if (item && 'is_liked' in item) {
                item.is_liked = !item.is_liked;
              }
            };
          
            // Search and update `is_liked` in each wish list category
            state.user_hotel_wishes?.forEach((wish) => {
              if (wish.hotel?.id === itemId) toggleLikeStatus(wish.hotel);
            });
          
            state.user_restaurant_wishes?.forEach((wish) => {
              if (wish.restaurant?.id === itemId) toggleLikeStatus(wish.restaurant);
            });
          
            state.driver_wishes?.forEach((wish) => {
              if (wish.driver?.id === itemId) toggleLikeStatus(wish.driver);
            });
          
            state.user_trip_wishes?.forEach((wish) => {
              if (wish.history_or_place?.id === itemId) toggleLikeStatus(wish.history_or_place);
            });
          
            state.loading = false;
            state.statusWishList = "succeeded";
          })
  
        .addCase(postLikeIdR.rejected, (state, _) => {
            state.loading=false
            state.statusWishList="failed"
        })

        .addCase(postLikeIdH.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.statusWishList = "loading"
        })
        // Add to `postLikeId.fulfilled`
        .addCase(postLikeIdH.fulfilled, (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
          
            // Helper function to toggle `is_liked` if the item is found
            const toggleLikeStatus = (item: { [key: string]: any }) => {
              if (item && 'is_liked' in item) {
                item.is_liked = !item.is_liked;
              }
            };
          
            // Search and update `is_liked` in each wish list category
            state.user_hotel_wishes?.forEach((wish) => {
              if (wish.hotel?.id === itemId) toggleLikeStatus(wish.hotel);
            });
          
            state.user_restaurant_wishes?.forEach((wish) => {
              if (wish.restaurant?.id === itemId) toggleLikeStatus(wish.restaurant);
            });
          
            state.driver_wishes?.forEach((wish) => {
              if (wish.driver?.id === itemId) toggleLikeStatus(wish.driver);
            });
          
            state.user_trip_wishes?.forEach((wish) => {
              if (wish.history_or_place?.id === itemId) toggleLikeStatus(wish.history_or_place);
            });
          
            state.loading = false;
            state.statusWishList = "succeeded";
          })
  
        .addCase(postLikeIdH.rejected, (state, _) => {
            state.loading=false
            state.statusWishList="failed"
        })


        .addCase(postLikeIdHT.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.statusWishList = "loading"
        })
        // Add to `postLikeId.fulfilled`
        .addCase(postLikeIdHT.fulfilled, (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
          
            // Helper function to toggle `is_liked` if the item is found
            const toggleLikeStatus = (item: { [key: string]: any }) => {
              if (item && 'is_liked' in item) {
                item.is_liked = !item.is_liked;
              }
            };
          
            // Search and update `is_liked` in each wish list category
            state.user_hotel_wishes?.forEach((wish) => {
              if (wish.hotel?.id === itemId) toggleLikeStatus(wish.hotel);
            });
          
            state.user_restaurant_wishes?.forEach((wish) => {
              if (wish.restaurant?.id === itemId) toggleLikeStatus(wish.restaurant);
            });
          
            state.driver_wishes?.forEach((wish) => {
              if (wish.driver?.id === itemId) toggleLikeStatus(wish.driver);
            });
          
            state.user_trip_wishes?.forEach((wish) => {
              if (wish.history_or_place?.id === itemId) toggleLikeStatus(wish.history_or_place);
            });
          
            state.loading = false;
            state.statusWishList = "succeeded";
          })
  
        .addCase(postLikeIdHT.rejected, (state, _) => {
            state.loading=false
            state.statusWishList="failed"
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
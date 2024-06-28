import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RecommendationType, RestaurantDetailType, RestaurantType } from "../../utils/response_types";
import RestaurantService from "../../services/RestaurantService";
import { AxiosError } from "axios";
import { RootState } from "../store";

export interface RestaurantStateI {
    statusLastRecommendationRestaurant: 'idle' | "loading" | "succeeded" | "failed",
    statusRestaurantList: 'idle' | "loading" | "succeeded" | "failed",
    restaurantRecommendationList: RecommendationType[] | null
    loading: boolean,
    message: string,
    showMessage: boolean,
    error: null,
    restaurantList: RestaurantType[] | null,
    restaurantListPageSize: number,
    restaurantListCurrentPage: number,
    restaurantListTotalPages: number,
    searchLocation: string | null,
    searchText: string | null,
    restaurantDetail: {
        restaurant: RestaurantDetailType | null,
        status: 'idle' | "loading" | "succeeded" | "failed",
        error: string | null
    }
};

const initialState: RestaurantStateI = {
    statusLastRecommendationRestaurant: "idle",
    statusRestaurantList: "idle",
    loading: false,
    message: '',
    showMessage: false,
    restaurantRecommendationList: [],
    error: null,
    restaurantList: [],
    restaurantListPageSize: 8,
    restaurantListCurrentPage: 1,
    restaurantListTotalPages: 1,
    searchLocation: "",
    searchText: "",
    restaurantDetail: {
        restaurant: null,
        status: "idle",
        error: null
    }
}

export const getRecommendationRestaurantList = createAsyncThunk('recommendation-trip-restaurant',
    async (_, { rejectWithValue }) => {
        try {
            const response = await RestaurantService.recommendationRestaurant();
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

export const getTripRestaurantList = createAsyncThunk('get-trip-restaurant-list',
    async (_, { rejectWithValue, getState }) => {
        try {
            let state = getState();
            const response = await RestaurantService.restaurantList(state);
            const restaurant_list: RestaurantType[] = response.data?.results;
            const total_pages: number = response.data?.total_pages || 1;
            const current_page: number = response.data?.current_page || 1;
            return { restaurant_list, total_pages, current_page };
        } catch (error) {
            let errorMessage = 'Error';
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }
            return rejectWithValue({ message: errorMessage });
        }
    }
)

export const getRestaurantDetailInfo = createAsyncThunk('get-restaurant-detail',
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await RestaurantService.getRestaurantDetail(id);
            const restaurant_detail: RestaurantDetailType = response.data;
            return restaurant_detail;
        } catch (error) {
            let errorMessage = 'Error';
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }
            return rejectWithValue({ message: errorMessage });
        }
    }
)

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.restaurantListCurrentPage = action.payload
            state.statusRestaurantList = "idle"
        },
        changeSearchLocation: (state, action) => {
            state.searchLocation = action.payload?.location
            state.searchText = action.payload?.search
            state.restaurantListCurrentPage = 1
            state.statusRestaurantList = "idle"
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getRecommendationRestaurantList.pending, (state) => {
                state.loading = true
                state.error = null
                state.statusLastRecommendationRestaurant = "loading"
            })
            .addCase(getRecommendationRestaurantList.fulfilled, (state, action: PayloadAction<RecommendationType[]>) => {
                state.loading = false
                let locationList = action?.payload
                state.restaurantRecommendationList = locationList
                state.statusLastRecommendationRestaurant = "succeeded"
            })
            .addCase(getRecommendationRestaurantList.rejected, (state, _) => {
                state.loading = false
                state.statusLastRecommendationRestaurant = "failed"
                // state.message = action.payload?.message || 'Failed to fetch Restaurant';
                state.showMessage = true
            })
            .addCase(getTripRestaurantList.pending, (state) => {
                state.loading = true
                state.error = null
                state.statusRestaurantList = "loading"
            })
            .addCase(getTripRestaurantList.fulfilled, (state, action: PayloadAction<{ restaurant_list: RestaurantType[], total_pages: number, current_page: number }>) => {
                state.loading = false
                let { restaurant_list, total_pages, current_page } = action?.payload || { restaurant_list: [], total_pages: 1, current_page: 1 };
                state.restaurantList = restaurant_list
                state.restaurantListTotalPages = total_pages
                state.restaurantListCurrentPage = current_page
                state.statusRestaurantList = "succeeded"
            })
            .addCase(getTripRestaurantList.rejected, (state, _) => {
                state.loading = false
                state.statusRestaurantList = "failed"
                // state.error = action.payload?.message || 'Failed to fetch user';
            })
            .addCase(getRestaurantDetailInfo.pending, (state) => {
                state.restaurantDetail.status = "loading"
                state.restaurantDetail.error = ''
            })
            .addCase(getRestaurantDetailInfo.fulfilled, (state, action) => {
                state.restaurantDetail.status = "succeeded"
                state.restaurantDetail.restaurant = action.payload
            })
            .addCase(getRestaurantDetailInfo.rejected, (state, _) => {
                state.restaurantDetail.status = "failed"
                state.restaurantDetail.error = 'Xatolik yuzaga keldi'
                // state.error = action.payload?.message || 'Failed to fetch hotel';
            })
    }
})



export const { changePage, changeSearchLocation } = restaurantSlice.actions


export const getStatusLastRecommendationRestaurant = (state: RootState) => state.restaurant.statusLastRecommendationRestaurant;
export const getRestaurantloading = (state: RootState) => state.restaurant.loading;
export const getRestaurantmessage = (state: RootState) => state.restaurant.message;
export const getRestaurantshowMessage = (state: RootState) => state.restaurant.showMessage;
export const getRestaurantRecommendationList = (state: RootState) => state.restaurant.restaurantRecommendationList;
export const getRestaurantError = (state: RootState) => state.restaurant.error;
export const getRestaurantList = (state: RootState) => state.restaurant.restaurantList;
export const getRestaurantListPageSize = (state: RootState) => state.restaurant.restaurantListPageSize;
export const getRestaurantListCurrentPage = (state: RootState) => state.restaurant.restaurantListCurrentPage;
export const getRestaurantListTotalPages = (state: RootState) => state.restaurant.restaurantListTotalPages;
export const getStatusRestaurantList = (state: RootState) => state.restaurant.statusRestaurantList
export const getRestaurantDetail = (state: RootState) => state.restaurant.restaurantDetail


export default restaurantSlice.reducer
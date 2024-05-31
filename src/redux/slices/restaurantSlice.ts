import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RecommendationType } from "../../utils/response_types";
import RestaurantService from "../../services/RestaurantService";
import { AxiosError } from "axios";
import { RootState } from "../store";

export interface RestaurantStateI {
    statusLastRecommendationRestaurant: 'idle' | "loading" | "succeeded" | "failed",
    restaurantRecommendationList: RecommendationType[] | null
    loading: boolean,
    message: string,
    showMessage: boolean,
    error: null,
};

const initialState: RestaurantStateI = {
    statusLastRecommendationRestaurant: "idle",
    loading: false,
    message: '',
    showMessage: false,
    restaurantRecommendationList: [],
    error: null
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

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {

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
    }
})

// export const { } = restaurantSlice.actions


export const getStatusLastRecommendationRestaurant = (state: RootState) => state.restaurant.statusLastRecommendationRestaurant;
export const getRestaurantloading = (state: RootState) => state.restaurant.loading;
export const getRestaurantmessage = (state: RootState) => state.restaurant.message;
export const getRestaurantshowMessage = (state: RootState) => state.restaurant.showMessage;
export const getRestaurantRecommendationList = (state: RootState) => state.restaurant.restaurantRecommendationList;
export const getRestaurantError = (state: RootState) => state.restaurant.error;

export default restaurantSlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { HotelToTripType, RestaurantToTripType, TripCreateType } from "../../utils/request_types"
import TripService from "../../services/TripService"
import { AxiosError } from "axios"
import { RootState } from "../store"
import { TripType } from "../../utils/response_types"

export interface TripState {
    newTrip: {
        newTripCreate: TripCreateType | null,
        newTripCreateLoading: boolean | null,
        newTripCreateMessage: string | null,
    },
    tripList: {
        tripList: TripType[] | null,
        tripListLoading: boolean | null,
        tripListMessage: string | null,
        tripListStatus: 'idle' | "loading" | "succeeded" | "failed",
    },
    addHotel: {
        newOrderedHotel: HotelToTripType | null,
        status: boolean | null,
        message: string | null,
        loading: boolean,
        error: boolean | null
    },
    addRestaurant: {
        newOrderedRestaurant: RestaurantToTripType | null,
        status: boolean | null,
        message: string | null,
        loading: boolean,
        error: boolean | null
    }
}

const initialState: TripState = {
    newTrip: {
        newTripCreate: null,
        newTripCreateLoading: false,
        newTripCreateMessage: '',
    },
    tripList: {
        tripList : [],
        tripListLoading: false,
        tripListMessage: "",
        tripListStatus: "idle"
    },
    addHotel: {
        newOrderedHotel: null,
        status: null,
        message: null,
        loading: false,
        error: null
    },
    addRestaurant: {
        newOrderedRestaurant: null,
        status: null,
        message: null,
        loading: false,
        error: null
    }
}

export const createTrip = createAsyncThunk('create-trip',
    async (newTrip: TripCreateType, { rejectWithValue }) => {
        try {
            const response = await TripService.createTrip(newTrip)
            const new_trip: TripCreateType = response.data?.results
            return new_trip
        } catch (error) {
            let errorMessage = 'Error'
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message
            }
            return rejectWithValue({ message: errorMessage })
        }
    }
)

export const getTripList = createAsyncThunk('get-trip-list',
    async (_, { rejectWithValue }) => {
        try{
            const response = await TripService.getTripList()
            const trip_list: TripType[] = response.data?.results
            return trip_list
        } catch (error) {
            let errorMessage = 'Error'
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message
            }
            return rejectWithValue({ message: errorMessage })
        }
    }
)

export const addHotelToTrip = createAsyncThunk('add-hotel-to-trip',
    async (hotelToTrip: HotelToTripType, { rejectWithValue }) => {
        try {
            const response = await TripService.addHotelToTrip(hotelToTrip)
            const new_order: HotelToTripType = response.data
            return new_order
        } catch (error: AxiosError | any) {
            let errorMessage = 'Error'
            let errorList: string[] = []
            Object.entries(error?.response?.data).forEach(([key, value]) => {
                errorList.push(`${key}: ${value}`)
            })
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message
            }
            return rejectWithValue({ message: errorMessage, errorList })
        }
    }
)

export const deleteTrip = createAsyncThunk('delete-trip',
    async (trip_id: number, { rejectWithValue }) => {
        try {
            const response = await TripService.deleteTrip(trip_id)
            return {response: response, trip_id}
        } catch (error: AxiosError | any) {
            let errorMessage = 'Error'
            let errorList: string[] = []
            Object.entries(error?.response?.data).forEach(([key, value]) => {
                errorList.push(`${key}: ${value}`)
            })
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message
            }
            return rejectWithValue({ message: errorMessage, errorList })
        }
    }
)

export const addRestourantToTrip = createAsyncThunk('add-restourant-to-trip',
async (restaurantToTrip: RestaurantToTripType, { rejectWithValue }) => {
    try {
        const response = await TripService.addRestaurant(restaurantToTrip)
        const new_order: RestaurantToTripType = response.data
        return new_order
    } catch (error: AxiosError | any) {
        let errorMessage = 'Error'
        let errorList: string[] = []
        Object.entries(error?.response?.data).forEach(([key, value]) => {
            errorList.push(`${key}: ${value}`)
        })
        if (error instanceof AxiosError && error.response?.data?.message) {
            errorMessage = error.response.data.message
        }
        return rejectWithValue({ message: errorMessage, errorList })
    }
}
)

export const tripSlice = createSlice({
    name: 'trip',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(createTrip.pending, (state) => {
            state.newTrip.newTripCreateLoading = true;
        })
        .addCase(createTrip.fulfilled, (state, action) => {
            state.newTrip.newTripCreate = action.payload;
            state.newTrip.newTripCreateLoading = false;
            state.newTrip.newTripCreateMessage = ""
            state.tripList.tripListStatus = "idle";
        })
        .addCase(createTrip.rejected, (state, _) => {
            state.newTrip.newTripCreateLoading = false;
            // state.newTrip.newTripCreateMessage = action.payload.message;
            state.newTrip.newTripCreateMessage = "Xatolik yuzaga keldi";
        })
        .addCase(getTripList.pending, (state) => {
            state.tripList.tripListLoading = true;
            state.tripList.tripListStatus = "loading";
        })
        .addCase(getTripList.fulfilled, (state, action) => {
            state.tripList.tripList = action.payload;
            state.tripList.tripListLoading = false;
            state.tripList.tripListMessage = "";
            state.tripList.tripListStatus = "succeeded";
        })
        .addCase(getTripList.rejected, (state, _) => {
            state.tripList.tripListLoading = false;
            // state.newTrip.newTripCreateMessage = action.payload.message;
            state.tripList.tripListMessage = "Xatolik yuzaga keldi";
            state.tripList.tripListStatus = "failed";
        })
        .addCase(addHotelToTrip.pending, (state) => {
            state.addHotel.loading = true
            state.addHotel.status = false
            state.addHotel.error = false
        })
        .addCase(addHotelToTrip.fulfilled, (state, action) => {
            state.addHotel.newOrderedHotel = action.payload
            state.addHotel.status = true
            state.addHotel.loading = false
            state.addHotel.message = "Mehmonhona muvofaqqiyali qushildi!!!"
        })
        .addCase(addHotelToTrip.rejected, (state, action) => {
            state.addHotel.status = true
            state.addHotel.loading = false
            state.addHotel.error = true
            const errorpayload: any = action?.payload
            state.addHotel.message = errorpayload.errorList?.join(",\n")
            // state.addHotel.message = "Xatolik yuzaga keldi"
        })
        .addCase(addRestourantToTrip.pending, (state) => {
            state.addRestaurant.loading = true
            state.addRestaurant.status = false
            state.addRestaurant.error = false
        })
        .addCase(addRestourantToTrip.fulfilled, (state, action) => {
            state.addRestaurant.newOrderedRestaurant = action.payload
            state.addRestaurant.status = true
            state.addRestaurant.loading = false
            state.addRestaurant.message = "Restoran muvofaqqiyali qushildi!!!"
        })
        .addCase(addRestourantToTrip.rejected, (state, action) => {
            state.addRestaurant.status = true
            state.addRestaurant.loading = false
            state.addRestaurant.error = true
            const errorpayload: any = action?.payload
            state.addRestaurant.message = errorpayload.errorList?.join(",\n")
            // state.addHotel.message = "Xatolik yuzaga keldi"
        })
        .addCase(deleteTrip.pending, (state) => {
            state.tripList.tripListLoading = true;
            state.tripList.tripListStatus = "loading";
        })
        .addCase(deleteTrip.fulfilled, (state, action) => {
            state.tripList.tripList = state.tripList.tripList?.filter((trip: TripType) => trip.id !== action.payload?.trip_id) || []
            state.tripList.tripListLoading = false;
            state.tripList.tripListMessage = "";
            state.tripList.tripListStatus = "succeeded";
        })
        .addCase(deleteTrip.rejected, (state, _) => {
            state.tripList.tripListLoading = false;
            state.tripList.tripListMessage = "Xatolik yuzaga keldi";
            state.tripList.tripListStatus = "failed";
        })
    }
})

// export const { } = hotelSlice.actions

export const getNewTrip = (state: RootState) => state.trip.newTrip
export const getTrips = (state: RootState) => state.trip.tripList
export const getAddHotel = (state: RootState) => state.trip.addHotel
export const getAddRestaurant = (state: RootState) => state.trip.addRestaurant

export default tripSlice.reducer
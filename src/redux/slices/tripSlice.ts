import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TripCreateType } from "../../utils/request_types";
import TripService from "../../services/TripService";
import { AxiosError } from "axios";
import { RootState } from "../store";
import { TripType } from "../../utils/response_types";

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
    }
}

export const createTrip = createAsyncThunk('create-trip',
    async (newTrip: TripCreateType, { rejectWithValue }) => {
        try {
            const response = await TripService.createTrip(newTrip);
            const new_trip: TripCreateType = response.data?.results;
            return new_trip;
        } catch (error) {
            let errorMessage = 'Error';
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }
            return rejectWithValue({ message: errorMessage });
        }
    }
)

export const getTripList = createAsyncThunk('get-trip-list',
    async (_, { rejectWithValue }) => {
        try{
            const response = await TripService.getTripList();
            const trip_list: TripType[] = response.data?.results;
            return trip_list;
        } catch (error) {
            let errorMessage = 'Error';
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }
            return rejectWithValue({ message: errorMessage });
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
    }
})

// export const { } = hotelSlice.actions

export const getNewTrip = (state: RootState) => state.trip.newTrip
export const getTrips = (state: RootState) => state.trip.tripList

export default tripSlice.reducer
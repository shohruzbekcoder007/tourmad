import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CheapPriseType, CitiesType } from "../../utils/response_types";
import TicketService from "../../services/TicketService";
import { AxiosError } from "axios";
import { RootState } from "../store";
import dayjs, { Dayjs } from "dayjs";
import { enqueueSnackbar } from "notistack";

export interface TicketState {
  statusCitiesList: "idle" | "loading" | "succeeded" | "failed";
  statusCheapTicketList: "idle" | "loading" | "succeeded" | "failed";
  cheapTicketList: CheapPriseType[];
  loading: boolean;
  message: string;
  fromCity: { label: string; value: string } | null;
  toCity: { label: string; value: string } | null;
  date: Dayjs;
  showMessage: boolean;
  citiesList: CitiesType[];
  error: null;
  errorGetTicket: string | null;
}

const initialState: TicketState = {
  statusCitiesList: "idle",
  statusCheapTicketList: "idle",
  cheapTicketList: [],
  loading: false,
  message: "",
  fromCity: null,
  toCity: null,
  date: dayjs(Date.now()),
  showMessage: false,
  citiesList: [],
  error: null,
  errorGetTicket: ""
};

export const getCitiesTicketList = createAsyncThunk(
  "get-cities-ticket-list",
  async (_, { rejectWithValue }) => {
    try {
      const response = await TicketService.citiesTicket();
      const cities_list: CitiesType[] = response.data.results;
      return cities_list;
    } catch (error) {
      let errorMessage = "Error";
      if (error instanceof AxiosError && error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      return rejectWithValue({ message: errorMessage });
    }
  }
);

export const getCheapTicketList = createAsyncThunk<
CheapPriseType[], // Type of returned data on success
void,             // No arguments expected when calling the thunk
{ rejectValue: { message: string } } // Type of rejected value
>(
  "get-cheap-ticket-list",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      // const fromCity = state.ticket.fromCity?.value;
      const fromCity = "MOW";
      // const toCity = state.ticket.toCity?.value;
      const toCity = "TAS";
      // const date = state.ticket.date.format("YYYY-MM-DD");
      const date = "2024-12-20";

      if (!fromCity || !toCity) {
        throw new Error("From city and To city are required.");
      }
      const query = `origin=${fromCity}&destination=${toCity}&depart_date=${date}`;
      const response = await TicketService.cheapTicket(query);
      const cheap_ticket_list: CheapPriseType[] = response.data?.data;
      return cheap_ticket_list;
    } catch (error) {
      console.log(error);
      let errorMessage = "Error";
      if (error instanceof AxiosError && error.response?.data?.error) {
        errorMessage = error.response.data.error;
        enqueueSnackbar(errorMessage, { variant: "error" });
      }
      return rejectWithValue({ message: errorMessage });
    }
  }
);

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setFromCity: (state, action) => {
      state.fromCity = action.payload; // Save selected city in the state
    },
    setToCity: (state, action) => {
      state.toCity = action.payload; // Save selected city in the state
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCitiesTicketList.pending, (state) => {
        state.error = null;
      })
      .addCase(getCitiesTicketList.fulfilled, (state, action) => {
        state.statusCitiesList = "succeeded";
        state.citiesList = action.payload;
      })
      .addCase(getCitiesTicketList.rejected, (state, _) => {
        state.statusCitiesList = "failed";
      })

      .addCase(getCheapTicketList.pending, (state) => {
        state.error = null;
      })
      .addCase(getCheapTicketList.fulfilled, (state, action) => {
        state.statusCheapTicketList = "succeeded";
        state.cheapTicketList = action.payload;
      })
      .addCase(getCheapTicketList.rejected, (state, action) => {
        state.statusCheapTicketList = "failed";
        state.errorGetTicket = action.payload?.message || null;
      });
  },
});

export const { setFromCity, setToCity, setDate } = ticketSlice.actions;
export const getCitiesList = (state: RootState) => state.ticket.citiesList;
export const getTicketStatus = (state: RootState) =>
  state.ticket.statusCitiesList;
export const getStatusCheapTicketList = (state: RootState) =>
  state.ticket.statusCheapTicketList;
export const getCheapTicketDataList = (state: RootState) =>
  state.ticket.cheapTicketList;
export const getDate = (state: RootState) => state.ticket.date;
export const getErrorGetTicket = (state: RootState ) => state.ticket.errorGetTicket
export default ticketSlice.reducer;

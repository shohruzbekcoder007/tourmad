import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CitiesType } from "../../utils/response_types";
import TicketService from "../../services/TicketService";
import { AxiosError } from "axios";
import { RootState } from "../store";

export interface TicketState {
  statusCitiesList: "idle" | "loading" | "succeeded" | "failed";
  loading: boolean;
  message: string;
  showMessage: boolean;
  citiesList: CitiesType[];
  error: null;
}

const initialState: TicketState = {
  statusCitiesList: "idle",
  loading: false,
  message: "",
  showMessage: false,
  citiesList: [],
  error: null,
};

export const getCitiesTicketList = createAsyncThunk(
  "get-cities-ticket-list",
  async (_, { rejectWithValue }) => {
    try {
      const response = await TicketService.citiesTicket();
      const cities_list: CitiesType[] = response.data;
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

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {},
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
      });
  },
});
export const getCitiesList = (state: RootState) => state.ticket.citiesList;
export const getTicketStatus = (state: RootState) =>
  state.ticket.statusCitiesList;
export default ticketSlice.reducer;

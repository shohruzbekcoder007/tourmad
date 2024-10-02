import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  HistoryOrPlaceCategryType,
  HistoryType,
  PlanDetailType,
  RecommendationType,
} from "../../utils/response_types";
import PlanService from "../../services/PlanService";
import { AxiosError } from "axios";
import { RootState } from "../store";

export interface PlantStateI {
  statusLastRecommendationPlan: "idle" | "loading" | "succeeded" | "failed";
  planRecommendationList: RecommendationType[] | null;
  statusCategoryPlan: "idle" | "loading" | "succeeded" | "failed";
  planCategoryList: HistoryOrPlaceCategryType[] | null;
  statusPlanList: "idle" | "loading" | "succeeded" | "failed";
  planList: HistoryType[] | null;
  loading: boolean;
  message: string;
  showMessage: boolean;
  error: null;
  planListPageSize: number;
  planListCurrentPage: number;
  planListTotalPages: number;
  searchLocation: string | null;
  categoryID: string | null;
  searchText: string | null;
  planDetail: {
    plan_detail: PlanDetailType | null,
    status: 'idle' | "loading" | "succeeded" | "failed",
    error: string | null
  }
}

const initialState: PlantStateI = {
  statusLastRecommendationPlan: "idle",
  planRecommendationList: [],
  statusCategoryPlan: "idle",
  planCategoryList: [],
  statusPlanList: "idle",
  planList: [],
  loading: false,
  message: "",
  showMessage: false,
  error: null,
  planListPageSize: 1,
  planListCurrentPage: 1,
  planListTotalPages: 1,
  searchLocation: "",
  categoryID: "",
  searchText: "",
  planDetail: {
    plan_detail: null,
    status: "idle",
    error: null
  }
};

export const getRecommendationPlanList = createAsyncThunk(
  "recommendation-trip-plan",
  async (_, { rejectWithValue }) => {
    try {
      const response = await PlanService.recommendationPlan();
      const plan_list: RecommendationType[] = response.data?.results;
      return plan_list;
    } catch (error) {
      let errorMessage = "Error";
      if (error instanceof AxiosError && error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      return rejectWithValue({ message: errorMessage });
    }
  }
);

export const getCategoryPlanList = createAsyncThunk(
  "category-trip-plan",
  async (_, { rejectWithValue }) => {
    try {
      const response = await PlanService.getPlanCategory();
      const plan_category_list: HistoryOrPlaceCategryType[] =
        response.data?.results;
      return plan_category_list;
    } catch (error) {
      let errorMessage = "Error";
      if (error instanceof AxiosError && error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      return rejectWithValue({ message: errorMessage });
    }
  }
);

export const getTripPlanList = createAsyncThunk(
  "get-trip-plan-list",
  async (_, { rejectWithValue, getState }) => {
    try {
      let state = getState();
      const response = await PlanService.plantList(state);
      const plan_list: HistoryType[] = response.data?.results;
      const total_pages: number = response.data?.total_pages || 1;
      const current_page: number = response.data?.current_page || 1;
      return { plan_list, total_pages, current_page };
    } catch (error) {
      let errorMessage = "Error";
      if (error instanceof AxiosError && error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      return rejectWithValue({ message: errorMessage });
    }
  }
);

export const getPlanDetailInfo = createAsyncThunk('get-plan-detail',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await PlanService.getPlanDetail(id);
      const plan_detail: PlanDetailType = response.data;
      return plan_detail;
    } catch (error) {
      let errorMessage = 'Error';
      if (error instanceof AxiosError && error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      return rejectWithValue({ message: errorMessage });
    }
  }
)

export const planSlice = createSlice({
  name: "plan",
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.planListCurrentPage = action.payload;
      state.statusPlanList = "idle";
    },
    changeSearchLocation: (state, action) => {
      state.searchLocation = action.payload?.location;
      state.searchText = action.payload?.search;
      state.planListCurrentPage = 1;
      state.statusPlanList = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecommendationPlanList.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.statusLastRecommendationPlan = "loading";
      })
      .addCase(
        getRecommendationPlanList.fulfilled,
        (state, action: PayloadAction<RecommendationType[]>) => {
          state.loading = false;
          let planList = action?.payload;
          state.planRecommendationList = planList;
          state.statusLastRecommendationPlan = "succeeded";
        }
      )
      .addCase(getRecommendationPlanList.rejected, (state, _) => {
        state.loading = false;
        state.statusLastRecommendationPlan = "failed";
        // state.message = action.payload?.message || 'Failed to fetch Plan';
        state.showMessage = true;
      })

      .addCase(getCategoryPlanList.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.statusCategoryPlan = "loading";
      })
      .addCase(
        getCategoryPlanList.fulfilled,
        (state, action: PayloadAction<HistoryOrPlaceCategryType[]>) => {
          state.loading = false;
          let planCategoryList = action?.payload;
          state.planCategoryList = planCategoryList;
          state.statusCategoryPlan = "succeeded";
        }
      )
      .addCase(getCategoryPlanList.rejected, (state, _) => {
        state.loading = false;
        state.statusCategoryPlan = "failed";
        // state.message = action.payload?.message || 'Failed to fetch Plan';
        state.showMessage = true;
      })
      .addCase(getTripPlanList.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.statusPlanList = "loading";
      })
      .addCase(
        getTripPlanList.fulfilled,
        (
          state,
          action: PayloadAction<{
            plan_list: HistoryType[];
            total_pages: number;
            current_page: number;
          }>
        ) => {
          state.loading = false;
          let { plan_list, total_pages, current_page } = action?.payload || {
            plan_list: [],
            total_pages: 1,
            current_page: 1,
          };
          state.planList = plan_list;
          state.planListTotalPages = total_pages;
          state.planListCurrentPage = current_page;
          state.statusPlanList = "succeeded";
        }
      )
      .addCase(getTripPlanList.rejected, (state, _) => {
        state.loading = false;
        state.statusPlanList = "failed";
        // state.error = action.payload?.message || 'Failed to fetch user';
      })


      // detail
      .addCase(getPlanDetailInfo.pending, (state) => {
        state.planDetail.status = "loading"
        state.planDetail.error = ""
      })
      .addCase(getPlanDetailInfo.fulfilled, (state, action) => {
        state.planDetail.plan_detail = action.payload
        state.planDetail.status = "succeeded"
      })
      .addCase(getPlanDetailInfo.rejected, (state, _) => {
        state.planDetail.status = "failed"
        state.planDetail.error = "Xatolik yuzaga keldi"
      })
  },
});

export const { changePage, changeSearchLocation } = planSlice.actions;

export const getStatusLastRecommendationPlan = (state: RootState) =>
  state.plan.statusLastRecommendationPlan;
export const getPlanRecommendationList = (state: RootState) =>
  state.plan.planRecommendationList;
export const getPlanloading = (state: RootState) => state.plan.loading;
export const getPlanmessage = (state: RootState) => state.plan.message;
export const getPlanshowMessage = (state: RootState) => state.plan.showMessage;
export const getPlanError = (state: RootState) => state.plan.error;
export const getPlanListPageSize = (state: RootState) =>
  state.plan.planListPageSize;
export const getPlanListCurrentPage = (state: RootState) =>
  state.plan.planListCurrentPage;
export const getPlanListTotalPages = (state: RootState) =>
  state.plan.planListTotalPages;
export const getStatusPlantList = (state: RootState) =>
  state.plan.statusPlanList;
export const getPlanList = (state: RootState) => state.plan.planList;
export const getPlanCategoryList = (state: RootState) =>
  state.plan.planCategoryList;
export const getStatusPlanCategory = (state: RootState) =>
  state.plan.statusCategoryPlan;
export const getPlanDetail = (state: RootState) => state.plan.planDetail


export default planSlice.reducer;

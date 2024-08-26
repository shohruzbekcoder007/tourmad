import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ConsultingCategoryType, ConsultingType } from "../../utils/response_types";
import { AxiosError } from "axios";
import ConsultingService from "../../services/ConsultingService";
import { RootState } from "../store";

export interface ConsultingState {
    statusConsultingList: "idle" | "loading" | "succeeded" | "failed",
    statusConsultingCategoryList: "idle" | "loading" | "succeeded" | "failed",
    loading: boolean,
    loadingConsultingCategory: boolean,
    message: string,
    showMessage: boolean,
    consultingList: ConsultingType[] | null,
    consultingCategoryList: ConsultingCategoryType[] | null,
    error: null,
    consultingListPageSize: number,
    consultingListCurrentPage: number,
    consultingListTotalPages: number,
    consulting_category: string,
    consulting_search: string,
    consultingDetail: {
        consulting: ConsultingType | null,
        status: 'idle' | "loading" | "succeeded" | "failed",
        error: string | null
    }
}

const initialState: ConsultingState = {
    statusConsultingList: "idle",
    statusConsultingCategoryList: "idle",
    loading: false,
    loadingConsultingCategory: false,
    message: '',
    showMessage: false,
    consultingList: [],
    consultingCategoryList: [],
    error: null,
    consultingListPageSize: 8,
    consultingListCurrentPage: 1,
    consultingListTotalPages: 1,
    consulting_category: '',
    consulting_search: '',
    consultingDetail: {
        consulting: null,
        status: "idle",
        error: null
    }
}

export const getTripConsultingList = createAsyncThunk('get-trip-consulting-list',
    async (_, { rejectWithValue, getState }) => {
        try {
            let state = getState();
            const response = await ConsultingService.tripConsulting(state);
            const consulting_list: ConsultingType[] = response.data?.results;
            const total_pages: number = response.data?.total_pages || 1;
            const current_page: number = response.data?.current_page || 1;
            return { consulting_list, total_pages, current_page };
        } catch (error) {
            let errorMessage = "Error";
            if (error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message;
            }
            return rejectWithValue({ message: errorMessage })
        }
    }
)

export const getTripConsultingCategoryList = createAsyncThunk('get-trip-consulting-category-list', 
    async (_, { rejectWithValue }) => {
        try {
            const response = await ConsultingService.tripConsultingCategory();
            const consulting_category_list: ConsultingCategoryType[] = response.data?.results;
            return  consulting_category_list 
        } catch (error) {
            let errorMessage = "Error";
            if(error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message
            }
            return rejectWithValue({message: errorMessage})
        }
    }
)

// export const getTripConsultingSearchList = createAsyncThunk('get-trip-consulting-search-list', 
//     async (_, {rejectWithValue}) => {
//         try {
//             const response = await ConsultingService.tripConsulting()
//         }
//     }
// )

export const getConsultingDetailInfo = createAsyncThunk('get-consulting-detail',
    async (id: string, { rejectWithValue }) => {
        try {
            const response = await ConsultingService.getConsultingDetail(id);
            const consulting_detail: ConsultingType = response.data;
            return consulting_detail
        } catch (error) {
            let errorMessage = 'Error';
            if(error instanceof AxiosError && error.response?.data?.message) {
                errorMessage = error.response.data.message
            }
            return rejectWithValue({message: errorMessage})
        }
    }
)

export const consultingSlice = createSlice({
    name: 'consulting',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.consultingListCurrentPage = action.payload
            state.statusConsultingList = "idle"
        },
        changeCategory: (state, action) => {
            state.consulting_category = action.payload
            state.consultingListCurrentPage = 1
            state.statusConsultingList = "idle"
        },
        consultingSearch: (state, action) => {
            state.consulting_search = action.payload
            state.consultingListCurrentPage = 1
            state.statusConsultingList = "idle"
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTripConsultingList.pending, (state) => {
                state.loading = true
                state.error = null
                state.statusConsultingList = "loading"
            })
            .addCase(getTripConsultingList.fulfilled, (state, action: PayloadAction<{consulting_list: ConsultingType[], total_pages: number, current_page: number }>) => {
                state.loading = false
                let {consulting_list, total_pages, current_page} = action?.payload || { consulting_list: [], total_pages: 1, current_page: 1};
                state.consultingList = consulting_list
                state.consultingListTotalPages = total_pages
                state.consultingListCurrentPage = current_page
                state.statusConsultingList = "succeeded"
            })
            .addCase(getTripConsultingList.rejected, (state, _) => {
                state.loading = false
                state.statusConsultingList = "failed"
                // state.error = action.payload?.message || 'failed'
            })

            //consulting/categories
            .addCase(getTripConsultingCategoryList.pending, (state) => {
                state.loadingConsultingCategory = true
                state.error = null
                state.statusConsultingCategoryList = "loading"
            })
            .addCase(getTripConsultingCategoryList.fulfilled, (state, action: PayloadAction<ConsultingCategoryType[]>) => {
                state.loadingConsultingCategory = false
                let consulting_category_list = action?.payload 
                state.consultingCategoryList = consulting_category_list
                state.error = null
                state.statusConsultingCategoryList = "succeeded"
            })
            .addCase(getTripConsultingCategoryList.rejected, (state, _) => {
                state.loadingConsultingCategory = false
                state.statusConsultingCategoryList = "failed"
            })

            //consulting-detail
            .addCase(getConsultingDetailInfo.pending, (state) => {
                state.consultingDetail.status = "loading"
                state.consultingDetail.error = ''
            })
            .addCase(getConsultingDetailInfo.fulfilled, (state, action) => {
                state.consultingDetail.status = "succeeded"
                state.consultingDetail.consulting = action.payload
            })
            .addCase(getConsultingDetailInfo.rejected, (state, _) => {
                state.consultingDetail.status = "failed"
                state.consultingDetail.error = "Xatolik yuzaga keldi"
                // state.error = action.payload?.message || 'Failed to fetch hotel';
            })
    }
})

export const { changePage, changeCategory, consultingSearch } = consultingSlice.actions

export const getStatusConsultingList = (state: RootState) => state.consulting.statusConsultingList
export const getConsultingError = (state: RootState) => state.consulting.error
export const getConsultingLoading = (state: RootState) => state.consulting.loading
export const getConsultingMessage = (state: RootState) => state.consulting.message
export const getConsultingShowMessage = (state: RootState) => state.consulting.showMessage
export const getConsultingList = (state: RootState) => state.consulting.consultingList
export const getConsultingListPageSize = (state: RootState) => state.consulting.consultingListPageSize
export const getConsultingListCurrentPage = (state: RootState) => state.consulting.consultingListCurrentPage
export const getConsultingListTotalPages = (state: RootState) => state.consulting.consultingListTotalPages
export const getConsultingDetail = (state: RootState) => state.consulting.consultingDetail
export const getStatusConsultingCategoryList = (state: RootState) => state.consulting.statusConsultingCategoryList
export const getConsultingCategoryList = (state: RootState) => state.consulting.consultingCategoryList
export const getConsultingCategoryLoading = (state: RootState) => state.consulting.loadingConsultingCategory
export const getConsultingCategory = (state: RootState) => state.consulting.consulting_category
export default consultingSlice.reducer
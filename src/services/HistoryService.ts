import { HistoryState } from "../redux/slices/historySlice"
import { history_trip_history } from "../utils/API_urls"
import { getRequest } from "../utils/request"

class HistoryService {

    static tripHistory = (state: any) => {

        let history: HistoryState = state?.history as HistoryState

        const { historyListPageSize,  historyListCurrentPage, searchLocation } = history

        return getRequest(`${history_trip_history}?size=${historyListPageSize}&page=${historyListCurrentPage}&location=${searchLocation || ""}`)
    }

    static createHotelOrder = () => {

    }

    static updateHotelOrderDetail = () => {

    }

    static hotelDetail = () => {
        
    }

   
}

export default HistoryService
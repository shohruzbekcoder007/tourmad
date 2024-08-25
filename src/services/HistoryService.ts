import { HistoryState } from "../redux/slices/historySlice"
import { common_location_history, history_trip_history } from "../utils/API_urls"
import { getRequest } from "../utils/request"

class HistoryService {

    static tripHistory = (state: any) => {

        let history: HistoryState = state?.history as HistoryState

        const { historyListPageSize,  historyListCurrentPage, searchLocation } = history

        return getRequest(`${history_trip_history}?size=${historyListPageSize}&page=${historyListCurrentPage}&location=${searchLocation || ""}`)
    }

    static commonHistoryLocation = () => {
        return getRequest(common_location_history)
    }

    static createHotelOrder = () => {

    }

    static updateHotelOrderDetail = () => {

    }

    static getHistoryDetail = (id: string) => {
        return getRequest(`${history_trip_history}/${id}`)
    }
   
}

export default HistoryService
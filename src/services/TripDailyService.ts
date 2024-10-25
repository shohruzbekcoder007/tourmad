import { location_daily, recommendation_trip_daily } from "../utils/API_urls"
import { getRequest } from "../utils/request"

class TripDailyService {

    static locationDailys = () => {
        return getRequest(`${location_daily}?status=0`)
    }

    // static tripDailys = (state: any) => {

    //     let daily: DailyState = state?.daily as DailyState

    //     const { dailyListPageSize,  dailyListCurrentPage, dailyGrade, dailyPriceFrom, dailyPriceTo, searchLocation, room_style } = daily

    //     let room_style_query: string = room_style
    //     if (room_style === "all") {
    //         room_style_query = ""
    //     }

    //     return getRequest(`${trip_daily}?size=${dailyListPageSize}&page=${dailyListCurrentPage}&grade=${dailyGrade}&price_from=${dailyPriceFrom}&price_to=${dailyPriceTo}&location=${searchLocation || ""}&room_style=${room_style_query || ""}`)
    // }

    static recommendationTripDaily = () => {
        return getRequest(`${recommendation_trip_daily}?status=0`)
    }

    // static getDailyDetail = (id: string) => {
    //     return getRequest(`${trip_daily}/${id}`)
    // }
}

export default TripDailyService
import { recommendation_trip_newTrip } from "../utils/API_urls"
import { getRequest } from "../utils/request"

class TripNewTripService {

    // static locationNewTrips = () => {
    //     return getRequest(`${location_newTrip}`)
    // }

    // static tripNewTrips = (state: any) => {

    //     let newTrip: NewTripState = state?.newTrip as NewTripState

    //     const { newTripListPageSize,  newTripListCurrentPage, newTripGrade, newTripPriceFrom, newTripPriceTo, searchLocation, room_style } = newTrip

    //     let room_style_query: string = room_style
    //     if (room_style === "all") {
    //         room_style_query = ""
    //     }

    //     return getRequest(`${trip_newTrip}?status=1&size=${newTripListPageSize}&page=${newTripListCurrentPage}&grade=${newTripGrade}&price_from=${newTripPriceFrom}&price_to=${newTripPriceTo}&location=${searchLocation || ""}&room_style=${room_style_query || ""}`)
    // }

    static recommendationTripNewTrip = () => {
        return getRequest(`${recommendation_trip_newTrip}`)
    }

    // static getNewTripDetail = (id: string) => {
    //     return getRequest(`${trip_newTrip}/${id}`)
    // }
}

export default TripNewTripService
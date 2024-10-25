import { HotelState } from "../redux/slices/hotelSlice"
import { location_hotel, recommendation_trip_hotel, trip_hotel } from "../utils/API_urls"
import { getRequest } from "../utils/request"

class TripHotelService {

    static locationHotels = () => {
        return getRequest(`${location_hotel}?status=1`)
    }

    static tripHotels = (state: any) => {

        let hotel: HotelState = state?.hotel as HotelState

        const { hotelListPageSize,  hotelListCurrentPage, hotelGrade, hotelPriceFrom, hotelPriceTo, searchLocation, room_style } = hotel

        let room_style_query: string = room_style
        if (room_style === "all") {
            room_style_query = ""
        }

        return getRequest(`${trip_hotel}?size=${hotelListPageSize}&page=${hotelListCurrentPage}&grade=${hotelGrade}&price_from=${hotelPriceFrom}&price_to=${hotelPriceTo}&location=${searchLocation || ""}&room_style=${room_style_query || ""}`)
    }

    static recommendationTripHotel = () => {
        return getRequest(`${recommendation_trip_hotel}?status=1`)
    }

    static getHotelDetail = (id: string) => {
        return getRequest(`${trip_hotel}/${id}`)
    }
}

export default TripHotelService
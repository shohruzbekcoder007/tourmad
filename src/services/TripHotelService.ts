import { HotelState } from "../redux/slices/hotelSlice"
import { location_hotel, recommendation_trip_hotel, trip_hotel } from "../utils/API_urls"
import { getRequest } from "../utils/request"

class TripHotelService {

    static locationHotels = () => {
        return getRequest(location_hotel)
    }

    static tripHotels = (state: any) => {

        let hotel: HotelState = state?.hotel as HotelState

        const { hotelListPageSize,  hotelListCurrentPage} = hotel

        return getRequest(`${trip_hotel}?size=${hotelListPageSize}&page=${hotelListCurrentPage}`)
    }

    static createHotelOrder = () => {

    }

    static updateHotelOrderDetail = () => {

    }

    static hotelDetail = () => {
        
    }

    static recommendationTripHotel = () => {
        return getRequest(recommendation_trip_hotel)
    }
}

export default TripHotelService
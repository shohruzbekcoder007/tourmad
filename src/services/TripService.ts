import { trip_hotel_oder, trip_list, trip_restaurant_oder } from "../utils/API_urls"
import { getRequest, postRequest } from "../utils/request"
import { HotelToTripType, RestaurantToTripType, TripCreateType } from "../utils/request_types"

class TripService {

    static createTrip = (trip: TripCreateType) => {
        return postRequest(trip_list, trip)
    }

    static getTripList = () => {    
        return getRequest(trip_list)
    }

    static addHotelToTrip = (dto: HotelToTripType) => {
        return postRequest(trip_hotel_oder, dto)
    }

    static addRestaurant = (dto: RestaurantToTripType) => {
        return postRequest(trip_restaurant_oder, dto)
    }

}

export default TripService
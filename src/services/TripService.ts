import { trip_hotel_oder, trip_list, trip_restaurant_oder, trip_trip } from "../utils/API_urls"
import { deleteRequest, getRequest, postRequest } from "../utils/request"
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

    static deleteTrip = (trip_id: number) => {
        return deleteRequest(`${trip_trip}/${trip_id}`)
    }

}

export default TripService
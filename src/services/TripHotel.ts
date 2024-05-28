import { trip_hotel } from "../utils/API_urls"
import { getRequest } from "../utils/request"

class TripHotel {
    static trip_hotels = () => {
        return getRequest(trip_hotel)
    }

    static createHotelOrder = () => {

    }

    static updateHotelOrderDetail = () => {

    }

    static hotelDetail = () => {
        
    }
}

export default TripHotel
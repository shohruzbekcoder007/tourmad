import { trip_list } from "../utils/API_urls"
import { getRequest, postRequest } from "../utils/request"
import { TripCreateType } from "../utils/request_types"

class TripService {

    static createTrip = (trip: TripCreateType) => {
        return postRequest(trip_list, trip)
    }

    static getTripList = () => {    
        return getRequest(trip_list)
    }
}

export default TripService
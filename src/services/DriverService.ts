import { recommendation_trip_drive } from "../utils/API_urls"
import { getRequest } from "../utils/request"

class DriverService {
    static recommendationDrive = () => {
        return getRequest(recommendation_trip_drive)
    }
}

export default DriverService

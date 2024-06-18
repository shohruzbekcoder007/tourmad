import { common_location } from "../utils/API_urls"
import { getRequest } from "../utils/request"

class CommonLocationService {
    static CommonLocationList = () => {
        return getRequest(common_location)
    }
}

export default CommonLocationService
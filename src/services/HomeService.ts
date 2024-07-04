import { home_banner } from "../utils/API_urls"
import { getRequest } from "../utils/request"

class HomeService {
    static getBanner = () => {
        return getRequest(home_banner)
    }
}

export default HomeService;
import { recommendation_trip_restaurant } from "../utils/API_urls"
import { getRequest } from "../utils/request"

class RestaurantService {
    static recommendationRestaurant = () => {
        return getRequest(recommendation_trip_restaurant)
    }
}

export default RestaurantService
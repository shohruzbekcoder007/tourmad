import { my_wishlist } from "../utils/API_urls"
import { getRequest } from "../utils/request"

class WishListService {
    static getWishList = () => {
        return getRequest(my_wishlist)
    }
}

export default WishListService;
import { my_wishlist, post_like, post_like_h, post_like_ht, post_like_r } from "../utils/API_urls"
import { getRequest, postRequest } from "../utils/request"

class WishListService {
    static getWishList = () => {
        return getRequest(my_wishlist)
    }
    static postLike = (id: number) => {
        return postRequest(`${post_like}/${id}`, id);
      };
      static postLikeR = (id: number) => {
        return postRequest(`${post_like_r}/${id}`, id);
      };
      static postLikeH = (id: number) => {
        return postRequest(`${post_like_h}/${id}`, id);
      };
      static postLikeHT = (id: number) => {
        return postRequest(`${post_like_ht}/${id}`, id);
      };
}

export default WishListService;
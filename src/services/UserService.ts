import { me } from "../utils/API_urls";
import { getRequest } from "../utils/request";

class UserService{
    static me = () => {
        return getRequest(me)
    }
}


export default UserService;
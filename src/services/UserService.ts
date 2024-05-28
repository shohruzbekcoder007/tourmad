import { login, me } from "../utils/API_urls";
import { getRequest, postRequest } from "../utils/request";

type LoginWithEmailPasswordType = {
    email: string | null | FormDataEntryValue,
    password: string | null | FormDataEntryValue
}

class UserService{

    static me = () => {
        return getRequest(me)
    }

    static login = (data: LoginWithEmailPasswordType) => {
        return postRequest(login, data)
    }
}


export default UserService;
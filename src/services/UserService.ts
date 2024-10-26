import { accounts_profile, login, me, with_google } from "../utils/API_urls";
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

    static account = () => {
        return getRequest(accounts_profile)
    }

    static withGoogle = () => {
        return getRequest(with_google)
    }
}


export default UserService;
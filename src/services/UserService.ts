import { accounts_profile, accounts_register, login, me, with_google } from "../utils/API_urls";
import { getRequest, postRequest, putRequest } from "../utils/request";

type LoginWithEmailPasswordType = {
    email: string | null | FormDataEntryValue,
    password: string | null | FormDataEntryValue
}
export type ChangesType = {
    first_name?: string | null;
    last_name?: string | null;
    middle_name?: string | null;
    gender?: string | null;
    birth_date?: string | null;
    phone_number?: string | null
}

class UserService{

    static me = () => {
        return getRequest(me)
    }

    static saveChanges = (data: ChangesType) => {
        return putRequest(me, data)
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

    static logOut = () => {
        return getRequest(with_google)
    }

    static registirUser = (data: any) => {
        return postRequest(accounts_register, data)
    }
}


export default UserService;
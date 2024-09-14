import { postRequest } from "../utils/request"
import { SubscribeType } from "../utils/request_types"
import { accounts_subscribe_create } from "../utils/API_urls"

class AccountService {
    static getAccountSubscribe = (email: SubscribeType) => {
        return postRequest(`${accounts_subscribe_create}`, email)
    }
}

export default AccountService;
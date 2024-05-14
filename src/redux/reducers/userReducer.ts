import { MeType } from "../../types/apiResponseTypes";
import { ActionTypes } from "../contants/action-types"

interface UserAction {
    type: string;
    payload: MeType;
}

const initialLanguage: MeType | null = null;

export const userReducer = (state = initialLanguage, action: UserAction) => {
    switch (action.type) {
        case ActionTypes.SET_LANGUAGE:
            return action.payload;
        default:
            return state;
    }
};
import { ActionTypes } from "../contants/action-types"

interface LanguageAction {
  type: string;
  payload: string;
}

const initialLanguage: string = "uz";

export const languageReducer = (state: string = initialLanguage, action: LanguageAction) => {
  switch (action.type) {
    case ActionTypes.SET_LANGUAGE:
      return action.payload;
    default:
      return state;
  }
};

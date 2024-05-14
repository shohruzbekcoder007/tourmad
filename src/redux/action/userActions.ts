import { MeType } from '../../types/apiResponseTypes'
import { ActionTypes } from '../contants/action-types'

export const setUser = (user: MeType) => {
    return {
        type: ActionTypes.SET_USER,
        payload: user
    }
}
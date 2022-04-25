import { Reducer } from 'react'
import { UserState, UserAction, UserActionTypes } from '../../models/user.model'

export const userReducer: Reducer<UserState, UserAction> = (
  state: UserState,
  action: UserAction
): UserState => {
  const { type, payload } = action

  switch (type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }
    default:
      throw new Error(`Unhandled type (${type}) in userReducer`)
  }
}

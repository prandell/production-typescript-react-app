import { User } from 'firebase/auth'

export type RandellComicsUser = {
  displayName?: string
  email?: string
  createdAt?: Date
  dateOfBirth?: Date
  address?: string
}

export interface UserState {
  currentUser: User
}

export const enum UserActionTypes {
  SET_CURRENT_USER = 'SET_CURRENT_USER'
}

export type UserAction = { type: UserActionTypes; payload: User }

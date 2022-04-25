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

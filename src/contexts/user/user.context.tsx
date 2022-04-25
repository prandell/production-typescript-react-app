import { User } from 'firebase/auth'
import React, { createContext, useEffect, useReducer } from 'react'
import { UserActionTypes, UserState } from '../../models/user.model'
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener
} from '../../utils/firebase/firebase.utils'
import { userReducer } from './user.reducer'

export interface IUserContext extends UserState {
  setCurrentUser: React.Dispatch<User>
}

const INITIAL_STATE: UserState = { currentUser: {} as User }

export const UserContext = createContext<IUserContext>({} as IUserContext)

type UserProviderProps = { children: React.ReactNode }
const UserProvider = ({ children }: UserProviderProps): JSX.Element => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE)

  const setCurrentUser = (user: User) => {
    dispatch({ type: UserActionTypes.SET_CURRENT_USER, payload: user })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: User | null) => {
      if (user) {
        createUserDocumentFromAuth(user)
        setCurrentUser(user)
      } else {
        setCurrentUser({} as User)
      }
    })

    return unsubscribe
  }, [])

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider

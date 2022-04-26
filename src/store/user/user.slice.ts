import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit'
import { AuthErrorCodes, User } from 'firebase/auth'
import { UserState } from '../../models/user.model'
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import { RootState } from '../store'
import {
  fetchUserSession,
  signInUserWithEmailAndPassword,
  signInUserWithGoogle,
  signOutUser,
  signUpUserWithEmailAndPassword
} from './user.api'

const initialState: UserState = {
  currentUser: {} as User,
  loginStatus: 'loggedOut'
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state: UserState, action: PayloadAction<User>) => {
      state.currentUser = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signOutUser.fulfilled, (state) => {
        state.loginStatus = 'loggedOut'
      })
      .addCase(signUpUserWithEmailAndPassword.fulfilled, (state, action) => {
        if (action.payload) {
          const { user, displayName } = action.payload
          createUserDocumentFromAuth(user, { displayName })
          state.loginStatus = 'authenticated'
        }
      })
      .addMatcher(
        isAnyOf(
          signInUserWithEmailAndPassword.fulfilled,
          signInUserWithGoogle.fulfilled,
          fetchUserSession.fulfilled
        ),
        (state, action) => {
          if (action.payload) {
            createUserDocumentFromAuth(action.payload)
            state.currentUser = action.payload
            state.loginStatus = 'authenticated'
          } else {
            state.currentUser = {} as User
            state.loginStatus = 'loggedOut'
          }
        }
      )
      .addMatcher(
        isAnyOf(
          signInUserWithEmailAndPassword.pending,
          signInUserWithGoogle.pending,
          fetchUserSession.pending,
          signUpUserWithEmailAndPassword.pending,
          signOutUser.pending
        ),
        (state) => {
          state.loginStatus = 'loading'
        }
      )
      .addMatcher(
        isAnyOf(
          signInUserWithEmailAndPassword.rejected,
          signInUserWithGoogle.rejected,
          fetchUserSession.rejected,
          signUpUserWithEmailAndPassword.rejected
        ),
        (state, action) => {
          if (action.error) {
            switch (action.error.code) {
              case AuthErrorCodes.INVALID_PASSWORD:
                alert('Password is incorrect. Please try again.')
                break
              case AuthErrorCodes.USER_DELETED:
                alert('No User with this email exists. Please sign up.')
                break
              case AuthErrorCodes.EMAIL_EXISTS:
                alert('Account with that email already exists. Please sign in')
                break
              default:
                alert('Unknown error encountered while authenticating.')
                console.log(`Error while signing in. Message: ${action.error}`)
            }
            state.loginStatus = 'loggedOut'
          }
        }
      )
  }
})

export const { setCurrentUser } = userSlice.actions

export const selectCurrentUser = (state: RootState): User =>
  state.user.currentUser

export const selectLoginStatus = (
  state: RootState
): 'loading' | 'authenticated' | 'loggedOut' => state.user.loginStatus

export default userSlice.reducer

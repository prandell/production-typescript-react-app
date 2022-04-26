import { createAsyncThunk } from '@reduxjs/toolkit'
import { User } from 'firebase/auth'
import {
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  getCurrentUser,
  signOutAuthUser
} from '../../utils/firebase/firebase.utils'

export const signInUserWithEmailAndPassword = createAsyncThunk(
  'categories/signInUserWIthEmailAndPassword',
  async (userCreds: {
    email: string
    password: string
  }): Promise<null | User> => {
    const { email, password } = userCreds
    const response = await signInAuthUserWithEmailAndPassword(email, password)
    return response ? response.user : null
  }
)

export const signUpUserWithEmailAndPassword = createAsyncThunk(
  'categories/signUpUserWIthEmailAndPassword',
  async (userCreds: {
    email: string
    password: string
    displayName: string
  }): Promise<null | { user: User; displayName: string }> => {
    const { email, password, displayName } = userCreds
    const response = await createAuthUserWithEmailAndPassword(email, password)
    if (!response) {
      return null
    }
    return { user: response.user, displayName }
  }
)

export const signInUserWithGoogle = createAsyncThunk(
  'categories/signInUserWithGoogle',
  async (): Promise<null | User> => {
    return (await signInWithGooglePopup()).user
  }
)

export const fetchUserSession = createAsyncThunk(
  'categories/fetchUserSession',
  async (): Promise<null | User> => {
    return await getCurrentUser()
  }
)

export const signOutUser = createAsyncThunk(
  'categories/signOutUser',
  async (): Promise<void> => {
    return await signOutAuthUser()
  }
)

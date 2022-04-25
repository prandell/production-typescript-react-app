import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from 'firebase/auth'
import { UserState } from '../../models/user.model'
import { RootState } from '../store'

const initialState: UserState = { currentUser: {} as User }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state: UserState, action: PayloadAction<User>) => {
      state.currentUser = action.payload
    }
  }
})

export const { setCurrentUser } = userSlice.actions

export const selectCurrentUser = (state: RootState): User =>
  state.user.currentUser

export default userSlice.reducer

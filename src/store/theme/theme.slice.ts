import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  ThemeState,
  THEME_BACKGROUND_DARK,
  THEME_BACKGROUND_LIGHT
} from '../../models/theme.models'
import { RootState } from '../store'

const initialState: ThemeState = { globalTheme: 'light' }

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setGlobalTheme: (
      state: ThemeState,
      action: PayloadAction<'light' | 'dark'>
    ) => {
      if (action.payload === 'dark') {
        document.body.style.backgroundColor = THEME_BACKGROUND_DARK
      } else {
        document.body.style.backgroundColor = THEME_BACKGROUND_LIGHT
      }
      state.globalTheme = action.payload
    }
  }
})

export const { setGlobalTheme } = themeSlice.actions

export const selectTheme = (state: RootState): 'light' | 'dark' =>
  state.theme.globalTheme

export default themeSlice.reducer

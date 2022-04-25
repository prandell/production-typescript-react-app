import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ThemeState } from '../../models/theme.models'
import { RootState } from '../store'

const initialState: ThemeState = { globalTheme: 'light' }
const themeDark = '#0e0b16'
const themeLight = '#e7dfdd'

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setGlobalTheme: (
      state: ThemeState,
      action: PayloadAction<'light' | 'dark'>
    ) => {
      if (action.payload === 'dark') {
        document.body.style.backgroundColor = themeDark
      } else {
        document.body.style.backgroundColor = themeLight
      }
      state.globalTheme = action.payload
    }
  }
})

export const { setGlobalTheme } = themeSlice.actions

export const selectTheme = (state: RootState): 'light' | 'dark' =>
  state.theme.globalTheme

export default themeSlice.reducer

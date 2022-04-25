import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import cartReducer from './cart/cart.slice'
import userReducer from './user/user.slice'
import themeReducer from './theme/theme.slice'
import categoriesReducer from './categories/categories.slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    theme: themeReducer,
    categories: categoriesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
  devTools: process.env.NODE_ENV !== 'production'
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

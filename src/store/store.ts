import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers
} from '@reduxjs/toolkit'
import logger from 'redux-logger'
import cartReducer from './cart/cart.slice'
import userReducer from './user/user.slice'
import themeReducer from './theme/theme.slice'
import categoriesReducer from './categories/categories.slice'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { pokemonApi } from './pokemon/pokemon.api.slice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

const reducers = combineReducers({
  user: userReducer,
  cart: cartReducer,
  theme: themeReducer,
  categories: categoriesReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['user', 'categories']
}

const isDevelopment = process.env.NODE_ENV !== 'production'

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    isDevelopment
      ? getDefaultMiddleware({ serializableCheck: false })
          .concat(pokemonApi.middleware)
          .concat(logger)
      : getDefaultMiddleware({ serializableCheck: false }).concat(
          pokemonApi.middleware
        ),
  devTools: isDevelopment
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

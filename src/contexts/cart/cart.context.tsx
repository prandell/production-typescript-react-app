import React, { createContext, useReducer } from 'react'
import { CartActionTypes, CartState } from '../../models/cart.models'
import { Product } from '../../models/product.model'
import { cartReducer } from './cart.reducer'

export interface ICartContext extends CartState {
  addItemToCart: React.Dispatch<Product>
  removeItemFromCart: React.Dispatch<Product>
  removeProductFromCart: React.Dispatch<Product>
  setCartOpen: React.Dispatch<boolean>
}

const INITIAL_STATE: CartState = {
  cartOpen: false,
  cartCount: 0,
  cartTotal: 0,
  cartItems: []
}

export const CartContext = createContext<ICartContext>({} as ICartContext)

type CartProviderProps = { children: React.ReactNode }
const CartProvider = ({ children }: CartProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)

  const setCartOpen = (open: boolean) => {
    dispatch({ type: CartActionTypes.SET_CART_OPEN, payload: open })
  }
  const addItemToCart = (productToAdd: Product) => {
    dispatch({ type: CartActionTypes.ADD_CART_ITEM, payload: productToAdd })
  }
  const removeItemFromCart = (productToRemove: Product) => {
    dispatch({
      type: CartActionTypes.REMOVE_CART_ITEM,
      payload: productToRemove
    })
  }
  const removeProductFromCart = (productToClear: Product) => {
    dispatch({ type: CartActionTypes.CLEAR_PRODUCT, payload: productToClear })
  }
  return (
    <CartContext.Provider
      value={{
        ...state,
        setCartOpen,
        addItemToCart,
        removeItemFromCart,
        removeProductFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

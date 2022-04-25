import { Product } from './product.model'

export type ICartItem = {
  quantity: number
  product: Product
}

export type CartState = {
  cartItems: ICartItem[]
  cartOpen: boolean
  cartCount: number
  cartTotal: number
}

export const enum CartActionTypes {
  ADD_CART_ITEM = 'ADD_CART_ITEM',
  CLEAR_PRODUCT = 'CLEAR_PRODUCT',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  SET_CART_OPEN = 'SET_CART_OPEN'
}

export type CartActions =
  | { type: CartActionTypes.ADD_CART_ITEM; payload: Product }
  | { type: CartActionTypes.REMOVE_CART_ITEM; payload: Product }
  | { type: CartActionTypes.CLEAR_PRODUCT; payload: Product }
  | { type: CartActionTypes.SET_CART_OPEN; payload: boolean }

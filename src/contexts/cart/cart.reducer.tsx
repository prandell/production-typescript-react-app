import { Reducer } from 'react'
import {
  CartActions,
  CartActionTypes,
  CartState,
  ICartItem
} from '../../models/cart.models'
import { Product } from '../../models/product.model'

export const cartReducer: Reducer<CartState, CartActions> = (
  state: CartState,
  action: CartActions
): CartState => {
  const { type } = action
  const { cartItems, cartOpen } = state

  let newCartItems
  switch (type) {
    case CartActionTypes.ADD_CART_ITEM:
      newCartItems = incrementCartItem(cartItems, action.payload, true)
      break
    case CartActionTypes.REMOVE_CART_ITEM:
      newCartItems = incrementCartItem(cartItems, action.payload, false)
      break
    case CartActionTypes.CLEAR_PRODUCT:
      newCartItems = clearProduct(cartItems, action.payload)
      break
    case CartActionTypes.SET_CART_OPEN:
      return {
        ...state,
        cartOpen: !cartOpen
      }
    default:
      throw new Error(`Unhandled type (${type}) in userReducer`)
  }
  const { count, total } = getNewCartCountAndTotal(newCartItems)
  return {
    ...state,
    cartItems: newCartItems,
    cartCount: count,
    cartTotal: total
  }
}

const getNewCartCountAndTotal = (
  newCartItems: ICartItem[]
): { count: number; total: number } => {
  return {
    total: newCartItems.reduce(
      (total: number, cI: ICartItem) => total + cI.quantity * cI.product.price,
      0
    ),
    count: newCartItems.reduce(
      (total: number, cI: ICartItem) => total + cI.quantity,
      0
    )
  }
}

const incrementCartItem = (
  cartItems: ICartItem[],
  product: Product,
  add: boolean
): ICartItem[] => {
  const alteration = add ? 1 : -1
  if (itemExists(cartItems, product)) {
    return cartItems
      .map((i: ICartItem) => {
        if (i.product.id === product.id) {
          return { ...i, quantity: i.quantity + alteration }
        }
        return i
      })
      .filter((i) => i.quantity > 0)
  }
  return add
    ? [...cartItems, { product: product, quantity: 1 }]
    : [...cartItems]
}

const clearProduct = (cartItems: ICartItem[], productToClear: Product) => {
  return cartItems.filter((i: ICartItem) => i.product.id !== productToClear.id)
}

const itemExists = (cartItems: ICartItem[], productToFind: Product) =>
  cartItems.some((i) => i.product.id === productToFind.id)

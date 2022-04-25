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

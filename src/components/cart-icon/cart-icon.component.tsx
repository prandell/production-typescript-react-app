import React, { MouseEventHandler, ReactElement } from 'react'
import {
  selectCartCount,
  selectCartOpen,
  setCartOpen
} from '../../store/cart/cart.slice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import './cart-icon.styles'
import * as Styled from './cart-icon.styles'

const CartIcon = (): ReactElement => {
  const dispatch = useAppDispatch()
  const cartOpen = useAppSelector(selectCartOpen)
  const cartCount = useAppSelector(selectCartCount)
  const toggleCartOpen: MouseEventHandler<HTMLDivElement> = () => {
    dispatch(setCartOpen(!cartOpen))
  }

  return (
    <Styled.CartIconContainer onClick={toggleCartOpen}>
      <Styled.CartIconSvg />
      <Styled.CartCount>{cartCount}</Styled.CartCount>
    </Styled.CartIconContainer>
  )
}

export default CartIcon

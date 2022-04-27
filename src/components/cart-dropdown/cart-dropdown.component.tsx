import React, { ReactElement, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { ICartItem } from '../../models/cart.models'
import { selectCartItems, setCartOpen } from '../../store/cart/cart.slice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import Button from '../buttons/button/button.component'
import CartItem from '../cart-item/cart-item.component'
import * as Styled from './cart-dropdown.styles'

const CartDropdown = (): ReactElement => {
  const cartItems = useAppSelector(selectCartItems)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const goToCheckoutHandler = useCallback(() => {
    dispatch(setCartOpen(false))
    navigate('/checkout')
  }, [])
  return (
    <Styled.CartDropdownContainer>
      <Styled.CartItems>
        {cartItems.length ? (
          cartItems.map((item: ICartItem) => (
            <CartItem key={item.product.id} cartItem={item} />
          ))
        ) : (
          <Styled.EmptyMessage>Your cart is empty</Styled.EmptyMessage>
        )}
      </Styled.CartItems>
      <Button onClick={goToCheckoutHandler} type="button" inverted={false}>
        CHECKOUT
      </Button>
    </Styled.CartDropdownContainer>
  )
}

export default CartDropdown

import React from 'react'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import PaymentForm from '../../components/payment-form/payment-form.component'
import { ICartItem } from '../../models/cart.models'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.slice'
import { useAppSelector } from '../../store/hooks'
import * as Styled from './checkout.styles'

const Checkout = () => {
  const cartTotal = useAppSelector(selectCartTotal)
  const cartItems = useAppSelector(selectCartItems)
  return (
    <Styled.CheckoutContainer>
      <Styled.CheckoutHeader>
        <Styled.HeaderColumn>
          <span>Product</span>
        </Styled.HeaderColumn>
        <Styled.HeaderColumn>
          <span>Description</span>
        </Styled.HeaderColumn>
        <Styled.HeaderColumn>
          <span>Quantity</span>
        </Styled.HeaderColumn>
        <Styled.HeaderColumn>
          <span>Price</span>
        </Styled.HeaderColumn>
        <Styled.HeaderColumn>
          <span>Remove</span>
        </Styled.HeaderColumn>
      </Styled.CheckoutHeader>
      {cartItems.map((i: ICartItem) => (
        <CheckoutItem key={i.product.id} cartItem={i} />
      ))}
      <Styled.Total>{`Total: $${cartTotal}`}</Styled.Total>
      <PaymentForm />
    </Styled.CheckoutContainer>
  )
}

export default Checkout

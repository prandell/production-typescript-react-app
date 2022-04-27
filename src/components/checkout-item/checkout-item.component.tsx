import React, { FC, memo, ReactElement } from 'react'
import { ICartItem } from '../../models/cart.models'
import {
  clearProductFromCart,
  addItemToCart,
  removeItemFromCart
} from '../../store/cart/cart.slice'
import { useAppDispatch } from '../../store/hooks'
import * as Styled from './checkout-item.styles'

type CheckoutItemProps = {
  cartItem: ICartItem
}

const CheckoutItem: FC<CheckoutItemProps> = memo(
  ({ cartItem }: CheckoutItemProps): ReactElement => {
    const dispatch = useAppDispatch()
    const { product, quantity } = cartItem
    const { name, id, price, imageUrl } = product

    const clearHandler = () => dispatch(clearProductFromCart(product))
    const incrementHandler = () => dispatch(addItemToCart(product))
    const decrementHandler = () => dispatch(removeItemFromCart(product))

    return (
      <Styled.CheckoutItemContainer key={id}>
        <Styled.ImageContainer>
          <Styled.Image alt={name} src={imageUrl}></Styled.Image>
        </Styled.ImageContainer>
        <Styled.CheckoutItemDetails>{name}</Styled.CheckoutItemDetails>
        <Styled.QuantityContainer>
          <Styled.QuantityArrow onClick={decrementHandler}>
            &#10094;
          </Styled.QuantityArrow>
          <Styled.QuantityValue>{quantity}</Styled.QuantityValue>
          <Styled.QuantityArrow onClick={incrementHandler}>
            &#10095;
          </Styled.QuantityArrow>
        </Styled.QuantityContainer>
        <Styled.CheckoutItemDetails>${price}</Styled.CheckoutItemDetails>
        <Styled.RemoveButton onClick={clearHandler}>
          &#10005;
        </Styled.RemoveButton>
      </Styled.CheckoutItemContainer>
    )
  }
)

export default CheckoutItem

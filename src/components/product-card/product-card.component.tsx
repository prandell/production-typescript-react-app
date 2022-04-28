import React, { FC, ReactElement } from 'react'
import { Product } from '../../models/product.model'
import { addItemToCart } from '../../store/cart/cart.slice'
import { useAppDispatch } from '../../store/hooks'
import * as Styled from './product-card.styles'

type ProductCardProps = {
  product: Product
}

const ProductCard: FC<ProductCardProps> = ({
  product
}: ProductCardProps): ReactElement => {
  const { name, imageUrl, price } = product
  const dispatch = useAppDispatch()

  const addProductToCart = () => {
    dispatch(addItemToCart(product))
  }
  return (
    <Styled.ProductCardContainer>
      <Styled.ProductCardImage
        alt={name}
        src={imageUrl}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null
          currentTarget.src =
            'https://storage.googleapis.com/randell-comics.appspot.com/image-failed.jpg'
        }}
      />
      <Styled.Footer>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Price>{`$${price}`}</Styled.Price>
      </Styled.Footer>
      <Styled.AddButton onClick={addProductToCart} inverted={true}>
        Add to Cart
      </Styled.AddButton>
    </Styled.ProductCardContainer>
  )
}

export default ProductCard

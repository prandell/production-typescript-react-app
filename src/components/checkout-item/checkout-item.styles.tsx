import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`
export const CheckoutItemDetails = styled.span`
  width: 23%;
  padding-right: 10px;

  @media screen and (max-width: 800px) {
    width: 22%;
  }
`
export const QuantityContainer = styled.span`
  display: flex;
  width: 23%;
`

export const QuantityArrow = styled.div`
  color: var(--accent-colour);
  cursor: pointer;
`

export const QuantityValue = styled.span`
  margin: 0 10px;
`

export const RemoveButton = styled.div`
  color: var(--accent-colour);
  padding-left: 12px;
  cursor: pointer;
`

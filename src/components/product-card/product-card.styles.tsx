import styled from 'styled-components'
import Button from '../buttons/button/button.component'

export const ProductCardImage = styled.img`
  width: 100%;
  border-radius: 4px;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`

export const ProductCardContainer = styled.div`
  text-align: left;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  position: relative;

  &:hover {
    ${ProductCardImage} {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;
    &:hover {
      .image {
        opacity: unset;
      }
      button {
        opacity: unset;
      }
    }
  }
`

export const AddButton = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 70%;
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
    font-size: 14px;
  }
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`

export const Price = styled.span`
  width: 10%;
`

export const Footer = styled.div`
  width: 95%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  @media screen and (max-width: 800px) {
    font-size: 16px;
  }
`

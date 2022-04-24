import styled from 'styled-components'

export const ProductCardImage = styled.img`
  width: 100%;
  border-radius: 4px;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`

export const ProductCardContainer = styled.div`
  text-align: left;
  width: 300px;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  position: relative;

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 70%;
    display: none;
  }

  &:hover {
    ${ProductCardImage} {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
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
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

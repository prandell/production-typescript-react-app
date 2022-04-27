import styled from 'styled-components'

export const ShopTitle = styled.h1`
  font-family: 'Jhiaxus-Oblique', sans-serif;
  font-style: normal;
  margin-top: 20px;
  font-weight: 100;
  font-size: 350%;
  text-align: center;
  color: var(--primary-colour);
  @media screen and (max-width: 500px) {
    font-size: 280%;
  }
`

export const ShopTitleLogo = styled.img`
  max-width: 100px;
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
  @media screen and (max-width: 500px) {
    max-width: 70px;
  }
`

export const ShopTitleText = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
`

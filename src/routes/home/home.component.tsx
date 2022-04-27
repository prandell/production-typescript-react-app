import React, { ReactElement } from 'react'
import CategoryMenu from '../../components/category-menu/category-menu.component'
import * as Styled from './home.styles'

const Home = (): ReactElement => {
  return (
    <div className="main-container">
      <Styled.ShopTitle>
        {' '}
        <Styled.ShopTitleLogo
          alt={'Randell Comics Logo'}
          src={'randell-comics-filled.png'}
        />
        <Styled.ShopTitleText>Randell Comics</Styled.ShopTitleText>
      </Styled.ShopTitle>
      <CategoryMenu />
    </div>
  )
}

export default Home

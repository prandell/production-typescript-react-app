import React, { ReactElement } from 'react'
import Directory from '../../components/directory/directory.component'
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
      <Directory />
    </div>
  )
}

export default Home

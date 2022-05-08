import React, { ReactElement } from 'react'
import Directory from '../../components/directory/directory.component'
import * as Styled from './home.styles'

const Home = (): ReactElement => {
  const onClickHandler = async () => {
    const response = await fetch('/.netlify/functions/get-steam-games', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      console.log(res)
      res.json()
    })
  }
  return (
    <div className="main-container">
      <Styled.ShopTitle>
        {' '}
        <Styled.ShopTitleLogo
          onClick={onClickHandler}
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

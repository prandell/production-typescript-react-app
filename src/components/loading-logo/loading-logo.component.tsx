import React from 'react'
import * as Styled from './loading-logo.styles'

const LoadingLogo = () => {
  return (
    <Styled.LoaderOverlay>
      <Styled.LogoLoader
        alt={'Randell Comics Logo'}
        src={'randell-comics-filled.png'}
      />
    </Styled.LoaderOverlay>
  )
}

export default LoadingLogo

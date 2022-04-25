import React from 'react'
import { LoaderOverlay, LogoLoader } from './loading-logo.styles'

const LoadingLogo = () => {
  return (
    <LoaderOverlay>
      <LogoLoader
        alt={'Randell Comics Logo'}
        src={'randell-comics-filled.png'}
      />
    </LoaderOverlay>
  )
}

export default LoadingLogo

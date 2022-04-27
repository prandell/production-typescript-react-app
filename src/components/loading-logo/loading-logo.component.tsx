import React, { FC } from 'react'
import { LoaderOverlay, LogoLoader } from './loading-logo.styles'

const LoadingLogo: FC = () => {
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

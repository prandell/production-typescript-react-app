import React, { ReactElement, useEffect, lazy, Suspense } from 'react'
// import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { selectTheme, setGlobalTheme } from './store/theme/theme.slice'
import { LogoLoader } from './components/loading-logo/loading-logo.styles'
import { fetchUserSession } from './store/user/user.api'
import { GlobalStyle } from './global.styles'

const Checkout = lazy(() => import('./routes/checkout/checkout.component'))
const Home = lazy(() => import('./routes/home/home.component'))
const Shop = lazy(() => import('./routes/shop/shop.component'))
const NavigationBar = lazy(
  () => import('./routes/navigation-bar/navigation-bar.component')
)
const Authentication = lazy(
  () => import('./routes/authentication/authentication.component')
)

function App(): ReactElement {
  const theme = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (theme === 'dark') {
      dispatch(setGlobalTheme('dark'))
    } else {
      dispatch(setGlobalTheme('light'))
    }
    document.body.style.fontWeight = 'bold'
  }, [])

  useEffect(() => {
    dispatch(fetchUserSession())
  }, [])

  return (
    <Suspense fallback={<LogoLoader />}>
      <GlobalStyle />
      <div className="app" data-theme={theme}>
        <Routes>
          <Route path="/" element={<NavigationBar />}>
            <Route index element={<Home />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </div>
    </Suspense>
  )
}

export default App

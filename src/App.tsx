import React, { useEffect } from 'react'
import './App.scss'
import Home from './routes/home/home.component'
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './routes/navigation-bar/navigation-bar.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { selectTheme, setGlobalTheme } from './store/theme/theme.slice'
import { fetchUserSession } from './store/user/user.api'

function App(): JSX.Element {
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
  )
}

export default App

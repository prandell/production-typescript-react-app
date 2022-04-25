import React, { useContext, useEffect } from 'react'
import './App.scss'
import Home from './routes/home/home.component'
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './routes/navigation-bar/navigation-bar.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/shop.component'
import Checkout from './routes/checkout/checkout.component'
import { User } from 'firebase/auth'
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
  getComicCollectionsAndDocuments
} from './utils/firebase/firebase.utils'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { setCurrentUser } from './store/user/user.slice'
import { selectTheme, setGlobalTheme } from './store/theme/theme.slice'
import { setCategoriesMap } from './store/categories/categories.slice'

function App(): JSX.Element {
  const theme = useAppSelector(selectTheme)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const defaultDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    document.body.style.fontWeight = 'bold'
    defaultDark
      ? dispatch(setGlobalTheme('dark'))
      : dispatch(setGlobalTheme('light'))
  }, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: User | null) => {
      if (user) {
        createUserDocumentFromAuth(user)
        dispatch(setCurrentUser(user))
      } else {
        dispatch(setCurrentUser({} as User))
      }
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getComicCollectionsAndDocuments()
      dispatch(setCategoriesMap(categoryMap))
    }

    getCategoriesMap()
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

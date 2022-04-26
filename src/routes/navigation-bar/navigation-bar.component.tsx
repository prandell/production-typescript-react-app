import React from 'react'
import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import ThemeToggle from '../../components/theme-toggle/theme-toggle.component'
import { selectCartOpen } from '../../store/cart/cart.slice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { signOutUser } from '../../store/user/user.api'
import { selectLoginStatus } from '../../store/user/user.slice'
import {
  NavigationBarContainer,
  NavLinks,
  LogoContainer,
  Logo,
  NavLink
} from './navigation-bar.styles'

const NavigationBar = () => {
  const dispatch = useAppDispatch()
  const loginStatus = useAppSelector(selectLoginStatus)
  const cartOpen = useAppSelector(selectCartOpen)

  const signOutHandler = (): void => {
    dispatch(signOutUser())
  }
  return (
    <Fragment>
      <NavigationBarContainer>
        <LogoContainer to="/">
          <Logo alt={'Randell Comics Logo'} src={'randell-comics-filled.png'} />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {loginStatus === 'authenticated' ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <ThemeToggle />
          <CartIcon />
        </NavLinks>
        {cartOpen && <CartDropdown />}
      </NavigationBarContainer>
      <Outlet />
    </Fragment>
  )
}

export default NavigationBar

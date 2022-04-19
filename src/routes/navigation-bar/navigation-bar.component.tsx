import React, { useContext } from 'react'
import { Fragment } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { UserContext } from '../../contexts/user.context'
import { signOutAuthUser } from '../../utils/firebase/firebase.utils'
import './navigation-bar.styles.scss'

const NavigationBar = () => {
  const { currentUser } = useContext(UserContext)

  const signOutHandler = async (): Promise<void> => {
    await signOutAuthUser()
  }
  return (
    <Fragment>
      <div className="navigation-bar">
        <Link className="logo-container" to="/">
          <img
            className="logo-container-logo"
            alt={'Randell Comics Logo'}
            src={'randell-comics-filled.png'}
          />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser.email ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default NavigationBar

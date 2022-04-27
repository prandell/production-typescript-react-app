import React, { ReactElement } from 'react'
import './google-button.styles.scss'

type GoogleButtonProps = {
  clickHandler: () => void
}

const GoogleButton = ({ clickHandler }: GoogleButtonProps): ReactElement => {
  return (
    <div className="google-btn" onClick={clickHandler}>
      <div className="google-icon-wrapper">
        <img
          alt="google-icon"
          className="google-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        />
      </div>
      <p className="btn-text">
        <b>Sign in with Google</b>
      </p>
    </div>
  )
}

export default GoogleButton

import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import { signUpUserWithEmailAndPassword } from '../../store/user/user.api'
import Button from '../buttons/button/button.component'
import FormInput from '../form-input/form-input.component'
import * as Styled from './sign-up-form.styles'

type SignUpFormInputs = {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}

const defaultFormInputs = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const [formInputs, setFormInputs] =
    useState<SignUpFormInputs>(defaultFormInputs)
  const { displayName, email, password, confirmPassword } = formInputs

  const resetFormInputs = () => {
    setFormInputs(defaultFormInputs)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormInputs({ ...formInputs, [name]: value })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // validate inputs
    if (password !== confirmPassword) {
      alert('passwords do not match')
      return
    }
    dispatch(signUpUserWithEmailAndPassword({ email, password, displayName }))
    resetFormInputs()
  }

  return (
    <Styled.SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email address</span>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <FormInput
          label="Display Name"
          required
          type="text"
          changeHandler={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          required
          changeHandler={handleChange}
          name="email"
          type="email"
          value={email}
        />
        <FormInput
          label="Password"
          required
          changeHandler={handleChange}
          name="password"
          type="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          required
          changeHandler={handleChange}
          name="confirmPassword"
          type="password"
          value={confirmPassword}
        />
        <Button inverted={false} type="submit">
          Sign Up
        </Button>
      </form>
    </Styled.SignUpContainer>
  )
}

export default SignUpForm

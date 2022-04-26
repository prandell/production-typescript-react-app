import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useAppDispatch } from '../../store/hooks'
import {
  signInUserWithEmailAndPassword,
  signInUserWithGoogle
} from '../../store/user/user.api'
import Button from '../buttons/button/button.component'
import GoogleButton from '../buttons/google-button/google-button.component'
import FormInput from '../form-input/form-input.component'
import * as Styled from './sign-in-form.styles'

type SignInFormInputs = {
  email: string
  password: string
}

const defaultFormInputs = {
  email: '',
  password: ''
}

const SignInForm = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const [formInputs, setFormInputs] =
    useState<SignInFormInputs>(defaultFormInputs)
  const { email, password } = formInputs

  const resetFormInputs = () => {
    setFormInputs(defaultFormInputs)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormInputs({ ...formInputs, [name]: value })
  }

  const signInWithGoogle = (): void => {
    dispatch(signInUserWithGoogle())
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    dispatch(signInUserWithEmailAndPassword({ email, password }))
    resetFormInputs()
  }

  return (
    <Styled.SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your preferred method</span>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <FormInput
          label="Email"
          required
          type="email"
          changeHandler={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          required
          type="password"
          changeHandler={handleChange}
          name="password"
          value={password}
        />
        <Styled.ButtonsContainer>
          <Button inverted={false} type="submit">
            Sign In
          </Button>
          <GoogleButton clickHandler={signInWithGoogle} />
        </Styled.ButtonsContainer>
      </form>
    </Styled.SignInContainer>
  )
}

export default SignInForm

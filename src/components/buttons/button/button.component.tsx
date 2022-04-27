import React, { FC, ReactElement } from 'react'
import * as Styled from './button.styles'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: any
  inverted: boolean
}

const getButton = (inverted: boolean) => {
  return inverted ? Styled.Button : Styled.InvertedButton
}

const Button: FC<ButtonProps> = ({
  children,
  inverted,
  ...otherProps
}: ButtonProps): ReactElement => {
  const CustomButton = getButton(inverted)
  return <CustomButton {...otherProps}>{children}</CustomButton>
}

export default Button

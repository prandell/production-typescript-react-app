import React from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { selectTheme, setGlobalTheme } from '../../store/theme/theme.slice'
import * as Styled from './theme-toggle.styles'

const ThemeToggle = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectTheme)

  const clickHandler = () => {
    theme === 'dark'
      ? dispatch(setGlobalTheme('light'))
      : dispatch(setGlobalTheme('dark'))
  }

  return (
    <Styled.ThemeToggle onClick={clickHandler}>
      <Styled.ThemeIcon className="theme-icon" />
    </Styled.ThemeToggle>
  )
}

export default ThemeToggle

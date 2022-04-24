import styled from 'styled-components'

const shrinkLabel = `top: -14px;font-size: 12px;color: var(--primary-colour);`

export const FormInputLabel = styled.label`
  color: var(--secondary-text-colour);
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  &.shrink {
    ${shrinkLabel}
  }
`

export const FormInput = styled.input`
  background: none;
  background-color: var(--secondary-colour);
  color: var(--secondary-text-colour);
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid var(--secondary-text-colour);
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabel}
  }
`

export const FormInputGroup = styled.div`
  position: relative;
  margin: 45px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`

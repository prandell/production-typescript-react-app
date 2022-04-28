import styled from 'styled-components'

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  h2 {
    margin: 10px 0;
  }
  @media screen and (max-width: 1200px) {
    width: 80%;
    align-items: center;
  }
  @media screen and (max-width: 1000px) {
    width: 60%;
  }
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    width: unset;
    > * {
      margin-bottom: 10px;
      min-width: 220px;
    }
  }
`

export const SignInForm = styled.form`
  width: 80%;
`

import styled from 'styled-components'

export const SignUpContainer = styled.div`
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
    flex-direction: column;
    width: 60%;
    align-items: center;
  }
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`

export const SignUpForm = styled.form`
  width: 80%;
  @media screen and (max-width: 1200px) {
    > :last-child {
      margin-left: auto;
      margin-right: auto;
    }
  }
`

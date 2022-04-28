import styled from 'styled-components'

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  margin: 30px auto;
  @media screen and (max-width: 1200px) {
    width: 900px;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    > *:first-child {
      margin-bottom: 50px;
    }
  }
`

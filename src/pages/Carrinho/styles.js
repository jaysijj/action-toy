import { FormControl, IconButton } from '@material-ui/core'
import styled from 'styled-components'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export const Container = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 100vh;
  padding: 20px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;

  @media (min-width: 768px) {
    margin: 0 auto;
    width: 710px;
  }
  .carrinho {
    margin-bottom: 20px;
  }
  h2 {
    font-size: 32px;
    color: rgb(56, 172, 56);
  }

  span {
    color: white;
    font-size: 25px;
  }
  label {
    margin-bottom: 10px;
    letter-spacing: 0.1rem;
    font-weight: bold;
    color: white;
    font-size: 25px;
  }
  .MuiInput-input {
    margin-top: 10px;
  }
`

export const Voltar = styled(IconButton).attrs({
  children: <ArrowBackIcon />
})`
  left: 20px;
  position: absolute;
  top: 15px;
`

export const TotalContainer = styled.section`
  margin-top: 60px;
  > div {
    align-items: center;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    margin-top: 15px;
    h2 {
      color: rgb(56, 172, 56);
      font-size: 32px;
    }
    span {
      font-size: 30px;
    }
  }
`

export const PagamentoContainer = styled(FormControl)`
  width: 100%;
`

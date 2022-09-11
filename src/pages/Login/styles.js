import styled from 'styled-components'
import FormControl from '@material-ui/core/FormControl'

export const ContainerFather = styled.section`
  height: 100vh;
  width: 100vw;
  input,
  label,
  p {
    color: white;
  }
  .MuiInputBase-input,
  .MuiTypography-colorTextSecondary {
    font-size: 25px;
  }
  label {
    font-size: 25px;
    letter-spacing: 0.1rem;
    font-weight: bold;
    margin-bottom: 55px;
  }
  input {
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background-color: rgba(255, 255, 255, 0.2);
  padding-bottom: 20px;
  border-radius: 10px;
  margin-top: 100px;
  width: 80%;
  margin: auto;
  margin-top: 100px;

  @media (min-width: 768px) {
    margin: auto auto;
    width: 610px;
    heigth: 394px;
    margin-top: 100px;
  }
`

export const Titulo = styled.h2`
  margin-bottom: 60px;
  margin-top: 50px;
  color: rgb(56, 172, 100);
  text-align: center;
  font-size: 65px;

  @media (max-width: 500px) {
    font-size: 50px;
  }
  @media (max-width: 500px) {
    font-size: 40px;
  }
`

export const InputContainer = styled(FormControl)`
  margin-bottom: 30px;
`

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
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background-color: rgba(255, 255, 255, 0.2);
  padding-bottom: 20px;
  border-radius: 10px;
  margin-top: 100px;

  @media (min-width: 768px) {
    margin: auto auto;
    width: 50%;
    margin-top: 100px;
  }
`

export const Titulo = styled.h2`
  margin-bottom: 20px;
  margin-top: 50px;
  color: rgb(56, 172, 56);
  text-align: center;
  font-size: 45px;
`

export const InputContainer = styled(FormControl)`
  margin-bottom: 30px;
`

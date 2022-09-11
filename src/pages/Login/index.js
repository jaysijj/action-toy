import { Button } from '@material-ui/core'
import { Container, ContainerFather, Titulo, InputContainer } from './styles'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { UsuarioContext } from '../../common/contexts/Usuario'
import { Input, InputLabel, InputAdornment } from '@material-ui/core'

function Login() {
  const history = useHistory()
  const { nome, setNome, saldo, setSaldo } = useContext(UsuarioContext)

  return (
    <ContainerFather>
      <Container>
        <Titulo>Action Toy</Titulo>
        <InputContainer>
          <InputLabel>Nome</InputLabel>
          <Input
            type="text"
            value={nome}
            onChange={event => setNome(event.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>Saldo</InputLabel>
          <Input
            type="number"
            onChange={event => setSaldo(Number(event.target.value))}
            startAdornment={
              <InputAdornment position="start">R$</InputAdornment>
            }
          />
        </InputContainer>
        <Button
          variant="contained"
          color="primary"
          disabled={nome.length < 4}
          onClick={() => history.push('/feira')}
        >
          Avançar
        </Button>
      </Container>
    </ContainerFather>
  )
}

export default Login

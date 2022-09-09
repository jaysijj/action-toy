import styled from 'styled-components'
import Card from '@material-ui/core/Card'

export const Container = styled(Card)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  background-color: rgba(50, 50, 50);
  div {
    align-items: center;
    display: flex;
    gap: 20px;
    p {
      font-size: 22px;
      font-weight: bold;
      padding: 5px 0 0 5px;
      color: white;
    }
    span {
      font-size: 16px;
    }
    img {
      width: 60px;
    }
    span {
      color: white;
    }
  }
`

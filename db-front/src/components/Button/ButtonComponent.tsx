import styled from 'styled-components'
import { Link } from 'react-router-dom'

type ButtonProps = {
  text: string
  onClick?: () => void
  to?: string
}

const Button = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 250ms ease-in-out filter;
  border-radius: var(--border-radius);
  padding: 5px 15px;
  font-weight: 700;
  background: var(--secondary-color);
  color: var(--foreground-color);

  &:hover{
    filter: saturate(1.2);
  }

  &:active{
    filter: opacity(0.8);
  }
`

const ButtonComponent = (props: ButtonProps) => {
  const { text, onClick, to } = props

  return (
    <Button to={to} onClick={onClick}>{text}</Button>
  )
  
}

export default ButtonComponent
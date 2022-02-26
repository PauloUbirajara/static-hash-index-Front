import styled from 'styled-components'
import { Link } from 'react-router-dom'

type ButtonProps = {
  text: string
  onClick?: () => void
  to?: string
}

const Button = styled.button`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 250ms ease-in-out filter;
  padding: 5px 15px;

  background: var(--secondary-color);
  color: var(--foreground-color);
  border-radius: var(--border-radius);
  font-weight: 700;

  &:hover{
    filter: saturate(1.2);
  }

  &:active{
    filter: opacity(0.8);
  }
`

const LinkButton = styled(Link)(Button)


const ButtonComponent = (props: ButtonProps) => {
  const { text, onClick, to } = props

  if (to) {
    <LinkButton to={to} onClick={onClick}>{text}</LinkButton>
  }

  return <Button onClick={onClick}>{text}</Button>
}

export default ButtonComponent
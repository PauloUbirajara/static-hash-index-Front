import { useState } from 'react'
import ButtonComponent from '../Button/ButtonComponent'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

type SettingsProps = {
  updatePageSize: (value: number) => void
}

const Settings = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;

  padding: 25px;

  background: var(--primary-color);
  color: var(--foreground-color);
  border-radius: var(--border-radius);
`

const CenterStuff = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`

const SettingsComponent = (props: SettingsProps) => {
  const { updatePageSize } = props
  const [pageSize, setPageSize] = useState(0)


  const onClick = () => {
    if (!pageSize || pageSize <= 0) return

    updatePageSize(pageSize)
  }

  const onChange = (el: any) => {
    setPageSize(+el.target.value)
  }

  return (
    <CenterStuff>
      <Settings>
        <h1>Digite o tamanho individual da página:</h1>
        <input
          type="number"
          placeholder='Digite um número'
          min='1'
          onChange={onChange}
        />
        <ButtonComponent
          text="Ver banco de dados"
          onClick={onClick}
          to='god'
        ></ButtonComponent>
      </Settings>
    </CenterStuff>
  )
    
}

export default SettingsComponent
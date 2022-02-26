import { useState } from 'react'
import styled from 'styled-components'


import ButtonComponent from '../Button/ButtonComponent'


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

const SettingsComponent = () => {
  const [pageSize, setPageSize] = useState(1)
  
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
          defaultValue={pageSize}
          onChange={onChange}
        />
        <ButtonComponent
          text="Ver banco de dados"
          to={`/database/${pageSize}`}
        ></ButtonComponent>
      </Settings>
    </CenterStuff>
  )
}


export default SettingsComponent
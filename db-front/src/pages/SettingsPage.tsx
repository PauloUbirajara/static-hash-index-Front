import styled from 'styled-components'


import MainTemplate from '../common/MainTemplate'
import CenteredDiv from '../common/CenteredDiv'
import { ButtonComponent } from '../components/Button/ButtonComponent'
import { IconEnum } from '../components/Icon/IconComponent'


const Settings = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;

  padding: 25px;

  background: var(--primary-color);
  color: var(--foreground-color);
  border-radius: var(--border-radius);
`

type SettingsProps = {
  pageSize: number
  updatePageSize: Function
}

export const SettingsPage = (props: SettingsProps) => {
  const { pageSize, updatePageSize } = props

  const onChange = (el: any) => {
    const newPageSize = +el.target.value
    updatePageSize(newPageSize)
  }

  return (
    <MainTemplate>
      <CenteredDiv>
        <Settings>
          <h1>Configurar tamanho individual da página:</h1>
          <input
            type="number"
            placeholder='Digite um número'
            min='1'
            defaultValue={pageSize}
            onChange={onChange}
          />
          <ButtonComponent
            icon={IconEnum.OPEN_DATABASE}
            text="Ver banco de dados"
            to='/database'
          />
        </Settings>
      </CenteredDiv>
    </MainTemplate>
  )
}
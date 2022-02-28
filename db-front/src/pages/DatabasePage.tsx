import styled from 'styled-components'

import MainTemplate from '../common/MainTemplate'
import CenteredDiv from '../common/CenteredDiv'
import { ButtonComponent } from '../components/Button/ButtonComponent'
import { IconEnum } from '../components/Icon/IconComponent'


const Database = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr 1.5fr 1fr;
  gap: 20px;

  padding: 25px;

  background: var(--primary-color);
  color: var(--foreground-color);
  border-radius: var(--border-radius);
  `

type DatabaseProps = {
  pageSize: number
}

export const DatabasePage = (props: DatabaseProps) => {
  const { pageSize } = props

  return (
    <MainTemplate>
      <CenteredDiv>
        <Database>
          <h1>Banco de dados</h1>


          <label htmlFor="key-input">Buscar chave</label>
          <input
            type="text"
            placeholder="Digite algum registro do banco"
            autoComplete="false"
            name="key-input"
          />
          <ButtonComponent
            icon={IconEnum.SEARCH}
            text="Pesquisar"
            onClick={null}
          />
        </Database>
      </CenteredDiv>
    </MainTemplate>
  )
}
import { useParams } from 'react-router-dom'
import styled from 'styled-components'


import { ButtonComponent } from '../Button/ButtonComponent'
import { IconEnum } from '../Icon/IconComponent'


const DatabaseContainer = styled.div`
    margin: 30px;
    padding: 25px;

    display: grid;
    justify-content: stretch;
    gap: 15px;

    background: var(--primary-color);
    color: var(--foreground-color);
    border-radius: var(--border-radius);
  `


const DatabaseComponent = () => {
  const { pageSize } = useParams()

  return <>
    <DatabaseContainer>
      <ButtonComponent text="Voltar" to="/" />
      <h1>Banco de dados</h1>

      <h2>Tamanho individual de página: {pageSize}</h2>

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

    </DatabaseContainer>
  </>
}


export default DatabaseComponent
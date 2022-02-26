import { useParams } from 'react-router-dom'
import styled from 'styled-components'


import Button from '../Button/ButtonComponent'


const DatabaseContainer = styled.div`
    margin: 30px;
    padding: 25px;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;

    background: var(--primary-color);
    color: var(--foreground-color);
    border-radius: var(--border-radius);
  `


const DatabaseComponent = () => {
  const { pageSize } = useParams()

  return <>
    <DatabaseContainer>
      <h1>Banco de dados</h1>

      <h2>Tamanho individual de página: {pageSize}</h2>

      <label htmlFor="key-input">Buscar chave</label>
      <input
        type="text"
        placeholder="Digite algum registro do banco"
        autoComplete="false"
        name="key-input"
      />
      <Button text="Pesquisar" onClick={null} />

    </DatabaseContainer>
  </>
}


export default DatabaseComponent
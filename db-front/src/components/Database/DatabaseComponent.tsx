import { useParams } from 'react-router-dom'


const DatabaseComponent = () => {
  const { pageSize } = useParams()
  return <>
    <div className="database">
      <h1>Banco de dados</h1>
      <h2>{pageSize}</h2>
      <div className="database-pages"></div>
      <label htmlFor="key-input">Buscar chave</label>
      <input type="text" autoComplete="false" name="key-input" />
    </div>
  </>
}

export default DatabaseComponent
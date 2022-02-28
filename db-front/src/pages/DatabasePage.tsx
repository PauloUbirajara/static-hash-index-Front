import { useParams } from 'react-router-dom'


import MainTemplate from '../common/MainTemplate'
import { ButtonComponent } from '../components/Button/ButtonComponent'
import { IconEnum } from '../components/Icon/IconComponent'


export const DatabasePage = () => {
  const { pageSize } = useParams()


  return <MainTemplate>
    <div className="database">
      <h1>Banco de dados</h1>

      <h2>Tamanho individual de página: {pageSize || 1}</h2>

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
    </div>
  </MainTemplate>
}
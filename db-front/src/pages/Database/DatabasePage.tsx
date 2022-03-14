import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Database } from './style';
import { searchForWordInDatabase } from '../../services/search';
import { CenteredDiv, MainTemplate } from '../../common';
import { ButtonComponent, IconEnum } from '../../components';

export const DatabasePage = (props: any) => {
  /*
   * O que deve ser mostrado para o usuário é a página que foi
   * buscada e o custo por acesso à páginas
   */
  const location = useLocation()
  const [word, setWord] = useState('')

  useEffect(() => {
    console.log(location)
  }, [location])

  const onChange = (el: any) => {
    setWord(el.target.value)
  }

  const handleClickButton = () => {
    searchForWordInDatabase(word).then(data => {
      localStorage.setItem('searchValue', JSON.stringify(data.data))
    })
  }

  return (
    <MainTemplate>
      <CenteredDiv>
        <Database>
          <h1>Banco de dados</h1>

          <input
            type="text"
            placeholder="Digite algum registro do banco"
            onChange={onChange}
            autoComplete="false"
            name="key-input"
          />
          <ButtonComponent
            icon={IconEnum.SEARCH}
            text="Pesquisar"
            onClick={handleClickButton}
            to='/stats'
          />
        </Database>
      </CenteredDiv>
    </MainTemplate>
  );
};

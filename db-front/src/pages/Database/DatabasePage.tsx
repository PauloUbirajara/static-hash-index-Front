import { useState } from 'react'

import { Database, DatabaseProps, searchForWordInDatabase } from './Database';

import { CenteredDiv, MainTemplate } from '../../common';
import { ButtonComponent, IconEnum } from '../../components';

export const DatabasePage = (props: DatabaseProps) => {
  /*
   * O que deve ser mostrado para o usuário é a página que foi
   * buscada e o custo por acesso à páginas
   */
  const [word, setWord] = useState('')

  const onChange = (el: any) => {
    setWord(el.target.value)
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
            onClick={() => searchForWordInDatabase(word)}
            to={{
              pathname: '/stats',
              state: { alo: true }
            }}
          />
        </Database>
      </CenteredDiv>
    </MainTemplate>
  );
};

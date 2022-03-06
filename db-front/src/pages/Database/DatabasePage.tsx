import { Database, DatabaseProps } from './Database';

import { CenteredDiv, MainTemplate } from '../../common';
import { ButtonComponent, IconEnum } from '../../components';

export const DatabasePage = (_props: DatabaseProps) => {
  /*
   * O que deve ser mostrado para o usuário é a página que foi
   * buscada e o custo por acesso à páginas
   */

  return (
    <MainTemplate>
      <CenteredDiv>
        <Database>
          <h1>Banco de dados</h1>

          <input
            type="text"
            placeholder="Digite algum registro do banco"
            autoComplete="false"
            name="key-input"
          />
          <ButtonComponent icon={IconEnum.SEARCH} text="Pesquisar" />
        </Database>
      </CenteredDiv>
    </MainTemplate>
  );
};

import { Settings } from './style';
import { setupDatabasePageSize } from '../../services/setup';
import { MainTemplate, CenteredDiv } from '../../common';
import { ButtonComponent, IconEnum } from '../../components';
import { useState } from 'react';

export const SettingsPage = (props: any) => {

  const [pageSize, setPageSize] = useState();
  const onChange = (el: any) => {
    const newPageSize = el.target.value;
    setPageSize(newPageSize);
  };

  const onClick = () => {
    setupDatabasePageSize(pageSize)
    localStorage.setItem('pageSize', JSON.stringify(pageSize))
  }

  return (
    <MainTemplate>
      <CenteredDiv>
        <Settings>
          <h1>Configurar tamanho individual da página:</h1>
          <input
            type="number"
            placeholder="Digite um número"
            min="1"
            defaultValue={pageSize}
            onChange={onChange}
          />
          <ButtonComponent
            icon={IconEnum.OPEN_DATABASE}
            text="Ver banco de dados"
            onClick={onClick}
            to="/database"
          />
        </Settings>
      </CenteredDiv>
    </MainTemplate>
  );
};

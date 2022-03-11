import { Settings, SettingsProps, updateDatabasePageSize } from './Settings';

import { MainTemplate, CenteredDiv } from '../../common';
import { ButtonComponent, IconEnum } from '../../components';

export const SettingsPage = (props: SettingsProps) => {
  const { pageSize, updatePageSize } = props;

  const onChange = (el: any) => {
    const newPageSize = +el.target.value;
    updatePageSize(newPageSize);
  };

  const onClick = () => {
    updateDatabasePageSize(pageSize)
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

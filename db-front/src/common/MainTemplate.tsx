import styled from 'styled-components';
import { ReactElement } from 'react';

import { ButtonComponent } from '../components';

const NavBar = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 75px;
  gap: 25px;
  padding: 25px;

  *{
    font-size: 1.25rem;
  }
`;

type MainTemplateProps = {
  children: ReactElement;
};

export const MainTemplate = (props: MainTemplateProps) => {
  const { children } = props;

  return (
    <>
      <NavBar>
        <ButtonComponent to="/" text="Configurar tamanho de página" />
        <ButtonComponent to="/database" text="Banco de Dados" />
        <ButtonComponent to="/stats" text="Estatísticas" />
      </NavBar>
      {children}
    </>
  );
};

import styled from 'styled-components';

import { IconEnum } from '../Icon/IconComponent';

export type ButtonProps = {
  text: string;
  onClick?: () => void;
  to?: string;
  icon?: IconEnum;
};

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;

  transition: 250ms ease-in-out filter;
  padding: 5px 15px;

  cursor: pointer;
  width: 100%;
  height: 100%;

  background: var(--secondary-color);
  color: var(--foreground-color);
  border-radius: var(--border-radius);
  font-weight: 700;

  &:hover{
    filter: saturate(1.2);
  }

  &:active{
    filter: opacity(0.8);
  }
`;

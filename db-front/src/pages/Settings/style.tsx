import styled from 'styled-components';

export const Settings = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;

  padding: var(--padding);
  background: var(--primary-color);
  color: var(--foreground-color);
  border-radius: var(--border-radius);
`;
import styled from 'styled-components';
import axios from 'axios'

import { onSuccess, onError } from '../../helper/Response'

export const Settings = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;

  padding: var(--padding);
  background: var(--primary-color);
  color: var(--foreground-color);
  border-radius: var(--border-radius);
`;

export type SettingsProps = {
  pageSize: number;
  updatePageSize: Function;
};

export const updateDatabasePageSize = (pageSize: number) => {
  const endpoint = `http://localhost:5000/?pageSize=${pageSize}`

  const promise = axios
    .get(endpoint)
    .then(onSuccess)
    .catch(onError)

  return promise;
}
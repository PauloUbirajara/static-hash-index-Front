import styled from 'styled-components';
import axios from 'axios'

import { onSuccess, onError } from '../../helper/Response'

export const Database = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;

  padding: var(--padding);

  background: var(--primary-color);
  color: var(--foreground-color);
  border-radius: var(--border-radius);
  width: clamp(50vw, 50%, 75vw);
`;

export type DatabaseProps = {
  pageSize: number;
};

export const searchForWordInDatabase = (word: string) => {
  const endpoint = `http://localhost:5000/search?wordToSearch=${word}`

  const promise = axios
    .get(endpoint)
    .then(onSuccess)
    .catch(onError)

  return promise
}

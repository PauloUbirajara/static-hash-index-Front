import axios from 'axios'
import { onSuccess, onError } from '../helper/Response'

export const setupDatabasePageSize = (pageSize: number) => {
  const endpoint = `http://localhost:5000/?pageSize=${pageSize}`
  const promise = axios.get(endpoint, {
    headers: {
      'Access-Control-Allow-Origin' : '*'
    }
  }).then(onSuccess).catch(onError)

  return promise;
}
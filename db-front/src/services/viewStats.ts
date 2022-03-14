import axios from 'axios'

export const viewStats = () => {
  const endpoint = `http://localhost:5000/stats`
  const promise = axios.get(endpoint)

  return promise;
}
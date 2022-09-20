import { axiosGet } from '../config/globalAxios'

export const getTodo = (type) =>
  axiosGet({ url: `https://jsonplaceholder.typicode.com/${type}` })

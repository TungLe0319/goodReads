import Axios from 'axios'
import { baseURL, googleKey } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})
export const googleBookApi = Axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
  params: { key: googleKey},
  timeout: 8000,
})
export const SandBox = new Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/',
  timeout: 8000
})

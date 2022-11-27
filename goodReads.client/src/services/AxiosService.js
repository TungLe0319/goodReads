import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})
export const googleBookApi = Axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
  params: { key: "AIzaSyD9yWL4YCXZQCBWflNJJOOrYQvTIyw6_gg" },
  timeout: 8000,
});

export const SandBox = new Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/',
  timeout: 8000
})
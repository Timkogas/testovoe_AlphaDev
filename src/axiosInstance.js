import axios from 'axios'
import { apiUrl } from './constans'

const instance = axios.create({
  baseURL: apiUrl
})

export default instance
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://run.mocky.io/v3',
})

export default instance

import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT_API,
})

export default instance

import axiosInstance from './instance'

export const getContent = () => axiosInstance.get('/835572d0-8831-4a90-8e56-17773499af33').then(({ data }) => data)

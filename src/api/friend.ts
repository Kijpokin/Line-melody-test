import instance from '@api/instance'

export const fetchFriends = () => instance.get('/api/friends').then(({ data }) => data)

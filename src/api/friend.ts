import instance from '@api/instance'

export const fetchFriends = () => instance.get('/api/friends').then(({ data }) => data)

type Melody = {
  melodyId: number
  userId: number
}

export const checkMelodyOwnerShip = ({ melodyId, userId }: Melody) =>
  instance.get('/api/ownership', { params: { melodyId, userId } }).then(({ data }) => data)

export const purchaseMelody = ({ userId, melodyId }: Melody) =>
  instance.post('/api/purchase', { userId, melodyId }).then(({ data }) => data)

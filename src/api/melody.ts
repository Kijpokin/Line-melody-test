import instance from '@api/instance'

export const fetchMelody = ({ melodyId }: { melodyId: number }) =>
  instance.get(`/api/melody/${melodyId}`).then(({ data }) => data)

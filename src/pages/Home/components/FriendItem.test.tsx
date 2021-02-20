import { render } from '@testing-library/react'
import FriendItem from './FriendItem'

describe('<FriendItem />', () => {
  it('should render friend item', () => {
    const mockedProps = {
      displayName: '123',
      userId: 5,
      pictureUrl: '123123',
      onClick: jest.fn(),
    }

    render(<FriendItem {...mockedProps} />)
  })
})

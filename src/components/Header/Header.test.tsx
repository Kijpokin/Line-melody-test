import { render } from '@testing-library/react'
import Header from './Header'

describe('<Header />', () => {
  it('should match snapshots', () => {
    const mockProps = {
      children: 'Mock text',
    }
    const { container } = render(<Header {...mockProps} />)

    expect(container).toMatchSnapshot()
  })

  it('should render text when provided children', () => {
    const mockProps = {
      children: 'Mock text',
    }
    const { getByText } = render(<Header {...mockProps} />)
    expect(getByText('Mock text')).toBeInTheDocument()
  })
})

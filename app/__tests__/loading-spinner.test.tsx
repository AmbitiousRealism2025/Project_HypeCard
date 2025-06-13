import { render, screen } from '@testing-library/react'
import { LoadingSpinner } from '../components/loading-spinner'

describe('LoadingSpinner', () => {
  it('renders spinner element', () => {
    render(<LoadingSpinner />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })
})


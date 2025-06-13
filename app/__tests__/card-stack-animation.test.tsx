import { render } from '@testing-library/react'
import { CardStack } from '../components/card-stack'
import { HyperCardProvider } from '../lib/hypercard-context'

describe('CardStack animation', () => {
  it('wraps cards in motion div', () => {
    const { getByTestId } = render(
      <HyperCardProvider>
        <CardStack />
      </HyperCardProvider>
    )
    expect(getByTestId('card-motion')).toBeInTheDocument()
  })
})

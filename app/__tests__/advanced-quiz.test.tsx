import { render, screen, fireEvent } from '@testing-library/react'
import { HyperCardProvider } from '../lib/hypercard-context'
import { AdvancedQuiz } from '../components/quiz/advanced-quiz'

function setup() {
  return render(
    <HyperCardProvider>
      <AdvancedQuiz />
    </HyperCardProvider>
  )
}

describe('AdvancedQuiz', () => {
  it('shows certificate after completing with passing score', () => {
    setup()
    fireEvent.click(screen.getByLabelText('Supervised learning'))
    fireEvent.click(screen.getByRole('button', { name: /next/i }))

    fireEvent.click(screen.getByLabelText('True'))
    fireEvent.click(screen.getByRole('button', { name: /next/i }))

    fireEvent.change(screen.getByPlaceholderText('Your answer...'), {
      target: { value: 'TensorFlow.js' },
    })
    fireEvent.click(screen.getByRole('button', { name: /finish/i }))

    expect(screen.getByText('Certificate of Completion')).toBeInTheDocument()
  })
})

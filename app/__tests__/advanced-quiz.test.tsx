import { render, screen, fireEvent } from '@testing-library/react'
import html2canvas from 'html2canvas'

jest.mock('html2canvas')
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
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({ json: () => Promise.resolve({}) })
    ) as jest.Mock
  })

  it('shows certificate after completing with passing score', async () => {
    setup()
    fireEvent.click(screen.getByLabelText('Supervised learning'))
    fireEvent.click(screen.getByRole('button', { name: /next/i }))

    fireEvent.click(screen.getByLabelText('True'))
    fireEvent.click(screen.getByRole('button', { name: /next/i }))

    fireEvent.change(screen.getByPlaceholderText('Your answer...'), {
      target: { value: 'TensorFlow.js' },
    })
    fireEvent.click(screen.getByRole('button', { name: /finish/i }))

    expect(await screen.findByText('Certificate of Completion')).toBeInTheDocument()
  })

  it('exports certificate as PDF', async () => {
    setup()
    fireEvent.click(screen.getByLabelText('Supervised learning'))
    fireEvent.click(screen.getByRole('button', { name: /next/i }))

    fireEvent.click(screen.getByLabelText('True'))
    fireEvent.click(screen.getByRole('button', { name: /next/i }))

    fireEvent.change(screen.getByPlaceholderText('Your answer...'), {
      target: { value: 'TensorFlow.js' },
    })
    fireEvent.click(screen.getByRole('button', { name: /finish/i }))

    const btn = await screen.findByRole('button', { name: /export certificate/i })
    fireEvent.click(btn)
    expect(html2canvas).toHaveBeenCalled()
  })
})

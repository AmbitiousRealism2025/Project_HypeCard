import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
}

export interface QuizQuestionDef {
  id: number
  type: 'multiple-choice' | 'true-false' | 'text'
  answer: string | boolean
  points: number
}

export function calculateScore(
  questions: QuizQuestionDef[],
  answers: Record<number, string>
): number {
  let total = 0
  for (const q of questions) {
    const val = answers[q.id]
    if (val === undefined) continue
    const correct = typeof q.answer === 'boolean' ? String(q.answer) : String(q.answer).toLowerCase()
    const provided = typeof q.answer === 'boolean' ? val : val.toLowerCase()
    if (provided === correct) total += q.points
  }
  return total
}

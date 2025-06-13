import { POST as progressPost, GET as progressGet } from '../app/api/progress/route'
import { POST as quizPost, GET as quizGet } from '../app/api/quiz/route'
import { prisma } from '../lib/db'
import type { NextRequest } from 'next/server'

jest.mock('../lib/db', () => ({
  prisma: {
    progress: { upsert: jest.fn(), findUnique: jest.fn() },
    quizResult: { create: jest.fn(), findMany: jest.fn() }
  }
}))

describe('API error handling', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('returns 500 when progress POST fails', async () => {
    ;(prisma.progress.upsert as jest.Mock).mockRejectedValue(new Error('fail'))
    const req = { json: jest.fn().mockResolvedValue({ sessionId: '1', state: {} }) } as unknown as NextRequest
    const res = await progressPost(req)
    expect(res.status).toBe(500)
    const json = await res.json()
    expect(json).toEqual({ error: 'Internal server error' })
  })

  it('returns 500 when progress GET fails', async () => {
    ;(prisma.progress.findUnique as jest.Mock).mockRejectedValue(new Error('fail'))
    const req = { nextUrl: { searchParams: new URLSearchParams('sessionId=1') } } as unknown as NextRequest
    const res = await progressGet(req)
    expect(res.status).toBe(500)
    const json = await res.json()
    expect(json).toEqual({ error: 'Internal server error' })
  })

  it('returns 500 when quiz POST fails', async () => {
    ;(prisma.quizResult.create as jest.Mock).mockRejectedValue(new Error('fail'))
    const req = { json: jest.fn().mockResolvedValue({ sessionId: '1', result: {}, score: 0 }) } as unknown as NextRequest
    const res = await quizPost(req)
    expect(res.status).toBe(500)
    const json = await res.json()
    expect(json).toEqual({ error: 'Internal server error' })
  })

  it('returns 500 when quiz GET fails', async () => {
    ;(prisma.quizResult.findMany as jest.Mock).mockRejectedValue(new Error('fail'))
    const req = { nextUrl: { searchParams: new URLSearchParams('sessionId=1') } } as unknown as NextRequest
    const res = await quizGet(req)
    expect(res.status).toBe(500)
    const json = await res.json()
    expect(json).toEqual({ error: 'Internal server error' })
  })
})

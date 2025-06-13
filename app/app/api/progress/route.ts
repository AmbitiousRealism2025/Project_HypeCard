import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { sessionId, state } = body
  if (!sessionId) return NextResponse.json({ error: 'sessionId required' }, { status: 400 })
  const progress = await prisma.progress.upsert({
    where: { sessionId },
    update: { data: state },
    create: { sessionId, data: state }
  })
  return NextResponse.json(progress)
}

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get('sessionId') ?? ''
  if (!sessionId) return NextResponse.json({ error: 'sessionId required' }, { status: 400 })
  const progress = await prisma.progress.findUnique({ where: { sessionId } })
  return NextResponse.json(progress)
}

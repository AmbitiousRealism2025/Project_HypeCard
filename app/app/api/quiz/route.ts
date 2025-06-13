import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { sessionId, result, score } = body;
  if (!sessionId) {
    return NextResponse.json({ error: 'sessionId required' }, { status: 400 });
  }
  const saved = await prisma.quizResult.create({
    data: { sessionId, result, score },
  });
  return NextResponse.json(saved);
}

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get('sessionId') ?? '';
  if (!sessionId) {
    return NextResponse.json({ error: 'sessionId required' }, { status: 400 });
  }
  const result = await prisma.quizResult.findMany({
    where: { sessionId },
  });
  return NextResponse.json(result);
}

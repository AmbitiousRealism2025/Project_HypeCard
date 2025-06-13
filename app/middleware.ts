
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { TOTAL_CARDS } from './lib/constants';

export function middleware(request: NextRequest) {
  // Handle card routing
  if (request.nextUrl.pathname.startsWith('/card/')) {
    const cardId = request.nextUrl.pathname.split('/')[2];
    const id = parseInt(cardId);
    
    // Redirect invalid card IDs to home
    if (isNaN(id) || id < 1 || id > TOTAL_CARDS) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/card/:path*'
};

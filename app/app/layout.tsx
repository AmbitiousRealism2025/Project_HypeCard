
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HyperCard AI Primer',
  description: 'Learn AI concepts with an authentic 1987 HyperCard experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="suppress-hydration-warning">
      <body className="suppress-hydration-warning">
        {children}
      </body>
    </html>
  )
}

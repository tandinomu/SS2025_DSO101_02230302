import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Practical4 - Docker Deployment',
  description: 'Docker deployment practical exercise',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
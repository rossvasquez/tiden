import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tiden - AI Health Coach',
  description: 'Your AI-Powered weekly meal and exercise coach.',
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

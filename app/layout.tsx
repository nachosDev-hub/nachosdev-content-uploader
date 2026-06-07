import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'MatchNerve',
  description: 'Sharper match insights for football fans',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

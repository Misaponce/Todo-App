import './globals.css'
import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Todo List',
  description: 'Todo list as a challenge from Frontend Mentor',
}

const josefin = Josefin_Sans({ weight:'400', subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={josefin.className}>
      <body>
        {children}
      </body>
    </html>
  )
}

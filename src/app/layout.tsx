import type { Metadata } from 'next'
import { Epilogue } from 'next/font/google'
import Header from '../components/home/Header'
import './globals.css'

const epilogue = Epilogue({ subsets: ['latin'], variable: '--font-epilogue' })

export const metadata: Metadata = {
  title: 'Agency',
  description: 'Agency Website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}

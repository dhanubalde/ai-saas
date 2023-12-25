import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const poppins = Montserrat ({ weight: '600', subsets: ['latin'] });


export const metadata: Metadata = {
  title: 'Ai_Saas',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={poppins.className}>
        
          {children}
       
      </body>
      </html>
    </ClerkProvider>
  )
}

import type { Metadata } from 'next'
import { ClerkProvider } from "@clerk/nextjs"
import { ThemeProvider } from '@/components/theme-provider'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['200', '400', '700']
})

export const metadata: Metadata = {
  title: `Nii's Shop`,
  description: 'An e-commerce website for clothing',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo-short-dark.png",
        href: "/logo-short-dark.png"
      },

      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-short-light.png",
        href: "/logo-short-light.png"
      }
    ]
  }
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
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}

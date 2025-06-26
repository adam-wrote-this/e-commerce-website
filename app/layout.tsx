import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'
import ScrollToTop from '@/components/ScrollToTop'
import ToastContextProvider from '@/app/context/ToastContext'
import CartContextProvider from '@/app/context/CartContext'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'E-commerce Website',
  description:
    'Build a fully functional e-commerce website for a mock e-commerce platform'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollToTop />
        <ToastContextProvider>
          <CartContextProvider>
            <Navbar className='mt-4' />
            <main className='mx-auto min-h-screen max-w-[1440px] p-4'>
              <div
                className={clsx(
                  'min-h-[calc(100vh_-_32px)] rounded-md bg-white',
                  'shadow-sm md:shadow-md lg:shadow-lg',
                  'text-neutral-900'
                )}
              >
                {children}
                <Footer />
              </div>
            </main>
          </CartContextProvider>
        </ToastContextProvider>
      </body>
    </html>
  )
}

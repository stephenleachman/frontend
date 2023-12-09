import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer, SideNav, Providers } from './_global_components';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="fixed">
            <SideNav />
          </div>
          <div className="ml-[90px] relative min-h-screen pb-[164px] sm:pb-[56px]">
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

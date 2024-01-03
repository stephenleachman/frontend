import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Footer, SideNav, Providers, BottomNav } from './_global_components';
import { Toaster } from "react-hot-toast";
// import CustomToast from '@/app/_global_components/ContactToast'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Stephen Leachman',
  description: 'Welcome to my portfolio website. I am an options trader, small business owner, and freelance UI/UX web designer and software engineer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <body className={poppins.className}>
        <Providers>
        <Toaster position="bottom-right" toastOptions={{ duration: 3000, style: {
          background: '#333',
          color: '#fff',
        }}} />
          <div className="fixed hidden sm:block">
            <SideNav />
          </div>
          <div className="sm:ml-[91px] relative min-h-screen pb-[164px] sm:pb-[56px]">
            {children}
            <Footer />
          </div>
          <div className=" sm:hidden">
            <BottomNav />
          </div>
        </Providers>
      </body>
    </html>
  )
}

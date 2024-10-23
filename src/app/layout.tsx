import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Footer, SideNav, Providers, BottomNav } from './_global_components';
import { Toaster } from "react-hot-toast";
// import CustomToast from '@/app/_global_components/ContactToast'
import OGImage from '@/../public/images/hero-image-3.png'
import GoogleAnalytics from '@/app/_global_components/GoogleAnalytics';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Stephen Leachman',
  description: 'Welcome to my portfolio website, and thanks for stopping by! Here, you can get to know me, explore some of my exciting projects, and possibly pick up a few new insights from my blog.',
  metadataBase: new URL('https://stephenleachman.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: "Stephen Leachman",
    description: "Welcome to my portfolio website, and thanks for stopping by! Here, you can get to know me, explore some of my exciting projects, and possibly pick up a few new insights from my blog.",
    url: "stephenleachman.com",
    siteName: "Stephen Leachmans Personal Portfolio",
    images: [
      {
        url: 'https://res.cloudinary.com/dpthcnuy6/image/upload/v1704587309/open_graph.png',
        width: 1260,
        height: 800,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{scrollBehavior:'smooth'}}>
      <GoogleAnalytics />
      <body className={poppins.className}> 
        <Providers>
        <Toaster position="bottom-right" toastOptions={{ duration: 3000, style: {
          background: '#333',
          color: '#fff',
        }}} />
          <div className="fixed hidden sm:block">
            <SideNav />
          </div>
          <div className="sm:ml-[91px] relative min-h-screen pb-[164px] sm:pb-[56px] bg-custom-gray dark:bg-custom-dark-4">
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

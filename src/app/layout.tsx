import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { fontSans } from "@/config/fonts";
import './globals.css'
import { Footer, SideNav, Providers, BottomNav } from './_global_components';
import { Toaster } from "react-hot-toast";
// import CustomToast from '@/app/_global_components/ContactToast'
// import OGImage from '@/../public/images/hero-image-3.png'
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
        url: 'https://res.cloudinary.com/dpthcnuy6/image/upload/v1731035644/large_Frame_18_c9dce0b4a8.png',
        width: 1260,
        height: 800,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en" style={{scrollBehavior:'smooth'}}>
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
          <div className="sm:ml-[89px] relative min-h-screen pb-[164px] sm:pb-[56px] bg-background-3 dark:bg-background-4">
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

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navbar01Page from '@/components/navbar-01/navbar-01';
import { TranslationProvider } from '@/context/TranslationProvider';
import { ThemeProvider } from '@/components/theme-provider';

import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import 'yet-another-react-lightbox/styles.css';
import Footer05Page from '@/components/footer-05/footer-05';

import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Carlos Rojas | Frontend Developer',
  description:
    'Hi, I’m Carlos Rojas — a frontend developer from Mexico City specialized in React, Next.js, TypeScript, and UI/UX. Explore my portfolio, projects, and contact details.',
  authors: [
    { name: 'Carlos Gerardo Rojas Jaime', url: 'https://www.carlosrojasj.dev' },
  ],
  creator: 'Carlos Rojas',
  generator: 'Next.js',
  keywords: [
    'Carlos Rojas',
    'Carlos Gerardo Rojas Jaime',
    'Frontend Developer',
    'Desarrollador Frontend Developer',
    'FullStack Developer',
    'React Developer',
    'Next.js Portfolio',
    'Web Developer',
    'Mexico Developer',
    'Freelance Developer',
  ],
  metadataBase: new URL('https://www.carlosrojasj.dev'),
  openGraph: {
    title: 'Carlos Rojas | Frontend Developer',
    description:
      'Frontend developer based in Mexico City. Passionate about building clean, accessible, and scalable web applications.',
    url: 'https://www.carlosrojasj.dev',
    siteName: 'Carlos Rojas Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.carlosrojasj.dev/CoverPortfolio.webp',
        width: 1200,
        height: 630,
        alt: 'Carlos Rojas Portfolio Cover',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carlos Rojas | Frontend Developer',
    description:
      'Explore my projects built with React, Next.js, and modern frontend tools.',
    images: ['https://www.carlosrojasj.dev/CoverPortfolio.webp'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://www.carlosrojasj.dev',
    languages: {
      en: 'https://www.carlosrojasj.dev',
      es: 'https://www.carlosrojasj.dev',
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32x32.png',
  },
  other: {
    'google-site-verification': 'gS_kudSgpEVfZ4DGN4MdKUYcmLBbgvRUibhuvjvqfbg',
  },
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} antialiased px-8 sm:px-20`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <TranslationProvider>
            <Navbar01Page />
            <main className='px-0 sm:px-8 md:px-4 flex flex-col gap-16 sm:gap-20 lg:gap-24'>
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
            <Footer05Page />
            <Toaster richColors />
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

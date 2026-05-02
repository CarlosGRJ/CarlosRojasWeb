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
  title: 'Carlos Rojas | Full-Stack Developer',
  description:
    'Full-stack developer from Mexico City with 6+ years building web apps and AI-powered products using React, Next.js, Node.js, and TypeScript.',
  authors: [
    { name: 'Carlos Gerardo Rojas Jaime', url: 'https://www.carlosrojasj.dev' },
  ],
  creator: 'Carlos Rojas',
  metadataBase: new URL('https://www.carlosrojasj.dev'),
  openGraph: {
    title: 'Carlos Rojas | Full-Stack Developer',
    description:
      'Full-stack developer based in Mexico City. 6+ years building scalable web apps and AI-powered products with React, Next.js, Node.js, and TypeScript.',
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
    title: 'Carlos Rojas | Full-Stack Developer',
    description:
      'Explore my projects built with React, Next.js, Node.js, TypeScript, and AI tools.',
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
  readonly children: React.ReactNode;
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Carlos Rojas',
  alternateName: 'Carlos Gerardo Rojas Jaime',
  url: 'https://www.carlosrojasj.dev',
  image: 'https://www.carlosrojasj.dev/images/carlos-avatar.webp',
  jobTitle: 'Full-Stack Developer',
  worksFor: { '@type': 'Organization', name: 'Tavant' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mexico City',
    addressCountry: 'MX',
  },
  knowsLanguage: ['en', 'es'],
  sameAs: [
    'https://www.linkedin.com/in/carlosgrj/',
    'https://github.com/CarlosGRJ',
    'https://www.instagram.com/carloscodebrew',
  ],
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} antialiased`}>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <TranslationProvider>
            <a
              href='#home'
              className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:ring-2 focus:ring-primary'>
              Skip to main content
            </a>
            <Navbar01Page />
            <main className='flex flex-col'>
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

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar01Page from '@/components/navbar-01/navbar-01';
import { TranslationProvider } from '@/context/TranslationProvider';
import { ThemeProvider } from '@/components/theme-provider';

import { Toaster } from '@/components/ui/sonner';

import 'yet-another-react-lightbox/styles.css';
import Footer05Page from '@/components/footer-05/footer-05';

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
    'Portfolio of Carlos Rojas, a passionate web and mobile developer with expertise in React, Next.js, Firebase, and more.',
  authors: [{ name: 'Carlos Gerardo Rojas Jaime' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
            </main>
            <Footer05Page />
            <Toaster richColors />
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

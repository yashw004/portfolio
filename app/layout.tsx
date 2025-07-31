import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yashwanth Kumar S N - Full Stack Developer',
  description: 'Aspiring Full-Stack Developer specializing in MERN Stack development. Expert in React, Node.js, MongoDB, and modern web technologies. View my portfolio, projects, and experience.',
  keywords: 'Full Stack Developer, MERN Stack, React, Node.js, JavaScript, Web Development, Portfolio, Yashwanth Kumar, CMRIT, Bangalore Developer, Frontend Developer, Backend Developer',
  authors: [{ name: 'Yashwanth Kumar S N' }],
  creator: 'Yashwanth Kumar S N',
  publisher: 'Yashwanth Kumar S N',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ],
  openGraph: {
    title: 'Yashwanth Kumar S N - Full Stack Developer',
    description: 'Aspiring Full-Stack Developer specializing in MERN Stack development. Expert in React, Node.js, MongoDB, and modern web technologies.',
    type: 'website',
    locale: 'en_US',
    url: 'https://yashwanth-portfolio.vercel.app',
    siteName: 'Yashwanth Kumar Portfolio',
    images: [
      {
        url: 'https://i.ibb.co/zTCCb3tP/2ea6a232-e9a4-45f5-8e6c-acbfcc5fc53d.jpg',
        width: 1200,
        height: 630,
        alt: 'Yashwanth Kumar S N - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yashwanth Kumar S N - Full Stack Developer',
    description: 'Aspiring Full-Stack Developer specializing in MERN Stack development. Expert in React, Node.js, MongoDB, and modern web technologies.',
    images: ['https://i.ibb.co/zTCCb3tP/2ea6a232-e9a4-45f5-8e6c-acbfcc5fc53d.jpg'],
  },
  alternates: {
    canonical: 'https://yashwanth-portfolio.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
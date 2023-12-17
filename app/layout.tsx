import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '~/components/provider/theme';

const harmonySans = localFont({
  src: [
    {
      path: '../public/fonts/harmonySans/HarmonyOS_Sans_SC_Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/harmonySans/HarmonyOS_Sans_SC_Bold.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/harmonySans/HarmonyOS_Sans_SC_Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/harmonySans/HarmonyOS_Sans_SC_Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Akumanoko',
  description: '平平无奇小博客',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='zh-CN'
      suppressHydrationWarning>
      <head>
        <link
          rel='icon'
          href='/favicon.ico'
        />
        <meta
          name='description'
          content='akumanoko'
        />
        <meta
          content='width=device-width, initial-scale=1'
          name='viewport'
        />
      </head>
      <body className={harmonySans.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

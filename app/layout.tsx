import type { Metadata } from 'next';
import { Navbar } from '~/components/navbar';
import { ThemeProvider } from '~/components/provider/theme';
import { harmonySans } from './font';
import { ScrollArea } from '~/components/ui/scroll-area';
import './globals.css';

export const metadata: Metadata = {
  title: 'Akumanoko',
  description: 'Akumanoko',
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
          <ScrollArea className='h-screen'>
            <div className='p-2 relative min-h-screen'>
              <div className='bg-[url(/noise.png)] opacity-[0.025] pointer-events-none absolute inset-0 bg-repeat bg-[182px,182px]' />
              <div
                className='amazing-rays opacity-50 dark:opacity-50 bg-[url(/api/amazing-rays)] bg-no-repeat  mix-blend-exclusion pointer-events-none -z-10 absolute inset-0'
                style={{
                  backgroundSize: '1589px 423px',
                  backgroundPosition: 'calc(50% - 140px) top',
                }}
              />
              <Navbar />
              {children}
            </div>
          </ScrollArea>
        </ThemeProvider>
      </body>
    </html>
  );
}

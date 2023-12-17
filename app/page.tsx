import { Projects } from '~/components/project';
import { Posts } from '~/components/posts';
import { Social } from '~/components/social';
import Image from 'next/image';
import { ThemeToggle } from '~/components/theme-toggle';
import clsx from 'clsx';
import { Section } from '~/components/section';

export default function Home() {
  return (
    <main className='min-h-screen relative p-2 md:pt-16 md:pl-24 md:space-y-8 space-y-4'>
      <Image
        fill
        className='z-50 pointer-events-none opacity-50 dark:opacity-5'
        src='/zd.png'
        alt='zd'
      />
      <h1
        className={clsx(
          'text-5xl md:text-7xl inline-block font-bold text-transparent bg-clip-text bg-gradient-to-tr from-sky-950 to-sky-50 ',
          'dark:from-green-400'
        )}>
        Akumanoko
      </h1>
      <p>平平无奇小博客。</p>
      <div className='flex space-x-4'>
        <Social />
        <ThemeToggle />
      </div>
      <Section title='Pinned Projects'>
        <Projects />
      </Section>
      <Section title='Posts'>
        <Posts />
      </Section>
    </main>
  );
}

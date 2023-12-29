import { Projects } from '~/components/project';
import { Posts } from '~/components/posts';
import { Social } from '~/components/social';
import Image from 'next/image';
import { ThemeToggle } from '~/components/theme-toggle';
import clsx from 'clsx';
import { Section } from '~/components/section';

export default function Home() {
  return (
    <main className='min-h-screen relative p-2 md:pt-24 md:pl-48 md:space-y-8 space-y-4'>
      <Image
        fill
        className='z-50 pointer-events-none opacity-50 dark:opacity-5'
        src='/zd.png'
        alt='zd'
      />
      <h1 className={clsx('text-5xl  md:text-8xl inline-block font-black  text-blue-700  ', 'dark:text-green-400')}>
        AKUMA
        <br />
        NO KO
      </h1>
      <p>在我成为大文豪之前，你们可以免费阅读我的博客。</p>
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

import clsx from 'clsx';
import { Posts } from '~/components/posts';
import { Projects } from '~/components/project';
import { Section } from '~/components/section';
import { Social } from '~/components/social';
import { ThemeToggle } from '~/components/theme-toggle';

export default function Home() {
  return (
    <main className='max-w-2xl mx-auto relative md:space-y-8 space-y-4'>
      <div className='my-16 space-y-2 mix-blend-luminosity'>
        <h1 className={clsx('text-2xl inline-block font-black', 'dark:text-white')}>Hey,I&apos;m wen</h1>
        <p className='text-zinc-600'>在我成为大文豪之前，你们可以免费阅读我的博客。</p>
      </div>
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

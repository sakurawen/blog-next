import clsx from 'clsx';
import { Articles } from '~/components/articles';
import { Projects } from '~/components/project';
import { Section } from '~/components/section';
import { Social } from '~/components/social';
import { ThemeToggle } from '~/components/theme-toggle';

export default function Home() {
  return (
    <main className='max-w-2xl mx-auto relative md:space-y-8 space-y-4'>
      <div className='my-16 space-y-2 mix-blend-luminosity'>
        <h1 className={clsx('text-2xl inline-block font-black', 'dark:text-white')}>Hey,I&apos;m wen</h1>
        <p className='text-blend'>
          萍水相逢也是前世之缘，路边石子绊倒也是碎片之缘，
          <br />
          共同起舞，情缘相连，这世间便是乐园，烦恼统统吹走吧。
        </p>
        <div className='flex space-x-4 !mt-6'>
          <Social />
          <ThemeToggle />
        </div>
      </div>
      <Section title='Pinned Projects'>
        <Projects />
      </Section>
      <Section title='Articles'>
        <Articles />
      </Section>
    </main>
  );
}

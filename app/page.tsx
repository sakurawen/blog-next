import clsx from 'clsx';
import { Articles } from '~/components/articles';
import { Projects } from '~/components/project';
import { Section } from '~/components/section';
import { Social } from '~/components/social';
import { ThemeToggle } from '~/components/theme-toggle';

export default function Home() {
  return (
    <main className='max-w-2xl mx-auto relative md:space-y-8 space-y-4'>
      <div className='mt-16 space-y-4 mix-blend-luminosity'>
        <h1 className={clsx('text-2xl inline-block font-mono font-black', 'dark:text-white')}>Hey, I&apos;m wen</h1>
        <p className=' text-blend leading-8'>
          我一直以为，我的梦想就是一只帆船
          <br />
          正安心享受旅行的时候，却突然发现它并不能行驶的很远
          <br />
          很快，船就沉了
          <br />
          我不知道自己应该是庆幸还是懊悔
          <br />
          庆幸的是，在发现问题后我很快就逃离了出来
          <br />
          而懊悔的是，我把很多美好的东西都留在了船上
          <br />
          一件都没有带走
        </p>
      </div>
      <div className='flex space-x-4 '>
        <Social />
        <ThemeToggle />
      </div>
      <Section className='mt-1 space-y-2' title='Pinned Projects'>
        <Projects />
      </Section>
      <Section title='Articles'>
        <Articles />
      </Section>
    </main>
  );
}

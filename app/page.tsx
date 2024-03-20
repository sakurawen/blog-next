import clsx from 'clsx';
import { Articles } from '~/components/articles';
import { Projects } from '~/components/project';
import { Section } from '~/components/section';
import { Social } from '~/components/social';
import { Sign } from '~/components/sign';

const signs = [
  `我一直以为，我的梦想就是一只帆船
  正安心享受旅行的时候，却突然发现它并不能行驶的很远
  很快，船就沉了
  我不知道自己应该是庆幸还是懊悔
  庆幸的是，在发现问题后我很快就逃离了出来
  而懊悔的是，我把很多美好的东西都留在了船上
  一件都没有带走`,
  `如果你是因为幻想着新生活的美好而移民
  那你将必然失望
  因为生活中的盐总是咸的
  哪里都一样
  如果你是因为要逃离旧世界的痛苦而移民
  那你几乎一定会幸福
  因为那一时一地的苦难并不是普世价值`,
  `也许命运的结局是注定的，但我们依然可以决定如何到达终点
  当我们有机会做出选择的时候，不要让自己后悔`,
];

export default function Home() {
  const signIndex = Math.floor(Math.random() * signs.length);
  return (
    <main className='max-w-2xl mx-auto relative md:space-y-8 space-y-4'>
      <div className='mt-16 space-y-4 mix-blend-luminosity'>
        <h1 className={clsx('text-2xl inline-block font-mono font-black', 'dark:text-white')}>Hey, I&apos;m wen</h1>
        <div className='relative text-blend leading-8'>
          <Sign>{signs[signIndex]}</Sign>
        </div>
      </div>
      <div className='flex space-x-4 '>
        <Social />
      </div>
      <Section
        className='mt-1 space-y-2'
        title='Pinned Projects'>
        <Projects />
      </Section>
      <Section title='Articles'>
        <Articles />
      </Section>
    </main>
  );
}

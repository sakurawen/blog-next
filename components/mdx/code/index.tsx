'use client';
import { PropsWithChildren, use } from 'react';
import { codeToHtml } from 'shikiji';

async function highligh(code: string, language: string) {
  return codeToHtml(code, {
    lang: language,
    themes: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
    cssVariablePrefix: '--shiki-',
    defaultColor: false,
  });
}

export function Code(props: PropsWithChildren<{ className?: string }>) {
  const { children, className } = props;

  const lang = className?.split('-')?.[1];

  if (!lang) {
    return <code className='font-mono px-1.5 py-0.5 before:hidden after:hidden bg-zinc-50 text-sky-700 dark:bg-zinc-800 dark:text-green-400 rounded-md font-bold'>{children}</code>;
  }

  if (typeof children === 'string') {
    const code = use(highligh(children, lang));
    return (
      <div className=' rounded-md relative'>
        <span className='absolute right-1 top-0.5 text-zinc-400 text-xs pointer-events-none'>{lang}</span>
        <div dangerouslySetInnerHTML={{ __html: code }} />
      </div>
    );
  }

  return null;
}

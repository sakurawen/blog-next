'use client';
import { PropsWithChildren } from 'react';
import Typeit from 'typeit-react';
import { useIsClient } from 'foxact/use-is-client';

export function Sign(props: PropsWithChildren) {
  const isClient = useIsClient();
  if (!isClient) return <div className='h-36' />;

  return (
    <div className='p-2 -ml-2 cursor-default select-none hover:bg-zinc-300/20 hover:backdrop-blur hover:ring-1 dark:ring-zinc-800/80 ring-zinc-200/60  dark:hover:bg-zinc-500/10  rounded-lg w-fit'>
      <div className='sign mix-blend-luminosity relative'>
        <p className='text-lg  leading-loose whitespace-pre-line w-full absolute top-t left-0 '>
          <Typeit>{props.children}</Typeit>
        </p>
        <p className='text-lg  leading-loose whitespace-pre-line inline-block opacity-10 select-none selection:text-transparent pointer-events-none '>
          <span>{props.children}</span>
        </p>
      </div>
    </div>
  );
}

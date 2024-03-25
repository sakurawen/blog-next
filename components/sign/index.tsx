'use client';
import { PropsWithChildren } from 'react';
import Typeit from 'typeit-react';
import { useIsClient } from 'foxact/use-is-client';

export function Sign(props: PropsWithChildren) {
  const isClient = useIsClient();
  if (!isClient) return <div className='h-36' />;

  return (
    <div className='p-2 -ml-2 hover:bg-zinc-100/20 hover:backdrop-blur  dark:hover:bg-zinc-500/10  hover:shadow rounded-lg w-fit'>
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

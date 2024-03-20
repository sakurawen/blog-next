'use client';
import { PropsWithChildren } from 'react';
import Typeit from 'typeit-react';
import { useIsClient } from 'foxact/use-is-client';

export function Sign(props: PropsWithChildren) {
  const isClient = useIsClient();
  if (!isClient) return <div className='h-36' />;
  return (
    <div className='sign'>
      <p className='whitespace-pre-line absolute top-0 left-0'>
        <Typeit>{props.children}</Typeit>
      </p>
      <p className='whitespace-pre-line inline-block opacity-10 select-none selection:text-transparent pointer-events-none'>
        <span>{props.children}</span>
      </p>
    </div>
  );
}

import { PropsWithChildren } from 'react';
import clsx from 'clsx';

export function Section({
  children,
  className,
  title,
}: PropsWithChildren<{
  className?: string;
  title?: string;
}>) {
  return (
    <section className={clsx('space-y-2  mt-4 md:w-96', className)}>
      {title && <h2 className='font-bold'>{title}</h2>}
      {children}
    </section>
  );
}

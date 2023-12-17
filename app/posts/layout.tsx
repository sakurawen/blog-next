import { PropsWithChildren } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Comment } from '~/components/comment';

export default function PostLayout({ children }: PropsWithChildren) {
  return (
    <div className='max-w-[65ch] px-4 md:px-0 mx-auto py-6'>
      <Link
        href='/'
        className='p-1  rounded-md cursor-default inline-block hover-card'>
        <ArrowLeft />
      </Link>
      {children}
      <Comment />
    </div>
  );
}

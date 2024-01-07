import { PropsWithChildren } from 'react';
import { Comment } from '~/components/comment';

export default function PostLayout({ children }: PropsWithChildren) {
  return (
    <div className='max-w-2xl md:px-0 mx-auto py-6'>
      {children}
      <Comment />
    </div>
  );
}

import { allPosts } from 'contentlayer/generated';
import Link from 'next/link';
import { format, compareDesc } from 'date-fns';

const sortPosts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

export async function Posts() {
  return (
    <ul className='pl-1 space-y-2 mt-2'>
      {sortPosts.sort().map((post) => {
        return (
          <Link
            key={post._id}
            href={post.url}
            className='block  cursor-default '>
            <li className='cursor-default block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300'>
              <p className='text-ellipsis overflow-hidden whitespace-nowrap '>{post.title}</p>
              <p className='text-xs text-zinc-400 dark:text-zinc-700'>{format(new Date(post.date), 'yyyy-MM-dd')}</p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

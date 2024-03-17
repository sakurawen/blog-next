import { allArticles } from 'contentlayer/generated';
import Link from 'next/link';
import { format, compareDesc } from 'date-fns';

const sortArticles = allArticles.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

export async function Articles() {
  return (
    <ul className='space-y-4 mt-2'>
      {sortArticles.sort().map((article) => {
        return (
          <Link
            key={article._id}
            href={article.url}
            className='block  cursor-default '>
            <li className='cursor-default block text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-300 space-y-1'>
              <p className='text-base md:text-lg text-ellipsis overflow-hidden whitespace-nowrap '>{article.title}</p>
              <p className='text-xs text-zinc-400 dark:text-zinc-700'>{format(new Date(article.date), 'yyyy-MM-dd')}</p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

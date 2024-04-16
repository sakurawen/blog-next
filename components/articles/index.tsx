import { allArticles } from 'contentlayer/generated';
import { Link } from 'next-view-transitions';
import { format, compareDesc } from 'date-fns';

const sortArticles = allArticles.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

export async function Articles() {
  return (
    <ul className='space-y-4 mt-2'>
      {sortArticles.sort().map((article) => {
        return (
          <li
            key={article._id}
            className='cursor-default hover-card rounded-lg  px-2 py-1.5 block'>
            <Link
              href={article.url}
              className='block  cursor-default '>
              <p
                style={{
                  viewTransitionName: article.slug,
                }}
                className='text-base  text-ellipsis overflow-hidden whitespace-nowrap'>
                {article.title}
              </p>
              <p className='text-zinc-400  text-sm'>{format(new Date(article.date), 'yyyy-MM-dd')}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

import { allArticles } from 'contentlayer/generated';
import { format } from 'date-fns';
import { notFound } from 'next/navigation';
import { redis } from '~/app/upstash';
import { MDXArticle } from './article';

function findArticleById(id: string) {
  return allArticles.find((article) => article._id === id);
}

export default async function Article({
  params,
}: {
  params: {
    year: string;
    title: string;
  };
}) {
  const { year, title } = params;
  const id = `${year}/${title}.mdx`;
  const article = findArticleById(id);
  if (article === undefined) return notFound();
  let count = 0;
  if (process.env.NODE_ENV === 'production') {
    count = await redis.incr(article._id);
  } else {
    count = (await redis.get(article._id)) || 0;
  }
  return (
    <div className='space-y-6 mt-6'>
      <h1 className='font-bold text-3xl'>{article.title}</h1>
      <p className='flex space-x-8'>
        <span className='text-sm'>发布日期：{format(new Date(article.date), 'yyyy-MM-dd')}</span>
        <span className='text-sm'>点击次数:{count}</span>
      </p>
      <MDXArticle article={article} />
    </div>
  );
}

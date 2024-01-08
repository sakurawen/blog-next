'use client';
import { Code } from '~/components/mdx/code';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { PropsWithChildren } from 'react';
import { Article } from 'contentlayer/generated';

const components = {
  code: Code,
  pre: ({ children }: PropsWithChildren) => children,
};

export function MDXArticle({ article }: { article: Article }) {
  const MDXContent = useMDXComponent(article.body.code);
  return (
    <article className='prose max-w-2xl prose-zinc dark:prose-invert pb-16'>
      <MDXContent components={components} />
    </article>
  );
}

import { allPosts, Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { Code } from '~/components/mdx/code';
import { PropsWithChildren } from 'react';

function findPostById(id: string) {
  return allPosts.find((post) => post._id === id);
}

export default function Post({
  params,
}: {
  params: {
    year: string;
    title: string;
  };
}) {
  const { year, title } = params;
  const id = `${year}/${title}.mdx`;
  const post = findPostById(id);
  if (post === undefined) return notFound();
  return (
    <div className='space-y-6 mt-6'>
      <h1 className='font-bold text-3xl'>{post.title}</h1>
      <p>{format(new Date(post.date), 'yyyy-MM-dd')}</p>
      <MDXPost post={post} />
    </div>
  );
}

const components = {
  code: Code,
  pre: ({ children }: PropsWithChildren) => children,
};

function MDXPost({ post }: { post: Post }) {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <article className='prose prose-zinc dark:prose-invert pb-16'>
      <MDXContent components={components} />
    </article>
  );
}

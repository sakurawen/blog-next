import { Articles } from '~/components/articles';
export default function Posts() {
  return (
    <div className='max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold mt-16 mb-2'>Blog Articles</h1>
      <p className='text-blend my-4 text-blend mix-blend-luminosity'>分享有关开发者经验和web开发的文章</p>
      <div className='mt-4'>
        <Articles />
      </div>
    </div>
  );
}

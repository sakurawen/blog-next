import Link from 'next/link';
export function Navbar() {
  return (
    <header className='max-w-2xl mx-auto mt-8 flex items-center'>
      <div className='flex items-center'>
        <h2 className='font-bold text-base mix-blend-luminosity mr-4'>
          <Link
            scroll={false}
            href='/'
            className='text-xl'>
            Akumanoko
          </Link>
        </h2>
      </div>
    </header>
  );
}

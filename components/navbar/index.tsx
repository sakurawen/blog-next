import Link from 'next/link';
export function Navbar() {
  return (
    <header className='max-w-2xl mx-auto pt-8 flex items-center'>
      <div className='flex items-center'>
        <h2 className='font-bold text-base mix-blend-luminosity mr-4'>
          <Link
            href='/'
            className='text-xl'>
            Akumanoko
          </Link>
        </h2>
        <nav className='text-blend text-blend-hover mix-blend-luminosity'>
          <Link href='/blog'>Blog</Link>
        </nav>
      </div>
    </header>
  );
}

import Link from 'next/link';
export function Navbar() {
  return (
    <header className='max-w-2xl mx-auto pt-8 flex items-center'>
      <div>
        <h2 className='font-bold text-base mix-blend-luminosity'>
          <Link
            href='/'
            className='text-xl'>
            Akumanoko
          </Link>
        </h2>
        <nav>
          <Link href='/posts'></Link>
        </nav>
      </div>
    </header>
  );
}

import { Twitter, Github, Mail } from 'lucide-react';
import Link from 'next/link';

const links = [
  {
    name: 'X',
    url: 'https://twitter.com/wenhouman',
    icon: Twitter,
  },
  {
    name: 'github',
    url: 'https://github.com/sakurawen',
    icon: Github,
  },
  {
    name: 'email',
    url: 'mailto://wisakura@outlook.com',
    icon: Mail,
  },
];

export function Social() {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.url}
            className='p-1.5 md:p-1 rounded-md  mix-blend-darken dark:mix-blend-exclusion  hover-card cursor-default'
            target='_blank'
            aria-label={link.name}
            >
            <link.icon />
          </Link>
        );
      })}
    </>
  );
}

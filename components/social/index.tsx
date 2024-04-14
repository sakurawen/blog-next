'use client';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { Github } from './icons/github';
import { X } from './icons/x';
import { ThemeToggle } from '../theme-toggle';
import { useIsClient } from 'foxact/use-is-client';

const links = [
  {
    name: 'X',
    url: 'https://twitter.com/wenhouman',
    icon: X,
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
  const isClient = useIsClient();
  if (!isClient) return null;
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.url}
            className='p-1.5 md:p-1 rounded-md  mix-blend-darken dark:mix-blend-exclusion  hover-card cursor-default'
            target='_blank'
            aria-label={link.name}>
            <link.icon />
          </Link>
        );
      })}
      {/* <ThemeToggle /> */}
    </>
  );
}

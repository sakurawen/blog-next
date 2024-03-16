'use client';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  if (theme === 'dark') {
    return (
      <button
        className='p-1.5 md:p-1  cursor-default mix-blend-darken dark:mix-blend-exclusion hover-card  rounded-md'
        onClick={() => setTheme('light')}>
        <Sun  />
      </button>
    );
  }
  return (
    <button
      className='p-1.5 md:p-1  cursor-default mix-blend-darken dark:mix-blend-exclusion hover-card  rounded-md'
      onClick={() => setTheme('dark')}>
      <Moon  />
    </button>
  );
}

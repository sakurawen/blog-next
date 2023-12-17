'use client';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  if (theme === 'dark') {
    return (
      <button
        className='cursor-default hover-card p-1 rounded-md'
        onClick={() => setTheme('light')}>
        <Sun />
      </button>
    );
  }
  return (
    <button
      className='cursor-default hover-card p-1 rounded-md'
      onClick={() => setTheme('dark')}>
      <Moon />
    </button>
  );
}

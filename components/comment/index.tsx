'use client';
import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

export function Comment() {
  const { theme } = useTheme();
  return (
    <Giscus
      repo='sakurawen/blog-comments'
      repoId='R_kgDOHhXNkw'
      category='Announcements'
      categoryId='DIC_kwDOHhXNk84CPvWm'
      mapping='pathname'
      strict='0'
      reactionsEnabled='1'
      emitMetadata='0'
      input-position='bottom'
      theme={theme === 'dark' ? 'noborder_dark' : 'noborder_light'}
      lang='zh-CN'
    />
  );
}

import { getPinnedProject } from './service';
import Link from 'next/link';

export async function Projects() {
  const projects = await getPinnedProject();

  return projects.data.user.pinnedItems.edges.map((project) => {
    return (
      <Link
        key={project.node.name}
        href={project.node.url}
        target='_blank'
        className='cursor-default hover-card rounded-md p-3 md:p-2 block'>
        <div>
          <p>{project.node.name}</p>
          <p className='text-zinc-400 dark:text-zinc-600 text-xs'>{project.node.description}</p>
        </div>
      </Link>
    );
  });
}

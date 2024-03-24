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
        className='cursor-default hover-card rounded-lg px-2 py-1.5 block'>
        <p className='text-base'>{project.node.name}</p>
        <p className='text-zinc-400  text-sm'>{project.node.description}</p>
      </Link>
    );
  });
}

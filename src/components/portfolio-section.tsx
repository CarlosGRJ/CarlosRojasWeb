'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { projects } from '@/constants/projectsData';
import { ProjectItem } from '@/types/portfolio';
import PortfolioDialog from './ui/porfolio-dialog';

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );

  return (
    <section
      id='portfolio'
      className='flex flex-col items-center justify-center text-[1.4rem] px-4 md:px-16'>
      <h2 className='text-4xl font-bold mb-6 md:mb-20 lg:mb-28 border-b-4 border-primary pb-2'>
        Portfolio
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-12'>
        {projects.map((project) => (
          <article
            key={project.id}
            className='bg-background border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between overflow-hidden'>
            <figure className='w-full h-[200px] overflow-hidden'>
              <Image
                src={project.coverImg}
                alt={project.title}
                width={600}
                height={400}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                quality={85}
                priority
                className='w-full h-full object-fill transition-transform duration-300 ease-in-out hover:scale-105'
              />
            </figure>

            <div className='flex flex-col gap-4 p-6'>
              <h3 className='text-2xl font-semibold text-foreground'>
                {project.title}
              </h3>
              <p className='text-[1.4rem] leading-relaxed text-muted-foreground'>
                {project.summary}
              </p>
              <Button
                onClick={() => setSelectedProject(project)}
                aria-label={`View screenshots of ${project.title}`}>
                View Project
              </Button>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <PortfolioDialog
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

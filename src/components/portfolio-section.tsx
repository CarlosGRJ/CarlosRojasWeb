'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/constants/projectsData';
import { ProjectCategory, ProjectItem } from '@/types/portfolio';
import PortfolioDialog from './ui/porfolio-dialog';
import { useTranslation } from '@/context/TranslationProvider';
import { projectsEsp } from '@/constants/projectsDataEs';
import { LanguageEnum } from '@/types/language';
import { parseTechStack } from '@/lib/utils';
import { CATEGORY_STYLES } from '@/constants/projectCategoryStyles';

export default function PortfolioSection() {
  const { locale, t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory | null>(null);

  const projectList = locale === LanguageEnum.ES ? projectsEsp : projects;

  const categoryCounts = useMemo<Map<ProjectCategory, number>>(() => {
    const counts = new Map<ProjectCategory, number>();
    projectList.forEach((p) => counts.set(p.category, (counts.get(p.category) ?? 0) + 1));
    return counts;
  }, [projectList]);

  const categories = Array.from(categoryCounts.keys());

  const filteredProjects = activeCategory
    ? projectList.filter((p) => p.category === activeCategory)
    : projectList;

  return (
    <section id='portfolio' className='bg-muted/40'>
      <div className='mx-auto w-full max-w-[1920px] px-8 sm:px-20 pt-16 pb-16 sm:pb-20 flex flex-col items-center justify-center'>
        <h2 className='sec-title mb-12 md:mb-16'>{t.Header.Portfolio}</h2>

        <fieldset className='flex flex-wrap justify-center gap-2 mb-8 border-0 p-0 m-0'>
          <legend className='sr-only'>{t.Portfolio.FilterByCategory}</legend>
          <Button
            variant={activeCategory === null ? 'default' : 'outline'}
            size='sm'
            aria-pressed={activeCategory === null}
            onClick={() => setActiveCategory(null)}>
            {t.Portfolio.All}
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? 'default' : 'outline'}
              size='sm'
              aria-pressed={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}>
              {cat} ({categoryCounts.get(cat)})
            </Button>
          ))}
        </fieldset>

        {filteredProjects.length === 0 && (
          <p className='py-16 text-center text-muted-foreground'>
            {t.Portfolio.NoResults}
          </p>
        )}

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
          {filteredProjects.map((project, index) => {
            const techs = parseTechStack(project.techStack);
            const visibleTechs = techs.slice(0, 4);
            const remainingCount = techs.length - 4;

            return (
              <article
                key={project.id}
                className='bg-background border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col overflow-hidden'>
                <button
                  type='button'
                  tabIndex={-1}
                  className='relative aspect-[16/9] w-full overflow-hidden cursor-pointer block'
                  onClick={() => setSelectedProject(project)}
                  aria-hidden='true'>
                  <Image
                    src={project.coverImg}
                    alt={project.title}
                    fill
                    className='object-cover transition-transform duration-300 ease-in-out hover:scale-105'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    quality={85}
                    priority={index < 3}
                  />
                </button>

                <div className='flex flex-col gap-3 p-6 flex-1'>
                  <div className='flex items-center gap-2 flex-wrap'>
                    <Badge
                      className={`border-0 ${CATEGORY_STYLES[project.category]}`}>
                      {project.category}
                    </Badge>
                    {project.isInternal && (
                      <Badge variant='outline' className='text-xs'>
                        🔒 {t.Portfolio.Internal}
                      </Badge>
                    )}
                  </div>

                  <h3 className='text-xl font-semibold text-foreground leading-snug'>
                    {project.title}
                  </h3>

                  <p className='text-sm leading-relaxed text-muted-foreground line-clamp-2'>
                    {project.summary}
                  </p>

                  <div className='flex flex-wrap gap-1.5 mt-1'>
                    {visibleTechs.map((tech) => (
                      <Badge
                        key={tech}
                        variant='secondary'
                        className='text-xs font-normal'>
                        {tech}
                      </Badge>
                    ))}
                    {remainingCount > 0 && (
                      <Badge variant='outline' className='text-xs font-normal'>
                        +{remainingCount}
                      </Badge>
                    )}
                  </div>

                  <div className='mt-auto pt-2'>
                    <Button
                      className='w-full'
                      onClick={() => setSelectedProject(project)}
                      aria-label={`${t.Portfolio.ViewProject}: ${project.title}`}>
                      {t.Portfolio.ViewProject}
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {selectedProject && (
          <PortfolioDialog
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}

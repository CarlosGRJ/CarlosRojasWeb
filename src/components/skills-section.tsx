'use client';

import { cn } from '@/lib/utils';
import { skillCategories } from '@/constants/skillsData';
import { useTranslation } from '@/context/TranslationProvider';

export default function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section
      id='skills'
      aria-labelledby='skills-title'
      className='flex flex-col items-center px-4 md:px-16 pt-16'>
      <h2 id='skills-title' className='sec-title mb-12 pb-2 md:mb-16'>
        {t.Skills.Title}
      </h2>

      <div className='w-full overflow-hidden rounded-[14px] border bg-card'>
        {skillCategories.map((category, i) => (
          <div
            key={category.id}
            className={cn(
              'grid grid-cols-1 md:grid-cols-[260px_1fr]',
              i > 0 && 'border-t',
            )}>
            <div className='flex items-start gap-2.5 border-b bg-muted/60 p-5 font-mono text-[11px] uppercase tracking-[0.11em] text-muted-foreground md:border-b-0 md:border-r'>
              <span
                className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary'
                aria-hidden='true'
              />
              <h3
                id={`skills-cat-${category.id}`}
                className='text-[11px] font-normal leading-snug'>
                {t.Skills[category.id]}
              </h3>
            </div>

            <ul
              className='flex flex-wrap content-start gap-1.5 px-[18px] py-4'
              aria-labelledby={`skills-cat-${category.id}`}>
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className='inline-flex items-center gap-1.5 rounded-[7px] border bg-background px-2.5 py-1.5 text-[13px] font-medium text-foreground'>
                  <skill.Icon
                    className={cn(
                      'h-3.5 w-3.5 shrink-0',
                      !skill.color && 'text-foreground',
                    )}
                    style={skill.color ? { color: skill.color } : undefined}
                    aria-hidden='true'
                  />
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

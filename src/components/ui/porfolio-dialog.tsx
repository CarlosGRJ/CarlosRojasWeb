'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';

import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { ProjectCategory, ProjectItem } from '@/types/portfolio';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/context/TranslationProvider';
import { parseTechStack } from '@/lib/utils';

const CATEGORY_STYLES: Record<ProjectCategory, string> = {
  'Web App':
    'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400',
  'Landing Page':
    'bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400',
  'E-commerce':
    'bg-orange-100 text-orange-700 dark:bg-orange-950/40 dark:text-orange-400',
  Catalog:
    'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-400',
  FinTech:
    'bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400',
  B2B: 'bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400',
  Dashboard:
    'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400',
  Portfolio:
    'bg-teal-100 text-teal-700 dark:bg-teal-950/40 dark:text-teal-400',
};

export type PortfolioDialogProps = {
  readonly project: ProjectItem;
  readonly onClose: () => void;
};

export default function PortfolioDialog({
  project,
  onClose,
}: PortfolioDialogProps) {
  const [dialogOpen, setDialogOpen] = useState(!!project);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const { t } = useTranslation();

  const toggleLightbox = (state: boolean) => () => setLightboxOpen(state);

  const updateIndex = ({ index: current }: { index: number }) => {
    setIndex(current);
  };

  const slides = project.images.map((image) => ({
    src: image.src,
    alt: image.alt,
  }));

  useEffect(() => {
    if (!dialogOpen) onClose();
  }, [dialogOpen, onClose]);

  return (
    <Dialog
      open={dialogOpen}
      onOpenChange={setDialogOpen}
      modal={!lightboxOpen}>
      <DialogContent
        className='w-[90vw] max-w-[100%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-3xl 2xl:max-w-4xl max-h-[90vh] overflow-y-auto'
        onEscapeKeyDown={(e) => {
          if (lightboxOpen) e.preventDefault();
        }}>
        <DialogHeader>
          <div className='flex flex-col gap-2'>
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
            <DialogTitle className='text-xl font-semibold'>
              {project.title}
            </DialogTitle>
          </div>
          <DialogDescription className='text-muted-foreground'>
            {project.summary}
          </DialogDescription>
        </DialogHeader>

        <div className='mt-4 space-y-6'>
          <div className='flex flex-wrap gap-2'>
            {parseTechStack(project.techStack).map((tech) => (
              <span
                key={tech}
                className='bg-muted px-3 py-1 text-sm rounded-full border border-border text-foreground/80'>
                {tech}
              </span>
            ))}
          </div>

          <p className='text-sm text-muted-foreground'>
            <span className='font-semibold'>{t.Portfolio.Role}:</span> {project.role}
          </p>

          <div className='prose prose-sm dark:prose-invert max-w-none'>
            {project.description}
          </div>

          <div className='modal-project__carousel'>
            <Lightbox
              index={index}
              slides={slides}
              plugins={[Inline]}
              on={{
                view: updateIndex,
                click: toggleLightbox(true),
              }}
              carousel={{
                padding: 0,
                spacing: 0,
                imageFit: 'cover',
              }}
              inline={{
                style: {
                  width: '100%',
                  maxWidth: '900px',
                  aspectRatio: '3 / 2',
                  margin: '0 auto',
                },
              }}
            />

            <p className='mt-2 text-center text-xs text-muted-foreground'>
              {index + 1} / {slides.length}
            </p>

            <Lightbox
              open={lightboxOpen}
              close={toggleLightbox(false)}
              index={index}
              slides={slides}
              on={{ view: updateIndex }}
              animation={{ fade: 0 }}
              controller={{
                closeOnPullDown: true,
                closeOnBackdropClick: true,
              }}
            />
          </div>

          {!project.isInternal && project.url && (
            <Button asChild>
              <Link
                href={project.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={t.Portfolio.VisitLiveSite}>
                {t.Portfolio.VisitLiveSite}
                <ExternalLink className='size-4' aria-hidden='true' />
              </Link>
            </Button>
          )}

          {!project.url && !project.isInternal && (
            <p className='text-sm text-muted-foreground'>
              {t.Portfolio.LiveSiteNotAvailable}
            </p>
          )}

          <div className='flex justify-end'>
            <DialogClose asChild>
              <Button
                variant='outline'
                onClick={() => {
                  setDialogOpen(false);
                  onClose();
                }}>
                {t.Portfolio.Close}
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

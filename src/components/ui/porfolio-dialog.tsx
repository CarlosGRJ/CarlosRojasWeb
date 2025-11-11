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
import { ProjectItem } from '@/types/portfolio';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/context/TranslationProvider';

export type PortfolioDialogProps = {
  project: ProjectItem;
  onClose: () => void;
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

  const slides = project.images.map((image) => {
    return {
      src: image.src,
      alt: image.alt,
    };
  });

  useEffect(() => {
    if (!dialogOpen) onClose();
  }, [dialogOpen, onClose]);

  return (
    <Dialog
      open={dialogOpen}
      onOpenChange={setDialogOpen}
      modal={lightboxOpen ? false : true}>
      <DialogContent
        className='w-[90vw] max-w-[100%] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl max-h-[90vh] overflow-y-auto'
        onEscapeKeyDown={(e) => {
          if (lightboxOpen) {
            e.preventDefault();
          }
        }}>
        <DialogHeader>
          <div className='flex items-center justify-between'>
            <DialogTitle className='text-xl font-semibold'>
              {project?.title}
            </DialogTitle>
            {project.isInternal && (
              <span className='inline-flex items-center gap-1 text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full border border-yellow-300'>
                🔒 Internal Project
              </span>
            )}
          </div>
          <DialogDescription className='text-muted-foreground'>
            {project?.summary}
          </DialogDescription>
        </DialogHeader>

        {project && (
          <div className='mt-4 space-y-6'>
            <div className='flex flex-wrap gap-2'>
              {project.techStack.split(',').map((tech) => (
                <span
                  key={tech}
                  className='bg-muted px-3 py-1 text-sm rounded-full border border-border text-foreground/80'>
                  {tech.trim()}
                </span>
              ))}
            </div>

            <p className='text-sm text-muted-foreground'>
              <strong>Role:</strong> {project.role}
            </p>

            <div className='prose prose-sm max-w-none text-foreground flex flex-col gap-4'>
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
              <Link
                aria-label='Visit live site'
                href={project.url}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition'>
                {t.Portfolio.VisitLiveSite}
              </Link>
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
        )}
      </DialogContent>
    </Dialog>
  );
}

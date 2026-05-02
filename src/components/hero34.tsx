import { Button } from '@/components/ui/button';
import { useTranslation } from '@/context/TranslationProvider';
import Image from 'next/image';
import Link from 'next/link';

const Hero34 = () => {
  const { t } = useTranslation();
  const paragraphs = t.About.Description.split('\n\n');

  return (
    <section id='about' className='bg-muted/40'>
      <div className='mx-auto w-full max-w-[1920px] px-8 sm:px-20 pt-16 pb-16 sm:pb-20 text-center'>
        <h2 className='sec-title mb-12 md:mb-16 text-left sm:text-center'>
          {t.Header.About}
        </h2>

        <div className='flex flex-col lg:flex-row items-center gap-10'>
          <div className='w-full'>
            <Image
              width={400}
              height={400}
              src='/images/AboutMe.webp'
              alt={t.About.ImageAlt}
              className='rounded-xl shadow-md object-cover w-full max-h-[500px]'
            />
          </div>

          <div className='w-full'>
            <div className='space-y-4 mb-6'>
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 20)}
                  className='text-base sm:text-lg text-muted-foreground leading-relaxed text-left'>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className='flex flex-wrap gap-4'>
              <Button asChild>
                <Link href='#contact'>{t.Home.Hire}</Link>
              </Button>

              <Button variant='outlinePrimary' asChild>
                <a href='/Carlos_Rojas_CV.pdf' download aria-label={`${t.Home.DownloadCV} — PDF`}>
                  {t.Home.DownloadCV}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero34 };

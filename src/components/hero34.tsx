import { Button } from '@/components/ui/button';
import { useTranslation } from '@/context/TranslationProvider';
import Image from 'next/image';
import Link from 'next/link';

interface Hero34Props {
  description: string;
}

const Hero34 = ({ description }: Hero34Props) => {
  const { t } = useTranslation();

  return (
    <section id='about' className='text-center pt-16'>
      <h2 className='sec-title font-bold mb-6 md:mb-20 lg:mb-28 text-left sm:text-center'>
        {t.Header.About}
      </h2>

      <div className='flex flex-col lg:flex-row items-center gap-10'>
        {/* 📸 Image */}
        <div className='w-full '>
          <Image
            width={400}
            height={400}
            src='/images/AboutMe.webp'
            alt='Carlos working remotely with coffee'
            className='rounded-xl shadow-md object-cover w-full max-h-[500px]'
          />
        </div>

        {/* 🧑‍💻 Content */}
        <div className='w-full '>
          <p className='text-base sm:text-lg text-muted-foreground leading-relaxed text-justify mb-6'>
            {description}
          </p>

          <div className='flex flex-wrap gap-4'>
            <Button>
              <Link aria-label='Hire Me' href='#contact'>
                {t.Home.Hire}
              </Link>
            </Button>

            <Button variant='outlinePrimary' asChild>
              <a aria-label='Download CV' href='/Carlos_Rojas_CV.pdf' download>
                {t.Home.DownloadCV}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero34 };

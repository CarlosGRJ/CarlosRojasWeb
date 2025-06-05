'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { MailIcon, MessageSquareText, PhoneIcon } from 'lucide-react';

import { useTranslation } from '@/context/TranslationProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
import Turnstile from 'react-cloudflare-turnstile';
import { SiWhatsapp } from 'react-icons/si';

const Contact02Page = () => {
  const { t } = useTranslation();

  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSent(false);
    setLoading(true);

    const form = formRef.current;
    if (!form) return;

    const firstName = (form.firstName as HTMLInputElement).value.trim();
    const lastName = (form.lastName as HTMLInputElement).value.trim();
    const email = (form.email as HTMLInputElement).value.trim();
    const message = (form.message as HTMLTextAreaElement).value.trim();

    if (!firstName || !lastName || !email || !message) {
      setLoading(false);
      toast.warning(t.Contact.Form.Validation.MissingFields.Title, {
        description: t.Contact.Form.Validation.MissingFields.Description,
      });
      return;
    }

    if (!validateEmail(email)) {
      setLoading(false);
      toast.warning(t.Contact.Form.Validation.InvalidEmail.Title, {
        description: t.Contact.Form.Validation.InvalidEmail.Description,
      });
      return;
    }

    if (!turnstileToken) {
      setLoading(false);
      toast.warning(t.Contact.Form.Validation.CaptchaRequired.Title, {
        description: t.Contact.Form.Validation.CaptchaRequired.Description,
      });
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
      )
      .then(() => {
        form.reset();
        toast.success(t.Contact.Form.Toast.Success.Title, {
          description: t.Contact.Form.Toast.Success.Description,
          className: 'bg-green-500 text-white',
        });
      })
      .catch(() => {
        toast.error(t.Contact.Form.Toast.Failure.Title, {
          description: t.Contact.Form.Toast.Failure.Description,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section
      id='contact'
      className='min-h-screen flex flex-col items-center w-full pt-16'>
      <h2 className='text-4xl font-bold  mb-16 md:mb-20 border-b-4 border-primary pb-2'>
        {t.Contact.Title}
      </h2>

      <div className='text-center sm:text-start'>
        <b className='mt-3 text-3xl md:text-4xl font-bold tracking-tight'>
          {t.Contact.Headline}
        </b>

        <p className='mt-3 text-base sm:text-lg'>{t.Contact.Subheadline}</p>

        <div className='mt-24 grid lg:grid-cols-2 gap-16 md:gap-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 text-center sm:text-start'>
            <div className='flex flex-col items-center sm:items-start'>
              <div className='h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full'>
                <MailIcon />
              </div>
              <h3 className='mt-6 font-semibold text-xl'>
                {t.Contact.Email.Title}
              </h3>
              <p className='my-2.5 text-muted-foreground'>
                {t.Contact.Email.Subtitle}
              </p>
              <Link
                aria-label='Send an email to carlosgrjweb@gmail.com'
                className='font-medium text-gray-950 dark:text-gray-200 hover:underline'
                href='mailto:carlosgrjweb@gmail.com'>
                carlosgrjweb@gmail.com
              </Link>
            </div>

            <div className='flex flex-col items-center sm:items-start'>
              <div className='h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full'>
                <PhoneIcon />
              </div>
              <h3 className='mt-6 font-semibold text-xl'>
                {t.Contact.Phone.Title}
              </h3>
              <p className='my-2.5 text-muted-foreground'>
                {t.Contact.Phone.Subtitle}
              </p>
              <Link
                aria-label='Call Carlos at +52 55 8573 9469'
                className='font-medium text-gray-950 dark:text-gray-200 hover:underline'
                href='tel:+525585739469'>
                +52 55 8573 9469
              </Link>
            </div>

            <div className='flex flex-col items-center sm:items-start'>
              <div className='h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full'>
                <MessageSquareText />
              </div>
              <h3 className='mt-6 font-semibold text-xl'>
                {t.Contact.WhatsApp.Title}
              </h3>
              <p className='my-2.5 text-muted-foreground'>
                {t.Contact.WhatsApp.Subtitle}
              </p>
              <Link
                aria-label='Start a WhatsApp chat with Carlos'
                href='https://wa.me/525585739469'
                target='_blank'
                rel='noopener noreferrer'
                className='flex gap-2 items-center justify-center w-36 mt-2 px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold transition'>
                <SiWhatsapp className='w-5 h-5' /> {t.Contact.WhatsApp.Button}
              </Link>
            </div>
          </div>

          {/* Form */}
          <Card className='bg-accent shadow-none'>
            <CardContent className='p-6 md:p-10'>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 gap-x-8 gap-y-5'>
                  <div className='col-span-2 sm:col-span-1'>
                    <Label htmlFor='firstName'>
                      {t.Contact.Form.FirstName}
                    </Label>
                    <Input
                      placeholder={t.Contact.Form.FirstName}
                      id='firstName'
                      name='firstName'
                      className='mt-1.5 bg-white h-11 shadow-none'
                      required
                      aria-label={t.Contact.Form.FirstName}
                    />
                  </div>

                  <div className='col-span-2 sm:col-span-1'>
                    <Label htmlFor='lastName'>{t.Contact.Form.LastName}</Label>
                    <Input
                      placeholder={t.Contact.Form.LastName}
                      id='lastName'
                      name='lastName'
                      className='mt-1.5 bg-white h-11 shadow-none'
                      required
                      aria-label={t.Contact.Form.LastName}
                    />
                  </div>
                  <div className='col-span-2'>
                    <Label htmlFor='email'>{t.Contact.Form.Email}</Label>
                    <Input
                      type='email'
                      placeholder={t.Contact.Form.Email}
                      id='email'
                      name='email'
                      className='mt-1.5 bg-white h-11 shadow-none'
                      required
                      aria-label={t.Contact.Form.Email}
                    />
                  </div>
                  <div className='col-span-2'>
                    <Label htmlFor='message'>{t.Contact.Form.Message}</Label>
                    <Textarea
                      id='message'
                      name='message'
                      placeholder={t.Contact.Form.Message}
                      className='mt-1.5 bg-white shadow-none'
                      rows={6}
                      required
                      aria-label={t.Contact.Form.Message}
                    />
                  </div>

                  <div className='col-span-2'>
                    <Turnstile
                      turnstileSiteKey={
                        process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''
                      }
                      callback={(token) => setTurnstileToken(token)}
                      theme='light'
                      size='normal'
                      retry='auto'
                      refreshExpired='auto'
                    />
                  </div>
                </div>

                {error && <p className='text-red-600 mt-4'>{error}</p>}
                {sent && (
                  <p className='text-green-600 mt-4'>
                    {t.Contact.Form.Success}
                  </p>
                )}

                <Button
                  className='mt-6 w-full'
                  size='lg'
                  disabled={loading}
                  aria-label={t.Contact.Form.Send}>
                  {loading ? t.Contact.Form.Sending : t.Contact.Form.Send}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact02Page;

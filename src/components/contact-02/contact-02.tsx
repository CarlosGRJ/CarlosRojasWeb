'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MailIcon, MessageSquareText, PhoneIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import Turnstile from 'react-cloudflare-turnstile';
import { SiWhatsapp } from 'react-icons/si';
import { toast } from 'sonner';

import { useTranslation } from '@/context/TranslationProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z
    .string()
    .min(1, 'Email is required')
    .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: 'Invalid email address',
    }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact02Page = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    if (!turnstileToken) {
      toast.warning(t.Contact.Form.Validation.CaptchaRequired.Title, {
        description: t.Contact.Form.Validation.CaptchaRequired.Description,
      });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          message: data.message,
        },
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
    <section id='contact' className=''>
      <div className='mx-auto w-full max-w-[1920px] px-8 sm:px-20 pt-16 pb-16 sm:pb-20 flex flex-col items-center'>
        <h2 className='text-4xl font-bold mb-16 md:mb-20 border-b-4 border-primary pb-2'>
          {t.Contact.Title}
        </h2>

        <div className='text-center sm:text-start'>
          <strong className='mt-3 text-3xl md:text-4xl font-bold tracking-tight'>
            {t.Contact.Headline}
          </strong>

          <p className='mt-3 text-base sm:text-lg'>{t.Contact.Subheadline}</p>

          <div className='mt-24 grid lg:grid-cols-2 gap-16 md:gap-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 text-center sm:text-start'>
              <div className='flex flex-col items-center sm:items-start'>
                <div
                  className='h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full'
                  aria-hidden='true'>
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
                <div
                  className='h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full'
                  aria-hidden='true'>
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
                <div
                  className='h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-full'
                  aria-hidden='true'>
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
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    noValidate>
                    <div className='grid md:grid-cols-2 gap-x-8 gap-y-5'>
                      <FormField
                        control={form.control}
                        name='firstName'
                        render={({ field }) => (
                          <FormItem className='col-span-2 sm:col-span-1'>
                            <FormLabel>{t.Contact.Form.FirstName}</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t.Contact.Form.FirstName}
                                className='bg-white h-11 shadow-none'
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name='lastName'
                        render={({ field }) => (
                          <FormItem className='col-span-2 sm:col-span-1'>
                            <FormLabel>{t.Contact.Form.LastName}</FormLabel>
                            <FormControl>
                              <Input
                                placeholder={t.Contact.Form.LastName}
                                className='bg-white h-11 shadow-none'
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name='email'
                        render={({ field }) => (
                          <FormItem className='col-span-2'>
                            <FormLabel>{t.Contact.Form.Email}</FormLabel>
                            <FormControl>
                              <Input
                                type='email'
                                placeholder={t.Contact.Form.Email}
                                className='bg-white h-11 shadow-none'
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name='message'
                        render={({ field }) => (
                          <FormItem className='col-span-2'>
                            <FormLabel>{t.Contact.Form.Message}</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder={t.Contact.Form.Message}
                                className='bg-white shadow-none'
                                rows={6}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

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

                    <Button
                      type='submit'
                      className='mt-6 w-full'
                      size='lg'
                      disabled={loading}>
                      {loading ? t.Contact.Form.Sending : t.Contact.Form.Send}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact02Page;

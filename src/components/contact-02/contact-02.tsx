'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Loader2, MailIcon, MessageSquareText, PhoneIcon } from 'lucide-react';
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

const createContactSchema = (messages: {
  FirstNameRequired: string;
  LastNameRequired: string;
  EmailRequired: string;
  InvalidEmailMessage: string;
  MessageMinLength: string;
}) =>
  z.object({
    firstName: z.string().min(1, messages.FirstNameRequired),
    lastName: z.string().min(1, messages.LastNameRequired),
    email: z
      .string()
      .min(1, messages.EmailRequired)
      .refine((val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
        message: messages.InvalidEmailMessage,
      }),
    message: z.string().min(10, messages.MessageMinLength),
  });

type ContactFormValues = z.infer<ReturnType<typeof createContactSchema>>;

const Contact02Page = () => {
  const { locale, t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileKey, setTurnstileKey] = useState(0);

  const contactSchema = useMemo(
    () => createContactSchema(t.Contact.Form.Validation),
    [t],
  );

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
  });

  useEffect(() => {
    if (Object.keys(form.formState.errors).length > 0) {
      void form.trigger();
    }
  }, [form, locale]);

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
        setTurnstileToken(null);
        setTurnstileKey((k) => k + 1);
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
    <section id='contact'>
      <div className='mx-auto w-full max-w-[1920px] px-8 sm:px-20 pt-16 pb-16 sm:pb-20 flex flex-col items-center'>
        <h2 className='sec-title mb-12 md:mb-16'>{t.Contact.Title}</h2>

        <div className='w-full max-w-5xl'>
          <div className='text-center sm:text-start'>
            <strong className='text-3xl md:text-4xl font-bold tracking-tight'>
              {t.Contact.Headline}
            </strong>
            <p className='mt-3 text-base sm:text-lg text-muted-foreground'>
              {t.Contact.Subheadline}
            </p>
          </div>

          <div className='mt-10 grid lg:grid-cols-[1fr_2fr] gap-10 items-start'>
            {/* Contact methods — compact sidebar */}
            <ul className='space-y-6' aria-label={t.Contact.Title}>
              <li className='flex items-start gap-3'>
                <div
                  className='mt-0.5 h-8 w-8 shrink-0 flex items-center justify-center bg-primary/10 text-primary rounded-full'
                  aria-hidden='true'>
                  <MailIcon className='h-4 w-4' />
                </div>
                <div>
                  <p className='font-semibold text-sm'>{t.Contact.Email.Title}</p>
                  <p className='text-xs text-muted-foreground mb-1'>
                    {t.Contact.Email.Subtitle}
                  </p>
                  <Link
                    aria-label={t.Aria.SendEmail}
                    className='text-sm font-medium hover:underline'
                    href='mailto:carlosgrjweb@gmail.com'>
                    carlosgrjweb@gmail.com
                  </Link>
                </div>
              </li>

              <li className='flex items-start gap-3'>
                <div
                  className='mt-0.5 h-8 w-8 shrink-0 flex items-center justify-center bg-primary/10 text-primary rounded-full'
                  aria-hidden='true'>
                  <PhoneIcon className='h-4 w-4' />
                </div>
                <div>
                  <p className='font-semibold text-sm'>{t.Contact.Phone.Title}</p>
                  <p className='text-xs text-muted-foreground mb-1'>
                    {t.Contact.Phone.Subtitle}
                  </p>
                  <Link
                    aria-label={t.Aria.CallCarlos}
                    className='text-sm font-medium hover:underline'
                    href='tel:+525585739469'>
                    +52 55 8573 9469
                  </Link>
                </div>
              </li>

              <li className='flex items-start gap-3'>
                <div
                  className='mt-0.5 h-8 w-8 shrink-0 flex items-center justify-center bg-primary/10 text-primary rounded-full'
                  aria-hidden='true'>
                  <MessageSquareText className='h-4 w-4' />
                </div>
                <div>
                  <p className='font-semibold text-sm'>{t.Contact.WhatsApp.Title}</p>
                  <p className='text-xs text-muted-foreground mb-1'>
                    {t.Contact.WhatsApp.Subtitle}
                  </p>
                  <Link
                    aria-label={t.Aria.WhatsAppChat}
                    href='https://wa.me/525585739469'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex gap-2 items-center mt-1 px-3 py-1.5 rounded-md bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition'>
                    <SiWhatsapp className='h-4 w-4' />
                    {t.Contact.WhatsApp.Button}
                  </Link>
                </div>
              </li>
            </ul>

            {/* Form */}
            <Card className='bg-accent shadow-none'>
              <CardContent className='p-6 md:p-10'>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    aria-busy={loading}
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
                                className='bg-background h-11 shadow-none'
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
                                className='bg-background h-11 shadow-none'
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
                                className='bg-background h-11 shadow-none'
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
                                className='bg-background shadow-none'
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
                          key={turnstileKey}
                          turnstileSiteKey={
                            process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''
                          }
                          callback={(token) => setTurnstileToken(token)}
                          theme='auto'
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
                      {loading && (
                        <Loader2 className='mr-2 h-4 w-4 animate-spin' aria-hidden='true' />
                      )}
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

'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/en'); // Cambia a '/es' si ese es tu default
  }, [router]);

  return null;
}

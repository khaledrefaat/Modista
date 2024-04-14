import Header from '@/components/Header';
import { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Modista',
  icons: '/logo.png',
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </>
  );
}

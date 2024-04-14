import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import { Metadata } from 'next';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
      <BottomNavigation />
    </>
  );
}

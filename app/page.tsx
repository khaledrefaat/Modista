import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import HomeHero from '@/components/HomePageComponents/HomeHero';
import Container from '@/components/Container';
import ModernCollection from '@/components/HomePageComponents/ModernCollection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <ModernCollection />
      </main>
      <BottomNavigation />
    </>
  );
}

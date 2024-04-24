import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import HomeHero from '@/components/HomePageComponents/HomeHero';
import Container from '@/components/Container';
import ModernCollection from '@/components/HomePageComponents/ModernCollection';
import NewArrivals from '@/components/HomePageComponents/NewArrivals';
import Features from '@/components/HomePageComponents/Features';
import Offer from '@/components/Offer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <ModernCollection />
        <Features />
        <NewArrivals />
        <Offer />
      </main>
      <BottomNavigation />
    </>
  );
}

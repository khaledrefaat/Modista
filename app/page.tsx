import Header from '@/components/Header';
import BottomNavigation from '@/components/BottomNavigation';
import HomeHero from '@/components/HomeHero';
import Container from '@/components/Container';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        {/* <Container></Container> */}
      </main>
      <BottomNavigation />
    </>
  );
}

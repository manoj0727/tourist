import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ImageSlider from '@/components/ImageSlider';
import Adventures from '@/components/Adventures';
import HiddenPlaces from '@/components/HiddenPlaces';
import About from '@/components/About';
import CityProfile from '@/components/CityProfile';
import NewsUpdates from '@/components/NewsUpdates';
import DigitalServices from '@/components/DigitalServices';
import InfoGuidelines from '@/components/InfoGuidelines';
import Tenders from '@/components/Tenders';
import LeadershipMessages from '@/components/LeadershipMessages';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ImageSlider />
      <Adventures />
      <HiddenPlaces />
      <About />
      <CityProfile />
      <NewsUpdates />
      <DigitalServices />
      <InfoGuidelines />
      <Tenders />
      <LeadershipMessages />
    </main>
  );
}

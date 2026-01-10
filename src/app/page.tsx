import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
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
import AppDownload from '@/components/AppDownload';
import ConnectWithUs from '@/components/ConnectWithUs';
import ContactDiary from '@/components/ContactDiary';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSlider />
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
      <AppDownload />
      <ConnectWithUs />
      <ContactDiary />
      <Footer />
    </main>
  );
}

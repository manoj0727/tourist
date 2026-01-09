import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ImageSlider from '@/components/ImageSlider';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ImageSlider />
    </main>
  );
}

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TravelCarsSection from "@/components/TravelCarsSection";
import DestinationsSection from "@/components/DestinationsSection";
import AboutUsSection from "@/components/AboutUsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ServicesSection from "@/components/ServicesSection";
import AnimatedTitle from "@/components/AnimatedTitle";
import MemoriesStorySection from "@/components/MemoriesStorySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import LogisticsHero from "@/components/LogisticsHero";
import LogisticsServiceSection from "@/components/LogisticsServiceSection";
import FAQ from "@/components/FAQ";
import { FAQ_DATA } from "@/constants/faq";
import YoutubeSection from "@/components/YoutubeSection";
export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <DestinationsSection />
        <TravelCarsSection />
        <YoutubeSection/>
        <WhyChooseUsSection />
        <ServicesSection />
        <AnimatedTitle
          title="Stories That Shape Journeys"
          subtitle="Discover India through the memories we've created together"
        />
        <MemoriesStorySection />
        <TestimonialsSection />
        <LogisticsServiceSection />
        <LogisticsHero />
        <AboutUsSection />
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <FAQ faqs={FAQ_DATA} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

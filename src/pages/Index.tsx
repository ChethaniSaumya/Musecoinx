
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ArtistsAndFansSection from "@/components/ArtistsAndFansSection";
import RealTalkSection from "@/components/RealTalkSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/NFTsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-helvetica">
      <Navigation />
      <section id="home">
        <HeroSection />
      </section>
      <section id="how-it-works">
        <HowItWorksSection />
      </section>
      <section id="for-artists-and-fans">  {/* Changed from "for-artists-&-fans" */}
        <ArtistsAndFansSection />
      </section>
      <section>
        <GallerySection />
      </section>
      <section id="real-talk">
        <RealTalkSection />
      </section>
      <Footer />
    </div>
  );
};

export default Index;

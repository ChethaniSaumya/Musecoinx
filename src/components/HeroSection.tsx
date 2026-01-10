import { Button } from "@/components/ui/button";
import girl from '../../assets/girl (1).png';
import '../hero.css'

const HeroSection = () => {
  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero-section">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

      {/* Glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-purple-500 rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute bottom-[10%] right-[20%] w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute top-[50%] right-[10%] w-96 h-96 bg-pink-500 rounded-full filter blur-[120px] opacity-5"></div>
      </div>

      {/* Main content container */}
      <div id="mainContent" className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full">
          {/* Left column - Content */}
          <div className="lg:w-1/2 space-y-8 py-10 text-center lg:text-left">
            <div className="space-y-6 mx-auto lg:mx-0">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-4 lg:mt-6">
                <span className="bg-[rgba(168, 0, 0, 0.14)] py-1 rounded-lg">
                  What if backing the next <span className="text-purple-300">Ed Sheeran</span> meant more than just streaming?
                </span>
              </h2>
            </div>
 
            <div className="space-y-4 mx-auto lg:mx-0">
              <p className="text-2xl md:text-3xl font-bold text-white">
                Welcome to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">future of music</span>
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600">
                MuseCoinX
              </h1>
              <p className="text-xl md:text-2xl font-bold text-white py-2 rounded-lg inline-block">
                Fan Engagement & Music Royalty Distribution Platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center lg:justify-start">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 px-6 py-5 sm:px-8 sm:py-6 text-lg font-bold rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-purple-500/30">
                  Hop On →
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white/50 text-white hover:bg-white/10 px-6 py-5 sm:px-8 sm:py-6 text-lg font-bold rounded-full transition-all hover:scale-105 hover:border-white"
                  onClick={scrollToHowItWorks}
                >
                  How It Works
                </Button>
              </div>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="lg:w-1/2 h-full flex items-end justify-center relative">
            <div className="w-full flex items-end justify-center">
              <img
                src={girl}
                alt="Music investment concept"
                className="girl"
                style={{ objectPosition: 'center bottom' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

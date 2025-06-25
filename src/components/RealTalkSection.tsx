import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logo from '../../assets/Asha-Coin.png';
import hopeCard from '../../assets/Hope-Card.png';
import girl from '../../assets/digital-art-portrait-person-listening-music-headphones.jpg';
import { useEffect, useState } from "react";

// Gallery images data
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Concert crowd with lights",
    title: "Live Performances",
    description: "Capturing the energy of our artists on stage"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "DJ performing",
    title: "Behind The Decks",
    description: "Our artists creating magic in the studio"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1413&q=80",
    alt: "Music festival",
    title: "Festival Moments",
    description: "Unforgettable experiences with our community"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Vinyl records",
    title: "Music Collectibles",
    description: "Physical and digital collectibles for true fans"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Recording studio",
    title: "Studio Sessions",
    description: "Where the magic happens - exclusive access"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Music equipment",
    title: "Gear & Tech",
    description: "The tools that shape our sound"
  }
];

const minting = () => {
  window.open("#");
}

const RealTalkSection = () => {
  const { ref: realTalkRef, isVisible: realTalkVisible } = useScrollAnimation(0.1, 0);
  const { ref: marketplaceRef, isVisible: marketplaceVisible } = useScrollAnimation(0.1, 200);
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation(0.1, 400);
  const { ref: launchRef, isVisible: launchVisible } = useScrollAnimation(0.1, 600);

  const AutoRotatingCarousel = ({ logo, hopeCard }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
      { src: logo, alt: "Asha Coin" },
      { src: hopeCard, alt: "Hope Card" }
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    }, [images.length]);

    return (
      <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-xl relative bg-gray-800">  {/* Added w-full */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full object-contain p-4 md:p-8 transition-opacity duration-500 ${  // Reduced padding on mobile
              index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
          />
        ))}

        {/* Indicator dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${index === activeIndex ? 'bg-purple-400 w-4' : 'bg-gray-500'
                }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      className="py-24 px-4 sm:px-6 relative overflow-hidden font-lato"
      style={{
        background: "linear-gradient(90deg, rgba(16, 21, 37, 1) 0%, rgba(27, 39, 81, 1) 21%, rgba(16, 21, 37, 1) 51%, rgba(83, 24, 97, 1) 85%, rgba(16, 21, 37, 1) 100%)"
      }}
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

      {/* Glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-64 h-64 bg-purple-500 rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute bottom-[10%] right-[15%] w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Real Talk Section */}
        <div className="mb-24">
          <Card
            ref={realTalkRef}
            className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 transition-all duration-500 hover:shadow-xl ${realTalkVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
          >
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row-reverse">
                {/* Image Section - Now Right Side */}
                <div className="lg:w-2/5 relative overflow-hidden min-h-[400px]">
                  <img
                    src={girl}
                    alt="DJ performing with glowing equipment"
                    className="absolute inset-0 w-full h-full object-cover rounded-t-lg lg:rounded-tr-none rounded-r-lg lg:rounded-br-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>

                </div>

                {/* Content Section - Now Left Side */}
                <div className="lg:w-3/5 p-8 md:p-12">
                  <div className="text-center mb-12">
                    <div className="relative inline-block mb-6">
                      <div className="w-24 h-24 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center relative backdrop-blur-sm">
                        <AlertCircle className="h-12 w-12 text-purple-400" />
                        <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 animate-ping opacity-0"></div>
                      </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
                      Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Talk</span>
                    </h2>
                    <div className="max-w-2xl mx-auto">
                      <p className="text-xl text-gray-300 mb-4">
                        Transparency is our foundation. Here's exactly how this works.
                      </p>
                      <div className="inline-block px-4 py-1.5 bg-purple-900/30 text-purple-300 rounded-full text-sm font-medium backdrop-blur-sm">
                        No Hype, Just Facts
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {/* Point 1 */}
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 transition-all duration-300 group hover:bg-gray-800/70 backdrop-blur-sm">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mt-1 backdrop-blur-sm">
                          <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-white mb-2 group-hover:text-purple-400 transition-colors">
                            Royalty Sharing
                          </h3>
                          <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                            You earn when artists choose to share royalties via MuseCoinX.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Point 2 */}
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 transition-all duration-300 group hover:bg-gray-800/70 backdrop-blur-sm">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mt-1 backdrop-blur-sm">
                          <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-white mb-2 group-hover:text-purple-400 transition-colors">
                            No Copyright Transfer
                          </h3>
                          <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                            NFTs don't give you copyrights. You're not co-writing — just co-earning.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Point 3 */}
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 transition-all duration-300 group hover:bg-gray-800/70 backdrop-blur-sm">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mt-1 backdrop-blur-sm">
                          <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-white mb-2 group-hover:text-purple-400 transition-colors">
                            Market Realities
                          </h3>
                          <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                            No guaranteed returns. This is belief + blockchain, not a quick flip
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Point 4 */}
                    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 transition-all duration-300 group hover:bg-gray-800/70 backdrop-blur-sm">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mt-1 backdrop-blur-sm">
                          <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-white mb-2 group-hover:text-purple-400 transition-colors">
                            Artist Support
                          </h3>
                          <p className="text-gray-300 group-hover:text-gray-100 transition-colors">
                            Your investment directly supports emerging artists and their craft
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Marketplace Preview */}
        <div
          ref={marketplaceRef}
          id="marketplace"
          className={`mb-24 transition-all duration-700 ${marketplaceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
        >

        </div>

        {/* Gallery Section 
        <div 
          ref={galleryRef}
          className={`mb-24 transition-all duration-700 ${
            galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              Music <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Moments</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Behind the scenes and on stage - our community in action
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-xl aspect-square hover:scale-[1.02] transition-transform duration-500"
              >
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div>
                
                 <div className="absolute bottom-0 left-0 right-0 p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-bold text-white mb-1">{image.title}</h3>
                  <p className="text-gray-300">{image.description}</p>
                </div>
                
                 <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute w-full h-full object-cover"
                />
                
                 <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              </div>
            ))}
          </div>
 
        </div>*/}

        {/* Launch Feature */}
        <div id="marketplace" ref={launchRef}>
          <Card className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 transition-all duration-700 hover:scale-[1.01] ${launchVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Text Content */}
                <div className="md:w-1/2">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-purple-400 uppercase bg-purple-900/50 rounded-full">
                      Exclusive Launch
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-4 text-white">
                    Launching with KK’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">"Humein Asha Hai"</span>
                  </h3>
                  <h4 className="text-2xl md:text-3xl font-medium mb-6 text-gray-200">
                    Hope Coin by Shruti Music School
                  </h4>
                  <p className="text-gray-300 mb-6 text-lg">
                    Featuring KK — yes, the Bollywood legend.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/50 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">Limited NFTs. Real royalties. Real legacy.</span>
                    </li>
                    <li className="flex items-center">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-900/50 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">Be a fan. Be rewarded. Be early.</span>
                    </li>
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={minting}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg transition-all hover:shadow-lg hover:shadow-purple-500/30"
                    >
                      Mint Now
                    </Button>
                  </div>
                </div>

                {/* Album Art */}
                {/* Album Art - Modified for Carousel */}
                <div className="w-full md:w-1/2 relative">
                  <div className="relative group">
                    <AutoRotatingCarousel logo={logo} hopeCard={hopeCard} />

                    <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-gray-800 border-4 border-purple-500 flex items-center justify-center shadow-lg">
                      <div className="w-8 h-8 rounded-full bg-purple-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RealTalkSection;
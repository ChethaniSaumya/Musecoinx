import { Card, CardContent } from "@/components/ui/card";
import { Mic, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ArtistsAndFansSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1, 0);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1, 300);

  return (
    <section 
      className="py-24 px-6 relative overflow-hidden font-lato"
      style={{
        background: "linear-gradient(90deg, rgba(16, 21, 37, 1) 0%, rgba(27, 39, 81, 1) 21%, rgba(16, 21, 37, 1) 51%, rgba(83, 24, 97, 1) 85%, rgba(16, 21, 37, 1) 100%)"
      }}
    >
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
      
      {/* Glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-purple-500 rounded-full filter blur-[100px] opacity-10"></div>
        <div className="absolute bottom-[10%] right-[20%] w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-10"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            For Artists & Fans
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A revolutionary partnership between creators and their supporters
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          {/* For Artists */}
          <Card
            className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 transition-all duration-1000 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 ${
              cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-purple-500/10 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                  <Mic className="h-10 w-10 text-purple-400" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-white">
                  For <span className="text-purple-300">Artists</span>
                </h2>
                <p className="text-gray-400 mb-6">
                  Up-and-coming or established
                </p>
              </div>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start space-x-3 transform transition-all duration-300 hover:translate-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Drop your music as limited-edition digital assets</span>
                </li>
                <li className="flex items-start space-x-3 transform transition-all duration-300 hover:translate-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Let fans co-invest and amplify your reach</span>
                </li>
                <li className="flex items-start space-x-3 transform transition-all duration-300 hover:translate-x-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Share the royalties while building a loyal community</span>
                </li>
              </ul>
              
              <p className="text-gray-400">
                Whether you're just starting out or have a catalogue that deserves more, MuseCoinX helps you engage, monetize, and grow in new ways.
              </p>
            </CardContent>
          </Card>

          {/* For Fans */}
          <Card
            className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 transition-all duration-1000 transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 ${
              cardsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: cardsVisible ? '200ms' : '0ms' }}
          >
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-blue-500/10 rounded-full flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
                  <Users className="h-10 w-10 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-white">
                  For <span className="text-blue-300">Fans & Collectors</span>
                </h2>
                <p className="text-gray-400 mb-6">
                  Music lovers and artist believers
                </p>
              </div>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start space-x-3 transform transition-all duration-300 hover:translate-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Discover fresh talent and back them early</span>
                </li>
                <li className="flex items-start space-x-3 transform transition-all duration-300 hover:translate-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Unlock your right to a portion of the royalties</span>
                </li>
                <li className="flex items-start space-x-3 transform transition-all duration-300 hover:translate-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">Your ear + your belief = your potential gain</span>
                </li>
              </ul>
              
              <p className="text-gray-400">
                Be part of the artist's journey while building a portfolio of music royalty rights that could appreciate over time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ArtistsAndFansSection;
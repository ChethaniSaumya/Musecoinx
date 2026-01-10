import { Card, CardContent } from "@/components/ui/card";
import { Wallet, Music, Share, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HowItWorksSection = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1, 0);
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation(0.1, 200);

  const steps = [
    {
      icon: Music,
      title: "Artists mint original tracks as NFTs",
      description: "These are limited-edition digital assets backed by real royalty rights."
    },
    {
      icon: Wallet,
      title: "Fans and collectors buy song shares",
      description: "You're not just listening — you're co-investing in the artist's journey."
    },
    {
      icon: Share,
      title: "Share it, stream it, hype it",
      description: "The more traction it gets, the more royalty it earns. You benefit too."
    },
    {
      icon: Trophy,
      title: "Earn when it gets played",
      description: (
        <>
          If the song earns royalties (Spotify, YouTube, etc.), your share hits your wallet. No middlemen
          <p className="text-xs text-gray-400 mt-3 italic">
            *Disclaimer: This NFT is a digital collectible and does not represent ownership, equity, or a financial security. Any royalty benefit is conditional and non-guaranteed.
          </p>
        </>
      )
    }
  ];

  return (
    <section 
      id="how-it-works" 
      className="py-24 px-6 relative overflow-hidden font-lato"
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
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 transform ${titleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Straightforward process for artists and collectors to collaborate and earn together
          </p>
        </div>

        <div
          ref={stepsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative z-10 transition-all duration-700 transform ${stepsVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
                }`}
              style={{ transitionDelay: stepsVisible ? `${index * 150}ms` : '0ms' }}
            >
              <Card className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-400/50 transition-all duration-300 group text-center h-full hover:scale-[1.03] hover:shadow-xl hover:shadow-purple-500/10">
                <CardContent className="p-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-purple-500/10 rounded-full flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                    <step.icon className="h-10 w-10 text-purple-400" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-white">
                    {step.title}
                  </h3>
                  <div className="text-gray-300 leading-relaxed">
                    {step.description}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

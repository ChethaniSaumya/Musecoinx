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
      description: "The more traction it gets, the more revenue it earns. You benefit too."
    },
    {
      icon: Trophy,
      title: "Earn when it gets played",
      description: "If the song earns royalties (Spotify, YouTube, etc.), your share hits your wallet. No middlemen."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 transform ${titleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="font-helvetica text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
              <Card className="bg-white dark:bg-gray-800 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:border-primary/50 transition-all duration-300 group text-center h-full hover:scale-[1.03] hover:shadow-xl hover:shadow-primary/10">
                <CardContent className="p-8">
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-300">
                    <step.icon className="h-10 w-10 text-primary dark:text-primary-400" />
                  </div>

                  <h3 className="font-helvetica text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 font-helvetica leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
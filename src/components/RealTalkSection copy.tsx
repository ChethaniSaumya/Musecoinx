import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import logo from '../../assets/Asha-Coin.png'

const minting = () => {
	window.open("https://muse-fe.vercel.app");
}

const RealTalkSection = () => {
  const { ref: realTalkRef, isVisible: realTalkVisible } = useScrollAnimation(0.1, 0);
  const { ref: marketplaceRef, isVisible: marketplaceVisible } = useScrollAnimation(0.1, 200);
  const { ref: launchRef, isVisible: launchVisible } = useScrollAnimation(0.1, 400);

  return (
    <section className="py-24 px-4 sm:px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Real Talk Section - Improved */}
        <div className="mb-24">
          <Card
            ref={realTalkRef}
            className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-700 hover:scale-[1.01] hover:shadow-lg ${realTalkVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-20'
              }`}
          >
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-12">
                <div className="relative inline-block mb-6">
                  <div className="w-24 h-24 mx-auto bg-purple-500/10 dark:bg-purple-500/20 rounded-full flex items-center justify-center relative">
                    <AlertCircle className="h-12 w-12 text-purple-600 dark:text-purple-400" />
                    <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 animate-ping opacity-0"></div>
                  </div>
                </div>
                <h2 className="font-helvetica text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                  Real <span className="text-purple-600 dark:text-purple-400">Talk</span>
                </h2>
                <div className="max-w-2xl mx-auto">
                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4">
                    Transparency is our foundation. Here's exactly how this works.
                  </p>
                  <div className="inline-block px-4 py-1.5 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full text-sm font-medium">
                    No Hype, Just Facts
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {/* Point 1 - Enhanced */}
                <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-helvetica font-semibold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        Royalty Sharing
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        You earn when artists choose to share royalties via Musecoinx.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Point 2 - Enhanced */}
                <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-helvetica font-semibold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        No Copyright Transfer
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        NFTs don’t give you copyrights. You’re not co-writing — just co-earning.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Point 3 - Enhanced */}
                <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-purple-600 dark:bg-purple-400 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-helvetica font-semibold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        Market Realities
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        No guaranteed returns. This is belief + blockchain, not a quick flip
                      </p>
                    </div>
                  </div>
                </div>
              </div>
 
            </CardContent>
          </Card>
        </div>

        {/* Marketplace Preview */}
        {/* Centered Music Preview */}
        <div
          ref={marketplaceRef}
          id="marketplace"
          className={`mb-24 transition-all duration-700 ${marketplaceVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-20'
            }`}
        >
          <div className="flex justify-center">
            <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 p-8 max-w-md w-full">
              <div className="text-center">
                {/* Music Icon with Pulse Animation */}
                <div className="mx-auto w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mb-4 relative">
                  <Play className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  <div className="absolute inset-0 rounded-full border-2 border-purple-500/20 animate-ping opacity-0"></div>
                </div>

                {/* Track Title */}
                <h3 className="font-helvetica text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  New Drop: 17-year-old producer from Liverpool
                </h3>

                {/* Description */}
                <div className="space-y-4 mt-6">
                  <p className="text-gray-600 dark:text-gray-300 italic text-lg">
                    "You hit play. It's pure heat."
                  </p>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold text-xl">
                    You own 0.5% before it goes viral
                  </p>
                </div>

              </div>
            </Card>
          </div>
        </div>
        {/* Launch Feature */}
        {/* Launch Feature - Redesigned */}
        <div ref={launchRef}>
          <Card className={`bg-gradient-to-r from-purple-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 transition-all duration-700 hover:scale-[1.01] ${launchVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-20'
            }`}>
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Text Content */}
                <div className="md:w-1/2">
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-purple-600 dark:text-purple-400 uppercase bg-purple-100 dark:bg-purple-900/50 rounded-full">
                      Exclusive Launch
                    </span>
                  </div>
                  <h3 className="font-helvetica text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Launching With <span className="text-purple-600 dark:text-purple-400">“Asha”</span>
                  </h3>
                  <h4 className="text-2xl md:text-3xl font-medium mb-6 text-gray-800 dark:text-gray-200">
                    by Shruti Music School
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                    Featuring KK — yes, the Bollywood legend.
                  </p>

                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 bg-purple-600 dark:text-purple-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Limited NFTs. Real royalties. Real legacy.</span>
                    </li>
                    <li className="flex items-center">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 bg-purple-600 dark:text-purple-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">Be an early fan = Become a Day 1 co-owner.</span>
                    </li>

                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button onClick={minting} className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg transition-all hover:shadow-lg hover:shadow-purple-500/30">
                      Mint Now
                    </Button>
                   
                  </div>
                </div>

                {/* Album Art - Modern Design */}
                {/* Album Art - Modern Design with Vinyl Image */}
                <div className="md:w-1/2 relative">
                  <div className="relative group">
                    {/* Vinyl Record Image */}
                    <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative">
                      {/* Vinyl Record Image */}
                      <img
                        src={logo}
                        alt="Vinyl Record"
                        className="h-full w-full object-contain bg-gray-100 dark:bg-gray-800 p-8"
                      />
                      {/* Dark overlay for better text contrast */}
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                    {/* Record Label Effect */}
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-white dark:bg-gray-800 border-4 border-purple-500 flex items-center justify-center shadow-lg">
                      <div className="w-8 h-8 rounded-full bg-purple-500"></div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-lg bg-white dark:bg-gray-800 border-2 border-purple-500/50 flex items-center justify-center rotate-12 shadow-sm">
                      <span className="text-xs font-bold text-purple-600 dark:text-purple-400">NFT</span>
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
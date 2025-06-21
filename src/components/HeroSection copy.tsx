import { Button } from "@/components/ui/button";
import { Wallet, Play, Music, Star, Disc, Headphones, Mic2, Guitar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/70 to-background"></div>

      {/* Floating Elements with Music-themed Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Tiny dots */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={`dot-${i}`}
            className="absolute rounded-full animate-ping opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 2000}ms`,
              animationDuration: `${Math.random() * 3000 + 2000}ms`,
              backgroundColor: i % 3 === 0 ? 'var(--primary)' : i % 3 === 1 ? 'var(--secondary)' : 'var(--accent)'
            }}
          />
        ))}
        
        {/* Music-themed floating icons with custom animations */}
        <Music className="absolute top-[15%] left-[20%] w-6 h-6 text-primary/20 animate-float-slow" />
        <Star className="absolute top-[70%] right-[25%] w-5 h-5 text-secondary/20 animate-float-medium" />
        <Disc className="absolute top-[30%] right-[30%] w-7 h-7 text-accent/20 animate-float-fast" />
        <Headphones className="absolute top-[10%] right-[10%] w-5 h-5 text-primary/20 animate-float-medium" />
        <Mic2 className="absolute top-[80%] left-[15%] w-6 h-6 text-secondary/20 animate-float-slow" />
        <Guitar className="absolute top-[50%] left-[10%] w-7 h-7 text-accent/20 animate-float-fast" />
        <Disc className="absolute top-[60%] right-[10%] w-6 h-6 text-primary/20 animate-float-medium" />
        <Music className="absolute top-[25%] right-[20%] w-5 h-5 text-secondary/20 animate-float-slow" />
      </div>
 
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8 relative inline-block">
          <h1 className="font-helvetica text-6xl md:text-8xl font-bold text-foreground relative z-10">
            Musecoinx
          </h1>
          <div className="absolute -bottom-2 left-0 right-0 h-3 bg-primary/10 -z-0 rounded-full blur-sm"></div>
        </div>

        <h2 className="font-helvetica text-3xl md:text-4xl font-semibold mb-8 text-primary relative inline-block px-4 py-2 bg-primary/10 rounded-lg">
          Wanna Own the Next Ed Sheeran Track?
        </h2>

        <div className="space-y-6 mb-12">
          <p className="text-xl md:text-2xl text-muted-foreground font-helvetica leading-relaxed">
            Why just stream music when you can <span className="text-primary font-medium">own</span> a piece of it?
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-helvetica leading-relaxed">
            Wish you'd invested in Ed Sheeran when he was busking? Or Billie Eilish pre-Grammys?
            Now you can — before the world catches on. Welcome to Musecoinx.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-helvetica text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 group"
          >
            <Play className="mr-3 h-5 w-5 group-hover:animate-pulse" />
            Explore Music
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-secondary text-secondary hover:bg-secondary/10 hover:text-secondary font-helvetica text-lg px-8 py-6 rounded-full backdrop-blur-sm bg-card/30 transition-all duration-300 transform hover:scale-105 group"
          >
            <Wallet className="mr-3 h-5 w-5 group-hover:animate-bounce" />
            Connect Wallet
          </Button>
        </div>
      </div>

      {/* Decorative Bottom Elements */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-4">
        <div className="h-1 w-16 bg-primary rounded-full opacity-50"></div>
        <div className="h-1 w-16 bg-secondary rounded-full opacity-50"></div>
        <div className="h-1 w-16 bg-accent rounded-full opacity-50"></div>
      </div>

      {/* Add these animation definitions to your global CSS */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-10px, -15px) rotate(2deg);
          }
          50% {
            transform: translate(5px, -20px) rotate(-3deg);
          }
          75% {
            transform: translate(10px, -10px) rotate(2deg);
          }
        }
        @keyframes float-medium {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(15px, -10px) rotate(-2deg);
          }
          50% {
            transform: translate(-5px, -15px) rotate(1deg);
          }
          75% {
            transform: translate(-10px, -5px) rotate(-1deg);
          }
        }
        @keyframes float-fast {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(20px, -15px) rotate(3deg);
          }
          50% {
            transform: translate(-10px, -25px) rotate(-2deg);
          }
          75% {
            transform: translate(15px, -10px) rotate(1deg);
          }
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 8s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
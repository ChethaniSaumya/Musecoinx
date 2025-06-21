import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const artists = [
  {
    name: "Coming Soon",
    image: "https://cdn.prod.website-files.com/62f35224774781301ab36d72/62f4e4744f9c700f78e46aba_Gallery%20Image%2001.jpg"
  },
  {
    name: "Coming Soon",
    image: "https://cdn.prod.website-files.com/62f35224774781301ab36d72/62f4e6117ff2dd9e6b0430d3_Gallery%20Image%2002.jpg"
  },
  {
    name: "Coming Soon",
    image: "https://cdn.prod.website-files.com/62f35224774781301ab36d72/62f4e65c364a09654b6f1a4e_Gallery%20Image%2003.jpg"
  },
  {
    name: "Coming Soon",
    image: "https://cdn.prod.website-files.com/62f35224774781301ab36d72/62f4e699e4391fb808f6d409_Gallery%20Image%2004.jpg"
  },
  {
    name: "Coming Soon",
    image: "https://cdn.prod.website-files.com/62f35224774781301ab36d72/62f4e6117ff2dd9e6b0430d3_Gallery%20Image%2002.jpg"
  },
  {
    name: "Coming Soon",
    image: "https://cdn.prod.website-files.com/62f35224774781301ab36d72/62f4ea601202d84fb5a2170b_Gallery%20Image%2006.jpg"
  }
];

const GallerySection = () => {
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation(0.1, 0);

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
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400" style={{ lineHeight: '1.2' }}>
  Spotlight
</h2>
        </div>

        {/* Artist Grid */}
        <div
          ref={galleryRef}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ${galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}
        >
          {artists.map((artist, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl aspect-square hover:scale-[1.02] transition-transform duration-500"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div>

              {/* Artist name */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  {artist.name}
                </h3>
              </div>

              {/* Artist image - replaced Next.js Image with regular img */}
              <img
                src={artist.image}
                alt={artist.name}
                className="absolute w-full h-full object-cover"
              />

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;
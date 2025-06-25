import { useState } from 'react';
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import kk from '../../assets/kk.jpg';

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

        {/* Square Image Container */}
        <div
          ref={galleryRef}
          className={`relative overflow-hidden rounded-xl transition-all duration-1000 ${galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
          style={{ 
            width: '600px', 
            height: '600px',
            margin: '0 auto'
          }}
        >
          {/* KK's Image */}
          <div className="relative h-full w-full">
            {/* Artist image */}
            <img
              src={kk}
              alt="KK's Cover"
              className="absolute w-full h-full object-cover z-0"
            />

            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 z-10 hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300"></div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-20 pointer-events-none"></div>

            {/* Artist name */}
            <div className="absolute bottom-8 left-0 right-0 p-6 z-30 pointer-events-none">
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                KK's Cover
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
import React from "react";

export default function Partners() {
  return (
    <section className="relative w-full overflow-hidden py-8">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-gray-200/50 pointer-events-none" />
      
      <h2 className="text-center text-2xl font-semibold mb-8 text-gray-800">
        Our Partners
      </h2>

      <div className="overflow-hidden relative">
        {/* Animation container */}
        <div className="flex w-max animate-scroll whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              {[
                "/images/main_logo.png",
                "/images/main_logo.png",
                "/images/main_logo.png",
                "/images/main_logo.png",
                "/images/main_logo.png",
                "/images/main_logo.png",
              ].map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`partner-${index}`}
                  className="w-[150px] mx-8 grayscale hover:grayscale-0 hover:cursor-pointer transition duration-300"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

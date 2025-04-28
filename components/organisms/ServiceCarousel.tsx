"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";

interface ServiceCarouselProps {
  images: { src: string; alt: string }[];
  title: string;
  subtitle: string;
  features: { title: string; description: string }[];
}
export const ServiceCarousel = ({
  images,
  title,
  // subtitle,
  features,
}: ServiceCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="w-full ">
      <div className="flex flex-col lg:flex-row gap-12 justify-center items-start max-w-7xl mx-auto">
        {/* Text Left: take up less space */}
        <div className="w-full lg:w-5/12 flex flex-col justify-start mt-6 lg:mt-0">
          <h2 className="h1-font text-8xl mb-2 uppercase">{title}</h2>
          <div className="text-body space-y-6 text-lg">
            {features.map((feature, index) => (
              <div key={index}>
                <h3 className="font-bold text-xl mb-1">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-body">
            <a
              href="https://wa.me/19084135002"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-bold space-y-6 text-lg inline-block w-fit text-[#1E40AF] bg-yellow-400 px-4 py-2 rounded shadow hover:bg-background hover:text-[#f0f0c9] transition"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>

        {/* Carousel Container (right side) */}
        <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-end">
          {/* Main image */}
          <div className="relative w-full max-w-[700px] aspect-[4/3] rounded-lg overflow-hidden bg-black">
            {images[currentIndex]?.src && (
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt ?? "Service Image"}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            )}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 text-black px-2 py-1 rounded-full"
            >
              ‹
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 text-black px-2 py-1 rounded-full"
            >
              ›
            </button>
          </div>

          {/* Thumbnails should stay inside this right section only */}
          <div className="w-full max-w-[700px] flex overflow-x-auto gap-4 mt-4 scrollbar-hide px-2">
            {images?.map((image, index) =>
              image?.src ? (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`min-w-[80px] h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    currentIndex === index
                      ? "border-red-500"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt ?? `Thumbnail ${index + 1}`}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </button>
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

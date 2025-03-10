"use client";

import "../../src/app/globals.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/sp-assphault_1--pic.jpg",
  "/sp-assphault_2--pic.jpg",
  "/sp-assphault_3--pic.jpg",
  "/sp-concrete_1--pic.jpg",
  "/sp-concrete_2--pic.jpg",
  "/sp-banner_1--pic.jpg"
];

export const Maintenance = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 754);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full max-w-screen overflow-x-hidden px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Main Container */}
      <div className="container mx-auto max-w-[1200px] p-6 md:p-8 lg:p-10 flex flex-col md:flex-col lg:flex-row items-center gap-6 md:gap-12 lg:gap-16 w-full">
        
        {/* Left Side: Text */}
        <div className="w-full lg:w-1/2 text-center md:text-center lg:text-left max-w-[600px]">
          <motion.h1
            className="h1-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Speed Paving.com
          </motion.h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl mt-3">
            Check back soon!
          </h2>
          <p className="text-xs sm:text-sm md:text-base mt-3 text-gray-700 leading-relaxed">
            Our website is currently under construction as we work to pave the
            way to an even better online experience. We're busy updating our
            digital presence to better serve you and showcase our high-quality paving solutions.
          </p>
          <div className="mt-4 sm:mt-6">
            <p className="text-sm sm:text-base">
              <strong>Phone:</strong> (908) 413-5002
            </p>
            <p className="text-sm sm:text-base">
              <strong>Email:</strong> wspeedsr@gmail.com
            </p>
          </div>
        </div>

        {/* Right Side: Static Image on Mobile, Swiper on Desktop */}
        <div className="w-full lg:w-1/2 max-w-[600px] overflow-hidden">
          {isMobile ? (
            // Static Image for Mobile
            <img
              src={images[5]}
              alt="Paving Project"
              className="w-full max-w-full h-auto object-contain rounded-lg shadow-md"
            />
          ) : (
            // Swiper Carousel for Larger Screens (Now Fixed Height)
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop
              className="w-full max-w-full rounded-lg shadow-md"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index} className="flex justify-center items-center w-full">
                  <motion.img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full max-w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover rounded-lg shadow-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

      </div>
    </div>
  );
};

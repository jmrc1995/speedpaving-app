"use client";
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
  "/sp-banner_1--pic.jpg",
];

export const Maintenance = () => {
  const [isSpanish, setIsSpanish] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true); // Prevents hydration errors
  }, []);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 760);
    if (hasMounted) {
      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);
      return () => window.removeEventListener("resize", checkScreenSize);
    }
  }, [hasMounted]);

  if (!hasMounted) return null;

  if (typeof window === "undefined") return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full max-w-screen overflow-hidden">
      {/* 🔹 Theme Toggle Position Fix */}
      <div className="absolute top-4 left-4 z-50">
        {/* ThemeToggle Component Goes Here */}
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto max-w-[1200px] w-full flex flex-col lg:flex-row items-center gap-6 md:gap-12 lg:gap-16 px-4 sm:px-6 md:px-8">
        {/* Left Side: Text */}
        <div className="w-full lg:w-1/2 text-align: left sm:text-center lg:text-left max-w-[600px]">
          <motion.h1
            className="h1-font text-6xl sm:text-4xl md:text-5xl lg:text-8xl font-bold uppercase leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Speed Paving.com
          </motion.h1>
          <h2 className="text-lg sm:text-xl md:text-2xl mt-3 font-semibold">
            {isSpanish
              ? "Estamos repavimentando nuestro camino digital, ¡vuelve pronto!"
              : "We're Repaving Our Digital Road, Check Back Soon!"}
          </h2>

          {isSpanish ? (
            <>
              <p className="font-thin text-sm sm:text-base md:text-lg mt-3 text-foreground leading-relaxed max-w-[90%] sm:mx-auto lg:mx-0">
                Nuestro sitio está en construcción, pero seguimos ofreciendo
                todos nuestros servicios de pavimentación.
              </p>
              <p className="font-thin text-sm sm:text-base md:text-lg mt-2 text-foreground leading-relaxed max-w-[90%] sm:mx-auto lg:mx-0 italic">
                Mientras tanto, todos nuestros servicios están completamente
                disponibles.
              </p>
            </>
          ) : (
            <>
              <p className="font-thin text-sm sm:text-base md:text-lg mt-3 text-foreground leading-relaxed max-w-[90%] sm:mx-auto lg:mx-0">
                Our website is currently under construction as we update our
                digital presence to better serve you and highlight our reliable
                paving services.
              </p>
              <p className="font-thin text-sm sm:text-base md:text-lg mt-2 text-foreground leading-relaxed max-w-[90%] sm:mx-auto lg:mx-0 italic">
                In the meantime, all our services are fully available.
              </p>
            </>
          )}

          <div className="mt-4 sm:mt-6 sm:text-center lg:text-left">
            <p className="text-sm sm:text-base">
              <strong>Phone:</strong>{" "}
              <span className="font-thin">(908) 413-5002</span>
            </p>
            <p className="text-sm sm:text-base">
              <strong>Email:</strong>{" "}
              <span className="font-thin">wspeedsr@gmail.com</span>
            </p>
          </div>

          {/* Translation Button */}
          <div className="mt-4 flextext-align: left sm:text-center lg:text-left" >
            <button
              onClick={() => setIsSpanish(!isSpanish)}
              className="outline px-4 py-2 rounded-lg shadow-md transition duration-300 bg-primary text-primary-foreground hover:bg-primary/80"
            >
              {isSpanish ? "Translate to English" : "Traducir al Español"}
            </button>
          </div>
        </div>

        {/* Right Side: Fixed Responsive Carousel */}
        <div className="w-full lg:w-1/2 flex justify-center items-center overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            className="w-full max-w-full overflow-hidden rounded-lg shadow-md"
          >
            {images.map((src, index) => (
              <SwiperSlide
                key={index}
                className="!w-full flex justify-center items-center"
              >
                <motion.img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className={`w-full max-w-full object-cover rounded-lg shadow-md transition-all duration-500 ${
                    isMobile ? "h-[320px] aspect-[4/3]" : "h-[450px]"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

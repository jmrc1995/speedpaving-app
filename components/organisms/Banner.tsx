"use client";
import "./../../src/app/globals.css";
import Image from "next/image";
// import ThemeToggle from "../../components/ThemeToggle";
// import useTheme from "../../components/useTheme";
import { motion } from "framer-motion"; // ✅ ADD THIS

export const Banner = () => {
  // const { theme, toggleTheme } = useTheme();

  return (
    <section className="dark relative w-full h-screen sm:h-[100dvh] overflow-hidden bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/42699-432087137.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 " />

      {/* ✅ Grain effect */}
      <div className="grain-overlay z-20">
        <Image
          src="/binding_dark.png"
          alt="grain"
          fill
          className="object-cover mix-blend-overlay opacity-20"
          priority
        />
      </div>

      {/* Animated Text Content */}
      <div className="absolute inset-0 flex items-center ">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-block p-4 sm:p-6   max-w-fit"
        >
          <div className="flex flex-col leading-none text-left">
            <h1 className="h1-font uppercase leading-none text-[30vw] sm:text-[30vw] xl:text-[300px] 2xl:text-[400px]">
              SPEED PAVING
            </h1>
            <p className="body-title uppercase  drop-shadow text-[4.5vw] sm:text-xl md:text-2xl lg:text-3xl">
              Reliable Paving, Built to Last
            </p>
          </div>
        </motion.div>
      </div>
      {/* 🚧 Top Left Paving Truck Logo */}
      <div className="absolute top-[env(safe-area-inset-top)] left-0 w-full z-30 flex items-center justify-start px-4 py-2 ">
        <Image
          src="/Asset10.svg"
          alt="Speed Paving Logo"
          width={100}
          height={60}
          className="w-[80px] sm:w-[100px] h-auto object-contain"
        />
      </div>

      {/* ✅ WhatsApp Icon Button Only */}
      {/* ✅ Clear WhatsApp Contact Button */}
      <a
        href="https://wa.me/19084135002"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 absolute top-4 right-4 z-50 p-2 rounded-full bg-white/20 backdrop-blur-md hover:scale-110 transition text-white"
      >
         <span className="text-[#f0f0c9] font-light text-xs sm:text-base">Chat with Us</span>
        <Image
          src="/WhatsApp.svg.webp"
          alt="WhatsApp"
          width={24}
          height={24}
          className="w-6 h-6 sm:w-8 sm:h-8"
        />
       
      </a>

      {/* <div className="absolute bottom-4 left-0 z-50 w-16 h-16 animate-drive-truck">
        <Image
          src="/Asset1.svg" // Use your actual path
          alt="Paving Truck"
          width={100}
          height={100}
        />
      </div> */}
    </section>
  );
};

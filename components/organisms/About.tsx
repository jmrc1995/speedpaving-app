"use client";
import { useState } from "react";
import Image from "next/image";
import { Globe } from "lucide-react";

export const About = () => {
  const [language, setLanguage] = useState<"en" | "es">("en");

  const content = {
    en: {
      title: "About Us",
      text: `Family-owned and proudly serving the community since 1987, Speed Paving is based in Elizabeth, NJ and built on decades of hands-on experience. We specialize in residential and commercial paving, including asphalt, concrete, pavers, belgian block, retaining walls, and seal coating. Known for quality work and dependable service, we’re committed to getting the job done right every time. `,
    },
    es: {
      title: "Sobre Nosotros",
      text: `Negocio familiar y con orgullo sirviendo a la comunidad desde 1987, Speed Paving tiene su sede en Elizabeth, NJ y se basa en décadas de experiencia práctica. Nos especializamos en pavimentación residencial y comercial, incluyendo asfalto, concreto, adoquines, bloques belgas, muros de contención y sellado. Reconocidos por nuestro trabajo de calidad y servicio confiable, estamos comprometidos a hacer el trabajo bien hecho, siempre.`,
    },
  };

  return (
    <section className="bg-[#004377] text-white px-6 py-20 relative">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        {/* Right: Text */}
        <div className="w-full lg:w-1/2">
          {/* Translation Toggle */}
          <button
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            className="flex items-center gap-2 bg-white/20 text-white text-sm px-4 py-1 rounded-full border border-white/30 hover:bg-white/30 hover:scale-105 transition"
          >
            <Globe className="w-4 h-4" />
            {language === "en" ? "Español" : "English"}
          </button>
          <div className="flex justify-end mb-2"></div>
          <h2 className="font-extrabold uppercase mb-4 text-[#f0f0c9] h1-font text-8xl mb-2">
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed text-body space-y-6">
            {content[language].text}
          </p>
        </div>

        {/* Left: Image */}
        <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/sp_banner-photo-1.jpeg"
            alt="About Speed Paving"
            width={800}
            height={600}
            className="object-cover w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

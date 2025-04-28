"use client";
import { useState } from "react";
import { ServiceCarousel } from "./ServiceCarousel";
import { Globe } from "lucide-react";
import Image from "next/image"; // ✅ Import Next.js Image

const translateText = (language: string, en: string, es: string) =>
  language === "es" ? es : en;

export const ServicesTabs = () => {
  const [language, setLanguage] = useState<"en" | "es">("en");
  const [activeLabel, setActiveLabel] = useState("Asphalt");

  const services = [
    {
      label: translateText(language, "Asphalt", "Asfalto"),
      icon: (
        <Image
          src="/sp-asphalt--svg.svg"
          alt="Asphalt Icon"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      ),
      content: (
        <div className="pt-10 pb-16 w-full">
          <div className="w-full sm:max-w-6xl sm:mx-auto overflow-hidden">
            <ServiceCarousel
              title={translateText(language, "Asphalt", "Asfalto")}
              subtitle={translateText(
                language,
                "Smart. Strong. Sustainable.",
                "Inteligente. Resistente. Sostenible."
              )}
              images={[...Array(10)].map((_, i) => ({
                src: `/sp-asphalt_${i + 1}--pic.jpg`,
                alt: `Asphalt Paving ${i + 1}`,
              }))}
              features={[
                {
                  title: translateText(
                    language,
                    "Durable, cost-effective, and quick to install.",
                    "Duradero, rentable y rápido de instalar."
                  ),
                  description: translateText(
                    language,
                    "Our asphalt paving services are perfect for driveways, parking lots, and roadways. Designed to withstand heavy use and harsh weather.",
                    "Nuestros servicios de asfalto son perfectos para entradas, estacionamientos y carreteras. Diseñados para soportar uso intensivo y clima severo."
                  ),
                },
              ]}
            />
          </div>
        </div>
      ),
    },
    {
      label: translateText(language, "Concrete", "Concreto"),
      icon: (
        <Image
          src="/sp-concrete--svg.svg"
          alt="Concrete Icon"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      ),
      content: (
        <div className="pt-10 pb-16 w-full">
          <div className="w-full sm:max-w-6xl sm:mx-auto overflow-hidden">
            <ServiceCarousel
              title={translateText(language, "Concrete", "Concreto")}
              subtitle={translateText(
                language,
                "Smart. Strong. Sustainable.",
                "Inteligente. Resistente. Sostenible."
              )}
              images={[
                ...Array(10).fill(0).map((_, i) => ({
                  src: `/sp-concrete_${i + 1}--pic.jpg`,
                  alt: `Concrete project example ${i + 1}`,
                })),
                { src: "/sp-concrete_11--pic.jpg", alt: "Concrete walkway project 11" },
                { src: "/sp-concrete_12PRV--pic.jpeg", alt: "Freshly poured concrete slab 12" },
                { src: "/sp-concrete_13PRV--pic.jpeg", alt: "Concrete paving installation 13" },
                { src: "/sp-concrete_14PRV--pic.jpeg", alt: "Concrete sidewalk job 14" },
                { src: "/sp-concrete_15PRV--pic.jpeg", alt: "Concrete project detail 15" },
                { src: "/sp-concrete_16PRV--pic.jpeg", alt: "Concrete finish example 16" },
              ]}
              features={[
                {
                  title: translateText(
                    language,
                    "Strong Foundations with a Clean Finish",
                    "Base fuerte con un acabado limpio"
                  ),
                  description: translateText(
                    language,
                    "We pour strong, clean, and long-lasting concrete for sidewalks, patios, and more. Great for both structural use and sleek finishes.",
                    "Vertemos concreto resistente, limpio y duradero para aceras, patios y más. Ideal para usos estructurales y acabados modernos."
                  ),
                },
              ]}
            />
          </div>
        </div>
      ),
    },
    {
      label: translateText(language, "Pavers", "Adoquines"),
      icon: (
        <Image
          src="/sp-pavers--svg.svg"
          alt="Pavers Icon"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      ),
      content: (
        <div className="pt-10 pb-16 w-full">
          <div className="w-full sm:max-w-6xl sm:mx-auto overflow-hidden">
            <ServiceCarousel
              title={translateText(language, "Pavers", "Adoquines")}
              subtitle={translateText(
                language,
                "Smart. Strong. Sustainable.",
                "Inteligente. Resistente. Sostenible."
              )}
              images={[
                { src: "/sp-pavers_2--pic.jpg", alt: "Pavers Paving 2" },
                { src: "/sp-pavers_3--pic.jpg", alt: "Pavers Paving 3" },
                { src: "/sp-pavers_7--pic.jpg", alt: "Pavers Paving 7" },
                ...Array(9).fill(0).map((_, i) => ({
                  src: `/sp-belgian_block_${i + 1}--pic.jpg`,
                  alt: `Pavers Paving (Belgian Block) ${i + 1}`,
                })),
              ]}
              features={[
                {
                  title: translateText(
                    language,
                    "Custom Style for Outdoor Surfaces",
                    "Estilo personalizado para exteriores"
                  ),
                  description: translateText(
                    language,
                    "Add character and charm with custom paver installations. Ideal for walkways, patios, and driveways. Available in a variety of styles and colors.",
                    "Agrega carácter y encanto con instalaciones personalizadas de adoquines. Ideales para caminos, patios y entradas. Disponible en diversos estilos y colores."
                  ),
                },
              ]}
            />
          </div>
        </div>
      ),
    },
    {
      label: translateText(language, "Belgium Blocks", "Bloques Belgas"),
      icon: (
        <Image
          src="/sp-belgian_block--svg.svg"
          alt="Pavers Icon"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      ),
      content: (
        <div className="pt-10 pb-16 w-full">
          <div className="w-full sm:max-w-6xl sm:mx-auto overflow-hidden">
            <ServiceCarousel
              title={translateText(language, "Belgium Blocks", "Bloques Belgas")}
              subtitle={translateText(
                language,
                "Smart. Strong. Sustainable.",
                "Inteligente. Resistente. Sostenible."
              )}
              images={[
                { src: "/sp-belgian-blocks_01NEW--pic.jpeg", alt: "Belgium Block 1" },
                { src: "/sp-belgian-blocks_02NEW--pic.jpeg", alt: "Belgium Block 2" },
                { src: "/sp-belgian-blocks_03NEW--pic.jpeg", alt: "Belgium Block 3" },
                { src: "/sp-belgian-blocks_04NEW--pic.jpeg", alt: "Belgium Block 4" },
              ]}
              features={[
                {
                  title: translateText(
                    language,
                    "Custom Style for Outdoor Surfaces",
                    "Estilo personalizado para exteriores"
                  ),
                  description: translateText(
                    language,
                    "Add character and charm with custom paver installations. Ideal for walkways, patios, and driveways. Available in a variety of styles and colors.",
                    "Agrega carácter y encanto con instalaciones personalizadas de adoquines. Ideales para caminos, patios y entradas. Disponible en diversos estilos y colores."
                  ),
                },
              ]}
            />
          </div>
        </div>
      ),
    },
    {
      label: translateText(language, "Retaining Walls", "Muros de Contención"),
      icon: (
        <Image
          src="/sp-retained-walls--svg.svg"
          alt="Retained Wall Icon"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      ),
      content: (
        <div className="pt-10 pb-16 w-full">
          <div className="w-full sm:max-w-6xl sm:mx-auto overflow-hidden">
            <ServiceCarousel
              title={translateText(language, "Retaining Walls", "Muros de Contención")}
              subtitle={translateText(
                language,
                "Smart. Strong. Sustainable.",
                "Inteligente. Resistente. Sostenible."
              )}
              images={[...Array(4)].map((_, i) => ({
                src: `/sp-retained_walls_${i + 1}--pic.jpg`,
                alt: `Retaining Walls ${i + 1}`,
              }))}
              features={[
                {
                  title: translateText(
                    language,
                    "Structural Support with Visual Appeal",
                    "Soporte estructural con atractivo visual"
                  ),
                  description: translateText(
                    language,
                    "Functional and attractive, our retaining walls help manage sloped landscapes while adding structure and style to your outdoor space.",
                    "Nuestros muros de contención ayudan a gestionar terrenos inclinados mientras aportan estructura y estilo al exterior."
                  ),
                },
              ]}
            />
          </div>
        </div>
      ),
    },
    {
      label: translateText(language, "Seal Coating", "Sellado de Asfalto"),
      icon: (
        <Image
          src="/sp-seal-coating--svg.svg"
          alt="Seal Coating Icon"
          width={24}
          height={24}
          className="w-6 h-6"
        />
      ),
      content: (
        <div className="pt-10 pb-16 w-full">
          <div className="w-full sm:max-w-6xl sm:mx-auto overflow-hidden">
            <ServiceCarousel
              title={translateText(language, "Seal Coating", "Sellado de Asfalto")}
              subtitle={translateText(
                language,
                "Smart. Strong. Sustainable.",
                "Inteligente. Resistente. Sostenible."
              )}
              images={[
                { src: "/sp-seal-coating_12PRV--pic.jpeg", alt: "Seal Coating Equipment 12" },
                { src: "/sp-seal-coating_9PRV--pic.jpeg", alt: "Fresh Seal Coating Project 9" },
                { src: "/sp-seal-coating_10PRV--pic.jpeg", alt: "Seal Coating Crack Repair 10" },
                { src: "/sp-seal-coating_11PRV--pic.jpeg", alt: "Driveway Seal Coating 11" },
                ...Array(1).fill(0).map((_, i) => ({
                  src: `/sp-seal-coating_${1}--pic.jpg`,
                  alt: `Seal Coating Project ${i + 1}`,
                })),
              ]}
              features={[
                {
                  title: translateText(
                    language,
                    "Protective Finish for Long-Lasting Asphalt",
                    "Acabado protector para asfalto duradero"
                  ),
                  description: translateText(
                    language,
                    "Protect and refresh your asphalt with professional seal coating. It extends the life of your pavement and improves curb appeal.",
                    "Protege y renueva tu asfalto con nuestro servicio profesional de sellado. Prolonga la vida útil del pavimento y mejora la estética."
                  ),
                },
              ]}
            />
          </div>
        </div>
      ),
    },
  ];

  const active = services.find((s) => s.label === activeLabel) || services[0];

  return (
    <section className="relative min-h-[500px] lg:min-h-[700px]">
      <div className="bg-[#004377] py-12 px-4 sm:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            className="flex items-center gap-2 bg-white/20 text-white text-sm px-4 py-1 rounded-full border border-white/30 hover:bg-white/30 hover:scale-105 transition"
          >
            <Globe className="w-4 h-4" />
            {language === "en" ? "Español" : "English"}
          </button>
          <h1 className="h1-font text-8xl mb-2 mt-2 uppercase">
            {translateText(language, "Services", "Servicios")}
          </h1>
          <p className="text-white max-w-xl mb-6 text-lg text-body space-y-6">
            {translateText(
              language,
              "Explore our full range of paving solutions tailored to residential and commercial projects. Select a service below to learn more.",
              "Explora nuestra gama completa de soluciones de pavimentación para proyectos residenciales y comerciales. Selecciona un servicio para obtener más información."
            )}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
            {services.map((service) => {
              const isActive = activeLabel === service.label;
              return (
                <button
                  key={service.label}
                  onClick={() => setActiveLabel(service.label)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-sm border-2 transition-all duration-200 ${
                    isActive
                      ? "bg-white text-[#1E40AF] border-white font-bold"
                      : "bg-[#f0f0c9] text-black border-[#e0e0a5] hover:bg-[#eaeac0]"
                  }`}
                >
                  <span className="text-xl">{service.icon}</span>
                  <span className="text-base sm:text-lg">{service.label}</span>
                </button>
              );
            })}
          </div>

          <hr className="border-t border-white/30 my-10" />
        </div>

        {active.content}
      </div>
    </section>
  );
};

"use client";
import Image from "next/image";
import { Phone, MapPin, Facebook, Instagram, Mail, Building } from "lucide-react"; // ✅ Add Building icon here

export const Footer = () => {
  return (
    <footer className="bg-[#004377] text-white px-6 pt-16 pb-10 text-sm font-light">
      <div className="max-w-6xl mx-auto">
        {/* Divider */}
        <div className="h-[2px] bg-gradient-to-r from-white/10 via-white/30 to-white/10 mb-10" />

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Logo & Contact Info */}
          <div>
            <Image
              src="/Asset10.svg"
              alt="Speed Paving Logo"
              width={140}
              height={140}
              className="mb-4"
            />
            <p className="text-gray-300 mb-4 text-base">
              Reliable Paving, Built to Last
            </p>

            <div className="space-y-2 leading-relaxed text-base">
              <p className="font-semibold text-white text-lg mb-1">Contact</p>

              {/* Cell number */}
              <div className="flex items-center gap-2 text-gray-200">
                <Phone size={16} />
                <a
                  href="tel:19084135002"
                  className="hover:text-yellow-300 transition"
                >
                  (908) 413-5002
                </a>
              </div>

              {/* Office number */}
              <div className="flex items-center gap-2 text-gray-200">
                <Building size={16} />
                <a
                  href="tel:19082893085"
                  className="hover:text-yellow-300 transition"
                >
                  (908) 289-3085
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-200">
                <MapPin size={16} />
                <span>Elizabeth, NJ 07206</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2 text-gray-200">
                <Mail size={16} />
                <a
                  href="mailto:wspeedsr@gmail.com"
                  className="hover:text-yellow-300 transition"
                >
                  wspeedsr@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right: Links */}
          <div className="flex flex-col sm:flex-row justify-between gap-10">
            {/* Company */}
            <div></div>

            {/* Social */}
            <div>
              <p className="font-semibold mb-3 text-lg">Social</p>
              <ul className="space-y-2 text-base text-gray-200">
                <li>
                  <a
                    href="https://www.instagram.com/speedpaving?igsh=cjFvZm4wbWdyOXF1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-yellow-300 transition"
                  >
                    <Instagram size={16} /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100084533990979"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-yellow-300 transition"
                  >
                    <Facebook size={16} /> Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <p className="text-sm text-center mt-10 text-gray-400">
          Follow us for project highlights and seasonal paving tips.
        </p>

        {/* Bottom */}
        <div className="mt-6 border-t border-white/20 pt-4 text-center text-xs opacity-70">
          ©1987 ⓒ Speed Paving, LLC
        </div>
      </div>
    </footer>
  );
};

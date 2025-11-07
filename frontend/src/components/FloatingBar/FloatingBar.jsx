import React, { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";

const FloatingBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 👇 Show only after user scrolls past hero section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    {
      name: "WhatsApp",
      href: "https://wa.me/919000000000",
      icon: <FaWhatsapp />,
      color: "bg-[#25D366]",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/yourprofile",
      icon: <FaInstagram />,
      color: "bg-[#E4405F]",
    },
    {
      name: "Facebook",
      href: "https://facebook.com/yourpage",
      icon: <FaFacebookF />,
      color: "bg-[#1877F2]",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/yourcompany",
      icon: <FaLinkedinIn />,
      color: "bg-[#0A66C2]",
    },
    {
      name: "Phone",
      href: "tel:+919000000000",
      icon: <FaPhoneAlt />,
      color: "bg-[#0EA5E9]",
    },
  ];

  return (
    <div
      className={`fixed right-5 bottom-28 flex flex-col gap-3 z-50 transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {items.map((item, index) => (
        <a
          key={item.name}
          href={item.href}
          target={item.href.startsWith("tel:") ? "_self" : "_blank"}
          rel="noreferrer"
          className={`
            group w-12 h-12 ${item.color} text-white rounded-full flex items-center justify-center shadow-lg 
            transform transition-all duration-500 ease-out
            hover:scale-110 hover:shadow-2xl relative
            ${isVisible
              ? "translate-x-0 opacity-100"
              : "translate-x-20 opacity-0"}
          `}
          style={{
            transitionDelay: `${index * 0.15}s`, // 👈 stagger delay (0.15s between each icon)
          }}
          aria-label={item.name}
        >
          <span className="text-xl">{item.icon}</span>
          <span className="absolute right-14 bg-gray-900 text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-200 whitespace-nowrap">
            {item.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default FloatingBar;

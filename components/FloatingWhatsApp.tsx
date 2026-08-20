"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export default function FloatingWhatsApp() {
  const phoneNumber = "+971589867555";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+/g, "")}`;
  const reducedMotion = usePrefersReducedMotion();

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-50 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl transition-shadow group bottom-[24px] max-md:bottom-[92px]"
      style={{
        right: "24px",
        width: "60px",
        height: "60px",
        backgroundColor: "#25D366",
      }}
      initial={reducedMotion ? undefined : { scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={reducedMotion ? { duration: 0 } : { delay: 1, duration: 0.3 }}
      whileHover={reducedMotion ? undefined : { scale: 1.1 }}
      whileTap={reducedMotion ? undefined : { scale: 0.95 }}
      aria-label="Chat with Travelaxis on WhatsApp (opens in a new tab)"
    >
      <MessageCircle className="w-7 h-7 text-white relative z-10" aria-hidden />

      <span
        className="absolute right-full mr-3 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity pointer-events-none max-md:hidden"
        style={{ backgroundColor: "#1D2939", color: "#FFFFFF" }}
        aria-hidden
      >
        Chat with us on WhatsApp
      </span>

      {!reducedMotion ? (
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-75 motion-reduce:animate-none"
          style={{ backgroundColor: "#25D366" }}
          aria-hidden
        />
      ) : null}
    </motion.a>
  );
}

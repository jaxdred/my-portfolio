import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ScrollProgress() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / totalHeight) * 100;
      controls.start({ width: `${progress}%` });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-transparent">
      <motion.div
        className="h-full"
        initial={{ width: 0 }}
        animate={controls}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{
            backgroundImage: "linear-gradient(90deg, #4ade80, #10b981, #047857, #065f46)",
        }}
      />
    </div>
  );
}
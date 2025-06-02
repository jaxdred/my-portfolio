import { motion, useInView} from "framer-motion";
import type { Variants } from "framer-motion";
import { useRef } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  transition?: object;
}

export default function RevealOnScroll({
  children,
  className = "",
  variants,
  transition,
}: RevealOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants || defaultVariants}
      transition={
        transition || { duration: 0.8, ease: "easeOut" }
      }
    >
      {children}
    </motion.div>
  );
}
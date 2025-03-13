"use client";

import { motion } from "framer-motion";

interface ScrollInViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
}

const ScrollInView: React.FC<ScrollInViewProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, ease: "easeOut", delay }}
      viewport={{ once }}
      className={`${className} mt-40 px-16 py-8`}
    >
      {children}
    </motion.div>
  );
};

export default ScrollInView;

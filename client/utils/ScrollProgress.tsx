import { motion, useScroll } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-[5px] w-full bg-green-600 z-[9999]"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "left",
      }}
    />
  );
}
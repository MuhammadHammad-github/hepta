import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Hero = ({ heading }) => {
  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    }
  }, [controls, isInView]);
  return (
    <div className=" heroGlobal text-white">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="text-6xl font-bold text-center"
      >
        {heading}
      </motion.h1>
      <motion.p
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        className="text-white sm:text-3xl text-xl font-light text-center"
      >
        A free template by <span className="text-gray-400">Colorlib</span>.
        Download and Share
      </motion.p>
    </div>
  );
};

export default Hero;

import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/preloader/Animation - 1744904496268.json';
import { motion } from 'framer-motion';

const Preloader = ({ onFinish }) => {
  const lottieRef = useRef();

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(1);
    }

    const timer = setTimeout(() => {
      console.log("Preloader finished");
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white px-6">
      <div className="flex items-center gap-8">

        {/* Motion for Text */}
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex items-center gap-4 text-4xl text-[#b7ab98] font-whitenice tracking-wide"
        >
          <span className="h-10 w-1 rounded-full bg-[#eb5939] block"></span>
          Injecting charm ...
        </motion.p>

        {/* Lottie Animation with Float Effect */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="animate-float"
        >
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            loop
            className="w-64 h-64"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default Preloader;

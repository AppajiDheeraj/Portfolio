import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollRuler = () => {
  const scrollMarkerRef = useRef(null);

  useEffect(() => {
    gsap.to(scrollMarkerRef.current, {
      yPercent: 100,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  const totalTicks = 30; // adjust based on preference
  const ticks = Array.from({ length: totalTicks });

  return (
    <div className="fixed right-4 top-0 h-full z-50 flex flex-col justify-between items-center pointer-events-none">
      <div className="relative h-full w-6 flex flex-col justify-between">
        {/* Background ruler ticks */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-black/40 h-full z-10">
          {ticks.map((_, i) => (
            <div
              key={i}
              className="w-4 h-[1px] bg-black/30 mx-auto my-[10px]"
            />
          ))}
        </div>

        {/* Scroll marker line */}
        <div
          ref={scrollMarkerRef}
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-green-400 h-8 z-20"
        />
      </div>
    </div>
  );
};

export default ScrollRuler;

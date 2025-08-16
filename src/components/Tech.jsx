// Tech.jsx - Hybrid approach (CSS with optional WebGL)
import { useEffect, useRef, useState } from "react";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import HybridTechBall from "./canvas/HybridTechBall"; // Use Hybrid version

const Tech = () => {
  const [visibleBalls, setVisibleBalls] = useState(0);
  const sectionRef = useRef(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleBalls(technologies.length); // Load all immediately
          } else {
            setVisibleBalls(0);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Instructions for users */}
      <div className='text-center mb-6'>
        <p className='text-secondary text-[14px] opacity-75'>
          💡 Click any ball to switch to full 3D mode
        </p>
      </div>

      <div ref={sectionRef} className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology, index) => (
          <div 
            className='flex flex-col items-center' 
            key={technology.name}
            style={{
              opacity: index < visibleBalls ? 1 : 0,
              transform: index < visibleBalls ? 'scale(1)' : 'scale(0.8)',
              transition: `all 0.4s ease-in-out ${index * 0.1}s`
            }}
          >
            {/* Hybrid Ball - Starts as CSS, upgrades to WebGL on click */}
            <div className='w-28 h-28'>
              {index < visibleBalls ? (
                <HybridTechBall icon={technology.icon} name={technology.name} />
              ) : (
                <div className='w-full h-full' />
              )}
            </div>
            
            {/* Technology Name */}
            {index < visibleBalls && (
              <div className='mt-3 text-center'>
                <p className='text-white text-[14px] font-medium'>
                  {technology.name}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
import { motion as Motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

// Import the profile image properly
import profileImage from '../assets/profile/profile.png';

const Hero = () => {
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [displayedSubtitle, setDisplayedSubtitle] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const titleText = "Hi, I'm David";
  const subtitleText = "Creative full-stack developer crafting sleek interfaces and seamless web experiences.";

  useEffect(() => {
    // Title typing effect
    let titleIndex = 0;
    const titleTimer = setInterval(() => {
      if (titleIndex < titleText.length) {
        setDisplayedTitle(titleText.slice(0, titleIndex + 1));
        titleIndex++;
      } else {
        clearInterval(titleTimer);
        // Start subtitle after title is done
        let subtitleIndex = 0;
        const subtitleTimer = setInterval(() => {
          if (subtitleIndex < subtitleText.length) {
            setDisplayedSubtitle(subtitleText.slice(0, subtitleIndex + 1));
            subtitleIndex++;
          } else {
            clearInterval(subtitleTimer);
            setShowCursor(false);
          }
        }, 30); // Faster typing for subtitle
      }
    }, 80); // Typing speed for title

    // Cursor blinking
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(titleTimer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10 pointer-events-none`}>

        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        
        <div className="pointer-events-auto flex-1">
          <Motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`${styles.heroHeadText} text-white relative`}
          >
            <span>
              {displayedTitle.split("David").map((part, index) => 
                index === 0 ? part : (
                  <span key={index}>
                    <span className="text-[#915eff]">David</span>
                  </span>
                )
              )}
              {displayedTitle.includes("David") && displayedTitle === titleText && (
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
              )}
            </span>
          </Motion.h1>
          
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: displayedTitle === titleText ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className={`${styles.heroSubText} mt-2 text-white-100 relative`}
          >
            {displayedSubtitle}
            {displayedSubtitle.length > 0 && displayedSubtitle !== subtitleText && (
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity ml-1`}>|</span>
            )}
            <br className="sm:block hidden" />
          </Motion.div>
        </div>

        <Motion.div 
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ 
            opacity: displayedTitle === titleText ? 1 : 0, 
            x: displayedTitle === titleText ? 0 : 100, 
            scale: displayedTitle === titleText ? 1 : 0.8 
          }}
          transition={{ 
            duration: 1.2, 
            delay: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          className="pointer-events-auto hidden md:flex relative"
        >
          <div className="w-64 h-64 lg:w-80 lg:h-80 relative">
            <Motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-[#915eff] via-purple-500 to-pink-500 p-[2px]"
            >
              <div className="w-full h-full rounded-full bg-black-100" />
            </Motion.div>
            
            <Motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              src={profileImage}  // Use the imported image instead of string path
              alt="David's Profile"
              className="absolute inset-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] object-cover rounded-full z-10"
              loading="eager"  // Load immediately since it's above the fold
            />
            
            {/* Floating particles effect */}
            <Motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-[#915eff] rounded-full opacity-60 blur-sm"
            />
            <Motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500 rounded-full opacity-40 blur-sm"
            />
          </div>
        </Motion.div>
      </div>

      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div>
      
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <Motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
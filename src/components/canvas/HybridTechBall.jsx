// HybridTechBall.jsx - CSS by default, WebGL on click
import { useState } from 'react';
import BallCanvas from './Ball'; // Import the Ball component directly

const HybridTechBall = ({ icon, name }) => {
  const [use3D, setUse3D] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (!use3D) {
      setIsAnimating(true);
      setTimeout(() => {
        setUse3D(true);
        setIsAnimating(false);
      }, 300);
    }
  };

  if (use3D) {
    return (
      <div className="w-28 h-28 relative">
        <BallCanvas icon={icon} />
        <button 
          onClick={() => setUse3D(false)}
          className="absolute top-0 right-0 w-6 h-6 bg-red-500 text-white rounded-full text-xs hover:bg-red-600 z-10"
          title="Switch to CSS mode"
        >
          ×
        </button>
      </div>
    );
  }

  return (
    <div 
      className={`tech-ball-container cursor-pointer ${isAnimating ? 'switching' : ''}`}
      onClick={handleClick}
    >
      <div className="tech-ball-css">
        <div className="ball-surface">
          <img src={icon} alt={name} className="tech-icon" />
          <div className="click-hint">Click for 3D</div>
        </div>
      </div>
      
      <style jsx>{`
        .tech-ball-container {
          perspective: 1000px;
          width: 112px;
          height: 112px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
        }

        .tech-ball-container.switching {
          transform: scale(1.1);
        }

        .tech-ball-css {
          position: relative;
          width: 80px;
          height: 80px;
          animation: gentleFloat 4s ease-in-out infinite, slowRotate 12s linear infinite;
        }

        .tech-ball-css:hover {
          animation: gentleFloat 4s ease-in-out infinite, fastRotate 3s linear infinite;
        }

        .ball-surface {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, 
            rgba(26, 26, 46, 0.9), 
            rgba(22, 33, 62, 0.9), 
            rgba(145, 94, 255, 0.2));
          border: 2px solid #915eff;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          box-shadow: 
            0 0 30px rgba(145, 94, 255, 0.4),
            inset 0 0 30px rgba(145, 94, 255, 0.1);
          position: relative;
          overflow: hidden;
          padding: 15px; /* Add padding to ensure centering */
        }

        .ball-surface::before {
          content: '';
          position: absolute;
          top: 10%;
          left: 20%;
          width: 30%;
          height: 30%;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          filter: blur(10px);
        }

        .tech-icon {
          width: 50px;
          height: 50px;
          object-fit: contain;
          filter: drop-shadow(0 0 15px rgba(145, 94, 255, 0.7));
          z-index: 2;
          position: relative;
        }

        .click-hint {
          font-size: 8px;
          color: rgba(145, 94, 255, 0.7);
          margin-top: 2px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 2;
          text-align: center;
          line-height: 1;
        }

        .tech-ball-container:hover .click-hint {
          opacity: 1;
        }

        @keyframes gentleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        @keyframes slowRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }

        @keyframes fastRotate {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}</style>
    </div>
  );
};

export default HybridTechBall;
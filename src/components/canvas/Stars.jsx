import { PointMaterial, Points, Preload } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random/dist/maath-random.esm";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";

const Stars = (props) => {
  const ref = useRef();
  
  // Memoize the sphere generation to prevent recalculation
  const sphere = useMemo(() => {
    return random.inSphere(new Float32Array(3000), { radius: 1.2 }); // Reduced from 5000 to 3000 points
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef();

  // Only render when component is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={canvasRef} className="w-full h-auto absolute inset-0 z-[-1]">
      {isVisible && (
        <Canvas 
          camera={{ position: [0, 0, 1] }}
          dpr={[1, 2]} // Limit pixel ratio for better performance
          performance={{ min: 0.5 }} // Adaptive performance
          frameloop="demand" // Only render when needed
        >
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
          <Preload all />
        </Canvas>
      )}
    </div>
  );
};

export default StarsCanvas;
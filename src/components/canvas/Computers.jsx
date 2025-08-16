import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile, isTablet }) => {
  const computer = useGLTF('public/desktop_pc/scene.gltf');
  
  const getScale = () => {
    if (isMobile) return 0.75;
    if (isTablet) return 0.85;
    return 1.2;
  };

  const getPosition = () => {
    if (isMobile) return [0, -4.0, -2.5];
    if (isTablet) return [0, -4.3, -2.0];
    return [0, -4.7, -0.65];
  };

  return (
    <group>
      <ambientLight intensity={0.6} />
      <hemisphereLight 
        intensity={0.8}
        groundColor="#2a2a2a"
        skyColor="#ffffff"
      />
      

      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={0.8}
        intensity={3}
        castShadow
        shadow-mapSize={2048}
        color="#ffffff"
      />
      <spotLight
        position={[20, 45, 15]}
        angle={0.12}
        penumbra={0.9}
        intensity={2.5}
        color="#f0f8ff"
      />
      

      <pointLight position={[0, 30, -30]} intensity={1.5} color="#4169E1" />
      <pointLight position={[-30, 10, 0]} intensity={1.2} color="#ffffff" />
      <pointLight position={[30, 10, 0]} intensity={1.2} color="#ffffff" />
      

      <directionalLight
        position={[0, 50, 0]}
        intensity={1.8}
        color="#ffffff"
        castShadow
        shadow-mapSize={1024}
      />

      <primitive
        object={computer.scene}
        scale={getScale()}
        position={getPosition()}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 500px)');
    const tabletQuery = window.matchMedia('(max-width: 768px) and (min-width: 501px)');
    
    const updateScreenSize = () => {
      setIsMobile(mobileQuery.matches);
      setIsTablet(tabletQuery.matches);
    };

    updateScreenSize();
    
    mobileQuery.addEventListener('change', updateScreenSize);
    tabletQuery.addEventListener('change', updateScreenSize);
    
    return () => {
      mobileQuery.removeEventListener('change', updateScreenSize);
      tabletQuery.removeEventListener('change', updateScreenSize);
    };
  }, []);

  const getCameraSettings = () => {
    if (isMobile) return { position: [20, 15, 14], fov: 40 };
    if (isTablet) return { position: [18, 12, 12], fov: 35 };
    return { position: [16, 10, 10], fov: 32 };
  };

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={getCameraSettings()}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true,
        alpha: true
      }}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: 'auto'
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        />
        <Computers isMobile={isMobile} isTablet={isTablet} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
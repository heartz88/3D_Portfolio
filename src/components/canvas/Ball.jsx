// Ball.jsx - Optimized for multiple instances
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const meshRef = useRef();

  // Smooth auto-rotation with controlled range to keep decals upright
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Smooth oscillating X rotation to keep it mostly upright (±30 degrees)
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * (Math.PI / 6);
      
      // Free Y rotation for horizontal spinning
      meshRef.current.rotation.y += delta * 0.4;
      
      // Slight Z rotation for more dynamic movement (±22.5 degrees)
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * (Math.PI / 8);
    }
  });

  return (
    <Float 
      speed={1.2} 
      rotationIntensity={0.8} 
      floatIntensity={1.5}
      floatSpeed={1.4}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[0, 0, 0.05]} intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={0.3} />
      
      <mesh
        ref={meshRef}
        castShadow
        receiveShadow
        scale={3}
      >
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color='turquoise'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          metalness={0.1}
          roughness={0.3}
        />
        
        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={1.2}
          map={decal}
          flatShading
        />
        <Decal
          position={[0, 0, -1]}
          rotation={[0, Math.PI, 0]}
          scale={1.2}
          map={decal}
          flatShading
        />
        <Decal
          position={[1, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={1.2}
          map={decal}
          flatShading
        />
        <Decal
          position={[-1, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={1.2}
          map={decal}
          flatShading
        />
        <Decal
          position={[0, 1, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.2}
          map={decal}
          flatShading
        />
        <Decal
          position={[0, -1, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={1.2}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='always'  // Changed back to 'always' for smooth auto-rotation
      dpr={[1, 1.5]}      // Reduced DPR to save memory
      gl={{
        preserveDrawingBuffer: true,
        antialias: false,   // Disabled antialias to save memory
        alpha: true,
        powerPreference: "high-performance",
        failIfMajorPerformanceCaveat: false
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={0.5}
          enablePan={false}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
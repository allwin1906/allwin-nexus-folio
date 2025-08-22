import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import FloatingCube from './FloatingCube';

export default function InteractiveScene() {
  return (
    <div className="h-64 w-full">
      <Canvas
        camera={{ position: [5, 2, 5], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <Environment preset="night" />
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00f5ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          
          <FloatingCube position={[-2, 0, 0]} color="#00f5ff" />
          <FloatingCube position={[2, 0, 0]} color="#8b5cf6" scale={0.8} />
          <FloatingCube position={[0, 2, -2]} color="#ec4899" scale={0.6} />
          
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={1}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
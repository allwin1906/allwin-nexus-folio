import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import SkillIcon from './SkillIcon';

const skillsData = [
  { name: 'JS', color: '#f7df1e', position: [-3, 1, 0] },
  { name: 'React', color: '#61dafb', position: [-1, 1, 0] },
  { name: 'Node', color: '#339933', position: [1, 1, 0] },
  { name: 'Java', color: '#ed8b00', position: [3, 1, 0] },
  { name: 'Python', color: '#3776ab', position: [-2, -1, 0] },
  { name: 'SQL', color: '#336791', position: [0, -1, 0] },
  { name: 'Git', color: '#f05032', position: [2, -1, 0] },
];

export default function SkillsScene() {
  return (
    <div className="h-96 w-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <Environment preset="night" />
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00f5ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          
          {skillsData.map((skill, index) => (
            <SkillIcon
              key={skill.name}
              position={skill.position as [number, number, number]}
              color={skill.color}
              rotationSpeed={0.5 + index * 0.1}
            >
              {skill.name}
            </SkillIcon>
          ))}
          
          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Center } from '@react-three/drei';
import { Mesh } from 'three';

interface SkillIconProps {
  position: [number, number, number];
  color: string;
  children: React.ReactNode;
  rotationSpeed?: number;
}

export default function SkillIcon({ position, color, children, rotationSpeed = 1 }: SkillIconProps) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * rotationSpeed * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });
  
  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.8}
        emissive={color}
        emissiveIntensity={0.2}
        roughness={0.1}
        metalness={0.8}
      />
      <Center position={[0, 0, 0.76]}>
        <Text
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {children}
        </Text>
      </Center>
    </mesh>
  );
}
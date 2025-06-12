import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../contexts/ThemeContext';

const FloatingGeometry: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color={theme === 'dark' ? '#3b82f6' : '#1d4ed8'}
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.4}
          transparent
          opacity={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Hero3D: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={theme === 'dark' ? 0.4 : 0.6} />
        <directionalLight position={[2, 2, 5]} intensity={theme === 'dark' ? 0.8 : 1} />
        <pointLight position={[-2, -2, 2]} intensity={0.5} color="#14b8a6" />
        
        <FloatingGeometry />
      </Canvas>
    </div>
  );
};

export default Hero3D;
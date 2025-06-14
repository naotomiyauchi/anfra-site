import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../contexts/ThemeContext';

const AnimatedSphere: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial
          color={theme === 'dark' ? '#1d4ed8' : '#3b82f6'}
          wireframe
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
};

const ParticleField: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const { theme } = useTheme();

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <Points ref={pointsRef} positions={particlesPosition} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={theme === 'dark' ? '#60a5fa' : '#3b82f6'}
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
};

const GeometricShapes: React.FC = () => {
  const shapes = useMemo(() => [
    { position: [-4, 8, -2] as [number, number, number] },
    { position: [4, 6, -3] as [number, number, number] },
    { position: [-2, 0, -1] as [number, number, number] },
    { position: [3, -6, -4] as [number, number, number] },
    { position: [0, -10, -2] as [number, number, number] },
    { position: [6, -12, -3] as [number, number, number] },
    { position: [-6, 12, -3] as [number, number, number] },
  ], []);

  return (
    <>
      {shapes.map((shape, index) => (
        <AnimatedSphere key={index} position={shape.position} />
      ))}
    </>
  );
};

const ThreeBackground: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: theme === 'dark' ? '#18181b' : '#f8fafc' }}
      >
        <ambientLight intensity={theme === 'dark' ? 0.3 : 0.5} />
        <pointLight position={[10, 10, 10]} intensity={theme === 'dark' ? 0.8 : 1} />
        <pointLight position={[-10, -10, -10]} intensity={theme === 'dark' ? 0.3 : 0.5} color="#14b8a6" />
        
        <ParticleField />
        <GeometricShapes />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
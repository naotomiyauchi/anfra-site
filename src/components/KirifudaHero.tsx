import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Float, MeshDistortMaterial, Sphere, Box, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const FloatingGeometry: React.FC<{ position: [number, number, number]; geometry: 'sphere' | 'box' | 'torus' | 'octahedron' }> = ({ position, geometry }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { theme } = useTheme();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });

  const renderGeometry = () => {
    const material = (
      <meshStandardMaterial
        color={theme === 'dark' ? '#ffffff' : '#000000'}
        wireframe
        transparent
        opacity={0.15}
        roughness={0.1}
        metalness={0.9}
      />
    );

    switch (geometry) {
      case 'sphere':
        return <Sphere ref={meshRef} args={[0.8, 32, 32]} position={position}>{material}</Sphere>;
      case 'box':
        return <Box ref={meshRef} args={[1.2, 1.2, 1.2]} position={position}>{material}</Box>;
      case 'torus':
        return <Torus ref={meshRef} args={[0.8, 0.3, 16, 32]} position={position}>{material}</Torus>;
      case 'octahedron':
        return <Octahedron ref={meshRef} args={[1]} position={position}>{material}</Octahedron>;
      default:
        return null;
    }
  };

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      {renderGeometry()}
    </Float>
  );
};

const ParticleField: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const { theme } = useTheme();

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={1000}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={theme === 'dark' ? '#ffffff' : '#000000'}
        size={0.01}
        sizeAttenuation={true}
        transparent
        opacity={0.6}
      />
    </points>
  );
};

const CameraController: React.FC<{ scrollY: number }> = ({ scrollY }) => {
  const { camera } = useThree();
  
  useFrame(() => {
    camera.position.y = scrollY * 0.001;
    camera.rotation.x = scrollY * 0.0001;
  });

  return null;
};

const KirifudaHero: React.FC = () => {
  const { theme } = useTheme();
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const geometries = useMemo(() => [
    { position: [-3, 1, -2] as [number, number, number], geometry: 'sphere' as const },
    { position: [3, -1, -3] as [number, number, number], geometry: 'box' as const },
    { position: [-1, -2, -1] as [number, number, number], geometry: 'torus' as const },
    { position: [2, 2, -4] as [number, number, number], geometry: 'octahedron' as const },
  ], []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={theme === 'dark' ? 0.2 : 0.4} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={theme === 'dark' ? 0.3 : 0.6}
          castShadow
        />
        <pointLight position={[-5, -5, 5]} intensity={0.2} color="#3b82f6" />
        
        <CameraController scrollY={scrollY} />
        <ParticleField />
        
        {geometries.map((geo, index) => (
          <FloatingGeometry 
            key={index} 
            position={geo.position} 
            geometry={geo.geometry} 
          />
        ))}
      </Canvas>
    </div>
  );
};

export default KirifudaHero;
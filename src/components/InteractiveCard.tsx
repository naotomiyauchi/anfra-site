import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const WobbleBox: React.FC<{ color: string }> = ({ color }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Box ref={meshRef} args={[1, 1, 1]}>
      <MeshWobbleMaterial
        color={color}
        attach="material"
        factor={0.6}
        speed={1}
        roughness={0.1}
        transparent
        opacity={0.8}
      />
    </Box>
  );
};

const InteractiveCard: React.FC<InteractiveCardProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ 
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative overflow-hidden ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* 3D Background Element */}
      <div className="absolute inset-0 opacity-20">
        <Canvas camera={{ position: [0, 0, 2] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[2, 2, 2]} />
          <WobbleBox color={isHovered ? "#14b8a6" : "#3b82f6"} />
        </Canvas>
      </div>
      
      {/* Card Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'linear-gradient(45deg, #3b82f6, #14b8a6, #f97316)',
          backgroundSize: '300% 300%',
        }}
        animate={{
          backgroundPosition: isHovered ? ['0% 50%', '100% 50%'] : '0% 50%',
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0, repeatType: 'reverse' }}
      >
        <div className="absolute inset-[2px] rounded-2xl bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm" />
      </motion.div>
    </motion.div>
  );
};

export default InteractiveCard;
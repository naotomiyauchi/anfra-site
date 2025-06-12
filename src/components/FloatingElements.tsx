import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements: React.FC = () => {
  const elements = [
    { size: 'w-4 h-4', color: 'bg-primary-500', delay: 0, x: '10vw', y: '20vh' },
    { size: 'w-6 h-6', color: 'bg-secondary-500', delay: 2, x: '80vw', y: '30vh' },
    { size: 'w-3 h-3', color: 'bg-accent-500', delay: 4, x: '20vw', y: '70vh' },
    { size: 'w-5 h-5', color: 'bg-purple-500', delay: 1, x: '70vw', y: '60vh' },
    { size: 'w-2 h-2', color: 'bg-pink-500', delay: 3, x: '90vw', y: '80vh' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.size} ${element.color} rounded-full opacity-60`}
          style={{ left: element.x, top: element.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
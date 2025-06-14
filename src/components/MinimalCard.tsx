import React from 'react';
import { motion } from 'framer-motion';

interface MinimalCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

const MinimalCard: React.FC<MinimalCardProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  hover = true 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={hover ? { 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      } : {}}
      className={`
        bg-white/70 dark:bg-gray-900/60
        backdrop-blur-md
        border border-gray-300/40 dark:border-gray-600/40
        rounded-2xl
        shadow-xl
        transition-all duration-500
        hover:shadow-2xl hover:-translate-y-2
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default MinimalCard;
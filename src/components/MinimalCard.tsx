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
        bg-transparent dark:bg-transparent
        backdrop-blur-sm 
        border border-white/10 dark:border-black/10
        rounded-2xl 
        transition-all duration-500
        hover:bg-transparent dark:hover:bg-transparent
        hover:border-white/20 dark:hover:border-black/20
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default MinimalCard;
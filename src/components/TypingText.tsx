import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const TypingText: React.FC<TypingTextProps> = ({ 
  text, 
  className = '', 
  delay = 0, 
  speed = 50 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        const interval = setInterval(() => {
          setCurrentIndex((prev) => {
            if (prev < text.length) {
              setDisplayText(text.slice(0, prev + 1));
              return prev + 1;
            }
            clearInterval(interval);
            return prev;
          });
        }, speed);

        return () => clearInterval(interval);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, speed, currentIndex]);

  return (
    <motion.span 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay / 1000 }}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-[1em] bg-current ml-1"
      />
    </motion.span>
  );
};

export default TypingText;
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ children, className = '', id }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // モバイルではアニメーションを軽量化
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? [50, -50] : [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      id={id}
      className={`relative ${className}`}
      style={{ 
        y: isMobile ? 0 : y, // モバイルではY軸アニメーションを無効化
        opacity 
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollSection;
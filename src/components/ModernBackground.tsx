import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingElement: React.FC<{ 
  delay: number; 
  duration: number; 
  className: string;
  children?: React.ReactNode;
}> = ({ delay, duration, className, children }) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0],
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

const GradientOrb: React.FC<{ 
  size: string; 
  color1: string; 
  color2: string; 
  position: string;
  blur: string;
}> = ({ size, color1, color2, position, blur }) => {
  return (
    <div 
      className={`absolute ${size} ${position} ${blur} rounded-full opacity-30`}
      style={{
        background: `radial-gradient(circle, ${color1} 0%, ${color2} 100%)`,
      }}
    />
  );
};

const Particle: React.FC<{ 
  x: number; 
  y: number; 
  color: string;
  size: number;
}> = ({ x, y, color, size }) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: color,
      }}
      animate={{
        y: [0, -100, 0],
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeOut"
      }}
    />
  );
};

const ModernBackground: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, color: string, size: number}>>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    // パーティクル生成（モバイルでは無効）
    const generateParticle = () => {
      if (isMobile) return;
      
      const newParticle = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: ['#60a5fa', '#a78bfa', '#22d3ee', '#34d399'][Math.floor(Math.random() * 4)],
        size: Math.random() * 3 + 1,
      };
      
      setParticles(prev => [...prev.slice(-10), newParticle]); // 最新10個のみ保持
      
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 3000);
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    // パーティクル生成インターバル（モバイルでは無効）
    const particleInterval = !isMobile ? setInterval(generateParticle, 2000) : null;

    return () => {
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      window.removeEventListener('resize', checkMobile);
      if (particleInterval) {
        clearInterval(particleInterval);
      }
    };
  }, [isMobile]);
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* メイン背景グラデーション */}
      <div 
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        }}
      />

      {/* インタラクティブグラデーションオーバーレイ（モバイルでは無効） */}
      {!isMobile && (
        <div 
          className="absolute inset-0 opacity-20 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
              #60a5fa 0%, 
              #3b82f6 25%, 
              transparent 50%)`,
          }}
        />
      )}

      {/* フローティンググラデーションオーブ */}
      <GradientOrb 
        size="w-96 h-96" 
        color1="#60a5fa" 
        color2="#3b82f6" 
        position="-top-48 -left-48" 
        blur="blur-2xl"
      />
      
      <GradientOrb 
        size="w-80 h-80" 
        color1="#a78bfa" 
        color2="#8b5cf6" 
        position="-bottom-40 -right-40" 
        blur="blur-2xl"
      />
      
      <GradientOrb 
        size="w-64 h-64" 
        color1="#22d3ee" 
        color2="#06b6d4" 
        position="top-1/2 left-1/4" 
        blur="blur-xl"
      />

      {/* フローティング要素（モバイルでは軽量化） */}
      {!isMobile && (
        <>
          <FloatingElement 
            delay={0} 
            duration={8} 
            className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full opacity-60"
          />
          
          <FloatingElement 
            delay={2} 
            duration={6} 
            className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full opacity-40"
          />
          
          <FloatingElement 
            delay={4} 
            duration={10} 
            className="absolute bottom-32 left-1/3 w-3 h-3 bg-cyan-400 rounded-full opacity-50"
          />
        </>
      )}

      {/* ガラスモーフィズムカード */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 rounded-2xl backdrop-blur-lg"
        style={{
          background: 'rgba(255, 255, 255, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/4 w-24 h-24 rounded-xl backdrop-blur-lg"
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
        }}
        animate={{
          rotate: [0, -360],
          y: [0, -10, 0],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* ニューモーフィズム要素（モバイルでは無効） */}
      {!isMobile && (
        <motion.div
          className="absolute top-1/3 left-1/6 w-20 h-20 rounded-2xl"
          style={{
            background: 'linear-gradient(145deg, #ffffff, #e2e8f0)',
            boxShadow: '20px 20px 60px #cbd5e1, -20px -20px 60px #ffffff',
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}

      {/* パーティクル効果（モバイルでは無効） */}
      {!isMobile && particles.map(particle => (
        <Particle
          key={particle.id}
          x={particle.x}
          y={particle.y}
          color={particle.color}
          size={particle.size}
        />
      ))}

      {/* グリッドパターン */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* ノイズテクスチャ */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* マイクロインタラクション - マウスフォロワー（モバイルでは無効） */}
      {!isMobile && (
        <motion.div
          className="fixed pointer-events-none z-10"
          style={{
            left: mousePosition.x + '%',
            top: mousePosition.y + '%',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
        >
          <div 
            className="w-4 h-4 rounded-full opacity-30"
            style={{
              background: '#60a5fa',
              boxShadow: '0 0 20px #60a5fa',
            }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default ModernBackground;
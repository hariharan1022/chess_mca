import { motion, useScroll, useTransform } from 'framer-motion';

export function ChessBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 5000], [0, 500]);
  const y2 = useTransform(scrollY, [0, 5000], [0, -500]);

  const pieces = [
    { icon: '♔', size: 'text-9xl', top: '10%', left: '5%', duration: 15, delay: 0 },
    { icon: '♕', size: 'text-8xl', top: '30%', right: '10%', duration: 20, delay: 2 },
    { icon: '♖', size: 'text-7xl', top: '50%', left: '15%', duration: 18, delay: 1 },
    { icon: '♗', size: 'text-6xl', top: '70%', right: '15%', duration: 25, delay: 3 },
    { icon: '♘', size: 'text-8xl', top: '85%', left: '8%', duration: 22, delay: 4 },
    { icon: '♙', size: 'text-5xl', top: '45%', right: '5%', duration: 12, delay: 5 },
    { icon: '♔', size: 'text-9xl', top: '120%', right: '20%', duration: 30, delay: 0 },
    { icon: '♘', size: 'text-8xl', top: '150%', left: '10%', duration: 25, delay: 2 },
    { icon: '♖', size: 'text-7xl', top: '180%', right: '5%', duration: 28, delay: 1 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-slate-50">
      {/* Dynamic Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{ 
          backgroundImage: `linear-gradient(#000 0.5px, transparent 0.5px), linear-gradient(90deg, #000 0.5px, transparent 0.5px)`,
          backgroundSize: '100px 100px'
        }}
      />
      
      {/* Floating Interactive Pieces */}
      <motion.div style={{ y: y1 }} className="absolute inset-0">
         {pieces.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ 
                opacity: 0.04, 
                scale: 1,
                y: [0, -40, 0],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: p.duration, 
                repeat: Infinity, 
                delay: p.delay,
                ease: "easeInOut"
              }}
              style={{ top: p.top, left: p.left, right: p.right }}
              className={`absolute ${p.size} font-serif text-slate-900 select-none`}
            >
              {p.icon}
            </motion.div>
         ))}
      </motion.div>

      {/* Counter-motion pieces for depth */}
      <motion.div style={{ y: y2 }} className="absolute inset-0">
          <motion.div
            animate={{ 
              opacity: [0.02, 0.05, 0.02],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-[25%] left-[40%] text-[20rem] font-black text-primary opacity-[0.02] rotate-12 select-none"
          >
            ♔
          </motion.div>
          <motion.div
            animate={{ 
              opacity: [0.01, 0.03, 0.01],
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, delay: 5 }}
            className="absolute top-[60%] right-[30%] text-[15rem] font-black text-slate-900 opacity-[0.01] -rotate-12 select-none"
          >
            ♘
          </motion.div>
      </motion.div>

      {/* Interactive Cursor Glow Reaction (Subtle) */}
      <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient from-primary/5 via-transparent to-transparent opacity-30" />
    </div>
  );
}

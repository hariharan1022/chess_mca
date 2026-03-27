import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

import banner1 from '@/assets/background_banner/banner1.jpeg';
import banner2 from '@/assets/background_banner/banner2.jpeg';
import banner3 from '@/assets/background_banner/banner3.jpeg';
import banner4 from '@/assets/background_banner/banner4.jpeg';
import banner5 from '@/assets/background_banner/banner5.jpg';

const slides = [
  {
    image: banner1,
    title: "MASTER THE ART OF MOVE",
    desc: "Unlock the genius within. Professional chess training from expert trainers for every aspiring District and State champion."
  },
  {
    image: banner2,
    title: "ELITE MENTORSHIP",
    desc: "Learn from FIDE rated trainers and local masters who have shaped over 500+ successful players."
  },
  {
    image: banner3,
    title: "STATE COMMUNITY",
    desc: "Join a vibrant network of chess-playing kids across Tamil Nadu and participate in weekly elite tournaments."
  },
  {
    image: banner4,
    title: "DISTRICT CHAMPIONS",
    desc: "Our roadmap is specifically designed to take you from a curious beginner to a decorated district champion."
  },
  {
    image: banner5,
    title: "MODERN ARENA",
    desc: "Experience world-class facilities at our dual branches in Pudukkottai, designed for the ultimate focus."
  }
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative h-[45vh] sm:h-[60vh] md:h-screen min-h-[320px] md:min-h-[600px] w-full overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={slides[current].image} 
              alt="Hero Slide" 
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]" />
          </div>

          {/* Centered Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-1 md:gap-2 px-3 md:px-6 py-1.5 md:py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white text-[8px] md:text-sm font-black tracking-[0.2em] md:tracking-[0.4em] mb-3 md:mb-8 uppercase"
            >
              <Trophy size={12} className="text-primary md:w-4 md:h-4" />
              MASTERS CHESS ACADEMY
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-4xl md:text-8xl lg:text-9xl font-black text-white leading-[1] md:leading-[0.9] uppercase italic tracking-tighter mb-4 md:mb-10 max-w-[90%] md:max-w-5xl"
            >
              {slides[current].title.split(' ').map((word, i) => (
                <span key={i} className={i % 2 !== 0 ? "text-primary italic" : ""}>{word} </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-[10px] sm:text-lg md:text-2xl text-white/80 font-medium italic mb-5 md:mb-12 max-w-[85%] md:max-w-3xl leading-snug md:leading-relaxed"
            >
              {slides[current].desc}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
            >
              <Button 
                onClick={() => window.open('https://wa.me/9629399085?text=Hello! I would like to join the elite at Master Chess Academy.', '_blank')}
                className="bg-primary text-white hover:bg-white hover:text-slate-900 px-6 md:px-20 py-4 md:py-10 rounded-full font-black uppercase tracking-[0.1em] md:tracking-[0.3em] shadow-[0_15px_30px_rgba(180,138,13,0.3)] text-[10px] md:text-xl group"
              >
                Enroll Now
                <ArrowRight className="ml-2 md:ml-4 w-3 h-3 md:w-6 md:h-6 group-hover:translate-x-3 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Scaled for Mobile */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 pointer-events-none flex items-center justify-between px-2 md:px-12">
        <button 
          onClick={prevSlide}
          className="pointer-events-auto w-8 h-8 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary border border-white/10 text-white transition-all backdrop-blur-md group"
        >
          <ChevronLeft className="w-4 h-4 md:w-10 md:h-10 group-active:scale-95" />
        </button>
        <button 
          onClick={nextSlide}
          className="pointer-events-auto w-8 h-8 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary border border-white/10 text-white transition-all backdrop-blur-md group"
        >
          <ChevronRight className="w-4 h-4 md:w-10 md:h-10 group-active:scale-95" />
        </button>
      </div>

      {/* Pagination Indicators - Positioned Closer */}
      <div className="absolute bottom-4 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-500 rounded-full ${
              current === i ? "w-6 md:w-20 bg-primary h-1 md:h-3" : "w-1.5 md:w-3 bg-white/30 h-1 md:h-3 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center pt-8 md:pt-20 overflow-hidden bg-white">
      
      {/* Cinematic Full Color Background Banner */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: y1 }} className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=2500" 
            alt="Chess Arena Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
        </motion.div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 md:mb-8 p-1.5 px-4 md:px-6 bg-primary rounded-full text-white text-[10px] sm:text-xs md:text-sm font-black tracking-[0.2em] md:tracking-[0.4em] inline-flex items-center gap-2 md:gap-3 uppercase shadow-lg shadow-primary/20"
          >
            <Trophy className="w-3 h-3 md:w-4 md:h-4" />
            MASTER CHESS ACADEMY
          </motion.div>

          <motion.h1 
            className="text-5xl sm:text-6xl md:text-9xl font-black text-slate-900 leading-[0.95] md:leading-[0.85] mb-6 md:mb-10 uppercase italic tracking-tighter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            MASTER THE <br />
            <span className="text-primary italic font-black">ART OF</span> MOVE
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-700 max-w-2xl font-medium mb-10 md:mb-16 leading-relaxed italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Unlock the genius within. Professional chess training from expert trainers for every aspiring District and State champion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto"
          >
            <Button size="lg" className="w-full sm:w-auto px-12 md:px-16 group bg-primary text-white hover:bg-slate-900 transition-all font-black uppercase tracking-widest py-7 md:py-8 shadow-2xl shadow-primary/30 border-none rounded-2xl">
              START JOURNEY <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Link to="/courses" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full bg-white/40 backdrop-blur-md border border-slate-200 text-slate-900 hover:bg-slate-900 hover:text-white font-black tracking-widest uppercase py-7 md:py-8 px-12 md:px-16 transition-all rounded-2xl shadow-xl">
                VIEW COURSES
              </Button>
            </Link>
          </motion.div>

          {/* Clean Stats Row */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 sm:gap-8 md:gap-16 pt-8 md:pt-12 border-t border-slate-100 w-full">
            {[
              { label: "Champions", val: "10K+" },
              { label: "Trainers", val: "100+" },
              { label: "Districts", val: "25+" },
              { label: "Rating", val: "4.9/5" }
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center md:items-start">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 italic tracking-tighter leading-none mb-1 md:mb-2">
                  <span className="text-primary">{s.val}</span>
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-slate-400 font-bold uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}

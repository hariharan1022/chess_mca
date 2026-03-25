import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, ChevronRight, HelpCircle, Lightbulb, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const puzzles = [
  { id: 1, type: "Tactical", level: "Intermediate", hint: "Look for a discovered attack.", board: "r1bqk2r/pppp1ppp/2n2n2/4p3/1bB1P3/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 1" },
  { id: 2, type: "Endgame", level: "Advanced", hint: "Opposition is key here.", board: "8/8/8/4k3/4P3/4K3/8/8 w - - 0 1" }
];

export function Puzzles() {
  const [activePuzzle, setActivePuzzle] = useState(0);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-wider leading-tight"
            >
              SHARPEN YOUR <br />
              <span className="text-primary italic">INSTINCTS</span>
            </motion.h2>
            <p className="text-slate-400 text-lg leading-relaxed font-light mb-10">
              Daily puzzles curated by experts to test your tactical vision and strategic depth. Solve to earn points and climb the global ladder.
            </p>
            
            <div className="space-y-6 mb-12">
               {puzzles.map((p, i) => (
                 <button 
                  key={p.id}
                  onClick={() => setActivePuzzle(i)}
                  className={`w-full text-left glass-card p-6 border-white/5 flex items-center justify-between transition-all ${activePuzzle === i ? 'border-primary/40 bg-primary/5' : 'hover:bg-white/5'}`}
                 >
                    <div className="flex items-center gap-6">
                       <div className={`p-4 rounded-xl ${activePuzzle === i ? 'bg-primary text-background' : 'bg-white/5 text-slate-500'} transition-colors`}>
                          <Brain className="w-6 h-6" />
                       </div>
                       <div>
                          <div className="text-sm font-black text-white uppercase tracking-tighter italic">{p.type} Challenge #{p.id}</div>
                          <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{p.level} • 250 Points</div>
                       </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 transition-transform ${activePuzzle === i ? 'text-primary translate-x-1' : 'text-slate-600'}`} />
                 </button>
               ))}
            </div>

            <Button variant="outline" className="text-white border-white/10 hover:border-primary gap-3 uppercase font-black tracking-widest py-6 px-10">
               <Zap className="w-5 h-5 text-primary" /> VIEW ALL PUZZLES
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full opacity-30" />
            
            <div className="glass-card p-8 border-white/10 relative z-10 bg-black/40 shadow-2xl overflow-hidden group">
               <div className="aspect-square bg-white/5 rounded-xl mb-8 flex items-center justify-center relative overflow-hidden">
                  {/* Mock Chess Board */}
                  <div className="grid grid-cols-8 grid-rows-8 w-full h-full opacity-20">
                     {Array.from({ length: 64 }).map((_, i) => (
                       <div key={i} className={(Math.floor(i / 8) + i) % 2 === 0 ? 'bg-white/10' : ''} />
                     ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center flex-col gap-6">
                     <span className="text-8xl select-none group-hover:scale-110 transition-transform duration-700">♞</span>
                     <div className="text-[10px] font-black text-primary uppercase tracking-[0.4em] animate-pulse">Your Move</div>
                  </div>
               </div>
               
               <div className="flex items-start gap-5 p-6 bg-white/5 rounded-xl border border-white/10">
                  <div className="p-3 bg-primary/20 rounded-lg text-primary shrink-0"><Lightbulb className="w-5 h-5" /></div>
                  <div>
                     <h4 className="text-xs font-black text-white uppercase tracking-widest mb-1">STRATEGIC HINT</h4>
                     <p className="text-xs text-slate-500 leading-relaxed font-light">{puzzles[activePuzzle].hint}</p>
                  </div>
               </div>
               
               <div className="mt-8 flex gap-4">
                  <Button variant="gold" className="flex-grow font-black uppercase tracking-widest shadow-lg shadow-primary/20">SUBMIT MOVE</Button>
                  <Button variant="outline" size="icon" className="shrink-0 border-white/10"><HelpCircle className="w-5 h-5" /></Button>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, ChevronRight, Lightbulb, Zap } from 'lucide-react';
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
            
             <div className="glass-card p-4 md:p-8 border-white/10 relative z-10 bg-black/40 shadow-2xl overflow-hidden group rounded-[2.5rem]">
               <div className="aspect-square bg-slate-900 rounded-3xl mb-8 flex items-center justify-center relative overflow-hidden border border-white/5">
                  <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-40">
                     {Array.from({ length: 64 }).map((_, i) => (
                       <div key={i} className={(Math.floor(i / 8) + i) % 2 === 0 ? 'bg-slate-700' : 'bg-slate-800'} />
                     ))}
                  </div>
                  <div className="absolute inset-0 z-10 flex items-center justify-center flex-col gap-4 text-center p-10 bg-black/60 backdrop-blur-[2px]">
                     <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4 border border-primary/30 animate-pulse">
                        <Zap className="w-10 h-10 text-primary" />
                     </div>
                     <h4 className="text-2xl font-black text-white italic tracking-tighter uppercase mb-2">INTERACTIVE BOARD <br /> <span className="text-primary italic font-black">COMING SOON</span></h4>
                     <p className="text-xs text-slate-400 font-bold uppercase tracking-widest max-w-[200px]">We are building the ultimate daily puzzle experience for our students.</p>
                     
                     <div className="mt-8 px-6 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full shadow-lg shadow-primary/20">
                        BETA IN PROGRESS
                     </div>
                  </div>
               </div>
               
               <div className="flex items-start gap-5 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="p-3 bg-primary/20 rounded-lg text-primary shrink-0"><Lightbulb className="w-5 h-5" /></div>
                  <div>
                     <h4 className="text-xs font-black text-white uppercase tracking-widest mb-1">STRATEGIC HIGHLIGHT</h4>
                     <p className="text-xs text-slate-500 leading-relaxed font-light italic">"Chess is 99% tactics. Our upcoming engine will analyze your moves in real-time."</p>
                  </div>
               </div>
               
               <div className="mt-8 flex gap-4">
                  <Button disabled className="flex-grow font-black uppercase tracking-widest bg-slate-800 text-slate-500 border-none opacity-50">BOARD LOCKED</Button>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

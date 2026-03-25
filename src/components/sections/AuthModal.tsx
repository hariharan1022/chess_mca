import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, User, ChevronRight, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function AuthModal({ isOpen, onClose, initialView = 'login' }: { isOpen: boolean, onClose: () => void, initialView?: 'login' | 'signup' }) {
  const [view, setView] = useState(initialView);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md glass-card p-10 border-white/10 shadow-2xl overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent" />
             
             <button onClick={onClose} className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors">
               <X size={20} />
             </button>

             <div className="text-center mb-10">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-primary/20">
                   <User className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">
                  {view === 'login' ? 'STRATEGIC LOGIN' : 'JOIN THE ACADEMY'}
                </h3>
                <p className="text-slate-500 text-sm mt-2 font-light">
                  {view === 'login' ? 'Resume your journey to grandmastery.' : 'Start your professional chess roadmap today.'}
                </p>
             </div>

             <form className="space-y-6">
                {view === 'signup' && (
                  <div className="space-y-2 group">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1 group-focus-within:text-primary transition-colors">
                      Your Identity
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 w-4 h-4" />
                      <input type="text" placeholder="Future Champion Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3.5 text-white text-sm focus:outline-none focus:border-primary transition-all" />
                    </div>
                  </div>
                )}
                
                <div className="space-y-2 group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1 group-focus-within:text-primary transition-colors">
                    Intelligence Portal
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 w-4 h-4" />
                    <input type="email" placeholder="grandmaster@chess.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3.5 text-white text-sm focus:outline-none focus:border-primary transition-all" />
                  </div>
                </div>

                <div className="space-y-2 group">
                  <div className="flex items-center justify-between ml-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-focus-within:text-primary transition-colors">
                      Secure Code
                    </label>
                    {view === 'login' && <a href="#" className="text-[10px] text-primary hover:underline font-bold tracking-widest uppercase">Lost Strategy?</a>}
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 w-4 h-4" />
                    <input type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-xl px-12 py-3.5 text-white text-sm focus:outline-none focus:border-primary transition-all" />
                  </div>
                </div>

                <Button variant="gold" className="w-full py-4 font-black uppercase tracking-widest shadow-lg shadow-primary/20">
                  {view === 'login' ? 'ACCESS DASHBOARD' : 'CREATE ACCOUNT'} <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
             </form>

             <div className="mt-8">
                <div className="flex items-center gap-4 mb-8">
                   <div className="h-px bg-white/5 flex-grow" />
                   <span className="text-[10px] text-slate-600 font-bold tracking-[0.2em]">OR SYNC WITH</span>
                   <div className="h-px bg-white/5 flex-grow" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                   <button className="glass-card py-3 border-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-2 group">
                      <Github className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                      <span className="text-[10px] font-black text-slate-400 group-hover:text-white uppercase tracking-widest">GITHUB</span>
                   </button>
                   <button className="glass-card py-3 border-white/5 hover:border-white/20 transition-all flex items-center justify-center gap-2 group">
                      <Twitter className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                      <span className="text-[10px] font-black text-slate-400 group-hover:text-white uppercase tracking-widest">TWITTER</span>
                   </button>
                </div>
             </div>

             <div className="mt-10 text-center">
                <button
                  onClick={() => setView(view === 'login' ? 'signup' : 'login')}
                  className="text-[10px] font-black text-slate-500 hover:text-primary transition-colors uppercase tracking-[0.2em]"
                >
                  {view === 'login' ? "NEW TO THE ARENA? CREATE PROFILE" : "ALREADY A MEMBER? MISSION CONTROL"}
                </button>
             </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

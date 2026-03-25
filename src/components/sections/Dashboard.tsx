import { motion } from 'framer-motion';
import { Trophy, Clock, Target, Calendar, Play, Settings, Bell, MessageSquare, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function DashboardMockup() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-7xl mx-auto glass-card min-h-[700px] border-white/5 shadow-2xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_50px_-10px_rgba(212,175,55,0.1)]">
          {/* Sidebar */}
          <div className="w-full md:w-[280px] bg-white/5 border-r border-white/5 p-8 flex flex-col gap-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-black text-background text-xl">M</div>
              <span className="text-xl font-black text-white tracking-widest uppercase italic">MISSION CONTROL</span>
            </div>
            
            <nav className="flex flex-col gap-4">
              {[
                { icon: <Target className="w-5 h-5"/>, name: "Strategy Dashboard", active: true },
                { icon: <Play className="w-5 h-5"/>, name: "Your Courses" },
                { icon: <Calendar className="w-5 h-5"/>, name: "Tournament Table" },
                { icon: <Trophy className="w-5 h-5"/>, name: "Global Ranking" },
                { icon: <MessageSquare className="w-5 h-5"/>, name: "Mentor Chat" },
                { icon: <Settings className="w-5 h-5"/>, name: "Settings" }
              ].map(item => (
                <a 
                  key={item.name}
                  href="#" 
                  className={`flex items-center gap-4 py-3.5 px-6 rounded-xl text-sm font-bold uppercase tracking-widest transition-all ${item.active ? 'bg-primary/20 text-primary border border-primary/20' : 'text-slate-500 hover:text-white hover:bg-white/5 hover:translate-x-1'}`}
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
            </nav>
            
            <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-black text-primary border border-primary/20">JD</div>
               <div>
                  <div className="text-xs font-black text-white uppercase tracking-tighter">JOHN DOE</div>
                  <div className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">ELITE ASPIRANT</div>
               </div>
            </div>
          </div>

          {/* Main Panel */}
          <div className="flex-grow p-10 bg-black/40">
            <header className="flex items-center justify-between mb-12">
               <div>
                  <h2 className="text-3xl font-black text-white uppercase tracking-tighter">ELITE <span className="text-primary italic">PROGRESS</span></h2>
                  <p className="text-sm text-slate-500 font-light mt-1">Current status: <span className="text-primary font-bold">READY FOR CHECKMATE</span></p>
               </div>
               <div className="flex items-center gap-4">
                  <button className="w-10 h-10 glass-card rounded-lg flex items-center justify-center text-slate-500 border-white/10 hover:border-primary/50 transition-colors relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-primary rounded-full border-2 border-background" />
                  </button>
                  <Button size="sm" variant="gold" className="px-6 font-black uppercase tracking-widest text-xs py-1.5 shadow-lg shadow-primary/20">LIVE CLASS</Button>
               </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
               {[
                 { icon: <Trophy className="w-6 h-6 text-primary" />, label: "FIDE RATING", val: "1420", change: "+42" },
                 { icon: <Clock className="w-6 h-6 text-sky-400" />, label: "HOURS PLAYED", val: "128", change: "Top 5%" },
                 { icon: <Target className="w-6 h-6 text-purple-400" />, label: "WIN RATE", val: "68%", change: "Steady" }
               ].map(stat => (
                 <div key={stat.label} className="glass-card p-6 border-white/5 border-b-2 border-b-primary/40 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center gap-4 mb-4">
                       <div className="p-3 bg-white/5 rounded-xl border border-white/5 group-hover:scale-110 transition-transform">{stat.icon}</div>
                       <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</span>
                    </div>
                    <div className="flex items-end justify-between">
                       <div className="text-3xl font-black text-white tracking-tighter italic">{stat.val}</div>
                       <div className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${stat.change.includes('+') ? 'bg-emerald-500/20 text-emerald-400' : 'bg-primary/20 text-primary'}`}>
                          {stat.change}
                       </div>
                    </div>
                 </div>
               ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               <div className="flex flex-col gap-6">
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white italic">ACTIVE TRACKS</h4>
                  <div className="glass-card p-6 border-white/5 group relative overflow-hidden">
                     <div className="absolute top-0 left-0 h-full w-1.5 bg-primary/40 group-hover:w-3 transition-all" />
                     <div className="flex justify-between items-start mb-6">
                        <div>
                           <div className="text-md font-black text-white uppercase tracking-tighter italic mb-1">STRATEGIC INTERMEDIATE</div>
                           <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">12 / 24 SESSIONS COMPLETED</p>
                        </div>
                        <Button size="icon" variant="ghost" className="rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-background"><Play className="w-4 h-4 fill-current" /></Button>
                     </div>
                     <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-2">
                        <motion.div initial={{ width: 0 }} animate={{ width: '50%' }} className="h-full bg-primary" />
                     </div>
                     <div className="flex justify-between text-[10px] font-bold text-slate-600 tracking-widest">
                        <span>50% COMPLETE</span>
                        <span>NEXT: MIDDLE GAME MASTERY</span>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col gap-6">
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white italic">UPCOMING LIVE CLASSES</h4>
                  <div className="space-y-4">
                     {[
                       { event: "Tactical Defense workshop", time: "Today, 18:00", mentor: "GM Srinath" },
                       { event: "Opening Theory Live", time: "Tomorrow, 10:00", mentor: "GM Alexey" }
                     ].map(c => (
                       <div key={c.event} className="glass-card p-5 border-white/5 flex items-center justify-between group hover:bg-white/5 transition-colors border-l-2 border-l-primary/20 hover:border-l-primary">
                          <div className="flex items-center gap-5">
                             <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center font-bold text-slate-500 uppercase text-[10px] group-hover:text-primary transition-colors">LIVE</div>
                             <div>
                                <div className="text-sm font-black text-white uppercase tracking-tighter italic">{c.event}</div>
                                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{c.mentor} • {c.time}</div>
                             </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-primary transition-colors" />
                       </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual background details */}
      <div className="absolute left-[-200px] top-[-200px] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute right-[-200px] bottom-[-200px] w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[150px] -z-10" />
    </section>
  );
}

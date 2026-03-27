import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Courses } from './components/sections/Courses'
import { Trainers } from './components/sections/Trainers'
import { Puzzles } from './components/sections/Puzzles'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/layout/Footer'
import { Gallery } from './components/sections/Gallery'
import { GraduationCap, Trophy, MessageSquare, Globe, Target, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function StudentsPride() {
  const students = [
    { name: "Aryan Singh", achievement: "National U-12 Champion", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" },
    { name: "Riya Sharma", achievement: "FIDE Master Candidate", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
    { name: "Kevin Mathews", achievement: "State Rapid Champion", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" }
  ];

  const duplicatedStudents = [...students, ...students, ...students];

  return (
    <section className="py-24 md:py-40 relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(#b48a0d 0.5px, transparent 0.5px)`, backgroundSize: '24px 24px' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>
      
      <div className="container px-6 mx-auto relative z-10 text-center mb-16 md:mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter italic mb-6 leading-none">
            OUR STUDENTS <span className="text-primary">OUR PRIDE</span>
          </h2>
          <p className="text-slate-900 max-w-2xl mx-auto font-medium text-lg md:text-xl italic">
            Meet the <span className="text-primary font-bold">champions</span> who have conquered the District and State stages through Master Chess Academy roadmap.
          </p>
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden -mx-6 md:-mx-12">
        <motion.div 
          className="flex gap-8 md:gap-12 px-6"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedStudents.map((student, i) => (
            <div 
              key={i}
              className="w-[280px] md:w-[400px] shrink-0 p-8 md:p-12 border border-slate-100 text-center group bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] rounded-[3rem] hover:shadow-[0_40px_100px_-20px_rgba(180,138,13,0.15)] transition-all duration-500 hover:border-primary/20"
            >
              <div className="w-28 h-28 md:w-40 md:h-40 mx-auto mb-8 rounded-[2rem] overflow-hidden border-4 border-slate-50 group-hover:border-primary/20 transition-all duration-500 shadow-xl group-hover:scale-105">
                 <img src={student.img} alt={student.name} className="w-full h-full object-cover transition-all duration-700" />
              </div>
              <h4 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-widest mb-2 italic">{student.name}</h4>
              <div className="w-10 h-1 bg-primary/20 mx-auto mb-4 group-hover:w-20 transition-all duration-500" />
              <p className="text-primary text-xs md:text-sm font-black uppercase tracking-widest italic">{student.achievement}</p>
            </div>
          ))}
        </motion.div>
        
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}

function CoursesShort() {
  const courses = [
    { title: "Beginner", icon: <GraduationCap size={40} />, desc: "Layout foundations correctly.", accent: "01" },
    { title: "Intermediate", icon: <Target size={40} />, desc: "Strategic depth & tactics.", accent: "02" },
    { title: "Advance", icon: <Trophy size={40} />, desc: "Grandmaster level techniques.", accent: "03" }
  ];

  const duplicatedCourses = [...courses, ...courses, ...courses];

  return (
    <section className="py-24 md:py-40 relative overflow-hidden bg-white">
       <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
       
       {/* More visible Chess Pattern */}
       <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(#b48a0d 0.8px, transparent 0.8px)`, backgroundSize: '32px 32px' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
       </div>
      <div className="container px-6 mx-auto relative z-10 mb-16 md:mb-24 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter italic mb-6 leading-none">
            OUR <span className="text-primary italic">COURSES</span>
          </h2>
          <p className="text-slate-900 max-w-2xl mx-auto font-medium text-lg md:text-xl italic">Choose your level and start your <span className="text-primary font-bold">professional chess training</span> based on District and State standards.</p>
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden -mx-6 md:-mx-12">
        <motion.div 
          className="flex gap-8 md:gap-12 px-6"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            },
          }}
        >
          {duplicatedCourses.map((c, i) => (
            <div 
              key={i} 
              className="w-[280px] md:w-[450px] shrink-0 p-10 md:p-14 border border-slate-100 group hover:border-primary/30 transition-all duration-500 text-center bg-white shadow-xl hover:shadow-2xl rounded-[3rem] relative"
            >
              <div className="absolute top-8 right-10 text-4xl md:text-6xl font-black text-slate-50 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity">{c.accent}</div>
              <div className="text-primary w-16 h-16 mx-auto mb-8 flex items-center justify-center bg-slate-50 group-hover:bg-primary group-hover:text-white rounded-[1.5rem] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                {c.icon}
              </div>
              <h4 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter italic mb-4">{c.title}</h4>
              <p className="text-slate-500 mb-8 font-medium text-xs md:text-sm uppercase tracking-[0.2em] whitespace-normal">{c.desc}</p>
              <Link to="/courses" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-primary hover:text-slate-900 transition-colors group/link">
                View Details 
                <div className="w-6 h-px bg-primary group-hover/link:w-10 transition-all" />
              </Link>
            </div>
          ))}
        </motion.div>

        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}

function StateCommunity() {
  return (
    <section className="py-20 md:py-40 relative overflow-hidden bg-white">
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-7xl font-black text-slate-900 italic uppercase tracking-tighter mb-8 md:mb-12 leading-[0.9]">
              Chess Kids <br /> 
              <span className="text-primary italic">State</span> <br /> 
              Community
            </h2>
            <p className="text-slate-900 text-lg md:text-xl font-light mb-12 md:mb-16 max-w-xl italic border-l-4 border-primary/20 pl-8">
              Building <span className="text-primary font-bold">State and District champions</span> starts with a strong foundation and a shared passion for the game.
            </p>
            
            <div className="space-y-8 md:space-y-10">
              {[
                { icon: <MessageSquare />, text: "Peer learning during weekly community sessions.", brand: "MASTERS CHESS ACADEMY" },
                { icon: <Globe />, text: "Interact and develop friendships with kids from different districts across Tamil Nadu.", brand: "MASTERS CHESS ACADEMY" },
                { icon: <Trophy />, text: "Develop a competitive spirit with our weekly practice tournaments.", brand: "MASTERS CHESS ACADEMY" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.15), duration: 0.8 }}
                  className="flex gap-6 md:gap-8 group"
                >
                   <div className="w-14 h-14 md:w-16 md:h-16 bg-white border border-slate-100 flex items-center justify-center shrink-0 group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl rounded-2xl group-hover:scale-110 group-hover:rotate-6 text-primary">
                      {item.icon}
                   </div>
                   <div className="flex flex-col justify-center">
                      <div className="text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.3em] mb-1.5 opacity-60">{item.brand}</div>
                      <p className="text-slate-900 font-bold uppercase tracking-widest text-sm md:text-base italic leading-snug">{item.text}</p>
                   </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square max-w-md mx-auto w-full lg:max-w-none group"
          >
             <div className="absolute inset-x-0 -bottom-12 -top-12 bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/10 transition-colors duration-700" />
             <div className="relative z-10 w-full h-full p-3 bg-white border border-slate-100 rounded-[3rem] shadow-2xl overflow-hidden transform group-hover:translate-y-[-10px] transition-transform duration-700">
               <img 
                 src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1000" 
                 alt="Community" 
                 className="w-full h-full object-cover rounded-[2.5rem] group-hover:scale-105 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             </div>
             
             {/* Floating Achievement Badge */}
             <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -top-6 -right-6 md:-top-10 md:-right-10 z-20 bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-slate-100 flex flex-col items-center"
             >
                <div className="text-primary font-black text-3xl md:text-4xl italic mb-1">500+</div>
                <div className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">STATE PLAYERS</div>
             </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ParentReviews() {
  const reviews = [
    {
      name: "Vignesh Narayanan",
      text: "Pudukkotai best chess academy ..low fees and best personal carrying for per children....",
      rating: 5,
      date: "2 years ago"
    },
    {
      name: "Mathan Inthama",
      text: "One of the best coaching centre in Pudukkottai.",
      rating: 5,
      date: "2 years ago"
    },
    {
      name: "Harish B",
      text: "Good place to learn for beginners 👍♟️♟️👍",
      rating: 5,
      date: "2 years ago"
    },
    {
      name: "SJR Ahilan",
      text: "Very good teaching 🙏",
      rating: 5,
      date: "2 years ago"
    },
    {
      name: "Vetri Printers",
      text: "Amazing coaching at Master Chess Academy.",
      rating: 5,
      date: "2 years ago"
    },
    {
      name: "Palani R",
      text: "Nice coaching and excellent environment.",
      rating: 5,
      date: "1 year ago"
    },
    {
      name: "Sethuraman Balasubramaniyan",
      text: "Nice place to learn chess. Highly recommended.",
      rating: 5,
      date: "2 years ago"
    },
    {
      name: "Ranjith Rosan",
      text: "Best academy in Pudukkottai for aspiring champions.",
      rating: 5,
      date: "7 months ago"
    },
    {
      name: "Ashwin",
      text: "Professional trainers and friendly atmosphere.",
      rating: 4,
      date: "10 months ago"
    },
    {
      name: "Bharathi N",
      text: "Great experience for my children. Best in class.",
      rating: 5,
      date: "1 year ago"
    }
  ];

  // Double the reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section className="py-10 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12 italic">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic mb-4">
              PARENTS <span className="text-primary italic">TRUST</span>
            </h2>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={cn("w-4 h-4 fill-current", i === 4 ? "opacity-30" : "")} />
                ))}
              </div>
              <span className="text-sm font-black text-slate-900">4.7 / 5.0</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">(12 GOOGLE REVIEWS)</span>
            </div>
          </div>
          <button 
            onClick={() => window.open('https://www.google.com/search?q=Master+Chess+Academy+Pudukkottai+reviews', '_blank')}
            className="px-8 py-3 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-primary transition-all shadow-sm"
          >
            VIEW ALL REVIEWS
          </button>
        </div>
      </div>

      <div className="relative flex">
        <motion.div 
          className="flex gap-4 md:gap-8 whitespace-nowrap"
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedReviews.map((rev, i) => (
            <div
              key={i}
              className="w-[300px] md:w-[400px] inline-block p-6 md:p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all select-none"
            >
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xs md:text-sm">
                  {rev.name[0]}
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-tight">{rev.name}</h4>
                  <p className="text-[8px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">GOOGLE REVIEW</p>
                </div>
              </div>
              <div className="flex text-primary mb-3 md:mb-4 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={cn("w-3 h-3 fill-current", i >= rev.rating ? "opacity-20" : "")} />
                ))}
              </div>
              <p className="text-slate-600 text-[11px] md:text-sm leading-relaxed font-medium italic whitespace-normal mb-4 md:mb-6">
                "{rev.text}"
              </p>
              <span className="text-[8px] md:text-[10px] font-bold text-slate-300 uppercase tracking-widest">{rev.date}</span>
            </div>
          ))}
        </motion.div>
        
        {/* Gradients Overlay for Smooth Transitions */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}

function HeroStats() {
  const stats = [
    { label: "Elite Students", val: "100+", sub: "Certified by District" },
    { label: "Expert Coaches", val: "10+", sub: "FIDE Rated Trainers" },
    { label: "Pudukkottai", val: "2 Branches", sub: "Town & Campus" },
    { label: "Trust Rating", val: "4.7/5", sub: "Based on Google Reviews" }
  ];

  return (
    <section className="py-12 md:py-20 bg-white relative z-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-10 bg-slate-50 border border-slate-100 rounded-[2rem] text-center group hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <motion.div 
                whileInView={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                className="text-3xl md:text-5xl font-black text-slate-900 mb-2 italic tracking-tighter"
              >
                {s.val}
              </motion.div>
              <div className="text-[10px] md:text-xs font-black text-primary uppercase tracking-widest mb-1">{s.label}</div>
              <div className="text-[8px] md:text-[10px] text-slate-400 font-bold uppercase tracking-tight">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <HeroStats />
      <StateCommunity />
      <ParentReviews />
      <StudentsPride />
      <CoursesShort />
      
      <div className="container mx-auto px-6 py-24 md:py-60 text-center relative overflow-hidden group">
         {/* Deep Glow Effect */}
         <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 bg-primary/10 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
         
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative z-10"
         >
           <h4 className="text-[10px] md:text-sm font-black text-primary uppercase tracking-[0.5em] mb-4 md:mb-8 italic">READY TO START YOUR CLIMB?</h4>
           <motion.h2 
             whileInView={{ scale: [1, 1.02, 1] }}
             transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
             className="text-3xl md:text-8xl font-black text-slate-900 leading-tight uppercase tracking-tighter mb-8 md:mb-16 italic"
           >
             THE <span className="text-primary italic">BOARD</span> IS <br />
             WAITING FOR <span className="text-primary italic">YOU</span>
           </motion.h2>
           
           <motion.div 
             className="flex flex-col items-center gap-6"
           >
              <button 
                className="w-full sm:w-auto bg-primary hover:bg-slate-900 text-white text-lg md:text-2xl font-black px-12 md:px-20 py-5 md:py-6 rounded-2xl shadow-2xl shadow-primary/30 transition-all hover:scale-105 active:scale-95 uppercase tracking-widest border-none relative overflow-hidden group/btn"
                onClick={() => window.open('https://wa.me/9629399085?text=Hello! I would like to join the elite at Master Chess Academy.', '_blank')}
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]" />
                <span className="relative z-10">JOIN THE ELITE PLAYER ARENA</span>
              </button>
              <div className="flex items-center gap-4 text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
                <div className="w-8 h-px bg-slate-200" />
                Limited seats for 2025 Summer Sessions
                <div className="w-8 h-px bg-slate-200" />
              </div>
           </motion.div>
         </motion.div>
      </div>
    </>
  );
}

const BackgroundEffect = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-[0.03]">
      {/* Dynamic Grid Pattern */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #475569 1px, transparent 1px), linear-gradient(to bottom, #475569 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} 
      />
      
      {/* Floating Chess Silhouettes */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
             key={i}
             initial={{ 
               x: (i * 20) + "%", 
               y: Math.random() * 100 + "%",
               rotate: Math.random() * 360,
               scale: Math.random() * 0.5 + 0.3
             }}
             animate={{ 
               y: ["0%", "100%", "0%"],
               rotate: 360,
               x: [(i * 20) + "%", (i * 20 + 10) + "%", (i * 20) + "%"]
             }}
             transition={{ 
               duration: 40 + Math.random() * 40, 
               repeat: Infinity, 
               ease: "linear" 
             }}
             className="absolute text-slate-900 filter blur-[2px]"
          >
             <Trophy size={300} strokeWidth={0.5} />
          </motion.div>
        ))}
      </div>
      
      {/* Radial Gradient for Focus */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-white/10" />
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[80px]" />
    </div>
  );
};

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="w-full origin-top"
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white text-foreground flex flex-col items-center overflow-x-hidden selection:bg-primary/20 selection:text-primary relative">
      <ScrollToTop />
      <Navbar />
      <BackgroundEffect />
      
      <main className="flex-grow w-full pt-16 md:pt-20">
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/courses" element={<PageWrapper><Courses /></PageWrapper>} />
            <Route path="/trainers" element={<PageWrapper><Trainers /></PageWrapper>} />
            <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
            <Route path="/puzzles" element={<PageWrapper><Puzzles /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

export default App;

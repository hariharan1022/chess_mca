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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function StudentsPride() {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=2000" 
            alt="Students Pride" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/90" />
      </div>
      <div className="container px-6 mx-auto relative z-10 text-center">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter italic mb-3 md:mb-4 leading-none">
            OUR STUDENTS <span className="text-primary">OUR PRIDE</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light text-sm md:text-base">
            Meet the champions who have conquered the District and State stages through Master Chess Academy roadmap.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { name: "Aryan Singh", achievement: "National U-12 Champion", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400" },
            { name: "Riya Sharma", achievement: "FIDE Master Candidate", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
            { name: "Kevin Mathews", achievement: "State Rapid Champion", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" }
          ].map((student, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-6 md:p-8 border-slate-200/50 text-center group bg-white shadow-xl rounded-3xl"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors">
                 <img src={student.img} alt={student.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-slate-900 uppercase tracking-widest">{student.name}</h4>
              <p className="text-primary text-[10px] md:text-sm font-black mt-1 uppercase tracking-tighter italic">{student.achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoursesShort() {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
       <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586165368502-1bad197a0469?auto=format&fit=crop&q=80&w=2000" 
            alt="Chess Courses" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/90" />
      </div>
      <div className="container px-6 mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter italic mb-3 md:mb-4 leading-none">
            OUR <span className="text-primary">COURSES</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-light text-sm md:text-base">Choose your level and start your professional chess training based on District and State standards.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: "Beginner", icon: <GraduationCap />, desc: "Layout foundations correctly." },
            { title: "Intermediate", icon: <Target />, desc: "Strategic depth & tactics." },
            { title: "Advance", icon: <Trophy />, desc: "Grandmaster level techniques." }
          ].map((c, i) => (
            <div key={i} className="glass-card p-8 md:p-10 border-slate-200/50 group hover:border-primary/40 transition-all text-center bg-white shadow-lg rounded-3xl">
              <div className="text-primary w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 md:mb-6 opacity-60 group-hover:scale-110 transition-transform">{c.icon}</div>
              <h4 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tighter italic">{c.title}</h4>
              <p className="text-slate-500 mt-2 md:mt-4 font-light text-[10px] md:text-sm uppercase tracking-widest">{c.desc}</p>
              <Link to="/courses" className="mt-6 md:mt-8 inline-block text-[10px] md:text-[10px] font-black uppercase tracking-[0.2em] text-primary hover:text-slate-900 transition-colors">View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StateCommunity() {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=2000" 
            alt="State Community" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/95" />
      </div>
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <div>
            <h2 className="text-2xl md:text-6xl font-black text-slate-900 italic uppercase tracking-tighter mb-6 md:mb-10 leading-[0.9]">
              Introduce your kid to the <br className="hidden md:block" /> 
              <span className="text-primary">State community</span> <br className="hidden md:block" /> 
              of chess-playing kids
            </h2>
            <p className="text-slate-500 text-base md:text-lg font-light mb-8 md:mb-12">Building State and District champions starts with a strong foundation and a shared passion.</p>
            
            <div className="space-y-6 md:space-y-8">
              {[
                { icon: <MessageSquare />, text: "Peer learning during weekly community sessions.", brand: "MASTER CHESS ACADEMY" },
                { icon: <Globe />, text: "Interact and develop friendships with kids from different districts across Tamil Nadu.", brand: "MASTER CHESS ACADEMY" },
                { icon: <Trophy />, text: "Develop a competitive spirit with our weekly practice tournaments.", brand: "MASTER CHESS ACADEMY" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-6 group">
                   <div className="w-10 h-10 md:w-14 md:h-14 glass-card border-slate-200/50 flex items-center justify-center shrink-0 group-hover:border-primary transition-colors text-primary bg-white shadow-md rounded-2xl">
                      {item.icon}
                   </div>
                   <div className="flex flex-col justify-center">
                      <div className="text-[8px] md:text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">{item.brand}</div>
                      <p className="text-slate-900 font-bold uppercase tracking-widest text-xs md:text-sm italic">{item.text}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-square max-w-sm mx-auto w-full lg:max-w-none">
             <div className="absolute inset-0 bg-primary/10 blur-[80px] md:blur-[120px] rounded-full" />
             <img 
               src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1000" 
               alt="Community" 
               className="w-full h-full object-cover rounded-3xl relative z-10 border border-slate-200 shadow-2xl"
             />
          </div>
        </div>
      </div>
    </section>
  );
}

function ParentReviews() {
  const reviews = [
    {
      name: "Senthil Kumar",
      role: "Parent",
      text: "One of the best chess academies in Pudukkottai. My son drastically improved his concentration and logical thinking. The trainers are very professional.",
      rating: 5,
      date: "2 months ago"
    },
    {
      name: "Priya Rajesh",
      role: "Parent",
      text: "Master Chess Academy is excellent for beginners. The curriculum is well-structured and the regular testing keeps students motivated. Highly recommended!",
      rating: 5,
      date: "1 month ago"
    },
    {
      name: "Anand V",
      role: "Parent",
      text: "Friendly coaches and competitive environment. Both Kamarajapuram and Periyar Nagar branches are well-maintained. Best academy for District level players.",
      rating: 5,
      date: "3 months ago"
    }
  ];

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic mb-4">
              PARENTS <span className="text-primary italic">TRUST</span>
            </h2>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-black text-slate-900">4.4 / 5.0</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">(GOOGLE REVIEWS)</span>
            </div>
          </div>
          <button 
            onClick={() => window.open('https://www.google.com/search?q=Master+Chess+Academy+Pudukkottai+reviews', '_blank')}
            className="px-8 py-3 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase tracking-widest hover:border-primary transition-all shadow-sm"
          >
            VIEW ALL REVIEWS
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black">
                  {rev.name[0]}
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">{rev.name}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{rev.role}</p>
                </div>
              </div>
              <div className="flex text-primary mb-4 gap-0.5">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed font-medium italic mb-6 group-hover:text-slate-900 transition-colors">
                "{rev.text}"
              </p>
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{rev.date}</span>
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
      <StateCommunity />
      <ParentReviews />
      <StudentsPride />
      <CoursesShort />
      
      <div className="container mx-auto px-6 py-10 md:py-40 text-center relative overflow-hidden group bg-white">
         <div className="absolute inset-0 bg-primary/5 blur-[100px] md:blur-[150px] opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
         <motion.h2 
           whileInView={{ scale: [0.95, 1, 0.95] }}
           transition={{ repeat: Infinity, duration: 4 }}
           className="text-2xl md:text-7xl font-black text-slate-900 leading-tight uppercase tracking-tighter mb-6 md:mb-12 italic"
         >
           THE <span className="text-primary italic">BOARD</span> IS <br className="hidden md:block" />
           WAITING FOR <span className="text-primary italic">YOU</span>
         </motion.h2>
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center"
         >
            <button 
              className="w-full sm:w-auto bg-primary hover:bg-accent text-white text-lg md:text-xl font-black px-10 md:px-12 py-4 md:py-5 rounded-2xl shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 uppercase tracking-widest border-none"
              onClick={() => window.open('https://wa.me/9629399085?text=Hello! I would like to join the elite at Master Chess Academy.', '_blank')}
            >
              JOIN THE ELITE
            </button>
            <div className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] md:text-sm">
              Limited intake for 2024 sessions
            </div>
         </motion.div>
      </div>
    </>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full"
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

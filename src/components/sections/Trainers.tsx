import { motion } from 'framer-motion';
import { Twitter, Linkedin, Users, Trophy, Award, Target, Star, Shield } from 'lucide-react';
import parthibanImg from '@/assets/masters/parthiban.jpeg';

import bgBanner2 from '@/assets/background_banner/digital-art-style-abstract-chess-pieces_1.jpg';

const trainers = [
  {
    name: "Master Parthiban V",
    role: "Founder & Chief Mentor",
    bio: "Arena FIDE Master, FIDE National Instructor (2025), and Senior National Arbiter (AICF). Established the academy to nurture grandmasters through tactical calculation and elite arbitration. With over a decade of national-level tournament experience, he bridges the gap between raw talent and competitive success.",
    image: parthibanImg,
    experience: "12+ Years",
    specialization: "Advanced Calculation & Elite Strategy",
    students: "100+",
    fide: "1933"
  },
  {
    name: "Anjali Sreekumar",
    role: "Woman Grandmaster (WGM)",
    bio: "Passionate about youth development and middle-game tactics. Known for her aggressive playing style and pedagogical clarity. As a WGM, she focuses on high-pressure psychological preparation and complex pawn structures used in international circuit play.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    experience: "8+ Years",
    specialization: "Psychological Preparation & Middle Game",
    students: "100+",
    fide: "2300+"
  },
  {
    name: "Rahul Bhardwaj",
    role: "International Master (IM)",
    bio: "Strategy lead specializing in endgame techniques and prophylactic thinking. Helped hundreds reach FIDE ratings of 2000+. His teaching philosophy centers on pattern recognition and the art of positional grinding, preparing students for the rigors of multi-day tournaments.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    experience: "10+ Years",
    specialization: "Endgame Mastery & Positional Play",
    students: "100+",
    fide: "2450+"
  },
  {
    name: "Elena Volkov",
    role: "FIDE Trainer",
    bio: "Lead tactics expert specialized in calculation speed and pattern recognition. Develops our daily puzzle curriculum based on elite Soviet training methods. She specializes in the 'Candidate Move' method, ensuring students never miss a tactical opportunity.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400",
    experience: "9+ Years",
    specialization: "Tactical Sharpness & Pattern Memory",
    students: "100+",
    fide: "2200+"
  }
];

export function Trainers() {
  return (
    <section id="trainers" className="flex flex-col bg-white overflow-hidden">
      {/* Cinematic Header for Trainers */}
      <section className="min-h-[30vh] md:min-h-screen flex flex-col items-center justify-center pt-24 md:pt-40 text-center relative overflow-hidden bg-white">
        {/* Full-Color Backdrop Banner - Unique Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={bgBanner2} 
            alt="Chess Academy Trainers" 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
        </div>

        <div className="container px-6 mx-auto relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block p-4 bg-primary/20 rounded-2xl mb-8 border border-primary/30 shadow-2xl shadow-primary/20 bg-white/20 backdrop-blur-md"
            >
               <Award className="w-10 h-10 md:w-14 md:h-14 text-primary" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-9xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic leading-none"
            >
              OUR ELITE <span className="text-primary italic font-black">MENTORS</span>
            </motion.h2>
            <p className="text-slate-700 max-w-2xl font-medium text-xl md:text-2xl px-4 md:px-0 leading-relaxed italic">
              Train with the world's best. Our mentors are expert mentors and certified pedagogical experts dedicated to your growth.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-6 mx-auto py-24 md:py-40 relative z-10">

        <div className="flex flex-col gap-24 md:gap-32">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
               {/* Large Profile Image Area */}
               <div className="w-full lg:w-5/12 relative">
                  <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-8 border-white bg-white">
                     <img src={trainer.image} className="w-full h-auto max-h-[500px] object-cover" />
                  </div>
                  <div className="absolute -bottom-8 -left-8 w-1/2 h-1/2 bg-primary/10 rounded-[3.5rem] -z-10 blur-2xl" />
                  <div className="absolute -top-8 -right-8 w-1/3 h-1/3 bg-slate-100 rounded-[3.5rem] -z-10 blur-xl" />
                  
                  {/* Floating Socials */}
                  <div className="absolute top-1/2 -right-6 -translate-y-1/2 flex flex-col gap-4 z-20">
                    <a href="#" className="p-4 bg-white/90 hover:bg-primary hover:text-white rounded-2xl shadow-xl backdrop-blur-md transition-all border border-slate-100"><Twitter className="w-5 h-5" /></a>
                    <a href="#" className="p-4 bg-white/90 hover:bg-primary hover:text-white rounded-2xl shadow-xl backdrop-blur-md transition-all border border-slate-100"><Linkedin className="w-5 h-5" /></a>
                  </div>
               </div>

               {/* Robust Detail Content */}
               <div className="w-full lg:w-7/12 text-left">
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-full text-primary font-black uppercase tracking-widest text-xs md:text-sm mb-6 border border-primary/20">
                    <Star className="w-4 h-4" /> ELITE FACULTY
                  </div>
                  
                  <h3 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter italic leading-none mb-4">
                    {trainer.name}
                  </h3>
                  
                  <h4 className="text-xl md:text-2xl font-bold text-slate-800 uppercase tracking-widest mb-8 leading-relaxed italic border-b border-primary/20 pb-4">
                    {trainer.role}
                  </h4>
                  
                  <p className="text-slate-600 font-light leading-relaxed mb-10 text-base md:text-lg italic border-l-4 border-primary pl-6 sm:pl-8 py-2 bg-slate-50 rounded-r-2xl">
                    {trainer.bio}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                     <div className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-400">
                           <Target className="w-5 h-5 text-primary" />
                           <span className="text-xs font-black uppercase tracking-widest">Specialization</span>
                        </div>
                        <p className="text-slate-700 font-bold uppercase tracking-tight italic">{trainer.specialization}</p>
                     </div>
                     <div className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-400">
                           <Shield className="w-5 h-5 text-primary" />
                           <span className="text-xs font-black uppercase tracking-widest">Professional Exp</span>
                        </div>
                        <p className="text-slate-700 font-bold uppercase tracking-tight italic">{trainer.experience}</p>
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                     <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center">
                        <Users className="w-6 h-6 text-primary mb-3" />
                        <span className="text-4xl font-black italic mb-1 text-slate-900">{trainer.students}</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">ACTIVE STUDENTS</span>
                     </div>
                     <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col items-center">
                        <Trophy className="w-6 h-6 text-primary mb-3" />
                        <span className="text-4xl font-black italic mb-1 text-slate-900">{trainer.fide}</span>
                        <span className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">FIDE RATING</span>
                     </div>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

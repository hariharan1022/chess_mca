import { motion } from 'framer-motion';
import { BookOpen, Target, CheckCircle2, Shield, Star, Award, Zap, Brain, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import bgBanner1 from '@/assets/background banner/abstract-chess-pieces-digital-art-style.jpg';
import bgBanner2 from '@/assets/background banner/digital-art-style-abstract-chess-pieces (1).jpg';
import bgBanner3 from '@/assets/background banner/digital-art-style-abstract-chess-pieces.jpg';

const coursesData = [
  {
    id: 'beginner',
    title: 'PHASE 01: THE FOUNDATION',
    level: 'Beginner',
    tagline: 'MASTER THE BASICS & PIECE HARMONY',
    description: 'Perfect for those starting their journey. We cover piece movement, board notation, and fundamental winning patterns to turn you from a spectator into a player.',
    about: 'The beginner course is meticulously designed to build a rock-solid foundation. You will learn the history of chess, the movement of every piece, and the basic principles that govern the opening, middle, and end games.',
    curriculum: [
      'Algebraic Notation: The language of chess',
      'The Golden Rules of Openings',
      'Basic Checkmate Patterns (Back-rank, Scholar\'smate)',
      'Special Moves: Castling, En Passant, and Promotion',
      'Fundamental Tactics: Pins, Forks, and Skewers'
    ],
    outcomes: [
      'Confidently play a full game of tournament chess',
      'Recognize and execute basic tactical combinations',
      'Understand the value and potential of each piece',
      'Basic ability to analyze your own games'
    ],
    whatYouLearn: [
      'How to control the center of the board',
      'Developing your minor pieces efficiently',
      'King safety and castling timing',
      'The importance of piece activity'
    ],
    whyChooseUs: 'Our beginner program uses interactive visualized tools that make the complex rules of chess intuitive and fun for kids and adults alike.',
    image: bgBanner1,
    stats: { puzzles: '500+', duration: '3 Months', students: '5000+' }
  },
  {
    id: 'intermediate',
    title: 'PHASE 02: STRATEGIC DEPTH',
    level: 'Intermediate',
    tagline: 'MASTER TACTICS & POSITIONAL UNDERSTANDING',
    description: 'For players who know the rules but want to understand the "Why" behind the moves. Focus on middle-game strategies and complex tactics.',
    about: 'At this stage, we transition from "how to move" to "how to plan". You will dive deep into pawn structures, piece coordination, and the psychological aspects of competition.',
    curriculum: [
      'Advanced Tactical Patterns (Discovered attacks, Deflections)',
      'Pawn Structure Strategy: Isloated, Doubled, and Passed pawns',
      'Rook Endgame Fundamentals: Lucena & Philidor positions',
      'Minor Piece Coordination: Bishop vs Knight battles',
      'Calculation & Visualization: Thinking 3-5 moves ahead'
    ],
    outcomes: [
      'Develop complex winning plans in the middle game',
      'Master essential endgame techniques to convert wins',
      'Significantly improve your FIDE or online rating',
      'Ability to evaluate any position accurately'
    ],
    whatYouLearn: [
      'Prophylaxis: Anticipating your opponent\'s plans',
      'Exploiting weak squares and colors',
      'The art of the exchange: When and what to trade',
      'Managing time and nerves in tournaments'
    ],
    whyChooseUs: 'We use Grandmaster-level analysis software and personalized feedback to identify and fix your persistent tactical blindspots.',
    image: bgBanner2,
    stats: { puzzles: '2000+', duration: '6 Months', students: '3500+' }
  },
  {
    id: 'advanced',
    title: 'PHASE 03: GRANDMASTER PREPARATION',
    level: 'Advanced',
    tagline: 'MASTER THE ELITE TECHNIQUES & OPENING PREP',
    description: 'The highest level of preparation. Intensive training with 4000+ puzzles, deep engine analysis, and direct games against titled masters.',
    about: 'Our Advanced program is a rigorous "bootcamp" for aspiring professionals. We provide you with the same training tools and opening repertoires used by the world\'s top 1% of players.',
    curriculum: [
      'Elite Opening Prep: Building a bulletproof repertoire',
      'Complex Theoretical Endgames: The art of the draw and the win',
      'Advanced Positional Sacrifices & Dynamics',
      'Engine Analysis: Using Stockfish & Leela like a pro',
      'Tournament Preparation: Physical and mental peak performance'
    ],
    outcomes: [
      'Ready to compete in international FIDE tournaments',
      'Mastery over modern opening theories and variations',
      'Ability to calculate deep, branching variations with precision',
      'Development of a signature playing style'
    ],
    whatYouLearn: [
      'How to prep against specific opponents',
      'Analyzing top-level GM games in real-time',
      'High-pressure decision making',
      'Physical stamina for multi-hour games'
    ],
    whyChooseUs: 'Direct access to FIDE Grandmasters and International Masters. You aren\'t just a student; you are an apprentice to masters.',
    image: bgBanner3,
    stats: { puzzles: '4000+', duration: '1 Year', students: '1500+' }
  }
];

const GlobalBenefits = () => (
  <section className="py-12 md:py-24 bg-black text-white relative overflow-hidden">
     <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgBanner2})` }}
     >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/80" />
     </div>
     <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
        <h2 className="text-xl md:text-4xl font-black uppercase italic tracking-tighter mb-8 md:mb-12 leading-tight text-white">BENEFITS OF <span className="text-primary italic">PLAYING CHESS</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
           {[
             { icon: <Brain className="w-6 h-6 md:w-8 md:h-8" />, title: "Boost IQ", desc: "Scientific studies show chess increases cognitive power and memory." },
             { icon: <Target className="w-6 h-6 md:w-8 md:h-8" />, title: "Better Focus", desc: "Intense concentration leads to better academic and professional performance." },
             { icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />, title: "Problem Solving", desc: "Strategic thinking translates to real-world decision-making skills." },
             { icon: <Star className="w-6 h-6 md:w-8 md:h-8" />, title: "Confidence", desc: "Mastering a complex art builds self-belief and sportsmanship." }
           ].map((b, i) => (
             <div key={i} className="p-6 md:p-8 border border-white/10 bg-black/30 backdrop-blur-md rounded-2xl group hover:border-primary/50 transition-all flex flex-col items-center shadow-2xl">
                <div className="text-primary mb-4 md:mb-5 transition-transform group-hover:scale-110">{b.icon}</div>
                <h4 className="text-base md:text-lg font-bold mb-2 md:mb-3 uppercase italic tracking-widest text-white">{b.title}</h4>
                <p className="text-slate-300 text-xs md:text-sm font-light leading-relaxed">{b.desc}</p>
             </div>
           ))}
        </div>
     </div>
  </section>
);

export function Courses() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* Header */}
      <section className="min-h-[85vh] md:min-h-screen flex flex-col items-center justify-center pt-24 md:pt-40 text-center relative overflow-hidden bg-white">
        {/* Full-Color Backdrop Banner - Unique Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={bgBanner3} 
            alt="Chess Academy Roadmap" 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
        </div>

        <div className="container px-6 mx-auto relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-2 bg-primary/10 rounded-full text-primary font-black uppercase tracking-[0.3em] text-[10px] md:text-sm mb-8 md:mb-12 border border-primary/20 shadow-sm shadow-primary/10 bg-white/20 backdrop-blur-md"
            >
              <Shield className="w-4 h-4" /> ACADEMIC ROADMAP
            </motion.div>
            <h1 className="text-5xl md:text-9xl font-black text-slate-900 uppercase tracking-tighter italic mb-8 md:mb-12 leading-none">
              THE <span className="text-primary italic font-black">ACADEMY</span> <br /> ROADMAP
            </h1>
            <p className="text-slate-600 max-w-2xl font-medium text-xl md:text-2xl italic leading-relaxed tracking-wide px-4 md:px-0">
              Our data-driven curriculum, refined over 6 years and trusted by <span className="text-primary font-bold italic">100+ students</span>, is presented below in three comprehensive phases.
            </p>
          </div>
        </div>
      </section>

      {/* Course Sections - Scroll One by One */}
      {coursesData.map((course, index) => (
        <section key={course.id} className={`py-12 md:py-32 relative overflow-hidden ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div 
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${course.image})` }}
          />
          
          <div className="container px-6 mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
              
              {/* Left Column: Title & Key Stats */}
              <div className="lg:col-span-5">
                <div className="text-xs font-black text-primary tracking-[0.4em] mb-3 md:mb-4 uppercase">{course.level} LEVEL {course.id === 'advanced' && "★"}</div>
                <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-slate-900 uppercase italic tracking-tighter leading-none mb-6 md:mb-10">
                  {course.title}
                </h2>
                <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl mb-8 md:mb-12">
                   <h4 className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-widest mb-4 md:mb-6 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary" /> ABOUT THIS COURSE
                   </h4>
                   <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed italic mb-6 md:mb-8">"{course.about}"</p>
                   <div className="grid grid-cols-3 gap-2 md:gap-4 border-t border-slate-100 pt-6 md:pt-8 text-center sm:text-left">
                      <div>
                         <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">PUZZLES</div>
                         <div className="text-base md:text-xl font-black text-slate-900 uppercase italic">{course.stats.puzzles}</div>
                      </div>
                      <div>
                         <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">DURATION</div>
                         <div className="text-base md:text-xl font-black text-slate-900 uppercase italic">{course.stats.duration}</div>
                      </div>
                      <div>
                         <div className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">GRADUATES</div>
                         <div className="text-base md:text-xl font-black text-slate-900 uppercase italic">{course.stats.students}</div>
                      </div>
                   </div>
                </div>

                <div className="p-6 md:p-8 bg-primary/10 rounded-[2rem] md:rounded-[2.5rem] border border-primary/20">
                   <h4 className="text-xs md:text-sm font-black text-primary uppercase tracking-widest mb-3 md:mb-4 flex items-center gap-2 italic">
                      <Shield className="w-4 h-4" /> WHY CHOOSE US
                   </h4>
                   <p className="text-slate-900 font-bold leading-relaxed tracking-wide italic text-sm sm:text-base">"{course.whyChooseUs}"</p>
                </div>
              </div>

              {/* Right Column: Detailed Sections */}
              <div className="lg:col-span-7 mt-8 lg:mt-0 space-y-10 md:space-y-16">
                 
                 {/* Curriculum */}
                 <div>
                    <h4 className="text-[10px] md:text-xs font-black text-slate-900 uppercase tracking-[0.3em] mb-6 md:mb-8 flex items-center gap-4">
                       <BookOpen className="w-3 h-3 md:w-4 md:h-4 text-primary" /> 
                       DETAILED CURRICULUM
                       <div className="h-px bg-slate-200 flex-grow" />
                    </h4>
                    <div className="space-y-3 md:space-y-4">
                      {course.curriculum.map((c, i) => (
                        <div key={i} className="flex gap-3 md:gap-4 p-4 md:p-5 bg-white border border-slate-100 rounded-xl md:rounded-2xl shadow-sm hover:border-primary/30 transition-all hover:translate-x-2">
                           <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 opacity-40" />
                           <span className="text-slate-700 font-medium text-xs md:text-base leading-tight">{c}</span>
                        </div>
                      ))}
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                     {/* Learning Outcomes */}
                     <div>
                        <h4 className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-[0.3em] mb-4 md:mb-6 flex items-center gap-3">
                           <Award className="w-4 h-4 text-primary" /> LEARNING OUTCOMES
                        </h4>
                        <ul className="space-y-3 md:space-y-4">
                          {course.outcomes.map((o, i) => (
                            <li key={i} className="flex items-start gap-2 md:gap-3 text-slate-500 text-xs md:text-sm italic font-light leading-snug">
                               <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                               {o}
                            </li>
                          ))}
                        </ul>
                     </div>

                     {/* What You Will Learn */}
                     <div>
                        <h4 className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-[0.3em] mb-4 md:mb-6 flex items-center gap-3">
                           <Brain className="w-4 h-4 text-primary" /> MASTER LESSONS
                        </h4>
                        <ul className="space-y-3 md:space-y-4">
                          {course.whatYouLearn.map((w, i) => (
                            <li key={i} className="flex items-start gap-2 md:gap-3 text-slate-500 text-xs md:text-sm italic font-light leading-snug">
                               <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-slate-900 mt-1.5 shrink-0" />
                               {w}
                            </li>
                          ))}
                        </ul>
                     </div>
                 </div>

                 {/* CTA */}
                 <div className="pt-8 md:pt-10 flex flex-col sm:flex-row items-center justify-between gap-6 md:gap-8 border-t border-slate-100">
                    <div className="text-center sm:text-left">
                        <div className="text-[8px] md:text-[10px] font-black text-slate-400 mb-1 uppercase tracking-widest">STARTING AT</div>
                        <div className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">$299<span className="text-xs md:text-sm font-bold text-slate-400 italic">/PROGRAM</span></div>
                    </div>
                    <Button size="lg" className="w-full sm:w-auto px-10 md:px-12 py-5 md:py-7 rounded-2xl bg-slate-900 hover:bg-primary text-white font-black uppercase tracking-widest shadow-2xl shadow-slate-200 transition-all group text-xs md:text-sm">
                       ENROLL IN {course.level} <TrendingUp className="ml-2 md:ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                 </div>

              </div>

            </div>
          </div>
        </section>
      ))}

      <GlobalBenefits />

      {/* Final Global CTA */}
      <section className="py-20 md:py-40 bg-white text-center">
         <div className="container px-6 mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter mb-8 md:mb-12 italic leading-tight">THE BOARD <span className="text-primary italic">IS WAITING</span></h2>
            <Button size="lg" variant="gold" className="px-10 md:px-16 py-6 md:py-10 rounded-full text-sm md:text-xl font-black uppercase tracking-[0.2em] md:tracking-[0.3em] shadow-2xl bg-primary text-white border-none hover:scale-105 active:scale-95 transition-all w-full sm:w-auto">
               JOIN MASTER CHESS ACADEMY
            </Button>
         </div>
      </section>
    </div>
  );
}

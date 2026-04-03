import { motion } from 'framer-motion';
import { BookOpen, Shield, Award, Zap, Brain, TrendingUp, Target, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const coursesData = [
  {
    id: 'beginner',
    title: 'PHASE 01: THE FOUNDATION',
    level: 'Beginner',
    tagline: 'MASTER THE BASICS & PIECE HARMONY',
    description: 'Perfect for those starting their journey. We cover piece movement, board notation, and fundamental winning patterns to turn you from a spectator into a player.',
    about: 'The beginner course is meticulously designed to build a rock-solid foundation. You will learn the history of chess, the movement of every piece, and the basic principles that govern the opening, middle, and end games.',
    curriculum: [
      'Introduction about Board, pieces, Values, Arrangements, and movements & Captures',
      'Notation and Score sheet writing practice',
      'Attacks and their importance',
      'Defence and its importance',
      'Checks & How to get out from checks',
      'About Checkmate',
      'Special moves (Castling, Enpassant & Pawn promotion and their rules)',
      'General rules to follow while playing',
      'Stalemate and their conditions',
      'Mate in One (Simple, Medium & Hard level)',
      'Basic Checkmate (King + Queen Vs. King)',
      'Basic Checkmate (King + Double Rook Vs. King)',
      'Taking Free pieces or Unprotected pieces',
      'Composing Mate in one (Add the missing piece to checkmate)',
      'Opening principles and example',
      'Pin',
      'Knight fork',
      'Double attack',
      'Discovered attack, Discovered Check & Double check',
      'Playing Practice and Analyses',
      'Reviews and Doubts Clearance'
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
    stats: { puzzles: '', duration: '', students: '100+' }
  },
  {
    id: 'intermediate',
    title: 'PHASE 02: STRATEGIC DEPTH',
    level: 'Intermediate',
    tagline: 'MASTER TACTICS & POSITIONAL UNDERSTANDING',
    description: 'For players who know the rules but want to understand the "Why" behind the moves. Focus on middle-game strategies and complex tactics.',
    about: 'At this stage, we transition from "how to move" to "how to plan". You will dive deep into pawn structures, piece coordination, and the psychological aspects of competition.',
    curriculum: [
      'King + Rook Vs. King Checkmate',
      'Mate in 2 (Simple & Medium)',
      'Pin-Level 2',
      'Knight Fork-Level 2',
      'Double attack - Level 2',
      'Discovered attack, Discovered Check & Double Check-Level 2',
      'Back-rank weakness',
      'Skewer Attack',
      'Removing the Guard',
      'Clearance',
      'Decoy',
      'Deflection',
      'Windmill',
      'X-Ray Attack',
      'Opening principles Instructive games and tips to follow in first 15 moves',
      'Direct Defence and Indirect defence',
      'Attack & Counterattack',
      'How to defend against Mate',
      'Types of Draws',
      'Simplification',
      'Playing Practice and Analyses',
      'Reviews and Doubts Clearance'
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
    stats: { puzzles: '2000+', duration: '', students: '100+' }
  },
  {
    id: 'advanced',
    title: 'PHASE 03: NATIONAL PREPARATION',
    level: 'Advanced',
    tagline: 'MASTER THE ELITE TECHNIQUES & OPENING PREP',
    description: 'The highest level of preparation. Intensive training with 4000+ puzzles, deep engine analysis, and games against expert mentors.',
    about: 'Our Advanced program is a rigorous "bootcamp" for aspiring professionals. We provide you with the same training tools and opening repertoires used by the world\'s top 1% of players.',
    curriculum: [
      'Double Bishop Mate',
      'Bishop and Knight Mate',
      'Must know theoretical endgames',
      'Various Checkmate Patterns (37 Patterns)',
      'Clearance -Level 2',
      'Decoy -Level 2',
      'Deflection-level 2',
      'Zugzuwang',
      'X-Ray Attack-Level 2',
      'Elimination of defence',
      'Development & Improvement of pieces after Opening Phase (Instructive Games)',
      'Pawn Storming (Instructive games)',
      'Attacking the Castled and Un-castled King',
      'Hunting the King (Instructive games & Positions)',
      'Weak pawns',
      'Pawn Majorities',
      'Combinations and Practical studies for Calculations',
      'Manoeuvring and regrouping the pieces',
      'Opening Preparations for both sides white and Black (King pawn & Queen pawn)'
    ],
    outcomes: [
      'Ready to compete in National level tournaments',
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
    whyChooseUs: 'Direct access to expert National level trainers. You aren\'t just a student; you are an apprentice to true experts.',
    stats: { puzzles: '4000+', duration: '', students: '100+' }
  }
];

const CoursesHero = () => (
  <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-gradient-to-b from-slate-50 to-white text-center px-6 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-8 shadow-sm">
          <BookOpen className="w-3 h-3 text-primary" /> Master Chess Academy
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-slate-900 uppercase tracking-tighter italic leading-none mb-6">
          OUR <span className="text-primary italic">CURRICULUM</span>
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-xl font-medium leading-relaxed">
          Structured, meticulous programs designed to take you from a curious beginner to a tournament-ready champion.
        </p>
      </motion.div>
    </div>
  </section>
);

const StateBenefits = () => (
  <section className="py-20 md:py-32 bg-white relative overflow-hidden">
     <div className="container px-6 mx-auto relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-12 md:mb-20 leading-tight text-slate-900"
        >
          BENEFITS OF <span className="text-primary italic">PLAYING CHESS</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center text-slate-900">
           {[
             { icon: <Brain />, title: "Boost IQ", desc: "Scientific studies show chess increases cognitive power and memory." },
             { icon: <Target />, title: "Better Focus", desc: "Intense concentration leads to better academic and professional performance." },
             { icon: <Shield />, title: "Problem Solving", desc: "Strategic thinking translates to real-world decision-making skills." },
             { icon: <Star />, title: "Confidence", desc: "Mastering a complex art builds self-belief and sportsmanship." }
           ].map((b, i) => (
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               key={i} 
               className="p-8 md:p-10 bg-slate-50 border border-slate-100 rounded-[2rem] group hover:border-primary/50 transition-all flex flex-col items-center hover:-translate-y-2 hover:bg-white hover:shadow-2xl"
             >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 transition-transform group-hover:scale-110 group-hover:bg-primary group-hover:text-white">
                  {b.icon}
                </div>
                <h4 className="text-lg font-black mb-3 uppercase italic tracking-widest text-slate-900">{b.title}</h4>
                <p className="text-slate-500 text-sm font-medium leading-relaxed italic">{b.desc}</p>
             </motion.div>
           ))}
        </div>
     </div>
  </section>
);

export function Courses() {
  return (
    <div className="flex flex-col bg-slate-50 overflow-hidden">
      <CoursesHero />
      
      {/* Course Sections */}
      <div className="space-y-16 md:space-y-32 py-16 md:py-24">
        {coursesData.map((course) => (
          <motion.section 
            key={course.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="container px-6 mx-auto"
          >
            <div className="bg-white rounded-[2rem] md:rounded-[3rem] border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden transition-shadow duration-500">
               
               {/* Header Area */}
               <div className="p-8 md:p-12 lg:p-16 bg-white border-b border-slate-100 flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-center relative">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 text-primary font-bold uppercase tracking-widest text-[10px] md:text-xs rounded mb-4">
                      {course.id === 'advanced' && <Award className="w-3 h-3" />}
                      {course.level} Level
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic leading-none">
                      {course.title.replace(': ', ':\n')}
                    </h2>
                    <p className="text-slate-500 font-medium mt-4 max-w-xl text-sm md:text-base leading-relaxed">
                      {course.description}
                    </p>
                  </div>
                  <div className="shrink-0 flex flex-col gap-3 w-full lg:w-auto">
                    <Button 
                      size="lg" 
                      className="w-full lg:w-auto px-10 py-7 rounded-2xl bg-slate-900 text-white hover:bg-primary hover:text-slate-900 font-black uppercase tracking-widest shadow-xl transition-all text-xs md:text-sm group"
                      onClick={() => window.open(`https://wa.me/9629399085?text=Hello! I would like to enroll in the ${course.level} program at Master Chess Academy.`, '_blank')}
                    >
                       ENROLL {course.level} <TrendingUp className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <div className="text-center lg:text-right text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                       ₹1300 / Month
                    </div>
                  </div>
               </div>

               {/* Body Area */}
               <div className="p-8 md:p-12 lg:p-16 grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-20 bg-slate-50/50">
                  
                  {/* Left Specs */}
                  <div className="xl:col-span-5 space-y-12">
                     <div>
                        <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                           <Zap className="w-4 h-4 text-primary" /> ABOUT THIS COURSE
                        </h4>
                        <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">{course.about}</p>
                     </div>
                     <div>
                        <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-4 flex items-center gap-2">
                           <Shield className="w-4 h-4 text-primary" /> WHY CHOOSE US
                        </h4>
                        <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">{course.whyChooseUs}</p>
                     </div>
                     
                     {/* Stats Quick Look */}
                     <div className="grid grid-cols-2 gap-4 border-t border-slate-200 pt-8">
                        <div>
                           <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">PUZZLES TO SOLVE</div>
                           <div className="text-2xl font-black text-slate-900 italic tracking-tighter">{course.stats.puzzles || '500+'}</div>
                        </div>
                        <div>
                           <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">HAPPY STUDENTS</div>
                           <div className="text-2xl font-black text-slate-900 italic tracking-tighter">{course.stats.students}</div>
                        </div>
                     </div>
                  </div>

                  {/* Right Syllabus */}
                  <div className="xl:col-span-7">
                     <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2 border-b border-slate-200 pb-4">
                        <Brain className="w-4 h-4 text-primary" /> DETAILED CURRICULUM
                     </h4>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                        {course.curriculum.map((c, i) => (
                          <div key={i} className="flex gap-3 items-start p-3 bg-white border border-slate-100 rounded-xl hover:border-slate-300 hover:shadow-sm transition-all group">
                             <div className="text-[10px] font-black text-primary bg-primary/10 w-7 rounded shrink-0 text-center py-1 mt-0.5 group-hover:bg-primary group-hover:text-white transition-colors">
                               {(i + 1).toString().padStart(2, '0')}
                             </div>
                             <span className="text-slate-700 text-xs md:text-sm font-medium leading-snug pt-0.5">{c}</span>
                          </div>
                        ))}
                     </div>
                  </div>

               </div>
            </div>
          </motion.section>
        ))}
      </div>
      
      <StateBenefits />

      {/* Final Global CTA */}
      <section className="py-24 md:py-40 text-center bg-white border-t border-slate-100 relative overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
         <div className="container px-6 mx-auto relative z-10">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter mb-8 md:mb-12 italic leading-none">
              THE BOARD <br className="md:hidden" /><span className="text-primary italic">IS WAITING</span>
            </h2>
            <Button size="lg" className="px-10 md:px-16 py-7 rounded-[2rem] text-xs md:text-base font-black uppercase tracking-[0.2em] shadow-xl bg-slate-900 text-white hover:bg-primary hover:text-slate-900 hover:scale-[1.02] transition-all w-full sm:w-auto">
               JOIN MASTER CHESS ACADEMY
            </Button>
         </div>
      </section>
    </div>
  );
}

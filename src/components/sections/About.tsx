import { motion } from 'framer-motion';
import { Shield, Globe, Target, TrendingUp, Award, Users, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import parthibanImg from '@/assets/masters/parthiban.jpeg';

const milestones = [
  { year: "2018", event: "Academy Founded", icon: <Shield className="w-6 h-6" /> },
  { year: "2020", event: "State-wide Expansion", icon: <Globe className="w-6 h-6" /> },
  { year: "2022", event: "100+ Students Reached", icon: <Users className="w-6 h-6" /> },
  { year: "2024", event: "Top District Academy", icon: <Award className="w-6 h-6" /> }
];

const highlights = [
  {
    title: "Expert Strategy",
    text: "We don't just teach moves; we cultivate a strategic mindset used by legends.",
    icon: <Target className="w-6 h-6 text-primary" />
  },
  {
    title: "Continuous Growth",
    text: "Personalized roadmaps for every player to ensure constant measurable improvement.",
    icon: <TrendingUp className="w-6 h-6 text-primary" />
  },
  {
    title: "State Reach",
    text: "Interacting with peers from all districts across Tamil Nadu in our exclusive digital arena.",
    icon: <Globe className="w-6 h-6 text-primary" />
  }
];

export function About() {
  return (
    <div className="flex flex-col">
      {/* About US Section - Clean Layout */}
      <section id="about" className="py-16 md:py-24 bg-gradient-to-t from-[#fffcf2] to-white relative w-full overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-[55%] flex flex-col items-start"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6 font-sans">
                About US
              </h2>
              
              <ul className="space-y-4 mb-8 text-slate-700 text-sm md:text-base font-sans list-disc list-outside ml-5">
                <li className="pl-2">Established in 2018, Master Chess Academy specializes in delivering structured online and offline chess training from beginner to advanced levels.</li>
                <li className="pl-2">100+ students trained globally, with many achieving significant success in their chess careers.</li>
                <li className="pl-2">Expert coaching team comprising highly experienced and engaging trainers who ensure learning is effective, interactive, and enjoyable.</li>
                <li className="pl-2">Extensive tournament experience, including organising district-level, state-level championships, and International FIDE-rated tournaments with professional standards.</li>
                <li className="pl-2">Committed to chess excellence, our academy aims to promote the game and empower students to reach their highest potential.</li>
              </ul>
              
              <Button 
                className="bg-[#eab308] hover:bg-[#ca8a04] text-slate-900 px-8 py-5 rounded font-bold transition-colors shadow-md hover:shadow-lg h-auto"
              >
                View More
              </Button>
            </motion.div>

            {/* Right Content - Logo Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full lg:w-[45%] flex justify-center"
            >
              <div className="bg-white p-8 md:p-12 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center justify-center w-full max-w-[380px] aspect-square border border-slate-100">
                {/* Simulated Logo Design */}
                <div className="w-full h-full rounded-full border border-slate-200 flex flex-col items-center justify-center relative bg-white">
                   <div className="absolute inset-2 rounded-full border border-dashed border-[#eab308]/40 animate-[spin_20s_linear_infinite]" />
                   <div className="text-center z-10 px-4">
                     <svg className="w-16 h-16 mx-auto text-[#eab308] mb-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8 2 6 4 6 7c0 1.5.5 3 1.5 4-1 2-2.5 3-4.5 4v5h18v-5c-2-1-3.5-2-4.5-4 1-1 1.5-2.5 1.5-4 0-3-2-5-6-5zm0 2c3 0 4 1.5 4 3 0 1-.5 2-1 2-1 0-2-.5-3-1l-3 4-1-1 2-3c-1.5 0-3-1-3-2 0-1.5 1-3 4-3z"/>
                     </svg>
                     <h3 className="text-[#bf1d2d] font-black text-xl md:text-2xl uppercase tracking-tighter">Master Chess</h3>
                     <p className="text-[10px] sm:text-xs text-slate-900 uppercase tracking-[0.2em] mt-1 font-bold">Academy</p>
                   </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-[#f8fafc] relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#eab308]/10 text-[#eab308] rounded-xl flex items-center justify-center shrink-0">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-sans">Our Mission</h3>
              </div>
              <ul className="space-y-4 text-slate-700 font-sans text-sm md:text-base">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#eab308] shrink-0 mt-0.5" />
                  <span>Deliver structured, engaging, and progressive chess training from beginner to advanced levels.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#eab308] shrink-0 mt-0.5" />
                  <span>Inspire students to develop strong strategic thinking, problem-solving skills, and mental discipline.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#eab308] shrink-0 mt-0.5" />
                  <span>Create a fun, motivating, and supportive learning environment that nurtures confidence and a lifelong passion for chess.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#eab308] shrink-0 mt-0.5" />
                  <span>Utilize modern teaching methods, personalized coaching, and interactive learning tools to ensure continuous improvement.</span>
                </li>
              </ul>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-sans">Our Vision</h3>
              </div>
              <ul className="space-y-4 text-slate-700 font-sans text-sm md:text-base">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Become a global leader in chess education, recognized for excellence in coaching and talent development.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Build a strong community of skilled players, thinkers, and future champions.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Promote chess as a powerful educational tool that enhances cognitive development, creativity, and critical thinking.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span>Contribute to personal growth by fostering patience, focus, resilience, and sportsmanship through the game of chess.</span>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Founder Profile Section (formerly Meet Our Team) */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container px-4 md:px-8 mx-auto relative z-10">
          <div className="mb-12 md:mb-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-[40%] relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-white">
                <img src={parthibanImg} alt="Master Parthiban V" className="w-full h-auto object-cover" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-[60%] lg:pl-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#eab308]/10 rounded-full text-[#eab308] font-semibold text-xs md:text-sm mb-4">
                <Award className="w-4 h-4" /> Founder & Chief Mentor
              </div>

              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2 font-sans">
                Master Parthiban V
              </h3>

              <h4 className="text-lg md:text-xl font-medium text-slate-600 mb-6 font-sans">
                The Visionary Behind Master Chess Academy
              </h4>

              <p className="text-slate-700 font-sans leading-relaxed mb-8 text-sm md:text-base border-l-4 border-[#eab308] pl-4">
                Driven by a profound passion for the game, Master Parthiban established the academy to nurture the next generation of grandmasters. His recognized expertise spans advanced playing techniques, tactical calculation, and elite tournament arbitration at the national level.
              </p>

              <div className="flex flex-wrap gap-8 md:gap-12 items-center">
                <div>
                  <div className="text-xs md:text-sm font-semibold text-slate-500 mb-1 uppercase tracking-wider">Standard Rating</div>
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 font-sans">1933</div>
                </div>
                <div className="hidden sm:block h-10 w-px bg-slate-200" />
                <div>
                  <div className="text-xs md:text-sm font-semibold text-slate-500 mb-1 uppercase tracking-wider">Active Students</div>
                  <div className="text-3xl md:text-4xl font-bold text-[#eab308] font-sans">100+</div>
                </div>
                <div className="hidden lg:block h-10 w-px bg-slate-200" />
                <div>
                  <div className="text-xs md:text-sm font-semibold text-slate-500 mb-1 uppercase tracking-wider">Expert Coaches</div>
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 font-sans">10+</div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Accreditations */}
          <div className="mt-8 md:mt-12 py-8 border-y border-slate-100">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12">
              <div className="shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left">
                <h4 className="text-xs font-bold text-[#eab308] uppercase tracking-widest mb-1 font-sans">Accreditations</h4>
                <h5 className="text-lg md:text-xl font-bold text-slate-900 font-sans">State-Wide Reach & Elite Rankings</h5>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 w-full lg:w-auto">
                {[
                  "Arena FIDE Master",
                  "FIDE National Instructor",
                  "Senior National Arbiter",
                  "FIDE ID: 5005787"
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3">
                    <div className="inline-flex p-2.5 rounded-full bg-[#eab308]/10 text-[#eab308]">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-xs md:text-sm text-slate-700 block">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 md:py-24 bg-[#f8fafc] relative overflow-hidden">
        <div className="container px-4 md:px-8 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 font-sans">Our Journey</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-10 font-sans">
                What started as a small community of chess lovers in 2018 has evolved into a powerhouse of regional talent. We believe chess is a lifestyle, not just a game. Training the mind to conquer the board.
              </p>

              <div className="space-y-6">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#eab308]/10 text-[#eab308] flex items-center justify-center shrink-0">
                      {h.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-800 mb-1 font-sans">{h.title}</h4>
                      <p className="text-sm text-slate-600 font-sans">{h.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="flex flex-col">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 font-sans"
              >
                Cultivating Champions
              </motion.h2>

              <div className="relative pl-6 space-y-8 text-left border-l-2 border-[#eab308]/20 ml-2 md:ml-4">
                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="relative"
                  >
                    <div className="absolute -left-[33px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#eab308]" />
                    <div className="flex flex-col gap-1 pl-4">
                      <div className="text-sm font-bold text-[#eab308] font-sans">
                        {m.year}
                      </div>
                      <div className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                        <div className="text-[#eab308] shrink-0">
                          {m.icon}
                        </div>
                        <div className="text-base font-bold text-slate-900 font-sans">
                          {m.event}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

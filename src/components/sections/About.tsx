import { motion } from 'framer-motion';
import { Shield, Globe, Target, TrendingUp, Award, Users, CheckCircle2 } from 'lucide-react';
import parthibanImg from '@/assets/masters/parthiban.jpeg';
import bgBanner1 from '@/assets/background_banner/abstract-chess-pieces-digital-art-style.jpg';
import bgBanner2 from '@/assets/background_banner/digital-art-style-abstract-chess-pieces_1.jpg';
import bgBanner3 from '@/assets/background_banner/digital-art-style-abstract-chess-pieces.jpg';

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
      {/* Our Mission Section - Simplified Cinematic Style */}
      <section className="min-h-[10vh] md:min-h-screen flex flex-col items-center justify-center pt-24 md:pt-40 text-center relative overflow-hidden bg-white">
        {/* Cinematic Backdrop Banner with Full Color */}
        <div className="absolute inset-0 z-0">
          <img
            src={bgBanner1}
            alt="Chess Academy Mission"
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
        </div>

        <div className="container px-6 mx-auto relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block p-4 bg-primary/20 rounded-2xl mb-8 border border-primary/20 shadow-xl shadow-primary/10 bg-white/20 backdrop-blur-md"
            >
              <Target className="w-10 h-10 md:w-14 md:h-14 text-primary" />
            </motion.div>
            <h2 className="text-3xl md:text-9xl font-black text-slate-900 uppercase tracking-tighter italic mb-4 md:mb-12 leading-none">
              OUR <span className="text-primary italic font-black">MISSION</span>
            </h2>
            <p className="text-slate-700 max-w-4xl font-medium text-lg sm:text-2xl md:text-4xl leading-tight italic px-2 md:px-0 mb-8 md:mb-20">
              "To democratize elite chess education by blending <span className="text-slate-900 font-bold">ancient wisdom</span> with <span className="text-primary font-bold italic">modern technology</span>, creating a community arena where every child can master the art of strategy."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
              {[
                { label: "EMPOWER", desc: "Building confidence through mastery." },
                { label: "EXCEL", desc: "Pushing limits in every move." },
                { label: "EVOLVE", desc: "Growing as players and thinkers." }
              ].map(point => (
                <div key={point.label} className="p-8 md:p-10 border border-slate-100 bg-white/50 backdrop-blur-md rounded-3xl shadow-xl hover:border-primary/50 transition-all hover:scale-105 text-left">
                  <div className="text-primary font-black tracking-widest mb-3 text-xl md:text-2xl italic tracking-tighter uppercase">{point.label}</div>
                  <div className="text-sm md:text-base text-slate-500 font-medium leading-relaxed uppercase tracking-widest">{point.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 md:py-24 relative overflow-hidden bg-white">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgBanner3})` }}
        >
          <div className="absolute inset-0 bg-white/95" />
        </div>
        <div className="container px-6 mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter italic mb-4">
              MEET OUR <span className="text-primary">TEAM</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-light text-base md:text-lg">
              Led by expert trainers and pedagogical experts, our team is dedicated to your growth at <span className="text-primary font-black tracking-widest italic uppercase">MASTER CHESS ACADEMY</span>.
            </p>
          </div>

          <div className="mb-16 md:mb-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 relative">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-4 border-white bg-white p-2">
                <img src={parthibanImg} alt="Master Parthiban V" className="w-full h-auto object-cover rounded-[2rem]" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-1/2 h-1/2 bg-primary/20 rounded-[3rem] -z-10 blur-2xl" />
              <div className="absolute -top-8 -right-8 w-1/3 h-1/3 bg-slate-200/50 rounded-[3rem] -z-10 blur-xl" />
            </div>

            <div className="w-full lg:w-1/2 lg:pl-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-full text-primary font-black uppercase tracking-widest text-xs md:text-sm mb-4 border border-primary/20 shadow-sm">
                <Award className="w-4 h-4" /> FOUNDER & CHIEF MENTOR
              </div>

              <h3 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter italic leading-none mb-4">
                MASTER <br /> <span className="text-primary">PARTHIBAN V</span>
              </h3>

              <h4 className="text-lg md:text-2xl font-bold text-slate-800 uppercase tracking-widest mb-8 leading-relaxed italic">
                The Visionary Behind <br className="hidden md:block" /> Master Chess Academy
              </h4>

              <p className="text-slate-600 font-light leading-relaxed mb-8 text-base md:text-lg italic border-l-4 border-primary pl-6 sm:pl-8 py-2 bg-slate-50/50 rounded-r-2xl">
                Driven by a profound passion for the game, Master Parthiban established the academy to nurture the next generation of grandmasters. His recognized expertise spans advanced playing techniques, tactical calculation, and elite tournament arbitration at the national level.
              </p>

              <div className="flex flex-wrap gap-8 md:gap-12 items-center">
                <div>
                  <div className="text-xs md:text-sm uppercase tracking-[0.2em] font-black text-slate-400 mb-1">Standard Rating</div>
                  <div className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 italic tracking-tighter leading-none">1933</div>
                </div>
                <div className="hidden sm:block h-12 w-px bg-slate-200" />
                <div>
                  <div className="text-xs md:text-sm uppercase tracking-[0.2em] font-black text-slate-400 mb-1">Active Students</div>
                  <div className="text-3xl sm:text-5xl md:text-6xl font-black text-primary italic tracking-tighter leading-none">100+</div>
                </div>
                <div className="hidden lg:block h-12 w-px bg-slate-200" />
                <div>
                  <div className="text-xs md:text-sm uppercase tracking-[0.2em] font-black text-slate-400 mb-1">Expert Coaches</div>
                  <div className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 italic tracking-tighter leading-none">10+</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sleek Horizontal Integrated Other Details Section */}
          <div className="mt-12 md:mt-20 py-8 border-y border-slate-100 bg-slate-50/30 backdrop-blur-sm -mx-6 md:-mx-20 px-6 md:px-20">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
              <div className="shrink-0 flex flex-col items-center lg:items-start">
                <h4 className="text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.4em] mb-1 italic">ACCREDITATIONS</h4>
                <h5 className="text-lg md:text-xl font-black text-slate-900 uppercase italic tracking-tighter">STATE-WIDE REACH & ELITE RANKINGS</h5>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 w-full lg:w-auto">
                {[
                  "Arena FIDE Master",
                  "FIDE National Instructor",
                  "Senior National Arbiter",
                  "FIDE ID: 5005787"
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
                    <div className="mb-4 inline-flex p-3 rounded-2xl bg-white border border-slate-100 shadow-sm group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-bold tracking-widest uppercase text-[10px] md:text-xs text-slate-700 block max-w-[120px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mb-12 md:mb-24 pt-12 md:pt-24 border-t border-slate-100">
            <h3 className="text-3xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter italic">
              OUR <span className="text-primary">EXPERT</span> COACHES
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              { name: "WGM Anjali", role: "Youth Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
              { name: "Coach Rahul", role: "Strategy Lead", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
              { name: "Elena Volkov", role: "Tactics Expert", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" }
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 border border-slate-100 hover:border-primary/50 transition-all text-center bg-white shadow-2xl rounded-[2.5rem]"
              >
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-8 relative shadow-xl">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-3xl font-black text-slate-900 uppercase tracking-tighter italic">{member.name}</h4>
                <p className="text-primary text-sm font-black mt-2 uppercase tracking-[0.3em] italic">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section id="about" className="py-24 relative overflow-hidden bg-white">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgBanner2})` }}
        >
          <div className="absolute inset-0 bg-white/95" />
        </div>
        <div className="container px-6 relative z-10 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="relative border border-slate-200 p-12 overflow-hidden shadow-2xl bg-white/60 backdrop-blur-2xl rounded-3xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-30" />
                <h3 className="text-4xl font-black mb-8 tracking-tighter leading-tight relative z-10 text-slate-900 uppercase italic">OUR JOURNEY</h3>
                <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light relative z-10 italic">
                  What started as a small community of chess lovers in 2018 has evolved into a powerhouse of regional talent. We believe chess is a lifestyle, not just a game.
                </p>

                <div className="space-y-8 relative z-10 text-left">
                  {highlights.map((h, i) => (
                    <motion.div
                      key={h.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      className="flex gap-5"
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 bg-white shadow-sm">
                        {h.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2 uppercase tracking-tight italic">{h.title}</h4>
                        <p className="text-sm sm:text-base text-slate-500 leading-relaxed tracking-wide">{h.text}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Milestone Timeline */}
            <div className="flex flex-col gap-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight uppercase tracking-wider relative lg:ml-2"
              >
                CULTIVATING <span className="text-primary italic">CHAMPIONS</span> <br />
                SINCE 2018
              </motion.h2>

              <div className="relative pl-8 space-y-12 text-left">
                <div className="absolute left-0 top-2 bottom-2 w-px bg-slate-200" />

                {milestones.map((m, i) => (
                  <motion.div
                    key={m.year}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="relative"
                  >
                    <div className="absolute -left-[36.5px] w-4 h-4 rounded-full bg-primary/20 border-2 border-primary shadow-[0_48px_96px_-32px_rgba(212,175,55,0.4)]" />
                    <div className="flex gap-6 items-center group">
                      <div className="text-sm font-black text-primary uppercase tracking-[0.2em] w-20 shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                        {m.year}
                      </div>
                      <div className="px-5 sm:px-8 py-5 border border-slate-100 group-hover:border-primary/50 transition-all flex items-center gap-5 w-full shadow-md group-hover:translate-x-2 bg-white/60 backdrop-blur-md rounded-2xl">
                        <div className="text-primary/60 group-hover:text-primary transition-colors flex items-center justify-center w-6 h-6">
                          {m.icon}
                        </div>
                        <div className="text-lg font-bold text-slate-800 uppercase tracking-tighter italic">
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

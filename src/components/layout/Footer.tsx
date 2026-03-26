import { motion } from 'framer-motion';
import { Heart, ChevronUp, Github, Twitter, Linkedin, Instagram, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import mcaLogo from '@/assets/mca logo.jpeg';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-16 md:py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 mb-20">
          
          {/* Brand & Social Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center bg-white shadow-lg shadow-primary/20 overflow-hidden shrink-0 border border-slate-100">
                <img src={mcaLogo} alt="MCA Logo" className="w-full h-full object-contain p-1" />
              </div>
              <span className="text-sm md:text-xl font-black text-slate-900 tracking-widest uppercase italic leading-tight">
                MASTER CHESS <br />
                <span className="text-primary">ACADEMY</span>
              </span>
            </div>
            <p className="text-slate-500 text-[10px] md:text-sm leading-relaxed font-light col-span-2 sm:col-span-1">
              Elevating the game of kings through data-driven strategy and world-class mentorship. Join the next generation of strategic thinkers.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 glass-card rounded-lg flex items-center justify-center text-slate-400 border border-slate-200 hover:border-primary hover:text-primary hover:bg-primary/5 transition-all bg-white shadow-sm"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 italic flex items-center gap-3">
               <span className="w-6 h-px bg-primary" /> EXPLORE
            </h4>
            <ul className="space-y-4">
              {['Courses', 'Trainers', 'Gallery', 'About Us', 'Contact'].map(item => (
                <li key={item}>
                  <a href={`/${item.toLowerCase().replace(' ', '')}`} className="text-sm font-bold text-slate-500 hover:text-primary transition-colors flex items-center gap-2 group uppercase tracking-widest">
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform opacity-50 group-hover:opacity-100" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academy Locations Column */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 italic flex items-center gap-3">
               <span className="w-6 h-px bg-primary" /> LOCATIONS
            </h4>
            
            <div className="space-y-6">
               <div className="flex items-start gap-4 text-slate-600 hover:text-primary transition-colors group">
                  <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 group-hover:border-primary/30 transition-colors">
                     <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                     <p className="font-black text-slate-900 uppercase tracking-[0.2em] text-[10px] mb-1">MAIN BRANCH</p>
                     <p className="text-sm font-medium leading-relaxed italic">Kamarajapuram,<br />Pudukkottai</p>
                  </div>
               </div>
               
               <div className="flex items-start gap-4 text-slate-600 hover:text-primary transition-colors group">
                  <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 group-hover:border-primary/30 transition-colors">
                     <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                     <p className="font-black text-slate-900 uppercase tracking-[0.2em] text-[10px] mb-1">SECOND BRANCH</p>
                     <p className="text-sm font-medium leading-relaxed italic">Periyar Nagar,<br />Pudukkottai</p>
                  </div>
               </div>
            </div>
          </div>
          
          {/* Contact Details & Trust Badge Column */}
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 italic flex items-center gap-3">
               <span className="w-6 h-px bg-primary" /> GET IN TOUCH
            </h4>
            
            <div className="space-y-4 mb-6">
               <a href="tel:+919876543210" className="flex items-center gap-4 text-sm font-medium text-slate-500 hover:text-primary transition-colors group italic">
                  <div className="p-2 bg-white border border-slate-100 rounded-lg shadow-sm group-hover:border-primary/30"><Phone className="w-3 h-3 text-primary" /></div>
                  +91 98765 43210
               </a>
               <a href="mailto:admin@masterchess.com" className="flex items-center gap-4 text-sm font-medium text-slate-500 hover:text-primary transition-colors group italic">
                  <div className="p-2 bg-white border border-slate-100 rounded-lg shadow-sm group-hover:border-primary/30"><Mail className="w-3 h-3 text-primary" /></div>
                  admin@masterchess.com
               </a>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-2xl glass-card border border-slate-200 shadow-lg shadow-slate-200/50 hover:border-primary/30 transition-colors relative mt-8">
               <div className="flex items-center gap-4 mb-3">
                  <div className="text-primary p-2.5 bg-primary/10 rounded-full shadow-inner"><Heart className="w-5 h-5 fill-primary" /></div>
                  <div>
                     <h5 className="text-[10px] font-black text-slate-900 italic uppercase tracking-widest leading-none mb-1.5">CULTIVATING LEGENDS</h5>
                     <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Trusted by 10k+ Parents</p>
                  </div>
               </div>
               <p className="text-[10px] text-slate-400 font-medium leading-relaxed italic border-t border-slate-100 pt-3 mt-3">Developing elite analytical skills through international chess standards.</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 pb-4 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-slate-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] relative z-20">
          <p className="text-center md:text-left leading-relaxed">
             © 2026 MASTER CHESS ACADEMY. ALL RIGHTS RESERVED. <br className="md:hidden" />
             <span className="text-primary md:ml-2">DESIGNED BY SK BROTHES CODE TECHNOLOGYS.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <a href="#" className="hover:text-primary transition-colors">PRIVACY TERMS</a>
            <a href="#" className="hover:text-primary transition-colors">STRATEGY BLOG</a>
            <button onClick={scrollToTop} className="flex items-center gap-2 text-primary hover:text-slate-900 transition-colors group font-black ml-auto md:ml-0">
              TOP <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Background chess accents */}
      <div className="absolute bottom-[-150px] right-[-100px] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] bg-black/5 rounded-full blur-[80px] -z-10 pointer-events-none" />
    </footer>
  );
}

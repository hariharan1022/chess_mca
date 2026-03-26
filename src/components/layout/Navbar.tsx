import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AuthModal } from '@/components/sections/AuthModal';
import { cn } from '@/lib/utils';
import mcaLogo from '@/assets/mca logo.jpeg';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Trainers', href: '/trainers' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Puzzles', href: '/puzzles' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [authModal, setAuthModal] = useState<{ open: boolean, view: 'login' | 'signup' }>({ open: false, view: 'login' });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
      scrolled ? "glass-nav py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white border border-slate-200 shadow-sm shrink-0">
            <img src={mcaLogo} alt="MCA Logo" className="w-full h-full object-contain p-1" />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 hidden sm:block uppercase">
            MASTER CHESS <span className="text-primary italic font-black">ACADEMY</span>
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={item.href}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-primary transition-all relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
          <div className="h-6 w-px bg-slate-200/50 mx-2" />
          <Button variant="ghost" size="sm" className="text-slate-900 font-bold tracking-widest uppercase text-xs" onClick={() => setAuthModal({ open: true, view: 'login' })}>
            Login
          </Button>
          <Button variant="gold" size="sm" className="font-bold tracking-widest uppercase text-xs" onClick={() => setAuthModal({ open: true, view: 'signup' })}>
            Enroll Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav absolute top-full left-0 w-full overflow-hidden border-t border-slate-100/50"
          >
            <div className="flex flex-col p-8 gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-md font-black text-slate-900 hover:text-primary transition-colors flex items-center justify-between uppercase tracking-widest"
                >
                  {item.name}
                  <ChevronRight className="w-4 h-4 text-primary" />
                </Link>
              ))}
              <div className="pt-6 flex flex-col gap-4">
                <Button variant="outline" className="w-full py-4 uppercase font-black tracking-widest text-xs" onClick={() => { setIsOpen(false); setAuthModal({ open: true, view: 'login' }); }}>Login</Button>
                <Button variant="gold" className="w-full py-4 uppercase font-black tracking-widest text-xs" onClick={() => { setIsOpen(false); setAuthModal({ open: true, view: 'signup' }); }}>Enroll Now</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AuthModal 
        isOpen={authModal.open} 
        onClose={() => setAuthModal({ ...authModal, open: false })} 
        initialView={authModal.view} 
      />
    </nav>
  );
}

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import mcaLogo from '@/assets/mca logo.jpeg';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Courses', href: '/courses' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Puzzles', href: '/puzzles' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEnroll = () => {
    window.open('https://wa.me/9629399085?text=Hello! I would like to enroll in Masters Chess Academy.', '_blank');
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-6",
      scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-white py-4 border-b border-slate-100"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 md:gap-4 cursor-pointer"
          onClick={() => window.location.href='/'}
        >
          <div className="w-10 h-10 md:w-14 md:h-14 rounded flex items-center justify-center border border-slate-200 shadow-sm shrink-0 bg-white overflow-hidden p-0.5">
            <img src={mcaLogo} alt="MCA Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col justify-center max-w-[200px] sm:max-w-[250px] md:max-w-none">
            <span className="text-sm md:text-xl font-bold tracking-tight text-slate-800 font-sans uppercase leading-tight">
              Masters Chess <span className="text-[#eab308]">Academy</span>
            </span>
            <span className="text-[8px] sm:text-[9px] md:text-[11px] text-slate-500 font-bold uppercase tracking-widest mt-0.5 leading-snug">
              Affiliated to Pudukkottai District Chess Association
            </span>
          </div>
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
                className={cn(
                  "text-[15px] font-medium font-sans transition-colors relative group",
                  location.pathname === item.href ? "text-[#eab308]" : "text-slate-600 hover:text-[#eab308]"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-[2px] bg-[#eab308] transition-all duration-300",
                  location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            </motion.div>
          ))}
          <div className="h-6 w-px mx-2 bg-slate-200" />
          <Button 
            className="bg-[#eab308] hover:bg-[#ca8a04] text-slate-900 px-6 py-2 rounded font-bold text-sm transition-colors font-sans shadow-sm hover:shadow" 
            onClick={handleEnroll}
          >
            Enroll Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600 hover:text-[#eab308] transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-[#eab308]/50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white absolute top-full left-0 w-full overflow-hidden border-t border-slate-100 shadow-xl"
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-base font-medium transition-colors flex items-center justify-between font-sans py-3 border-b border-slate-50 last:border-0",
                    location.pathname === item.href ? "text-[#eab308]" : "text-slate-700 hover:text-[#eab308]"
                  )}
                >
                  {item.name}
                  <ChevronRight className={cn(
                    "w-4 h-4",
                    location.pathname === item.href ? "text-[#eab308]" : "text-slate-300"
                  )} />
                </Link>
              ))}
              <div className="pt-4 pb-2">
                <Button 
                  className="w-full bg-[#eab308] hover:bg-[#ca8a04] text-slate-900 py-4 font-bold font-sans rounded shadow-sm" 
                  onClick={() => { setIsOpen(false); handleEnroll(); }}
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

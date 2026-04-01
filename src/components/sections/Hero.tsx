import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import homeHeroImg from '@/assets/home hero.png';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Column - Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left pt-10"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-slate-800 leading-[1.2] mb-10 tracking-tight font-sans">
              "Train your mind.<br />
              Master the board.<br />
              Begin your chess journey today."
            </h1>

            <Button 
              onClick={() => window.open('https://wa.me/9629399085?text=Hello! I would like to register for a free trial.', '_blank')}
              className="bg-[#eab308] hover:bg-[#ca8a04] text-slate-900 px-8 md:px-10 py-4 md:py-6 rounded font-bold text-lg md:text-xl transition-colors font-sans shadow-md hover:shadow-lg w-auto"
            >
              Register For Free Trial
            </Button>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img 
              src={homeHeroImg}
              alt="Master Chess Academy" 
              className="w-full max-w-lg object-contain md:scale-110 drop-shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import bgBanner3 from '@/assets/background banner/digital-art-style-abstract-chess-pieces.jpg';

// Using a more robust, simple approach for image discovery to avoid runtime glob resolution errors
const academyImages = [
  { url: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1000", title: "Strategy Session" },
  { url: "https://images.unsplash.com/photo-1544411047-c4915842271e?auto=format&fit=crop&q=80&w=1000", title: "Master Calculation" },
  { url: "https://images.unsplash.com/photo-1586165368502-1bad197a0469?auto=format&fit=crop&q=80&w=1000", title: "Elite Mastery" },
  { url: "https://images.unsplash.com/photo-1511891535722-171421127395?auto=format&fit=crop&q=80&w=1000", title: "Professional Prep" }
];

const championshipImages = [
  { url: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=1000", title: "National Victory" },
  { url: "https://images.unsplash.com/photo-1511891535722-171421127395?auto=format&fit=crop&q=80&w=1000", title: "Championship Spirit" },
  { url: "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?auto=format&fit=crop&q=80&w=1000", title: "Strategic Win" },
  { url: "https://images.unsplash.com/photo-1580541832626-2a7131ee809f?auto=format&fit=crop&q=80&w=1000", title: "Glory Moment" }
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="flex flex-col bg-white overflow-hidden">
      {/* Cinematic Header for Gallery */}
      <section className="min-h-[85vh] md:min-h-screen flex flex-col items-center justify-center pt-24 md:pt-40 text-center relative overflow-hidden bg-white">
        {/* Full-Color Backdrop Banner - Unique Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={bgBanner3} 
            alt="Chess Academy Gallery" 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
        </div>

        <div className="container px-6 mx-auto relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block p-4 bg-primary/20 rounded-2xl mb-8 border border-primary/20 shadow-2xl shadow-primary/20 bg-white/20 backdrop-blur-md"
            >
               <ZoomIn className="w-10 h-10 md:w-14 md:h-14 text-primary" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-9xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic leading-none"
            >
              MOMENTS OF <span className="text-primary italic font-black">GLORY</span>
            </motion.h2>
            <p className="text-slate-700 max-w-4xl font-medium text-xl md:text-2xl px-4 md:px-0 leading-relaxed italic">
              Witness our journey through the lens. From national championships to everyday strategy sessions at <span className="text-primary font-black uppercase tracking-widest not-italic italic">Master Chess Academy</span>.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-4 md:px-6 mx-auto py-24 md:py-40 relative z-10">
        {/* Academy Highlights */}
        {academyImages.length > 0 ? (
          <div className="mb-16 md:mb-20">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6 md:mb-8 uppercase tracking-widest italic flex items-center gap-3 md:gap-4">
               <span className="w-8 md:w-12 h-px bg-primary" />
               ACADEMY HIGHLIGHTS
            </h3>
            {/* Grid 2-col on mobile, 4-col on lg */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
              {academyImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedImage(img.url)}
                  className="group relative h-40 md:h-72 overflow-hidden rounded-2xl md:rounded-[2.5rem] border border-slate-100 shadow-xl bg-white cursor-pointer"
                >
                  <img 
                    src={img.url} 
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 md:p-8">
                    <h4 className="text-xs md:text-sm font-bold text-white uppercase tracking-widest leading-none hidden md:block">MASTER CHESS EXCELLENCE</h4>
                  </div>
                  <div className="absolute inset-0 m-auto w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity scale-75 group-hover:scale-100 duration-300 pointer-events-none">
                     <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-10 md:py-20 bg-white/40 border-2 border-dashed border-slate-200 rounded-3xl mb-12 md:mb-20">
             <p className="text-slate-400 font-bold text-xs md:text-sm uppercase tracking-widest">Searching Academy Images...</p>
          </div>
        )}

        {/* Championship Arena */}
        {championshipImages.length > 0 ? (
          <div>
            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6 md:mb-8 uppercase tracking-widest italic flex items-center gap-3 md:gap-4">
               <span className="w-8 md:w-12 h-px bg-primary" />
               NATIONAL CHAMPIONSHIPS
            </h3>
            {/* Grid 2-col on mobile, 3-col on lg */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
              {championshipImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setSelectedImage(img.url)}
                  className="group relative h-48 md:h-80 overflow-hidden rounded-2xl md:rounded-[2.5rem] border border-slate-100 shadow-xl bg-white cursor-pointer"
                >
                  <img 
                    src={img.url} 
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-4 md:p-10">
                    <div className="text-[10px] md:text-xs font-black text-primary uppercase tracking-[0.4em] mb-1 md:mb-2 hidden md:block">TOURNAMENT FEED</div>
                    <h4 className="text-xs md:text-lg font-bold text-white uppercase tracking-widest leading-none hidden md:block">CHAMPIONSHIP HIGHLIGHTS</h4>
                  </div>
                  <div className="absolute inset-0 m-auto w-10 h-10 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity scale-75 group-hover:scale-100 duration-300 pointer-events-none">
                     <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-10 md:py-20 bg-white/40 border-2 border-dashed border-slate-200 rounded-3xl">
             <p className="text-slate-400 font-bold text-xs md:text-sm uppercase tracking-widest">Searching Championship Arena...</p>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-zoom-out"
          >
            <button
               className="absolute top-4 right-4 md:top-8 md:right-8 text-white bg-white/10 hover:bg-white/20 p-2 md:p-3 rounded-full backdrop-blur-md transition-all border border-white/20 z-50"
               onClick={(e) => {
                 e.stopPropagation();
                 setSelectedImage(null);
               }}
            >
               <X className="w-5 h-5 md:w-8 md:h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Fullscreen view"
              className="max-w-full max-h-full object-contain rounded-xl md:rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Mail, MapPin, Send, MessageSquare, User, AtSign, PhoneCall, Users } from 'lucide-react';

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare WhatsApp message
    const message = `Hello Master Chess Academy,\n\nName: ${formState.name}\nEmail: ${formState.email}\nMessage: ${formState.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/9940773204?text=${encodedMessage}`;
    
    // Redirect after a small delay
    setTimeout(() => {
      setIsSubmitting(false);
      window.open(whatsappUrl, '_blank');
    }, 1000);
  };

  return (
    <section id="contact" className="flex flex-col bg-white overflow-hidden">
      {/* Cinematic Header for Contact */}
      <section className="min-h-[30vh] md:min-h-screen flex flex-col items-center justify-center pt-24 md:pt-40 text-center relative overflow-hidden bg-white">
        {/* Full-Color Backdrop Banner - Unique Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=2500" 
            alt="Chess Academy Contact" 
            className="w-full h-full object-cover opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
        </div>

        <div className="container px-6 mx-auto relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-block p-4 bg-primary/20 rounded-2xl mb-8 border border-primary/20 shadow-xl shadow-primary/20 bg-white/20 backdrop-blur-md"
            >
               <MessageSquare className="w-10 h-10 md:w-14 md:h-14 text-primary" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-9xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic leading-none"
            >
              LET'S <span className="text-primary italic font-black">CONNECT</span>
            </motion.h2>
            <p className="text-slate-700 max-w-2xl font-medium text-lg md:text-2xl px-2 md:px-0 leading-relaxed italic">
              Ready for your next big move? Reach out to our grandmasters and start your journey with <span className="text-primary font-black uppercase tracking-widest not-italic italic">Master Chess Academy</span>.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-6 relative z-10 mx-auto py-24 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-wider italic"
              >
                READY FOR THE <span className="text-primary italic">NEXT MOVE?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-500 text-lg leading-relaxed font-light italic"
              >
                Connect with our team to start your journey into professional chess. Every champion starts with a single move at <span className="text-primary font-black uppercase tracking-widest not-italic italic">Master Chess Academy</span>.
              </motion.p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Mail className="text-primary w-6 h-6" />, label: "Email Us", value: "hariharnmahesh34@gmail.com" },
                { icon: <PhoneCall className="text-primary w-6 h-6" />, label: "Call Us", value: "+91 96293 99085" },
                { icon: <MapPin className="text-primary w-6 h-6" />, label: "Main Branch", value: "Kamarajapuram, Pudukkottai" },
                { icon: <MapPin className="text-primary w-6 h-6" />, label: "Second Branch", value: "Periyar Nagar, Pudukkottai" }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-all shadow-md group-hover:shadow-primary/10">
                    {item.icon}
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-xs uppercase tracking-widest text-slate-400 font-black mb-1 italic">{item.label}</div>
                    <div className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors italic tracking-tight">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="p-10 border border-slate-100 bg-slate-50/50 backdrop-blur-md rounded-[2.5rem] overflow-hidden group shadow-xl">
               <div className="flex items-center gap-6">
                  <div className="p-4 bg-primary/10 rounded-2xl group-hover:scale-110 transition-transform shadow-lg shadow-primary/5">
                     <Users className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                     <h4 className="text-xl font-black text-slate-900 mb-1 uppercase tracking-tighter italic">24/7 SUPPORT</h4>
                     <p className="text-sm text-slate-500 font-light leading-relaxed italic">Dedicated mentors available around the clock for our global students.</p>
                  </div>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 bg-white border border-slate-100 shadow-[0_32px_80px_-16px_rgba(0,0,0,0.08)] rounded-[3rem] relative"
          >
            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3 group">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-1 group-focus-within:text-primary transition-colors flex items-center gap-2 italic">
                    <User className="w-3 h-3" /> Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Grandmaster aspirant"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-primary transition-all group-hover:bg-slate-100 placeholder:text-slate-300 italic font-medium"
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="space-y-3 group">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-1 group-focus-within:text-primary transition-colors flex items-center gap-2 italic">
                    <AtSign className="w-3 h-3" /> Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="you@email.com"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-primary transition-all group-hover:bg-slate-100 placeholder:text-slate-300 italic font-medium"
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
              </div>
              
              <div className="space-y-3 group">
                <label className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 ml-1 group-focus-within:text-primary transition-colors flex items-center gap-2 italic">
                  <MessageSquare className="w-3 h-3" /> Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we help you conquer the board?"
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-primary transition-all group-hover:bg-slate-100 placeholder:text-slate-300 resize-none italic font-medium"
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-lg py-7 font-black uppercase tracking-widest bg-primary text-white hover:bg-slate-900 disabled:opacity-50 transition-all border-none rounded-2xl shadow-xl shadow-primary/20"
              >
                {isSubmitting ? "TRANSMITTING..." : "SEND MESSAGE"}
                <Send className="ml-3 w-5 h-5" />
              </Button>
            </form>
            
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-slate-100 rounded-full blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

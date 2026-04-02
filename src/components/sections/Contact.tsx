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
      <div className="container px-6 relative z-10 mx-auto py-24 md:py-40 pt-32">
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

        {/* Map Full Width Section */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-24 lg:mt-32"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter italic mb-2">
              ACADEMY <span className="text-primary italic">LOCATION</span>
            </h2>
            <p className="text-slate-500 font-medium italic">Visit us for offline classes in Pudukkottai</p>
          </div>
          <div className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-200 relative group bg-white p-2">
            <iframe 
              title="Master Chess Academy Location"
              src="https://maps.google.com/maps?q=10.3881397,78.8270492&hl=en&z=15&output=embed" 
              className="absolute inset-2 border-0 rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-700 w-[calc(100%-1rem)] h-[calc(100%-1rem)]" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

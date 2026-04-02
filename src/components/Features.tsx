import { motion } from 'motion/react';
import { Compass, HeartHandshake, Star, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Compass,
    title: 'Local Expertise',
    description: 'Deep knowledge of Rwanda\'s hidden gems, history, and culture that you won\'t find in guidebooks.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Planning',
    description: 'Stress-free, custom itineraries tailored to your pace, interests, and travel style.',
  },
  {
    icon: Star,
    title: 'Engaging Guides',
    description: 'Friendly, professional guides with great personalities who make every moment memorable.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted & Secure',
    description: 'Excellent value for money with a focus on your safety, comfort, and peace of mind.',
  },
];

export default function Features() {
  return (
    <section id="about" className="py-24 bg-brand-green text-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-gold font-semibold tracking-wider uppercase text-sm"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-4xl md:text-5xl font-serif font-bold mb-6"
            >
              Experience Rwanda with True Locals
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-lg mb-8 font-light leading-relaxed"
            >
              At Bella Vista Rwanda, we believe travel is more than just visiting places; it's about connecting with the soul of a destination. We handle all the details so you can focus on creating unforgettable memories.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-brand-gold hover:bg-yellow-500 text-white font-medium rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Start Planning
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center mb-4">
                    <Icon className="text-brand-gold" size={24} />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

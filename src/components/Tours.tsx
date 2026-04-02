import { motion } from 'motion/react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

const tours = [
  {
    id: 1,
    title: 'Kigali City Tour',
    description: 'Explore the vibrant streets, historical monuments, and bustling markets of Africa\'s cleanest city.',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=2671&auto=format&fit=crop',
    duration: 'Half/Full Day',
    location: 'Kigali',
  },
  {
    id: 2,
    title: 'Gorilla Trekking',
    description: 'Come face-to-face with majestic mountain gorillas in their natural habitat in Volcanoes National Park.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Silverback_Mountain_Gorilla.jpg/1024px-Silverback_Mountain_Gorilla.jpg',
    duration: '1-3 Days',
    location: 'Volcanoes NP',
  },
  {
    id: 3,
    title: 'Wildlife Safaris',
    description: 'Discover breathtaking landscapes and the Big Five in the beautiful savannahs of Akagera National Park.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2668&auto=format&fit=crop',
    duration: '1-3 Days',
    location: 'Akagera NP',
  },
  {
    id: 4,
    title: 'Cultural Experiences',
    description: 'Immerse yourself in Rwandan traditions, dance, art, and local community life.',
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2672&auto=format&fit=crop',
    duration: 'Flexible',
    location: 'Various Locations',
  },
];

export default function Tours() {
  return (
    <section id="tours" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-semibold tracking-wider uppercase text-sm"
          >
            Curated Experiences
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl md:text-5xl font-serif font-bold text-brand-green-dark"
          >
            Unforgettable Tours
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600"
          >
            Whether you're seeking urban exploration, cultural immersion, or wild adventures, we have the perfect journey for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 font-medium">
                  <div className="flex items-center gap-1">
                    <Clock size={14} className="text-brand-gold" />
                    {tour.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} className="text-brand-gold" />
                    {tour.location}
                  </div>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">
                  {tour.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {tour.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <a href="#contact" className="text-sm font-semibold text-brand-green hover:text-brand-gold transition-colors">
                    Learn More
                  </a>
                  <a
                    href="#contact"
                    className="w-8 h-8 rounded-full bg-brand-green/5 text-brand-green flex items-center justify-center group-hover:bg-brand-gold group-hover:text-white transition-colors"
                  >
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

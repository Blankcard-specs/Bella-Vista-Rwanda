import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    location: 'United Kingdom',
    text: 'A fantastic tour guide! Bella Vista made our trip to Kigali absolutely seamless. Authentic and stress-free adventure from start to finish.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Singapore',
    text: 'Handles everything with a personal touch. The gorilla trekking experience was perfectly organized. Highly recommend their services!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    location: 'Spain',
    text: 'Deep knowledge of the local culture and history. We felt safe, welcomed, and truly got to experience the real Rwanda.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-semibold tracking-wider uppercase text-sm"
          >
            Social Proof
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl md:text-5xl font-serif font-bold text-brand-green-dark"
          >
            Trusted by Travelers
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 flex items-center justify-center gap-2"
          >
            <div className="flex text-brand-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
            </div>
            <span className="text-lg font-medium text-gray-900">5.0 Rating</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="bg-brand-bg p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-6 right-6 text-brand-gold/20" size={48} />
              
              <div className="flex text-brand-gold mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-8 relative z-10 leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-white font-serif font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

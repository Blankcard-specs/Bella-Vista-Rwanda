import { motion } from 'motion/react';

const images = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Silverback_Mountain_Gorilla.jpg/1024px-Silverback_Mountain_Gorilla.jpg',
    title: 'Gorilla Trekking',
    span: 'col-span-1 md:col-span-2 row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2572&auto=format&fit=crop',
    title: 'Tea Plantations',
    span: 'col-span-1 row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=2671&auto=format&fit=crop',
    title: 'Kigali City',
    span: 'col-span-1 row-span-1',
  },
  {
    url: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2672&auto=format&fit=crop',
    title: 'Cultural Dance',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold font-semibold tracking-wider uppercase text-sm"
          >
            Visual Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl md:text-5xl font-serif font-bold text-brand-green-dark"
          >
            Experience Rwanda
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600"
          >
            See what awaits you in the heart of Africa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 p-6 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-serif font-bold text-2xl">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Phone, MapPin, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-gold font-semibold tracking-wider uppercase text-sm"
            >
              Get in Touch
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-4xl md:text-5xl font-serif font-bold text-brand-green-dark mb-8"
            >
              Plan Your Trip Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg mb-10"
            >
              Ready to explore Rwanda? Contact us to start planning your personalized, stress-free adventure.
            </motion.p>

            <div className="space-y-6 mb-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-brand-green/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-brand-green" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Phone / WhatsApp</h4>
                  <a href="tel:+250793772634" className="text-gray-600 hover:text-brand-gold transition-colors text-lg">
                    0793 772 634
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-brand-green/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-brand-green" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Location</h4>
                  <p className="text-gray-600 text-lg">Kigali, Rwanda</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-brand-green/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-brand-green" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                  <a href="mailto:info@bellavistarwanda.com" className="text-gray-600 hover:text-brand-gold transition-colors text-lg">
                    info@bellavistarwanda.com
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="h-64 rounded-2xl overflow-hidden shadow-md border border-gray-100"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127642.12282299878!2d30.01018894178556!3d-1.9440727000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali%2C%20Rwanda!5e0!3m2!1sen!2sus!4v1709664000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-brand-bg p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">Request a Booking</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all bg-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all bg-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone / WhatsApp</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all bg-white"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">Tour Interest</label>
                <select
                  id="interest"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all bg-white appearance-none"
                >
                  <option value="">Select an option</option>
                  <option value="kigali">Kigali City Tour</option>
                  <option value="cultural">Cultural Experience</option>
                  <option value="adventure">Adventure & Nature</option>
                  <option value="custom">Custom Private Tour</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-gold focus:border-transparent outline-none transition-all bg-white resize-none"
                  placeholder="Tell us about your travel plans, dates, or special requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-brand-green hover:bg-brand-green-light text-white font-medium rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Send Request
                <Send size={18} />
              </button>
              
              <p className="text-xs text-center text-gray-500 mt-4">
                We typically respond within 24 hours. For immediate assistance, please use WhatsApp.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

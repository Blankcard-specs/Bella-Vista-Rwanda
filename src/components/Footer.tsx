import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-green-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="text-2xl font-serif font-bold tracking-tight mb-6">
              Bella Vista <span className="text-brand-gold">Rwanda</span>
            </div>
            <p className="text-white/70 max-w-md mb-8 leading-relaxed">
              Premium tour guide and travel experience service based in Kigali, Rwanda. Discover the Land of a Thousand Hills with authenticity, personalization, and care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-white/70 hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#tours" className="text-white/70 hover:text-brand-gold transition-colors">Tours & Experiences</a></li>
              <li><a href="#about" className="text-white/70 hover:text-brand-gold transition-colors">Why Choose Us</a></li>
              <li><a href="#reviews" className="text-white/70 hover:text-brand-gold transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-brand-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4 text-white/70">
              <li>Kigali, Rwanda</li>
              <li><a href="tel:+250793772634" className="hover:text-brand-gold transition-colors">0793 772 634</a></li>
              <li><a href="mailto:info@bellavistarwanda.com" className="hover:text-brand-gold transition-colors">info@bellavistarwanda.com</a></li>
            </ul>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block px-6 py-3 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white font-medium rounded-full transition-all"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Bella Vista Rwanda. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

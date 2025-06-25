
import { Link } from 'react-router-dom';
import { Instagram, Play } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-light-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-playfair font-bold text-charcoal">
              H & N House of Beauty
            </h3>
            <p className="text-charcoal/70">
              Where we offer exquisite beauty services in Brackenhurst, Alberton
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/hnhouseofbeauty"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold/80 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-charcoal">
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link to="/services" className="block text-charcoal/70 hover:text-gold transition-colors">
                Services
              </Link>
              <Link to="/gallery" className="block text-charcoal/70 hover:text-gold transition-colors">
                Gallery
              </Link>
              <Link to="/about" className="block text-charcoal/70 hover:text-gold transition-colors">
                About Us
              </Link>
              <Link to="/book" className="block text-charcoal/70 hover:text-gold transition-colors">
                Book Appointment
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-playfair font-semibold text-charcoal">
              Contact
            </h4>
            <div className="space-y-2 text-charcoal/70">
              <p>106 Hennie Alberts Street</p>
              <p>Brackenhurst, Alberton</p>
              <p>Phone: 063 859 2913</p>
              <p>WhatsApp: 060 416 6801</p>
              <p>Email: hnhouseofbeauty@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 pt-8 text-center">
          <p className="text-charcoal/60">
            © 2024 H & N House of Beauty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

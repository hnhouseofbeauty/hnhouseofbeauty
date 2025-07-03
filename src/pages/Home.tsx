import { Link } from 'react-router-dom';
import { Play, Star, Sparkles, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect } from 'react';
const Home = () => {
  useScrollAnimation();
  useEffect(() => {
    // Add animation classes to elements after mount
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-in-view');
        }, index * 100);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  const services = [{
    title: 'Manicure',
    description: 'Professional nail care and beautiful designs',
    icon: <Sparkles className="w-8 h-8 text-gold" />
  }, {
    title: 'Lashes',
    description: 'Extensions, lifts, and tinting services',
    icon: <Eye className="w-8 h-8 text-gold" />
  }, {
    title: 'Massages',
    description: 'Relaxing therapeutic massage treatments',
    icon: <Heart className="w-8 h-8 text-gold" />
  }];
  return <div className="pt-16 w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-light-beige/30 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="text-center lg:text-left animate-fade-in-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-charcoal mb-6 leading-tight">
                Fall in Love With Your Beauty
              </h1>
              <div className="gold-divider lg:mx-0"></div>
              <p className="text-lg md:text-xl text-charcoal/70 mb-8 leading-relaxed">
                Welcome to H & N House of Beauty, where we offer exquisite beauty services in Brackenhurst, Alberton. Our skilled professionals are dedicated to enhancing your natural beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild className="bg-gold hover:bg-gold/90 text-white px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300">
                  <Link to="/book">Book Appointment</Link>
                </Button>
                <Button asChild variant="ghost" className="text-gold hover:text-gold/80 px-8 py-6 text-lg transform hover:scale-105 transition-all duration-300">
                  <Link to="/services">
                    <Play className="mr-2" size={20} />
                    Explore
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex justify-center animate-fade-in-right">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-gold/30 shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <img src="/lovable-uploads/c8018738-588a-49e2-bb14-5ff59094e4d5.png" alt="H & N House of Beauty salon interior" className="w-full h-full object-cover" loading="eager" decoding="sync" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-12 bg-white border-y border-gold/20 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center animate-fade-in-up">
            <div className="animate-stagger-1">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-gold fill-current transform hover:scale-110 transition-transform duration-300" />)}
              </div>
              <div className="text-lg font-playfair font-semibold text-charcoal">5 Star Reviews on Google</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gold/30"></div>
            <div className="animate-stagger-2">
              <div className="text-3xl font-playfair font-bold text-gold">#1</div>
              <div className="text-charcoal/70">Choice in the Area</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-20 bg-light-beige/50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
              What We Provide
            </h2>
            <div className="gold-divider"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => <div key={index} className={`service-card animate-scale-in animate-stagger-${index + 1} text-center hover:shadow-2xl transition-all duration-500`}>
                <div className="flex justify-center mb-4 transform hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-2xl font-playfair font-bold text-charcoal mb-3">{service.title}</h3>
                <p className="text-charcoal/70">{service.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Who Are We */}
      <section className="py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-playfair font-bold text-charcoal mb-6">
                Who Are We?
              </h2>
              <div className="gold-divider lg:mx-0"></div>
              <p className="text-lg text-charcoal/70 mb-6 leading-relaxed">
                Welcome to our house of beauty, where luxury meets expertise. We are passionate professionals dedicated to bringing out your natural radiance through our comprehensive beauty services.
              </p>
              <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
                Our team combines years of experience with the latest techniques to ensure you receive the highest quality care in a relaxing, welcoming environment.
              </p>
              <Button asChild className="bg-gold hover:bg-gold/90 text-white px-6 py-3 rounded-full transform hover:scale-105 transition-all duration-300">
                <Link to="/about">Come Visit Us</Link>
              </Button>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="flex justify-center">
                <div className="rounded-lg overflow-hidden shadow-xl bg-white p-8 transform hover:scale-105 transition-all duration-500">
                  <img src="/lovable-uploads/1c2344fe-4815-4661-a0b2-1cf3d682f5b5.png" alt="H & N House of Beauty Logo" className="w-full h-96 object-contain" loading="eager" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-light-beige w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
              What Our Clients Say
            </h2>
            <div className="gold-divider"></div>
          </div>
          
          <div className="animate-scale-in">
            <div className="testimonial-card max-w-2xl mx-auto text-center transform hover:scale-105 transition-all duration-500">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-gold fill-current transform hover:scale-110 transition-transform duration-300" />)}
              </div>
              <p className="text-lg text-charcoal/80 mb-4 italic">
                "Amazing service and beautiful results! I always leave feeling pampered and gorgeous."
              </p>
              <p className="font-semibold text-charcoal">- Google review  by Khwezi Ngobeni</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-gold w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Ready to feel gorgeous?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book your appointment on WhatsApp for instant confirmation
          </p>
          <Button asChild className="bg-white text-gold hover:bg-white/90 px-8 py-6 text-lg rounded-full font-semibold transform hover:scale-105 transition-all duration-300">
            <a href="https://wa.me/+27123456789?text=Hi, I'd like to book an appointment at H & N House of Beauty" target="_blank" rel="noopener noreferrer">
              Book on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>;
};
export default Home;
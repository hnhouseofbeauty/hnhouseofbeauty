
import { Link } from 'react-router-dom';
import { Play, Star, Sparkles, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const Home = () => {
  const services = [
    {
      title: 'Manicure',
      description: 'Professional nail care and beautiful designs',
      icon: <Sparkles className="w-8 h-8 text-gold" />
    },
    {
      title: 'Lashes',
      description: 'Extensions, lifts, and tinting services', 
      icon: <Eye className="w-8 h-8 text-gold" />
    },
    {
      title: 'Massages',
      description: 'Relaxing therapeutic massage treatments',
      icon: <Heart className="w-8 h-8 text-gold" />
    }
  ];

  return (
    <div className="pt-16 w-full">
      {/* Hero Section - Optimized for fast loading */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-light-beige/30 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="text-center lg:text-left animate-on-scroll">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-charcoal mb-6 leading-tight">
                Fall in Love With Your Beauty
              </h1>
              <div className="gold-divider lg:mx-0"></div>
              <p className="text-lg md:text-xl text-charcoal/70 mb-8 leading-relaxed">
                Welcome to H & N House of Beauty, where we offer exquisite beauty services in Brackenhurst, Alberton. Our skilled professionals are dedicated to enhancing your natural beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild className="bg-gold hover:bg-gold/90 text-white px-8 py-6 text-lg rounded-full">
                  <Link to="/book">Book Appointment</Link>
                </Button>
                <Button variant="ghost" className="text-gold hover:text-gold/80 px-8 py-6 text-lg">
                  <Play className="mr-2" size={20} />
                  Explore
                </Button>
              </div>
            </div>

            {/* Right Column - Updated with salon interior image */}
            <div className="flex justify-center animate-on-scroll">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-gold/30 shadow-2xl">
                  <img
                    src="/lovable-uploads/c8018738-588a-49e2-bb14-5ff59094e4d5.png"
                    alt="H & N House of Beauty salon interior"
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="sync"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-12 bg-white border-y border-gold/20 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center">
            <div className="animate-on-scroll">
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-gold fill-current" />
                ))}
              </div>
              <div className="text-lg font-playfair font-semibold text-charcoal">5 Star Reviews on Google</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gold/30"></div>
            <div className="animate-on-scroll">
              <div className="text-3xl font-playfair font-bold text-gold">#1</div>
              <div className="text-charcoal/70">Choice in the Area</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-20 bg-light-beige/50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
              What We Provide
            </h2>
            <div className="gold-divider"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card animate-on-scroll text-center">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-2xl font-playfair font-bold text-charcoal mb-3">{service.title}</h3>
                <p className="text-charcoal/70">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Are We */}
      <section className="py-20 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
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
              <Button asChild className="bg-gold hover:bg-gold/90 text-white px-6 py-3 rounded-full">
                <Link to="/about">Come Visit Us</Link>
              </Button>
            </div>
            
            <div className="animate-on-scroll">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Beauty salon interior"
                  className="w-full h-96 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-light-beige w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
              What Our Clients Say
            </h2>
            <div className="gold-divider"></div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="testimonial-card max-w-2xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>
              <p className="text-lg text-charcoal/80 mb-4 italic">
                "Amazing service and beautiful results! I always leave feeling pampered and gorgeous."
              </p>
              <p className="font-semibold text-charcoal">- Happy Client</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-gold w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">
            Ready to feel gorgeous?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Book your appointment on WhatsApp for instant confirmation
          </p>
          <Button 
            asChild 
            className="bg-white text-gold hover:bg-white/90 px-8 py-6 text-lg rounded-full font-semibold"
          >
            <a 
              href="https://wa.me/+27123456789?text=Hi, I'd like to book an appointment at H & N House of Beauty"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;

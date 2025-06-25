
import { Link } from 'react-router-dom';
import { Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const Home = () => {
  const services = [
    {
      title: 'Manicure',
      description: 'Professional nail care and beautiful designs',
      icon: '💅'
    },
    {
      title: 'Lashes',
      description: 'Extensions, lifts, and tinting services', 
      icon: '👁️'
    },
    {
      title: 'Massages',
      description: 'Relaxing therapeutic massage treatments',
      icon: '💆'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-light-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

            {/* Right Column */}
            <div className="flex justify-center animate-on-scroll">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-gold/30 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Beautiful woman"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="py-12 bg-white border-y border-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center">
            <div className="animate-on-scroll">
              <div className="text-3xl font-playfair font-bold text-gold">20+</div>
              <div className="text-charcoal/70">Years of Experience</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gold/30"></div>
            <div className="animate-on-scroll">
              <div className="text-3xl font-playfair font-bold text-gold">3k+</div>
              <div className="text-charcoal/70">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-20 bg-light-beige/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
              What We Provide
            </h2>
            <div className="gold-divider"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Who Are We */}
      <section className="py-20 bg-white">
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
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-light-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-4">
              What Our Clients Say
            </h2>
            <div className="gold-divider"></div>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-gold">
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

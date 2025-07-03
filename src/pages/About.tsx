
import { Sparkles, Heart, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect } from 'react';

const About = () => {
  useScrollAnimation();

  useEffect(() => {
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

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-light-beige/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-charcoal mb-6 animate-fade-in-up">
            About Us
          </h1>
          <div className="gold-divider"></div>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto animate-fade-in-up animate-stagger-1">
            Meet the passionate professionals behind H & N House of Beauty
          </p>
        </div>
      </section>

      {/* Stylist Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center animate-fade-in-left">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-gold/30 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-500">
                  <img
                    src="/lovable-uploads/54a810be-647d-41f9-82bd-53e68497baaa.png"
                    alt="Nthabi - Founder & Stylist"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="animate-fade-in-right">
              <h2 className="text-4xl font-playfair font-bold text-charcoal mb-6">
                Hey there,
              </h2>
              <div className="gold-divider lg:mx-0"></div>
              
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p className="hover:text-charcoal transition-colors duration-300">
                  I'm Nthabi, your go-to stylist for nails, lashes, makeup, and massages. At H & N House of Beauty, 
                  we're all about enhancing your natural beauty and giving you a moment of relaxation.
                </p>
                
                <p className="hover:text-charcoal transition-colors duration-300">
                  Let's glam up your nails, frame your eyes, and make your features pop with tailored makeup. 
                  And of course, unwind with our soothing massages.
                </p>
                
                <p className="hover:text-charcoal transition-colors duration-300">
                  Your beauty and well-being are my top priorities.
                </p>
                
                <p className="font-semibold text-charcoal">
                  See you soon,<br />
                  Nthabi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-light-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-playfair font-bold text-charcoal mb-6">
              Our Values
            </h2>
            <div className="gold-divider"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-scale-in animate-stagger-1 hover:transform hover:scale-105 transition-all duration-500">
              <div className="flex justify-center mb-4">
                <Sparkles className="w-12 h-12 text-gold hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-4">Excellence</h3>
              <p className="text-charcoal/70 hover:text-charcoal transition-colors duration-300">
                We strive for perfection in every service, ensuring each client receives exceptional care and results.
              </p>
            </div>
            
            <div className="text-center animate-scale-in animate-stagger-2 hover:transform hover:scale-105 transition-all duration-500">
              <div className="flex justify-center mb-4">
                <Heart className="w-12 h-12 text-gold hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-4">Care</h3>
              <p className="text-charcoal/70 hover:text-charcoal transition-colors duration-300">
                Your comfort and satisfaction are our top priorities. We create a nurturing environment for all.
              </p>
            </div>
            
            <div className="text-center animate-scale-in animate-stagger-3 hover:transform hover:scale-105 transition-all duration-500">
              <div className="flex justify-center mb-4">
                <Star className="w-12 h-12 text-gold hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-4">Innovation</h3>
              <p className="text-charcoal/70 hover:text-charcoal transition-colors duration-300">
                We embrace the latest techniques and trends to bring you cutting-edge beauty solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

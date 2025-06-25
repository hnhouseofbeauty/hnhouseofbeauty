
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      name: 'Manicure',
      description: 'Professional nail care with attention to detail',
      price: 'From R150',
      icon: '💅'
    },
    {
      name: 'Pedicure', 
      description: 'Relaxing foot care and beautiful nail designs',
      price: 'From R180',
      icon: '🦶'
    },
    {
      name: 'Lashes',
      description: 'Extensions, lifts, and tinting services',
      price: 'From R200',
      icon: '👁️'
    },
    {
      name: 'Make-up',
      description: 'Professional makeup for any occasion',
      price: 'From R250',
      icon: '💄'
    },
    {
      name: 'Massages',
      description: 'Therapeutic and relaxation massage treatments',
      price: 'From R300',
      icon: '💆'
    },
    {
      name: 'Skin-tag Removal',
      description: 'Safe and professional skin tag removal',
      price: 'From R100',
      icon: '🏥'
    },
    {
      name: 'Organic Skincare',
      description: 'Natural skincare treatments and facials',
      price: 'From R220',
      icon: '🌿'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-light-beige/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-charcoal mb-6 animate-on-scroll">
            Our Services
          </h1>
          <div className="gold-divider"></div>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto animate-on-scroll">
            Discover our comprehensive range of beauty services designed to enhance your natural beauty and provide the ultimate relaxation experience.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-light-beige/20 p-8 rounded-lg border border-gold/10 hover:shadow-lg transition-shadow duration-300 animate-on-scroll">
                <div className="text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-3">
                    {service.name}
                  </h3>
                  <div className="w-12 h-[1px] bg-gold mx-auto mb-4"></div>
                  <p className="text-charcoal/70 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-xl font-semibold text-gold mb-6">
                    {service.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-light-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="text-3xl font-playfair font-bold text-charcoal mb-6">
            Additional Services & Pricing
          </h2>
          <div className="gold-divider"></div>
          <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
            We offer a comprehensive list of beauty services tailored to meet your individual needs. 
            All services are performed by our skilled professionals using high-quality products. 
            Prices may vary based on specific requirements and treatment duration. 
            Contact us for detailed pricing and to discuss your beauty goals.
          </p>
          <Button asChild className="bg-gold hover:bg-gold/90 text-white px-8 py-4 rounded-full">
            <Link to="/book">Book Your Service</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;

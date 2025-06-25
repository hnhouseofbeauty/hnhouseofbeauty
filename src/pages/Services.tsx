import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Services = () => {
  const serviceCategories = [
    {
      category: 'NAILS',
      services: [
        { name: 'Fill', price: 'R270' },
        { name: 'Gel manicure', price: 'R240' },
        { name: 'Acrylic overlay', price: 'R300' },
        { name: 'Gel overlay', price: 'R280' },
        { name: 'Full set', price: 'R340' },
        { name: 'Normal paint', price: 'R100' },
        { name: 'Ombre full set', price: 'R380' },
        { name: 'Buff and shine', price: 'R120' }
      ]
    },
    {
      category: 'PEDICURE',
      services: [
        { name: 'Pedicure only', price: 'R200' },
        { name: 'Express pedicure', price: 'R240' },
        { name: 'Full pedicure', price: 'R320' },
        { name: 'Normal paint', price: 'R80' },
        { name: 'Normal paint & pedi', price: 'R80' },
        { name: 'Buff and shine + pedicure', price: 'R270' }
      ]
    },
    {
      category: 'WAXING',
      services: [
        { name: 'Brow/Lip/Chin/Nose/Ears', price: 'R80' },
        { name: 'Side burns', price: 'R80' },
        { name: 'Full face wax', price: 'R200' },
        { name: 'Under Arm', price: 'R100' },
        { name: 'Stomach Line', price: 'R100' },
        { name: 'Bikini Line', price: 'R150' },
        { name: 'Brazilian', price: 'R220' },
        { name: 'Hollywood', price: 'R250' },
        { name: 'Half leg wax', price: 'R170' },
        { name: 'Full leg wax', price: 'R250' },
        { name: 'Full Arm', price: 'R210' },
        { name: 'Back', price: 'R200' },
        { name: 'Chest', price: 'R170' }
      ]
    },
    {
      category: 'KIDS UNDER 12',
      services: [
        { name: 'Mini mani', price: 'R140' },
        { name: 'Mini pedi', price: 'R200' }
      ]
    },
    {
      category: 'SOAK OFF',
      services: [
        { name: 'Gel (Toes)', price: 'R20' },
        { name: 'Gel (Hands)', price: 'R40' },
        { name: 'Acrylic', price: 'R50' }
      ]
    },
    {
      category: 'MAKE-UP',
      services: [
        { name: 'Bridal', price: 'R380' },
        { name: 'Evening', price: 'R380' },
        { name: 'Matric', price: 'R380' },
        { name: 'Trial', price: 'R380' }
      ]
    },
    {
      category: 'MASSAGE',
      services: [
        { name: 'Foot massage (30 min)', price: 'R150' },
        { name: 'Back and Neck', price: 'R300' },
        { name: 'Full body (1 hour)', price: 'R420' }
      ]
    },
    {
      category: 'LASHES',
      services: [
        { name: 'Classic', price: 'R450' },
        { name: 'Volume', price: 'R500' },
        { name: 'Lash removal', price: 'R150' }
      ]
    },
    {
      category: 'SKIN TAGS',
      services: [
        { name: 'Removal', price: 'R550' }
      ]
    },
    {
      category: 'EXTRA',
      services: [
        { name: 'Nail Art', price: 'R10' },
        { name: 'Glitter ombre', price: 'R5' },
        { name: 'Nail repair', price: 'R30' },
        { name: 'Color change', price: 'R180' }
      ]
    }
  ];

  useEffect(() => {
    // Trigger animations for this page
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => el.classList.add('animate'));
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-16 min-h-screen">
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

      {/* Price List Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charcoal mb-4 animate-on-scroll">
              PRICELIST
            </h2>
            <div className="gold-divider"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-light-beige/20 p-6 rounded-lg border border-gold/10 animate-on-scroll">
                <h3 className="text-xl font-playfair font-bold text-gold mb-4 text-center">
                  {category.category}
                </h3>
                <div className="w-full h-[1px] bg-gold/30 mb-4"></div>
                
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex justify-between items-center">
                      <span className="text-charcoal/80 text-sm">{service.name}</span>
                      <span className="text-charcoal font-semibold text-sm">{service.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-16 bg-light-beige/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/80 backdrop-blur-sm border border-gold/20 rounded-xl p-8 shadow-lg animate-on-scroll">
            <div className="inline-block bg-gradient-to-r from-gold to-gold/80 text-white px-6 py-3 rounded-full mb-6 transform rotate-[-5deg]">
              <span className="text-2xl font-bold">20% OFF</span>
            </div>
            <h3 className="text-2xl font-playfair font-bold text-charcoal mb-4">
              Special Discount
            </h3>
            <p className="text-charcoal/70 text-lg mb-6">
              Discount for pensioners and students<br />
              <span className="text-gold font-semibold">(Tuesdays and Wednesdays)</span>
            </p>
            <div className="text-sm text-charcoal/60 italic">
              *Valid ID required. Cannot be combined with other offers.
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="text-3xl font-playfair font-bold text-charcoal mb-6">
            Additional Services & Information
          </h2>
          <div className="gold-divider"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 Gap-8 mb-8">
            <div className="bg-light-beige/20 p-6 rounded-lg">
              <h4 className="font-playfair font-semibold text-charcoal mb-3">Full Pedicure Includes</h4>
              <p className="text-charcoal/70 text-sm italic">Foot filling and mini massage</p>
            </div>
            <div className="bg-light-beige/20 p-6 rounded-lg">
              <h4 className="font-playfair font-semibold text-charcoal mb-3">Professional Service</h4>
              <p className="text-charcoal/70 text-sm">All services performed by skilled professionals using high-quality products</p>
            </div>
          </div>
          <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
            Prices may vary based on specific requirements and treatment duration. 
            Contact us for detailed information and to discuss your beauty goals.
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

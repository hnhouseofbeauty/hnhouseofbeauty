
const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-light-beige/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-charcoal mb-6 animate-on-scroll">
            About Us
          </h1>
          <div className="gold-divider"></div>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto animate-on-scroll">
            Meet the passionate professionals behind H & N House of Beauty
          </p>
        </div>
      </section>

      {/* Stylist Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center animate-on-scroll">
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-gold/30 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Nthabi - Founder & Stylist"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="animate-on-scroll">
              <h2 className="text-4xl font-playfair font-bold text-charcoal mb-6">
                Nthabi – Founder & Stylist
              </h2>
              <div className="gold-divider lg:mx-0"></div>
              
              <div className="space-y-6 text-lg text-charcoal/70 leading-relaxed">
                <p>
                  Welcome to H & N House of Beauty, where passion meets expertise. As the founder and lead stylist, 
                  I have dedicated over 20 years to perfecting the art of beauty and helping clients discover their 
                  most radiant selves.
                </p>
                
                <p>
                  My journey in the beauty industry began with a simple belief: every person deserves to feel 
                  beautiful and confident. This philosophy drives everything we do at our salon, from the carefully 
                  curated services we offer to the welcoming atmosphere we create.
                </p>
                
                <p>
                  Our team is committed to staying at the forefront of beauty trends and techniques, ensuring 
                  that every client receives the highest quality care. We specialize in manicures, pedicures, 
                  lash services, makeup artistry, therapeutic massages, and organic skincare treatments.
                </p>
                
                <p>
                  Located in the heart of Brackenhurst, Alberton, our salon is more than just a place for beauty 
                  treatments – it's a sanctuary where you can relax, rejuvenate, and rediscover your inner glow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-light-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-playfair font-bold text-charcoal mb-6">
              Our Values
            </h2>
            <div className="gold-divider"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-on-scroll">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-4">Excellence</h3>
              <p className="text-charcoal/70">
                We strive for perfection in every service, ensuring each client receives exceptional care and results.
              </p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-4">Care</h3>
              <p className="text-charcoal/70">
                Your comfort and satisfaction are our top priorities. We create a nurturing environment for all.
              </p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-4">Innovation</h3>
              <p className="text-charcoal/70">
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

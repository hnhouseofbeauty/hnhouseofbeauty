
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailSubject = `Contact Form: ${formData.subject || 'General Inquiry'}`;
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}
    `;

    const mailtoLink = `mailto:hnhouseofbeauty@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-light-beige/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-charcoal mb-6 animate-fade-in-up">
            Contact Us
          </h1>
          <div className="gold-divider"></div>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto animate-fade-in-up animate-stagger-1">
            Get in touch with our team. We're here to answer your questions and help you book your perfect beauty treatment.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            
            <Card className="text-center animate-scale-in animate-stagger-1 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardContent className="pt-6">
                <MapPin className="w-8 h-8 text-gold mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
                <h3 className="font-playfair font-semibold text-charcoal mb-2">Visit Us</h3>
                <p className="text-charcoal/70 text-sm">
                  106 Hennie Alberts Street<br />
                  Brackenhurst, Alberton
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-scale-in animate-stagger-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardContent className="pt-6">
                <Phone className="w-8 h-8 text-gold mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
                <h3 className="font-playfair font-semibold text-charcoal mb-2">Call Us</h3>
                <div className="text-charcoal/70 text-sm space-y-1">
                  <a href="https://wa.me/27638592913" target="_blank" rel="noopener noreferrer" className="block hover:text-gold transition-colors">
                    063 859 2913
                  </a>
                  <a href="https://wa.me/27604166801" target="_blank" rel="noopener noreferrer" className="text-xs hover:text-gold transition-colors block">
                    WhatsApp: 060 416 6801
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center animate-scale-in animate-stagger-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardContent className="pt-6">
                <Mail className="w-8 h-8 text-gold mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
                <h3 className="font-playfair font-semibold text-charcoal mb-2">Email Us</h3>
                <p className="text-charcoal/70 text-sm">
                  hnhouseofbeauty@gmail.com<br />
                  <span className="text-xs">We reply within 4 hours</span>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-scale-in animate-stagger-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <CardContent className="pt-6">
                <Clock className="w-8 h-8 text-gold mx-auto mb-4 hover:scale-110 transition-transform duration-300" />
                <h3 className="font-playfair font-semibold text-charcoal mb-2">Hours</h3>
                <p className="text-charcoal/70 text-sm">
                  Mon-Fri: 9AM-6PM<br />
                  Sat: 9AM-4PM<br />
                  Sun: Closed
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <Card className="animate-fade-in-left hover:shadow-xl transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-charcoal">
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Have a question? We'd love to hear from you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="focus:ring-2 focus:ring-gold transition-all duration-300"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="focus:ring-2 focus:ring-gold transition-all duration-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="focus:ring-2 focus:ring-gold transition-all duration-300"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="focus:ring-2 focus:ring-gold transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={5}
                      className="focus:ring-2 focus:ring-gold transition-all duration-300"
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gold hover:bg-gold/90 text-white py-3 rounded-full transform hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <div className="animate-fade-in-right">
              <Card className="h-full hover:shadow-xl transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair text-charcoal">
                    Find Us
                  </CardTitle>
                  <CardDescription>
                    Located in the heart of Brackenhurst, Alberton
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-96 rounded-b-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.4847889989517!2d28.111111!3d-26.238889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c1234567890%3A0x1234567890abcdef!2s106%20Hennie%20Alberts%20St%2C%20Brackenhurst%2C%20Alberton%2C%201448%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="H & N House of Beauty Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-light-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
          <h2 className="text-3xl font-playfair font-bold text-charcoal mb-8">
            Ready to Book?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
            >
              <a 
                href="https://wa.me/27604166801?text=Hi, I'd like to book an appointment at H & N House of Beauty"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" size={20} />
                WhatsApp Us
              </a>
            </Button>
            <Button 
              asChild 
              className="bg-gold hover:bg-gold/90 text-white px-8 py-6 text-lg rounded-full transform hover:scale-105 transition-all duration-300"
            >
              <a href="/book">
                Book Online
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

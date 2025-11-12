import { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
const Book = () => {
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });
  const serviceCategories = {
    'Nail Services': ['Manicure - Gel Polish', 'Manicure - Regular Polish', 'Manicure - French Polish', 'Nail Art & Design'],
    'Pedicure Services': ['Basic Pedicure', 'Spa Pedicure', 'Gel Pedicure', 'Medical Pedicure'],
    'Lash Services': ['Classic Lashes', 'Volume Lashes', 'Lash Lift & Tint', 'Lash Removal'],
    'Makeup Services': ['Special Occasion Makeup', 'Bridal Makeup', 'Makeup Lessons', 'Makeup Touch-up'],
    'Massage & Wellness': ['Relaxation Massage', 'Deep Tissue Massage', 'Hot Stone Massage', 'Reflexology'],
    'Skin Services': ['Skin-tag Removal', 'Organic Skincare Treatment', 'Facial Cleansing', 'Skin Consultation']
  };
  const timeSlots = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'];
  const handleWhatsAppBooking = () => {
    const {
      service,
      date,
      time,
      name
    } = formData;
    if (!service || !date || !time || !name) {
      alert('Please fill in at least your name, service, date, and time to proceed with WhatsApp booking.');
      return;
    }
    const message = `Hi! I'd like to book an appointment at H & N House of Beauty.

Details:
Service: ${service}
Date: ${date}
Time: ${time}
Name: ${name}
${formData.phone ? `Phone: ${formData.phone}` : ''}
${formData.notes ? `Notes: ${formData.notes}` : ''}

Please confirm my appointment. Thank you!`;
    const whatsappUrl = `https://wa.me/27604166801?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailSubject = 'New Appointment Request - H & N House of Beauty';
    const emailBody = `
New appointment request:

Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Notes: ${formData.notes}
    `;
    const mailtoLink = `mailto:hnhouseofbeauty@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
  };
  return <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-light-beige/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-charcoal mb-6 animate-on-scroll">
            Book Your Appointment
          </h1>
          <div className="gold-divider"></div>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto animate-on-scroll">
            Schedule your beauty treatment with our expert team. Choose your preferred booking method below.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Quick WhatsApp Booking */}
            <Card className="animate-on-scroll">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-playfair text-charcoal">
                  <MessageCircle className="mr-3 text-gold" size={28} />
                  Quick WhatsApp Booking
                </CardTitle>
                <CardDescription>
                  Fill in your details and book instantly via WhatsApp
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="service">Service</Label>
                  <Select onValueChange={value => setFormData({
                  ...formData,
                  service: value
                })}>
                    <SelectTrigger className="bg-white">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border shadow-lg max-h-64 overflow-y-auto">
                      {Object.entries(serviceCategories).map(([category, services]) => <div key={category}>
                          <div className="px-2 py-1.5 text-sm font-semibold text-gold bg-light-beige/50">
                            {category}
                          </div>
                          {services.map(service => <SelectItem key={service} value={service} className="pl-4">
                              {service}
                            </SelectItem>)}
                        </div>)}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Date</Label>
                    <Input type="date" value={formData.date} onChange={e => setFormData({
                    ...formData,
                    date: e.target.value
                  })} min={new Date().toISOString().split('T')[0]} className="bg-white" />
                  </div>
                  <div>
                    <Label htmlFor="time">Time</Label>
                    <Select onValueChange={value => setFormData({
                    ...formData,
                    time: value
                  })}>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border shadow-lg">
                        {timeSlots.map(time => <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input placeholder="Enter your full name" value={formData.name} onChange={e => setFormData({
                  ...formData,
                  name: e.target.value
                })} className="bg-white" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input placeholder="Your phone number" value={formData.phone} onChange={e => setFormData({
                  ...formData,
                  phone: e.target.value
                })} className="bg-white" />
                </div>

                <div>
                  <Label htmlFor="notes">Special Requests (Optional)</Label>
                  <Textarea placeholder="Any special requests or questions?" value={formData.notes} onChange={e => setFormData({
                  ...formData,
                  notes: e.target.value
                })} rows={3} className="bg-white" />
                </div>

                <Button onClick={handleWhatsAppBooking} className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg rounded-full">
                  <MessageCircle className="mr-2" size={20} />
                  Book via WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Traditional Form Booking */}
            <Card className="animate-on-scroll">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-playfair text-charcoal">
                  <Calendar className="mr-3 text-gold" size={28} />
                  Traditional Booking
                </CardTitle>
                <CardDescription>
                  Submit your appointment request via email
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="form-service">Service</Label>
                    <Select onValueChange={value => setFormData({
                    ...formData,
                    service: value
                  })}>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border shadow-lg max-h-64 overflow-y-auto">
                        {Object.entries(serviceCategories).map(([category, services]) => <div key={category}>
                            <div className="px-2 py-1.5 text-sm font-semibold text-gold bg-light-beige/50">
                              {category}
                            </div>
                            {services.map(service => <SelectItem key={service} value={service} className="pl-4">
                                {service}
                              </SelectItem>)}
                          </div>)}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="form-date">Date</Label>
                      <Input type="date" value={formData.date} onChange={e => setFormData({
                      ...formData,
                      date: e.target.value
                    })} min={new Date().toISOString().split('T')[0]} className="bg-white" />
                    </div>
                    <div>
                      <Label htmlFor="form-time">Time</Label>
                      <Select onValueChange={value => setFormData({
                      ...formData,
                      time: value
                    })}>
                        <SelectTrigger className="bg-white">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border shadow-lg">
                          {timeSlots.map(time => <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="form-name">Full Name</Label>
                    <Input placeholder="Enter your full name" value={formData.name} onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })} required className="bg-white" />
                  </div>

                  <div>
                    <Label htmlFor="form-phone">Phone Number</Label>
                    <Input placeholder="Your phone number" value={formData.phone} onChange={e => setFormData({
                    ...formData,
                    phone: e.target.value
                  })} required className="bg-white" />
                  </div>

                  <div>
                    <Label htmlFor="form-email">Email Address</Label>
                    <Input type="email" placeholder="your.email@example.com" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} required className="bg-white" />
                  </div>

                  <div>
                    <Label htmlFor="form-notes">Additional Notes</Label>
                    <Textarea placeholder="Any special requests or questions?" value={formData.notes} onChange={e => setFormData({
                    ...formData,
                    notes: e.target.value
                  })} rows={3} className="bg-white" />
                  </div>

                  <Button type="submit" className="w-full bg-gold hover:bg-gold/90 text-white py-6 text-lg rounded-full">
                    <Mail className="mr-2" size={20} />
                    Submit Booking Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-light-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
          <h2 className="text-3xl font-playfair font-bold text-charcoal mb-6">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-charcoal mb-2">Address</h3>
              <p className="text-charcoal/70">
                106 Hennie Alberts Street<br />
                Brackenhurst, Alberton
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal mb-2">Email</h3>
              <p className="text-charcoal/70">hnhouseofbeauty@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal mb-2">WhatsApp</h3>
              <p className="text-charcoal/70">+27 60 416 6801</p>
            </div>
          </div>
          <p className="text-charcoal/70">
            We typically respond to booking requests within 2-4 hours during business hours.
          </p>
        </div>
      </section>
    </div>;
};
export default Book;
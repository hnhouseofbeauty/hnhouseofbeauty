
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const Book = () => {
  const [date, setDate] = useState<Date>();
  const [selectedService, setSelectedService] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const services = [
    'Manicure',
    'Pedicure', 
    'Lashes',
    'Make-up',
    'Massages',
    'Skin-tag Removal',
    'Organic Skincare'
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hi, I'd like to book ${selectedService} on ${date ? format(date, 'PPP') : ''} at ${selectedTime}. 
    
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}`;
    
    const whatsappUrl = `https://wa.me/+27123456789?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body
    const emailBody = `
New Appointment Booking Request

Service: ${selectedService}
Date: ${date ? format(date, 'PPP') : ''}
Time: ${selectedTime}

Client Details:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
    `;

    // Create mailto link
    const mailtoUrl = `mailto:hnhouseofbeauty@gmail.com?subject=Appointment Booking - ${selectedService}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-light-beige/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-charcoal mb-6 animate-on-scroll">
            Book Appointment
          </h1>
          <div className="gold-divider"></div>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto animate-on-scroll">
            Schedule your beauty treatment with us. Choose your preferred service, date, and time.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-light-beige/20 p-8 rounded-lg border border-gold/10 animate-on-scroll">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Selection */}
              <div className="space-y-2">
                <Label htmlFor="service">Select Service</Label>
                <Select value={selectedService} onValueChange={setSelectedService}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Date Selection */}
              <div className="space-y-2">
                <Label>Select Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Selection */}
              <div className="space-y-2">
                <Label htmlFor="time">Select Time</Label>
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col space-y-4">
                <Button 
                  type="submit"
                  className="bg-gold hover:bg-gold/90 text-white w-full py-6 text-lg rounded-full"
                  disabled={!selectedService || !date || !selectedTime || !formData.name || !formData.phone}
                >
                  Book via WhatsApp
                </Button>
                
                <Button 
                  type="button"
                  onClick={handleEmailSubmit}
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-white w-full py-6 text-lg rounded-full"
                  disabled={!selectedService || !date || !selectedTime || !formData.name || !formData.phone}
                >
                  Book via Email
                </Button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-12 text-center animate-on-scroll">
            <h3 className="text-2xl font-playfair font-semibold text-charcoal mb-6">
              Contact Details
            </h3>
            <div className="space-y-2 text-charcoal/70">
              <p>📍 106 Hennie Alberts Street, Brackenhurst, Alberton</p>
              <p>📧 hnhouseofbeauty@gmail.com</p>
              <p>📱 WhatsApp bookings available</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;

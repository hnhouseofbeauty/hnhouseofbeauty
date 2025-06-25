
import { Star } from 'lucide-react';

const TestimonialCarousel = () => {
  const testimonial = {
    name: "Khwezi Ngobeni",
    text: "Absolutely amazing service! The attention to detail and professionalism at H & N House of Beauty is unmatched. I always leave feeling gorgeous and pampered.",
    rating: 5
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg animate-on-scroll">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-gold fill-current" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl text-charcoal/80 font-light italic mb-6 leading-relaxed">
            "{testimonial.text}"
          </blockquote>
          <div className="w-12 h-[1px] bg-gold mx-auto mb-4"></div>
          <cite className="text-lg font-playfair font-semibold text-charcoal">
            — {testimonial.name}
          </cite>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

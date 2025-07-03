
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

  // Updated gallery images with new uploads
  const galleryImages = [
    "/lovable-uploads/5d70c0b9-b882-430e-8195-dfecebbf9f38.png",
    "/lovable-uploads/f690cf11-3292-491d-91b5-964c8ea97848.png",
    "/lovable-uploads/9d794886-9cd2-4414-99c7-42ab2c02ed88.png",
    "/lovable-uploads/1835a09f-78ee-40a2-9e07-da06d36a59fe.png",
    "/lovable-uploads/48302d2d-10dd-4801-8b09-a3a0220826d4.png",
    "/lovable-uploads/d490a04e-835f-4566-8f30-32c210bb63bd.png",
    "/lovable-uploads/0b31003d-0f77-4db0-b3cd-90627c698981.png",
    "/lovable-uploads/6d5daaaa-7051-4a2f-bc23-9540481abca5.png",
    "/lovable-uploads/7aac1eb8-4dd9-4958-96e2-946e711f3a0c.png",
    "/lovable-uploads/b43e6c60-6e89-4152-a862-ca55445dfcbb.png",
    "/lovable-uploads/079a853d-6a9d-4b98-b990-89344ecca654.png",
    "/lovable-uploads/dbf123d1-10ff-4b4f-8673-fb31308f4a82.png",
    "/lovable-uploads/912434ed-f1e0-4e10-9cbf-f303b1eca7da.png",
    "/lovable-uploads/99712cd1-8953-414e-b6e4-ac7bb9f0bcae.png"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-light-beige/30 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-charcoal mb-6 animate-fade-in-up">
            Gallery
          </h1>
          <div className="gold-divider"></div>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto animate-fade-in-up animate-stagger-1">
            Explore our work and see the beautiful transformations we create for our valued clients.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="cursor-pointer group animate-scale-in hover:shadow-2xl transition-all duration-500"
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-square overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1} - H & N House of Beauty work`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="eager"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full animate-scale-in">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-gold transition-colors bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:scale-110 transition-all duration-300"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

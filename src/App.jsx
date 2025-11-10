import React, { useState } from 'react';
import { Facebook, Linkedin, Mail, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  // Gallery images - add more as campaign progresses
  const galleryImages = [
    { src: "https://via.placeholder.com/800x600?text=Campaign+Photo+1", alt: "Campaign event 1" },
    { src: "https://via.placeholder.com/800x600?text=Campaign+Photo+2", alt: "Campaign event 2" },
    { src: "https://via.placeholder.com/800x600?text=Campaign+Photo+3", alt: "Campaign event 3" },
    { src: "https://via.placeholder.com/800x600?text=Campaign+Photo+4", alt: "Campaign event 4" },
    { src: "https://via.placeholder.com/800x600?text=Campaign+Photo+5", alt: "Campaign event 5" },
    { src: "https://via.placeholder.com/800x600?text=Campaign+Photo+6", alt: "Campaign event 6" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header with Logo */}
      <nav className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-center">
          <img 
            src="/images/tammylogo-removebg-preview.png" 
            alt="Tammy Sherrell-Shortt Campaign Logo" 
            className="h-16 object-contain"
          />
        </div>
      </nav>

      {/* Hero Section with Headshot */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 min-h-[400px] flex flex-col md:flex-row items-end md:justify-between">
          <div className="flex justify-center md:justify-start w-full md:w-auto order-1 md:order-1">
            <img 
              src="/images/tammyphoto-removebg-preview.png" 
              alt="Tammy Sherrell-Shortt" 
              className="h-64 md:h-96 w-auto object-contain object-bottom"
            />
          </div>
          <div className="text-center md:text-left py-8 md:pb-8 w-full md:w-auto order-2 md:order-2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tammy Sherrell-Shortt</h1>
            <p className="text-xl md:text-2xl mb-2">Leadership That Listens</p>
            <p className="text-lg md:text-xl opacity-90">For NAR Leadership</p>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Tammy</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-4">
              With over [XX] years of experience in real estate, Tammy Sherrell-Shortt has demonstrated 
              unwavering commitment to our industry and community. Her leadership style focuses on 
              collaboration, transparency, and putting REALTORS® first.
            </p>
            <p className="text-lg text-gray-700">
              [Add biographical information, professional achievements, and community involvement here]
            </p>
          </div>
        </div>
      </section>

      {/* Platform/Priorities Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Priorities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Advocacy</h3>
              <p className="text-gray-700">
                Fighting for REALTOR® interests at every level and ensuring our voices are heard in policy decisions.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Education</h3>
              <p className="text-gray-700">
                Providing resources and training to help REALTORS® succeed in an evolving marketplace.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Community</h3>
              <p className="text-gray-700">
                Building stronger connections within our association and serving our local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section - Carousel */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Campaign Trail</h2>
          <p className="text-center text-gray-600 mb-8">Following Tammy's journey on the campaign</p>
          
          {/* Carousel */}
          <div className="relative">
            {/* Main Image */}
            <div className="bg-gray-200 rounded-lg overflow-hidden aspect-video">
              <img 
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Left Arrow */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>

            {/* Right Arrow */}
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
              aria-label="Next image"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Thumbnail Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentImageIndex ? 'bg-blue-900' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Social Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Connect With Tammy</h2>
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://www.facebook.com/daveandtammy2016/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition"
            >
              <Facebook size={32} />
            </a>
            <a 
              href="https://www.linkedin.com/in/tammysherrell/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition"
            >
              <Linkedin size={32} />
            </a>
            <a 
              href="mailto:sales@sherrellrealty.com"
              className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition"
            >
              <Mail size={32} />
            </a>
            <a 
              href="tel:+14176999100"
              className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition"
            >
              <Phone size={32} />
            </a>
          </div>
          <div className="bg-blue-900 text-white rounded-lg p-8 inline-block">
            <h3 className="text-2xl font-bold mb-4">Visit Sherrell Realty</h3>
            <p className="text-lg mb-6">
              Learn more about Tammy's professional real estate services
            </p>
            <a 
              href="https://www.sherrellrealty.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              View Real Estate Services
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Tammy Sherrell-Shortt Campaign. All rights reserved.</p>
        <p className="text-sm mt-2 opacity-75">Paid for by Friends of Tammy Sherrell-Shortt</p>
      </footer>
    </div>
  );
}
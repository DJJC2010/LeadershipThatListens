import React, { useState, useEffect } from 'react';
import { Facebook, Linkedin, Mail, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  // Gallery images - add more as campaign progresses
  const galleryImages = [
    { src: "/images/IMG_01.jpg", alt: "Campaign event 1" },
    { src: "/images/IMG_02.jpg", alt: "Campaign event 2" },
    { src: "/images/IMG_03.jpg", alt: "Campaign event 3" },
    { src: "/images/IMG_04.jpg", alt: "Campaign event 4" },
    { src: "/images/IMG_05.jpg", alt: "Campaign event 5" },
    { src: "/images/IMG_06.jpg", alt: "Campaign event 6" },
    { src: "/images/IMG_07.jpg", alt: "Campaign event 7" },
    { src: "/images/IMG_08.jpg", alt: "Campaign event 8" },
    { src: "/images/IMG_09.jpg", alt: "Campaign event 9" },
    { src: "/images/IMG_10.jpg", alt: "Campaign event 10" },
    { src: "/images/IMG_11.jpg", alt: "Campaign event 11" },
    { src: "/images/IMG_12.jpg", alt: "Campaign event 12" },
    { src: "/images/IMG_13.jpg", alt: "Campaign event 13" },
    { src: "/images/IMG_14.jpg", alt: "Campaign event 14" },
    { src: "/images/IMG_15.jpg", alt: "Campaign event 15" },
    { src: "/images/IMG_16.jpg", alt: "Campaign event 16" },
    { src: "/images/IMG_17.jpg", alt: "Campaign event 17" },
    { src: "/images/IMG_18.jpg", alt: "Campaign event 18" },
    { src: "/images/IMG_19.jpg", alt: "Campaign event 19" },
    { src: "/images/IMG_20.jpg", alt: "Campaign event 20" },
    { src: "/images/IMG_21.JPG", alt: "Campaign event 21" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 4 seconds between slides

    return () => clearInterval(interval);
  }, [galleryImages.length, isPaused]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
<div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
  {/* Combined Header/Hero Section - White Background */}
 <header className="bg-white shadow-md relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-end justify-center gap-4 md:gap-0 lg:gap-0 py-6 md:py-0 md:-mb-0">
      {/* Logo on Right - Flush Bottom */}
      <div className="flex overflow-hidden max-h-80 md:max-h-96 lg:max-h-[400px]">
        <img 
          src="/images/tammylogo_update.png" 
          alt="Leadership That Listens" 
          className="h-auto w-full md:w-80 lg:w-96 object-contain block"
        />
      </div>
      
      {/* Headshot on Left */}
      <div className="flex overflow-hidden">
        <img 
          src="/images/tammyphoto-removebg-preview.png" 
          alt="Tammy Sherrell-Shortt" 
          className="h-64 md:h-96 lg:h-[400px] w-auto block"
        />
      </div>
      
      
    </div>
  </header>

    {/* Platform/Priorities Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Key Priorities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Advocacy</h3>
              <p className="text-gray-700">
                Fighting for REALTOR® interests at every level and ensuring our voices are heard in policy decisions.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-red-600">
              <h3 className="text-xl font-semibold text-red-600 mb-3">Education</h3>
              <p className="text-gray-700">
                Providing resources and training to help REALTORS® succeed in an evolving marketplace.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-yellow-500">
              <h3 className="text-xl font-semibold text-yellow-600 mb-3">Community</h3>
              <p className="text-gray-700">
                Building stronger connections within our association and serving our local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Tammy Sherrell Shortt</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-md text-gray-700 mb-4">
              Tammy is an accomplished REALTOR®, Broker/Owner, and respected industry leader with over two decades of experience in Missouri real estate. After opening her own real estate office in 2007, Tammy quickly established a reputation for professionalism, integrity, and her extensive knowledge of the markets she serves. Her background in the title and mortgage industry gives her a unique ability to guide clients confidently through every step of the home buying and selling process.
            </p>
            <p className="text-md text-gray-700 mb-4">
              More than a businesswoman, Tammy believes in relationships built on trust. Many of her clients become lifelong friends — a reflection of her genuine care, attentive service, and belief that real estate is as much about people as it is about property.
            </p>
            <p className="text-md text-gray-700 mb-4">
              Within the REALTOR® community, Tammy is deeply engaged in leadership and advocacy. She served as Women's Council of Realtors MO State President in 2022 and worked to build and inspire others across the state. She most recently served as <b>Chair of the Missouri REALTORS® Strategic Planning Committee</b>, sits on the <b>Professional Standards Committee</b>, and serves as a State Political Coordinator for State Representative Holly Jones. A proud <b>Golden R® investor, President's Circle Member</b>, and <b>Missouri REALTORS® Hall of Fame inductee (Class of 2026)</b>, Tammy exemplifies the values of commitment, service, and forward-thinking leadership.

            </p>
            <p className="text-md text-gray-700 mb-4">
              Tammy's leadership philosophy is grounded in listening first, leading with integrity, and empowering others to succeed. She is passionate about mentoring fellow REALTORS®, upholding ethical practices, and ensuring that Missouri REALTORS® continues to thrive for generations to come
            </p>
            <p className="text-md text-gray-700 mb-4">
              Aside from real estate, Tammy stays involved with her community by serving at her church, HavaHeart Rescue, and other organizations in the community. Tammy enjoys free time boating at Table Rock Lake, reading, and traveling with her husband, Dave and other family and friends
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section - Carousel with Auto-Scroll */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Campaign Trail</h2>
          <p className="text-center text-gray-600 mb-8">Following Tammy's journey on the campaign</p>
          
          {/* Carousel - Pauses on hover */}
          <div 
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Main Image */}
            <div className="bg-gray-200 rounded-lg overflow-hidden" style={{height:'500px'}}>
              <img 
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                className="w-full h-full object-contain bg-gray-100"
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
                  index === currentImageIndex 
                    ? index % 3 === 0 ? 'bg-blue-600' : index % 3 === 1 ? 'bg-red-600' : 'bg-yellow-500'
                    : 'bg-gray-300 hover:bg-gray-400'
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
              href="https://www.facebook.com/people/Tammy-For-Treasurer-2028/61583293354065/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition"
            >
              <Facebook size={32} />
            </a>
            <a 
              href="https://linkedin.com" 
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
            <h3 className="text-2xl font-bold mb-4">Visit Tammy's Real Estate Page</h3>
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
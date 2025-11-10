import React from 'react';
import { Facebook, Linkedin, Mail, Phone } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="bg-blue-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Tammy Sherrell-Shortt</h1>
          <p className="text-2xl mb-2">Leadership That Listens</p>
          <p className="text-xl opacity-90">For NAR Leadership</p>
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

      {/* Contact/Social Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Connect With Tammy</h2>
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="https://facebook.com" 
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
              href="mailto:contact@example.com"
              className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition"
            >
              <Mail size={32} />
            </a>
            <a 
              href="tel:+15551234567"
              className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition"
            >
              <Phone size={32} />
            </a>
          </div>
          <div className="bg-blue-900 text-white rounded-lg p-8 inline-block">
            <h3 className="text-2xl font-bold mb-4">Support Leadership That Listens</h3>
            <p className="text-lg mb-6">
              Join us in building a stronger future for REALTORS®
            </p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Learn More
            </button>
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
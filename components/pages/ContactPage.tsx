'use client';

import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
export default function ContactPage() {
  const phoneNumber = "+971589867555";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+/g, "")}`;

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#111111' }}>
              Connect <span style={{ color: '#C9A24A' }}>With Us</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Reach out to us for professional guidance and support for your business requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#111111' }}>
                Get in <span style={{ color: '#C9A24A' }}>Touch</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#C9A24A' }}>
                    <Phone className="w-6 h-6" style={{ color: '#111111' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#111111' }}>Phone</h3>
                    <a href="tel:+971589867555" className="text-gray-600 hover:text-gray-900 transition-colors block">
                      +971 58 986 7555
                    </a>
                    <p className="text-gray-600">Available Mon-Fri, 9AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#C9A24A' }}>
                    <Mail className="w-6 h-6" style={{ color: '#111111' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#111111' }}>Email</h3>
                    <a href="mailto:info@travelaxis.me" className="text-gray-600 hover:text-gray-900 transition-colors block">
                      info@travelaxis.me
                    </a>
                    <p className="text-gray-600">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#C9A24A' }}>
                    <MapPin className="w-6 h-6" style={{ color: '#111111' }} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#111111' }}>Address</h3>
                    <p className="text-gray-600">Dubai, United Arab Emirates</p>
                    <p className="text-gray-600">Visit by appointment</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-lg" style={{ backgroundColor: '#F5F5F5' }}>
                <h3 className="font-semibold mb-2" style={{ color: '#111111' }}>Business Hours</h3>
                <div className="space-y-1 text-gray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp Contact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="rounded-lg p-8 shadow-sm" style={{ backgroundColor: '#F5F5F5' }}>
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#25D366' }}>
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#111111' }}>
                    Chat with us on <span style={{ color: '#C9A24A' }}>WhatsApp</span>
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Get instant responses to your queries. Our team is ready to assist you with all your business needs.
                  </p>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-3 px-8 py-4 rounded-lg transition-all hover:opacity-90 font-semibold text-lg"
                  style={{ backgroundColor: '#25D366', color: '#FFFFFF' }}
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Start WhatsApp Chat</span>
                </a>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Click to open WhatsApp and message us directly
                  </p>
                  <p className="text-sm font-semibold mt-2" style={{ color: '#111111' }}>
                    +971 58 986 7555
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-lg text-center" style={{ backgroundColor: '#111111' }}>
                <h3 className="font-semibold mb-3" style={{ color: '#C9A24A' }}>
                  Why Contact Us?
                </h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>✓ Quick response time</li>
                  <li>✓ Professional consultation</li>
                  <li>✓ Expert business guidance</li>
                  <li>✓ Personalized support</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg"
            style={{ height: '400px', backgroundColor: '#E5E5E5' }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-4" style={{ color: '#C9A24A' }} />
                <p className="text-gray-600">Map Location</p>
                <p className="text-sm text-gray-500">Dubai, UAE</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
import React from "react";
import { Mail, Phone , MapPin  } from 'lucide-react';

export default function Contact() {
  return (
    <section
      className="w-full bg-gray-50 py-12 px-4 md:px-8 pt-28"
      id="contact"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Side: Info + Map */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-headingColor">
            Get in Touch
          </h2>
          <p className="text-textColor text-sm md:text-base">
            We'd love to hear from you. Reach out to us using the details below
            or send us a message.
          </p>

          <div className="space-y-3 text-textColor">
            <span className="flex items-center gap-2 text-sm md:text-base">
              <Mail size={18} />
              sagenpowerctg@gmail.com
            </span>
            <span className="flex items-center gap-2 text-sm md:text-base">
              <Phone size={18} />
              012483433434
            </span>
            <span className="flex items-center gap-2 text-sm md:text-base">
              <MapPin size={18} />
              Dhaka, Bangladesh
            </span>
          </div>

          <div className="w-full h-64">

            <iframe title="location map" className="w-full h-full border border-gray-300 rounded-sm" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34059.66108959588!2d91.80696746788797!3d22.368576650182526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd883de5d7c91%3A0xf7af0db5aecdf45b!2sMuradpur%2C%20Chittagong!5e1!3m2!1sen!2sbd!4v1743845022318!5m2!1sen!2sbd" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <h3 className="text-2xl font-semibold text-headingColor">
            Contact Form
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-textColor mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full text-sm md:text-base px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-textColor mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 text-sm md:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-textColor mb-1">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full px-4 py-2 text-sm md:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-buttonBg text-white py-2 text-sm md:text-base rounded hover:bg-buttonBgHover transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

import React, { useRef } from "react";
import { Mail, PhoneCall, MapPin, Clock } from "lucide-react";
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from "react-toastify";

export default function Contact() {
  const form = useRef(); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_hbf3kqf",        // ✅ Your service ID
      "template_47pgt7e",       // ✅ Your template ID (update if different)
      form.current,             // ✅ Pass the ref here
      "M1hoM9fnO-GC5RnNA"       // ✅ Your public key
    ).then(
      (result) => {
        toast('Send message sucessfully')
        form.current.reset(); // Optionally reset form after success
      },
      (error) => {
        toast('Message not send')
      }
    );
  };

  return (
    <section
      className="w-full bg-gray-50 py-12 px-4 md:px-8 pt-28"
      id="contact"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Side: Info */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-headingColor">
            Get in Touch
          </h2>
          <p className="text-textColor text-sm md:text-base">
            We'd love to hear from you. Reach out to us using the details below
            or send us a message.
          </p>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Mail className="text-iconColor mt-1 flex-shrink-0" size={18} />
              <span className="text-sm text-gray-600">
                <span className="block text-gray-800 font-medium mb-1">
                  Email Us
                </span>
                sagenpowerctg@gmail.com
              </span>
            </div>

            <div className="flex items-start space-x-3">
              <PhoneCall
                className="text-iconColor mt-1 flex-shrink-0"
                size={18}
              />
              <div className="text-sm text-gray-600">
                <span className="block text-gray-800 font-medium mb-1">
                  Call Us
                </span>
                <div className="flex flex-col gap-2">
                <a href="tel:+880 1854667543" className="hover:underline">+880 18722298765</a>
                <a href="tel:+880 1832359227" className="hover:underline">+880 1832359227</a>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="text-iconColor mt-1 flex-shrink-0" size={18} />
              <span className="text-sm text-gray-600">
                <span className="block text-gray-800 font-medium mb-1">
                  Our Location
                </span>
                Muradpur, Chittagong, Bangladesh
              </span>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="text-iconColor mt-1 flex-shrink-0" size={18} />
              <span className="text-sm text-gray-600">
                <span className="block text-gray-800 font-medium mb-1">
                  Our Location (Dhaka office)
                </span>
                Section - 12, Block - C, Road - 11, House - 6, Pallabi, Mirpur,
                Dhaka - 1216.
              </span>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="text-iconColor mt-1 flex-shrink-0" size={18} />
              <span className="text-sm text-gray-600">
                <span className="block text-gray-800 font-medium mb-1">
                  Business Hours
                </span>
                Open daily: 9:00 AM - 6:00 PM
              </span>
            </div>
          </div>

          <div className="w-full h-64">
            <iframe
              title="location map"
              className="w-full h-full border border-gray-300 rounded-sm"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34059.66108959588!2d91.80696746788797!3d22.368576650182526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd883de5d7c91%3A0xf7af0db5aecdf45b!2sMuradpur%2C%20Chittagong!5e1!3m2!1sen!2sbd!4v1743845022318!5m2!1sen!2sbd"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <h3 className="text-2xl font-semibold text-headingColor">
            Contact Form
          </h3>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <ToastContainer/>
            <div>
              <label className="block text-sm text-textColor mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-textColor mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-textColor mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                placeholder="Your message..."
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

import { Facebook, Instagram, Linkedin, Mail, MapPin, PhoneCall, Clock } from "lucide-react";
// import Image from "next/image";
import sagenPower from "../../public/images/logo/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700">
      <div className="xl:container xl:mx-auto px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {/* Column 1: Logo & About */}
          <div className="flex flex-col">
            <div className="mb-6">
              <img
                src={sagenPower}
                alt="Sagen Power"
                width={100}
                height={40}
                className="mb-5"
              />
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Providing premium power backup & voltage control systems. We ensure quality after-sales service and deliver top solutions to meet your power needs. Open every day for your convenience.
            </p>
            <div className="mt-auto flex items-center space-x-4">
              <a 
                href="#" 
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="bg-blue-800 hover:bg-blue-900 text-white p-2 rounded-full transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="text-iconColor mt-1 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-600">
                  <span className="block text-gray-800 font-medium mb-1">Email Us</span>
                  sagenpowerctg@gmail.com
                </span>
              </div>
              
              <div className="flex items-start space-x-3">
                <PhoneCall className="text-iconColor mt-1 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-600">
                  <span className="block text-gray-800 font-medium mb-1">Call Us</span>
                  +880 1XXX-XXXXXX
                </span>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-iconColor mt-1 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-600">
                  <span className="block text-gray-800 font-medium mb-1">Our Location</span>
                  Muradpur, Chittagong, Bangladesh
                </span>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="text-iconColor mt-1 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-600">
                  <span className="block text-gray-800 font-medium mb-1">Our Location (Dhaka Office) </span>
                  Section - 12, Black - C, Road - 11, House -6, pallabi, Mirpur, Dhaka- 1216.
                </span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="text-iconColor mt-1 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-600">
                  <span className="block text-gray-800 font-medium mb-1">Business Hours</span>
                  Open daily: 9:00 AM - 6:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:ml-auto">
            <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2">Quick Links</h2>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Our Services
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Products
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Sagen Power. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-blue-600 mx-2 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 mx-2 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
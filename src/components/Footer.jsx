import { Facebook, Mail, MapPin, PhoneCall, Clock } from "lucide-react";
import { Link } from "react-router-dom";
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
                className="mb-3"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Providing premium power backup & voltage control systems. We ensure quality after-sales service and deliver top solutions to meet your power needs. Open every day for your convenience.
            </p>
              <a 
                href="https://www.facebook.com/profile.php?id=61569423832493"
                target="_blank" 
                className="bg-blue-600 hover:bg-blue-700 w-fit mt-2 text-white p-2 rounded-full transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
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
                  <div className="flex flex-col gap-2">
                    <a href="tel:+8801872229865" className="hover:underline">+8801872229865</a>
                    <a href="tel:+8801832359227" className="hover:underline">+8801832359227</a>
                  </div>
                  
                </span>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-iconColor mt-1 flex-shrink-0" size={18} />
                <span className="text-sm text-gray-600">
                  <span className="block text-gray-800 font-medium mb-1">Our Location</span>
                  1710, Sofi Manjil, Bibirhat Kacha Bazar, Hathazari Road Panchlaish, Chattogram
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
                <Link to={'/services'} className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Our Services
                </Link>
              </li>
              <li>
                <Link to={'/about'} className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to={'/contact'} className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center">
                  <span className="mr-2">›</span> Contact
                </Link>
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
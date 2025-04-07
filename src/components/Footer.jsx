import { Facebook, Instagram, Linkedin, Mail, MapPin   } from "lucide-react";
import sagenPower from "../../public/images/logo/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="xl:container xl:mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1: Logo & About */}
          <div>
            <img src={sagenPower} alt="sagen power" className="text-xs w-16 mb-5"  />
            <p className="text-sm md:text-base leading-6 md:leading-6 text-textColor">
            Provide Extra power backup & Voltage Control system. We ensure the quality after sales and service give you top solution.Everyday open.
            </p>
          </div>

          {/* Column 2: Contact Us */}
          <div>
          <h2 className="text-xl font-semibold mb-4 text-headingColor">Contact Us</h2>
          <div className="space-y-2">
                <span className="flex items-center text-sm gap-2"><Mail size={18}/>sagenpowerctg@gmail.com</span>
                <span className="flex items-center text-sm gap-2"> <MapPin size={18} /> Muradpur, Chittagong, Bangladesh</span>
          </div>
          </div>

          {/* Column 3: Follow Us */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-headingColor">Follow Us</h2>
            <p className="text-sm mb-4">Stay connected on social media:</p>
            <div className="flex items-center gap-4">
              <a href="#" target="_blank" className="hover:text-blue-600 transition">
                <Facebook size={20} />
              </a>
              <a href="#" target="_blank" className="hover:text-pink-500 transition">
                <Instagram size={20} />
              </a>
              <a href="#" target="_blank" className="hover:text-blue-800 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Sagen Power. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

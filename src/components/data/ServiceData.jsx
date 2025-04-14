
// onlie ups images 
import OnlineUPS1 from "../../../public/images/services/ups/1.jpeg";
import OnlineUPS2 from "../../../public/images/services/ups/2.jpeg";
import OnlineUPS3 from "../../../public/images/services/ups/3.jpeg";
import OnlineUPS4 from "../../../public/images/services/ups/4.jpeg";
// inverter 
import Inverter from "../../../public/images/services/inverter/1.jpeg";

import AutomaticVoltageRegulator1 from "../../../public/images/services/Automatic-voltage-Regulator/1.jpeg";
import AutomaticVoltageRegulator2 from "../../../public/images/services/Automatic-voltage-Regulator/2.jpeg";
// battery 
import Battery1 from "../../../public/images/services/Battery/1.jpeg";
import Battery2 from "../../../public/images/services/Battery/2.jpeg";
// solar 
import solar from "../../../public/images/services/solar/solar.jpeg";

const serviceData = [
  {
    id: "1",
    name: "Online UPS – Reliable Power Protection",
    description:
      "Sudden power disruptions caused by natural disasters such as typhoons, lightning strikes, or unexpected voltage drops can seriously damage sensitive equipment and software-based systems. The KSTAR Online UPS, offered by Sagen Power, delivers high-efficiency, uninterrupted power supply to safeguard your critical systems and valuable data.",
    image: [OnlineUPS1, OnlineUPS2, OnlineUPS3, OnlineUPS4],
  },
  {
    id: "2",
    name: "Power Guard Inverter – Reliable Energy Conversion",
    description:
      "The Power Guard Inverter is engineered to provide uninterrupted power supply by efficiently converting DC power into stable AC power for your equipment. Perfect for both residential and industrial applications, this inverter ensures a smooth and continuous power flow during blackouts and voltage fluctuations.",
    image: Inverter,
  },
  {
    id: "3",
    name: "SAKO SBW-120KVA Automatic Voltage Regulator",
    description:
      "The SAKO SBW-120KVA Automatic Voltage Regulator ensures a stable and consistent voltage supply for your sensitive equipment and industrial systems. It is designed to correct voltage fluctuations in real time, protecting your machines from potential damage due to under-voltage or over-voltage conditions.",
    image: [AutomaticVoltageRegulator1, AutomaticVoltageRegulator2],
  },
  {
    id: "4",
    name: "Battery",
    description:
      "Our high-performance industrial batteries are engineered to provide reliable backup power for a wide range of applications including UPS systems, solar setups, telecommunication systems, and more. Built with advanced technology, these batteries ensure long service life, high energy density, and consistent performance even in demanding environments.",
    image: [Battery1, Battery2],
  },
  {
    id: "5",
    name: "Complete Solar Power System",
    description:
      "Sagen Power provides high-quality Solar Power Systems tailored for homes, businesses, and industries. Our systems offer reliable, eco-friendly energy solutions that reduce electricity costs while supporting a greener future. We handle everything from installation to after-sales service, ensuring long-term performance and satisfaction.",
    image: solar,
  },
];

export default serviceData;

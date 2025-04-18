// onlie ups images
import OnlineUPS1 from "../../../public/images/services/ups/1.jpeg";
import OnlineUPS2 from "../../../public/images/services/ups/2.jpeg";
import OnlineUPS3 from "../../../public/images/services/ups/3.jpeg";
import OnlineUPS4 from "../../../public/images/services/ups/4.jpeg";
// inverter
import Inverter from "../../../public/images/services/inverter/1.jpeg";

import AutomaticVoltageRegulator1 from "../../../public/images/services/Automatic-voltage-Regulator/1.jpeg";
import AutomaticVoltageRegulator2 from "../../../public/images/services/Automatic-voltage-Regulator/2.jpeg";
import AutomaticVoltageRegulator3 from "../../../public/images/services/Automatic-voltage-Regulator/3.jpeg";
import AutomaticVoltageRegulator4 from "../../../public/images/services/Automatic-voltage-Regulator/4.jpeg";
// battery
import Battery1 from "../../../public/images/services/Battery/1.jpeg";
import Battery2 from "../../../public/images/services/Battery/2.jpeg";
// solar
import solar from "../../../public/images/services/solar/solar.jpeg";

const serviceData = [
  {
    id: "1",
    name: "True online ups",
    description:
      "Natural disasters such as typhoons and lightning strikes as well as power outage and instantaneous voltage drops due to sudden accidents can lead to malfunctions of software based machinery and precision instruments. Sagen power  high -efficiency online ups system help to protect critical customer systems and data from power troubles while at the same time helping to improve the global environment by reducing carbon dioxide emissions.",
    image: [OnlineUPS1, OnlineUPS2, OnlineUPS3, OnlineUPS4],
    capacity: "1 KVA - 500 KVA",
    brand:["Kstar", " , ", "Zigor"],
  },
  {
    id: "2",
    name: "Inverter",
    description:
      "Based on the lasted theory and technology of motor running and contro. Powertran inverter a new high performance vector control frequency inverter. through decoupling the motor flux current and torque current. it can achieve high rapid response and high accurate torque control. gain high precision with ore wider range control in speed control and torque control as well.",
    image: Inverter,
    capacity: "",
    brand: "",
  },
  {
    id: "3",
    name: "Automatic voltage Regulator",
    description:
      "TNS series full automatic compensated power voltage stabilizer applicant to when the power network voltage fluctuations or the load current varies, it can keep output voltage in steady state automatically.It has advantages of large capacity, high efficiency, no wave distortion, stable voltage adjustment and suitability. The input voltage, output voltage and power capacity can be customized as your requirements.",
    image: [AutomaticVoltageRegulator1, AutomaticVoltageRegulator2, AutomaticVoltageRegulator3, AutomaticVoltageRegulator4],
    capacity: "650 va - 5000 KVA",
    brand: "Sako",
  },
  {
    id: "4",
    name: "Battery",
    description:
      "Sagen power  deep cycle pdc range is purpose built for those applications which require regular and consistent cycling (charge and dis-charge). Commonly called deep cycling the oversized negative plates and a specialized paste formulation of the pdc can provide constant power for longer periods of time without shortening the life of the battery. typical applications include . Weekend or holiday homes with large electrical loads. Medium solar systems for industrial.",
    image: [Battery1, Battery2],
    capacity: "",
    brand: "",
  },
  {
    id: "5",
    name: "Complete Solar Power System",
    description:
      "Sagen Power provides high-quality Solar Power Systems tailored for homes, businesses, and industries. Our systems offer reliable, eco-friendly energy solutions that reduce electricity costs while supporting a greener future. We handle everything from installation to after-sales service, ensuring long-term performance and satisfaction.",
    image: solar,
    capacity: "",
    brand: "",
  },
];

export default serviceData;

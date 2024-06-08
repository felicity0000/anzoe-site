import { IconType } from "react-icons";
import { FaPencilRuler, FaReact, FaChartLine } from "react-icons/fa";

interface Service {
  name: string;
  description: string;
  icon: IconType;
}

const services: Service[] = [
  {
    name: "Web Design",
    description:
      "We create beautiful and user-friendly designs for your website.",
    icon: FaPencilRuler,
  },
  {
    name: "Web Development",
    description:
      "We build responsive and scalable web applications tailored to your needs.",
    icon: FaReact,
  },
  {
    name: "Data Analysis",
    description:
      "We analyze your data to provide insights and help you make informed decisions.",
    icon: FaChartLine,
  },
];

const Services = () => {
  return (
    <div id="service" className="flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center">
          <h2 className="text-black dark:text-white font-poppins font-semi-bold text-3xl py-20">
            My Services
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 ">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-md p-4 hover:-translate-y-2 transform transition">
              <div className="text-2xl mb-2 text-center">
                <service.icon />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

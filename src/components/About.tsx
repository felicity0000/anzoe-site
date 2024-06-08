import { FaGithub, FaTwitter, FaWhatsapp, FaLinkedin, FaPhone } from 'react-icons/fa';

import anzoe from "../assets/8.jpg";
import john from "../assets/2.jpg";
const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
      <div className="w-full md:w-6/12">
        <h3>About Me</h3>
        <p className="text-md text-gray-600 dark:text-gray-300">
          I am a goal-driven and motivated data analyst and full stack developer
          with a strong ability to apply technical skills to solve complex
          problems. As a collaborative team player, I am always eager to learn
          new things to enhance my skills and deliver high-quality work on time
          to meet customer expectations. My experience in internships and roles
          in web development and other IT fields has honed my technical
          abilities and professional acumen
        </p>
        <div>
            <div> <a
          href="mailto:anzoejohn@gmail.com"
          className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
        >
          anzoejohn@gmail.com
        </a></div>
       <div className="flex space-x-5">
            <a className="text-purple-900 hover:-translate-y-2 transform transition"><FaGithub/></a>
            <a className="text-sky-500 hover:-translate-y-2 transform transition"><FaTwitter/></a>
            <a className="text-green-600 hover:-translate-y-2 transform transition"><FaWhatsapp/></a>
            <a className="text-sky-700 hover:-translate-y-2 transform transition"><FaLinkedin/></a>
            <a className="text-green-500 hover:-translate-y-2 transform transition"><FaPhone/></a>
       </div>
        </div>
      </div>
        <div className="flex flex-col space-y-5 px-2 md:flex-row md:space-x-5">
      <img
        src={anzoe}
        alt="anzoe"
        className="h-full w-56 rounded-lg object-cover"
      />
      <img
        src={john}
        alt="anzoe"
        className="h-full w-56 rounded-lg object-cover hidden md:block"
      />
      </div>
    </div>
  );
};

export default About;

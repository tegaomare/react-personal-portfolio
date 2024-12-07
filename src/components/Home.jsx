import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.png';
import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-[#2C3E50] flex items-center justify-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full" data-aos="fade-up">
          <h2 className="text-4xl sm:text-7xl font-bold text-gray-200">
            <span className="text-[#178C38]">Software Engineer</span>
          </h2>
          <p className="text-gray-200 py-4 max-w-md">
              I successfully completed a full-stack web development bootcamp from May 2023 to August 2023, where I gained hands-on experience building dynamic and responsive web applications. I am proficient in developing with modern frameworks and technologies, including <span className="font-semibold text-[#178C38]">React</span>, <span className="font-semibold text-[#178C38]">Tailwind CSS</span>, <span className="font-semibold text-[#178C38]">Node.js</span>, <span className="font-semibold text-[#178C38]">Express.js</span>, and <span className="font-semibold text-[#178C38]">MongoDB</span>.
          </p>

          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#178C38] to-[#A6A2A2] cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-8 md:mt-0" data-aos="fade-left">
          <img
            src={me}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-2/5 shadow-lg border-4 border-[#178C38]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

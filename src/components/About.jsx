import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#2C3E50] text-gray-200 flex items-center justify-center"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="py-10 px-6 rounded-md bg-[#000000] bg-opacity-80 flex flex-col justify-center items-center w-11/12 md:w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-[#178C38]">
                About
              </p>
            </div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-3xl md:text-4xl font-bold" data-aos="fade-right">
              <p>Welcome to my digital space!</p>
            </div>
            <div data-aos="fade-left">
            <p className="text-lg leading-relaxed">
            Hello! I'm <span className="text-[#178C38] font-semibold">Tega</span>, a Computer Science graduate from SUNY Potsdam (May 2025) and aspiring <span className="text-[#178C38] font-semibold">Software Engineer</span>. I build user-centric web apps with <span className="font-semibold">HTML</span>, <span className="font-semibold">CSS</span>, <span className="font-semibold">JavaScript</span>, and craft back-end services in <span className="font-semibold">Java</span> (Spring Boot). Passionate about secure, scalable software development and continuous learning. Lets connect!
            </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

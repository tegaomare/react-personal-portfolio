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
                Hello! I'm <span className="text-[#178C38] font-semibold">Tega</span>, a Senior at SUNY Potsdam and an aspiring <span className="text-[#178C38] font-semibold">Software Engineer</span>. My journey in computer science has equipped me with a solid foundation in both front-end and back-end technologies. I excel in creating user-friendly interfaces with <span className="font-semibold">HTML</span>, <span className="font-semibold">CSS</span>, and <span className="font-semibold">JavaScript</span>, and I'm proficient in <span className="font-semibold">Java</span> for server-side solutions. I'm passionate about leveraging my skills to develop secure, scalable web applications and committed to continuous learning in the ever-evolving tech landscape. Let's connect and create innovative solutions together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

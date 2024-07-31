import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#A6A2A2] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-[#11270B] flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-[#178C38]">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
              Welcome to my digital space!!!
              </p>
            </div>
            <div>
              <p>
                {" "}
                Hello! I'm Tega, a Senior at SUNY Potsdam and an aspiring Software Engineer. My journey in computer science has equipped me with a solid foundation in both front-end and back-end technologies. I excel in creating user-friendly interfaces with HTML, CSS, and JavaScript, and I'm proficient in Java for server-side solutions. I'm passionate about leveraging my skills to develop secure, scalable web applications and committed to continuous learning in the ever-evolving tech landscape. Let's connect and create innovative solutions together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
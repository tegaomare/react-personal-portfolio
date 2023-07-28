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
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Tega, nice to meet you. Please take a
                look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                A Software Engineer with a strong background in computer science and certifications in front-end and back-end technologies. Proven track record of successfully delivering innovative projects from concept to completion. Proficient in HTML, CSS, JavaScript, Java, and frameworks, creating captivating and user-friendly interfaces. Expertise in database management and server-side programming, building scalable and secure web solutions. Committed to continuous learning and exceeding client expectations with cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
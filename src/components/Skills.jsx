import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress, SiGradle, SiTerraform, SiJupyter, SiDjango, SiAzuredevops } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 size={30} /> },
    { name: 'CSS', icon: <FaCss3Alt size={30} /> },
    { name: 'JavaScript', icon: <FaJsSquare size={30} /> },
    { name: 'React', icon: <FaReact size={30} /> },
    { name: 'Node.js', icon: <FaNodeJs size={30} /> },
    { name: 'Git', icon: <FaGitAlt size={30} /> },
    { name: 'Docker', icon: <FaDocker size={30} /> },
    { name: 'AWS', icon: <FaAws size={30} /> },
    { name: 'MongoDB', icon: <SiMongodb size={30} /> },
    { name: 'MySQL', icon: <SiMysql size={30} /> },
    { name: 'Express.js', icon: <SiExpress size={30} /> },
    { name: 'Gradle', icon: <SiGradle size={30} /> },
    { name: 'Terraform', icon: <SiTerraform size={30} /> },
    { name: 'Jupyter Notebook', icon: <SiJupyter size={30} /> },
    { name: 'Django', icon: <SiDjango size={30} /> },
    { name: 'Azure DevOps', icon: <SiAzuredevops size={30} /> },
    // Add more skills as needed
  ];

  return (
    <div name='skills' className='w-full bg-[#2C3E50] text-gray-200'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='w-full flex justify-center items-center flex-col mb-7'>
          <p className='text-4xl font-bold inline border-b-4 border-[#178C38] text-center'>Skills</p>
          <p className='py-4 text-2xl text-center'>
            I enjoy diving into and learning new things. Here are some technologies I've worked with:
          </p>
        </div>
        
        {/* Skill Grid */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className='shadow-md shadow-[#178C38] hover:scale-110 hover:bg-[#178C38] duration-500 rounded-md flex flex-col items-center p-4'
            >
              <div className='text-white mb-2'>{skill.icon}</div>
              <p className='my-4'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

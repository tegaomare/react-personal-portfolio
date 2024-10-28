import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaJava } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiExpress, SiDjango, SiTailwindcss, SiPostgresql, SiFirebase, SiGraphql, SiJenkins, SiTerraform, SiVisualstudiocode, SiPostman, SiVercel, SiGithub, SiLinux } from 'react-icons/si';

const Skills = () => {
    const skills = [
        {
            category: "Frontend Development",
            items: [
                { name: 'HTML', icon: <FaHtml5 size={30} /> },
                { name: 'CSS', icon: <FaCss3Alt size={30} /> },
                { name: 'JavaScript', icon: <FaJsSquare size={30} /> },
                { name: 'React', icon: <FaReact size={30} /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss size={30} /> },
                { name: 'UI/UX Design Basics', icon: <FaReact size={30} /> } // Placeholder icon
            ],
        },
        {
            category: "Backend Development",
            items: [
                { name: 'Node.js', icon: <FaNodeJs size={30} /> },
                { name: 'Express.js', icon: <SiExpress size={30} /> },
                { name: 'Python (Django, Flask)', icon: <SiDjango size={30} /> },
                { name: 'Java', icon: <FaJava size={30} /> },
                { name: 'GraphQL', icon: <SiGraphql size={30} /> },
                { name: 'RESTful APIs', icon: <SiPostman size={30} /> },
            ],
        },
        {
            category: "Databases",
            items: [
                { name: 'MongoDB', icon: <SiMongodb size={30} /> },
                { name: 'MySQL', icon: <SiMysql size={30} /> },
                { name: 'PostgreSQL', icon: <SiPostgresql size={30} /> },
                { name: 'Firebase', icon: <SiFirebase size={30} /> },
            ],
        },
        {
            category: "DevOps & Cloud",
            items: [
                { name: 'Docker', icon: <FaDocker size={30} /> },
                { name: 'AWS', icon: <FaAws size={30} /> },
                { name: 'CI/CD Pipelines (Jenkins)', icon: <SiJenkins size={30} /> },
                { name: 'Terraform', icon: <SiTerraform size={30} /> },
                { name: 'Vercel', icon: <SiVercel size={30} /> },
            ],
        },
        {
            category: "Tools & Version Control",
            items: [
                { name: 'Git', icon: <FaGitAlt size={30} /> },
                { name: 'GitHub', icon: <SiGithub size={30} /> },
                { name: 'VS Code', icon: <SiVisualstudiocode size={30} /> },
                { name: 'Postman', icon: <SiPostman size={30} /> },
                { name: 'Linux/Unix', icon: <SiLinux size={30} /> },
            ],
        },
        {
            category: "Soft Skills & Methodologies",
            items: [
                { name: 'Problem Solving', icon: <FaReact size={30} /> }, // Placeholder icon
                { name: 'Agile & Scrum', icon: <FaReact size={30} /> },   // Placeholder icon
                { name: 'Debugging', icon: <FaReact size={30} /> },       // Placeholder icon
            ],
        },
    ];

    return (
        <div name="skills" className="w-full bg-[#2C3E50] text-gray-200">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="w-full flex justify-center items-center flex-col mb-7">
                    <p className="text-4xl font-bold inline border-b-4 border-[#178C38] text-center">Skills</p>
                    <p className="py-4 text-2xl text-center">
                        Here’s a comprehensive list of technologies and skills I have experience with.
                    </p>
                </div>

                {/* Skill Grid */}
                {skills.map((skillCategory, index) => (
                    <div key={index} className="mb-6">
                        <h3 className="text-3xl text-[#178C38] font-semibold mb-4">{skillCategory.category}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center py-2">
                            {skillCategory.items.map((skill, i) => (
                                <div
                                    key={i}
                                    className="shadow-md shadow-[#178C38] hover:scale-105 duration-500 rounded-md flex flex-col items-center p-4"
                                >
                                    <div className="text-white mb-2">{skill.icon}</div>
                                    <p className="my-4 text-lg">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;

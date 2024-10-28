import React from 'react';
import applications from '../data';

const ApplicationItem = ({ imageUrl, title, description, codeLink, GitHubLink }) => (
  <div
    className="relative shadow-lg shadow-[#178C38] rounded-md overflow-hidden transform transition duration-500 hover:scale-105"
  >
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="bg-cover bg-center h-60 w-full"
    ></div>
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
      <span className="text-lg font-bold text-gray-200 tracking-wider">
        {title}
      </span>
      <p className="text-gray-300 mt-2">{description}</p>
      <div className="pt-4">
        {codeLink && (
          <a href={codeLink} target="_blank" rel="noopener noreferrer">
            <button
              aria-label="Show Webpage"
              className="text-center rounded-lg px-4 py-2 m-2 bg-[#178C38] hover:bg-[#0a6e24] text-gray-200 font-bold text-md"
            >
              Show Webpage
            </button>
          </a>
        )}
        {GitHubLink && (
          <a href={GitHubLink} target="_blank" rel="noopener noreferrer">
            <button
              aria-label="GitHub"
              className="text-center rounded-lg px-4 py-2 m-2 bg-[#178C38] hover:bg-[#0a6e24] text-gray-200 font-bold text-md"
            >
              GitHub
            </button>
          </a>
        )}
      </div>
    </div>
  </div>
);

const Works = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-200 bg-[#2C3E50]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-gray-200 border-[#178C38]">
            Work
          </p>
          <p className="py-6 text-2xl">Stay tuned for more innovative solutions on the way.</p>
        </div>
        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <ApplicationItem key={index} {...app} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;

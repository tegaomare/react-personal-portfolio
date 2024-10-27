import React from 'react';
import applications from '../data';

const ApplicationItem = ({ imageUrl, title, description, codeLink, GitHubLink }) => (
  <div
    style={{ backgroundImage: `url(${imageUrl})` }}
    className='shadow-lg shadow-[#178C38] group container rounded-md flex justify-center items-center mx-auto content-div'
  >
    {/* Hover Effects */}
    <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
      <span className='text-lg font-bold text-gray-200 tracking-wider'>
        {title}
      </span>
      <p className='text-center'>{description}</p>
      <div className='pt-8 text-center'>
        {codeLink && (
          <a href={codeLink}>
            <button
              aria-label="Show Webpage"
              className='text-center rounded-lg px-2 py-1 md:px-4 md:py-3 m-2 bg-[#2C3E50] text-gray-200 font-bold text-lg'
            >
              Show Webpage
            </button>
          </a>
        )}
        {GitHubLink && (
          <a href={GitHubLink}>
            <button
              aria-label="GitHub"
              className='text-center rounded-lg px-2 py-1 md:px-4 md:py-3 m-2 bg-[#2C3E50] text-gray-200 font-bold text-lg'
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
    <div name='work' className='w-full md:h-screen text-gray-200 bg-[#2C3E50]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-200 border-[#178C38]'>
            Work
          </p>
          <p className='py-6 text-2xl'>Stay tuned for more innovative solutions on the way.</p>
        </div>
        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Grid Item */}
          {applications.map((app, index) => (
            <ApplicationItem key={index} {...app} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;

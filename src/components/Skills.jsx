import React from 'react';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#A6A2A2] text-black-500'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-[#178C38] text-center '>Skills</p>
              <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>JAVA</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>COMPUTER SCIENCE</p>
              </div>

              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>MERN STACK</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>MYSQL</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>EXPRESS JS</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>Mongodb</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>HANDELBARS JS</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>OOP</p>
              </div>
              <div className='shadow-md shadow-[#178C38] hover:scale-110 duration-500'>
                  <p className='my-4'>SOFTWARE DEVELOPMENT</p>
              </div>
          </div>
      </div>
    </div>
  );
};
export default Skills;
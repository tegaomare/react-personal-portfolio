import React from 'react';

const Contact = () => {
  
  return (
    <div name='contact' className='w-full h-screen bg-[#A6A2A2] flex justify-center items-center p-4'>
        <div className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-[#178C38] text-black-500'>Please Contact Me</p>
            </div>
            <p className='my-4 p-2 bg-[#178C38]'>Email: oghenetegaomare@gmail.com</p>
            <p className='my-4 p-2 bg-[#178C38]'>Phone: 646-689-8391</p>
        </div>
    </div>
  )
}

export default Contact;
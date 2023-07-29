import React from 'react'

const Contact = () => {
  
  return (
    <div name='contact' className='w-full h-screen bg-[#A6A2A2] flex justify-center items-center p-4'>
        <div className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-4 border-[#178C38] text-black-500'>Contact</p>
                <p className='text-black-500 py-4'>Send me a message</p>
            </div>
            <input className='bg-[#178C38] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#178C38]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#178C38] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-black-500 border-2 hover:bg-[#178C38] hover:border-[#11270B] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </div>
    </div>
  )
}
export default Contact
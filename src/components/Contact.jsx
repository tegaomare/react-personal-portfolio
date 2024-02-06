import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault(); 

        
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID, 
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
            e.target,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY 
        )
        .then((result) => {
            console.log(result.text);
            alert('Message sent successfully!'); 
        }, (error) => {
            console.log(error.text); 
            alert('Failed to send the message, please try again.'); 
        });
        e.target.reset(); 
    };

    return (
        <div name='contact' className='w-full h-screen bg-[#A6A2A2] flex justify-center items-center p-4'>
            <form className='flex flex-col max-w-[600px] w-full' onSubmit={sendEmail}>
                <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#178C38] text-black-500'>Please Contact Me</p>
                </div>
                <input type="text" name="from_name" placeholder="Your Name" required className="my-4 p-2" />
                <input type="email" name="from_email" placeholder="Your Email" required className="my-4 p-2" />
                <textarea name="message" placeholder="Your Message" required className="my-4 p-2"></textarea>
                <button type="submit" className='my-4 p-2 bg-[#178C38]'>Send</button>
            </form>
        </div>
    );
};

export default Contact;

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault(); 
        setLoading(true);

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID, 
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
            e.target,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY 
        )
        .then((result) => {
            console.log(result.text);
            alert('Message sent successfully!'); 
            setLoading(false);
        }, (error) => {
            console.log(error.text); 
            alert('Failed to send the message, please try again.'); 
            setLoading(false);
        });
        e.target.reset(); 
    };

    return (
        <div name="contact" className="w-full h-screen bg-[#2C3E50] flex justify-center items-center p-4">
            <form className="flex flex-col max-w-[600px] w-full bg-[#1E2A35] p-6 rounded-md shadow-lg" onSubmit={sendEmail}>
                <div className="pb-8 text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-[#178C38] text-gray-200">Please Contact Me</p>
                    <p className="text-gray-400 mt-4">I'd love to hear from you. Send me a message below!</p>
                </div>
                <input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    required
                    className="my-4 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#178C38] text-gray-800"
                />
                <input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    required
                    className="my-4 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#178C38] text-gray-800"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    className="my-4 p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#178C38] text-gray-800 h-32 resize-none"
                ></textarea>
                <button
                    type="submit"
                    disabled={loading}
                    className={`my-4 p-3 rounded-md text-white font-semibold transition-all duration-300 ${
                        loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#178C38] hover:bg-[#0a6e24] cursor-pointer'
                    }`}
                >
                    {loading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    );
};

export default Contact;


import React, { useState, useEffect } from 'react';
import TegaCV from '../assets/Tega_Omarejedje_CV.pdf';
import Logo from '../assets/logo.png'; // Import your logo here
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed w-full h-[80px] flex justify-between items-center px-4 ${scrolled ? 'bg-black opacity-90' : 'bg-transparent'} transition-opacity duration-300 text-gray-200`}>
      
      {/* Left Side - Name or Left Links */}
      <div className="flex-1">
        <h1 className='font-thin text-2xl italic font-serif'>Oghenetega Omarejedje</h1>
      </div>

      {/* Center Logo */}
      <div className="flex-1 flex justify-center">
        <img 
          src={Logo} 
          alt="Tega Logo" 
          className="h-20 w-39 bg-white rounded-full p-2" 
          style={{ border: '2px solid #0a192f' }} // Adjust colors as needed
        />
      </div>

      {/* Desktop Menu - Right Side */}
      <ul className='hidden md:flex gap-x-8 flex-1 justify-end'>
        {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
          <li key={item}>
            <Link to={item} smooth={true} duration={500} className="hover:text-green-400 transition-colors duration-300">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={`${!nav ? 'hidden' : 'flex'} absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex-col justify-center items-center transition-transform duration-300`}>
        {['home', 'about', 'skills', 'work', 'contact'].map((item) => (
          <li key={item} className='py-6 text-4xl'>
            <Link onClick={handleClick} to={item} smooth={true} duration={500} className="hover:text-green-400 transition-colors duration-300">
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 group'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/tega-omarejedje-7749b027b/'
              target="_blank" rel="noopener noreferrer">
              <span className="mr-4 group-hover:visible group-focus:visible transition-opacity">LinkedIn</span>
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] group'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/tegaomare'
              target="_blank" rel="noopener noreferrer">
              <span className="mr-4 group-hover:visible group-focus:visible transition-opacity">GitHub</span>
              <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] group'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href={TegaCV}
              target="_blank"
              rel="noopener noreferrer">
              <span className="mr-4 group-hover:visible group-focus:visible transition-opacity">Resume</span>
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toggle && !event.target.closest('.sidebar') && !event.target.closest('[data-menu-toggle]')) {
        setToggle(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [toggle]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setToggle(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (linkTitle, linkId) => {
    setActive(linkTitle);
    
    // Only scroll to top if it's the home/logo link
    if (linkId === '' || linkId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // For other links, let the anchor link handle the scrolling
  };

  const handleLogoClick = () => {
    setActive("");
    setToggle(false); // Close mobile menu if open
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMobileNavClick = (linkTitle, linkId) => {
    setToggle(false); // Close mobile menu
    handleNavClick(linkTitle, linkId);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={handleLogoClick}
        >
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            David &nbsp;
            <span className="sm:block hidden">| Portfolio CV</span>
          </p>
        </Link>
        
        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${styles.navText} ${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-300`}
            >
              <a 
                href={`#${link.id}`}
                onClick={() => handleNavClick(link.title, link.id)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu} 
            alt="menu" 
            className="w-[28px] h-[28px] object-contain cursor-pointer transition-transform duration-300 hover:scale-110" 
            onClick={() => setToggle(!toggle)}
            data-menu-toggle
          />
          
          {/* Mobile Menu Dropdown */}
          <div className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar transform transition-all duration-300 ${
            toggle ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}>
            <ul className="list-none flex justify-end flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${styles.navText} ${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px] hover:text-white transition-colors duration-300`}
                >
                  <a 
                    href={`#${link.id}`}
                    onClick={() => handleMobileNavClick(link.title, link.id)}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
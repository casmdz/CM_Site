import React, { useState, useRef, useEffect } from 'react'
import './navbar.scss';
import images from '../../constants/images';

import { FaBars, FaX } from "react-icons/fa6";
import { motion } from 'framer-motion';

const Navbar = () => {

  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setToggle(false);
      }
    };
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/touchstart_event todo if mobile swipe to close doesn't work 
    document.addEventListener('mousedown', handleClick);
    return () =>  {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <a href='#home'>
        <img src={images.logo_cm} alt={"claudia mendez logo"} />
        </a>
      </div>
      <ul className='app__navbar-links'>
        {/* todo: make sure all are up to date */}
        {['home', 'about', 'work', 'education', 'skills', 'interests', 'gallery', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            {/* <div /> */}
            <a href={`#${item}`}>{item}</a>
          </li>
        ))
        }

      </ul>

      <div className='app__navbar-menu' ref={menuRef}>
        <FaBars onClick={() => setToggle(true)} cursor="pointer" />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <FaX onClick={() => setToggle(false)} cursor="pointer" fontSize={"1.4em"}/>
            <ul>
              {/* todo update all pages */}
              {['home', 'about', 'work', 'education', 'skills', 'interests', 'gallery', 'contact'].map((item) => (
                // <li key={`link-${item}`}>
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                </li>
              ))
              }
            </ul>
          </motion.div>
        )}
      </div>

    </nav>
  )
}

export default Navbar
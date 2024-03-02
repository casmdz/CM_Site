import React, { useEffect, useState } from 'react'
import './about.scss'
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'

import { AppWrap, MotionWrap, SectionDivider } from '../../components'


const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: "25svw" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='abt_head-text'
      >
        <h1 className='head-text'>About Me</h1>
        <SectionDivider />
      </motion.div>

      <div>
      {/* <div id='about' className='app__about'> */}
        {abouts.map((about, index) => (
          <div className='app__about-container' key={index}>
            <div className='app__abt-desc'>
              {about.description.map((block, blockIndex) => (
                <p className='p-text' key={blockIndex}>
                  {block.children.map((span) => span.text)}
                  </p>
              ))}
            </div>

            <motion.div
              // whileHover={{ scale: 1.1 }}
              whileHover={{ scale: window.innerWidth < 768 ? 1.04 : 1.1 }} // Adjust scale based on screen width
              transition={{ stiffness: 400, damping: 10, type: 'spring' }}
              className='app__about-profile'
            >
              <motion.img
                className='app__about-img'
                src={urlFor(about.imgUrl)}
                alt="cmendez sitting in classroom holding a birthday card"
              />
            </motion.div>
          </div>
        ))}

      </div>
    </>
  )
}

// export default About
export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__schoolItemsBg");
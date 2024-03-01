import React from 'react'
import './header.scss';
import { motion } from 'framer-motion';
import images from '../../constants/images';
import { MdOutlineWavingHand } from "react-icons/md";
import { AppWrap, MotionWrap, TiltCard } from '../../components';

const Header = () => {
  return (
    <>
      <div id='home' className='app__header'>
        <motion.div
          className='app__header-img'
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.9 }}
        >
          <TiltCard class="img-tilt-card">
            <motion.img
              className='app__profile-img'
              src={images.cmendez_portrait}
              alt='claudia mendez portrait'
              // whileInView={{ scale: [0, 1] }}
              // transition={{ duration: 1, ease: easeInOut }}
            />
          </TiltCard>
        </motion.div>

        <motion.div
          className='app__header-info'
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.9 }}
          >
          <TiltCard>
          <div className='head-description '>
            <span><MdOutlineWavingHand /></span>
            <div>
              <h1 className='head-text'>Hello, I'm <br /> Claudia Mendez</h1>
              <p className='subhead-text'>and I'm a Early Childhood Educator.</p>
            </div>
          </div>
        </TiltCard>
        </motion.div>
      </div>
    </>
  )
}
// export default AppWrap(Header, 'home')
export default AppWrap(MotionWrap(Header, 'app__header'), 'home', 'app__schoolItemsBg')
// passes it as a Component 
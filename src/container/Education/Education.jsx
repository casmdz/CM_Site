import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap, SectionDivider } from '../../components';
import { FaGraduationCap } from "react-icons/fa6";
import { PiCertificate } from "react-icons/pi";
// import { PiGraduationCap } from "react-icons/pi";
import { client } from '../../client';
import './education.scss';

const Education = () => {
  const [education, setExp] = useState([]);

  useEffect(() => {
    const expQuery = '*[_type == "education"]';

    client.fetch(expQuery).then((data) => {
      setExp(data);
    });
  }, []);

  return (
    <div>
      <motion.div
      initial={{ opacity: 0, x: "15vw" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className='edu_head-text'
      >
        <h1 className='head-text'>My Education</h1>
        <SectionDivider />
      </motion.div>

      {/* edu: type Degree or Certificate */}
      <div className='app__education-container'>
        {education.map((edu) => (
          <motion.div
            className='app__education-item'
            key={edu.education}
            whileHover={{
              scale: 1.07,
              // boxShadow: "0px 12px 10px #7fa2d6CC",
              boxShadow: "0px 10px 10px #36bdc2CC",
              backgroundColor: "var(--blueAccColor)",
              color: "#ffffff",
            }}
          >
            {edu.type === "Degree"  ? (
              <span><FaGraduationCap /></span>
            ) : (
              <span><PiCertificate /></span>
            )}
            <div>
              <h3 className='p-text'>{edu.education}</h3>
              <p className='p-text'>{edu.institution}</p>
              <p className='p-text'>{edu.dates}</p>
            </div>
            
          </motion.div>
        ))}
      </div>
    </div>
    
  )
}

// export default AppWrap(Education, "education")
export default AppWrap(MotionWrap(Education, "app__education"), 'education', "app__bgPapelitos")
//i guess we are actually DECLARING the section ID here ^

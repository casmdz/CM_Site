import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './skills.scss';
import { AppWrap, MotionWrap, SectionDivider } from '../../components';
import { Tooltip } from '../../components';  
import '../../components/Tooltip/tooltip.scss'
import { urlFor, client } from '../../client';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    const skillsQuery = '*[_type == "skills"]';
    const techQuery = '*[_type == "technologies"]';
    
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });

    client.fetch(techQuery).then((data) => {
      setTechnologies(data);
    });

  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: "-15vw" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        // right={{ opacity: 0, x: "25vw" }}
        className='skills_head-text'
      >
        <h1 className="head-text">Skills & Technologies</h1>
        <SectionDivider />
      </motion.div>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill, index) => (
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 10px 10px #36bdc2CC",
                backgroundColor: "var(--blueAccColor)",
                color: "#ffffff",
              }}
              className="app__skills-item app__flex"
              key={index}
            >
              <p className='p-text'>{skill.skill}</p>
            </motion.button>
          ))}
        </motion.div>
      </div>
      
      {/* technologies */}
      <div className="app__tech-container">
        <motion.div className="app__tech-list">
          {technologies.map((tech, index) => (
          <Tooltip content={tech.description} direction="top" className="tech-tooltip" key={index}>
            <motion.div className="app__tech-item">
              <div
                className=" app__tech-circle"
                // style={{ backgroundColor: "white" }}
                tooltip={tech.description}
              >
                {tech.imgUrl ? (
                  <img src={urlFor(tech.imgUrl)} aria-label="tech icon" />
                ) : (
                  <span aria-label={`${tech.technology}`}>{tech.technology}</span>
                )
              }
              </div>
            </motion.div>
          </Tooltip>
          ))}
        </motion.div>
      </div>
    </>
  );
}

// export default AppWrap(Skills, "skills")
export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__whitebg")
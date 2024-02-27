import React, { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { AppWrap, MotionWrap, SectionDivider } from '../../components'
import './workexperience.scss'
import { urlFor, client } from '../../client'
// title, institution, dates, location, description, logo

const WorkCard = ({ work }) => (
    <VerticalTimelineElement 
        className='app__vte'
        contentStyle={{ 
            background: "var(--blueAccColor)", 
            color: 'var(--offBlackColor)', 
            borderRadius: "40px",
        }}
        contentArrowStyle={{ 
            borderRight: "7px solid var(--blueAccColor)", 
            marginTop: "5%", 
            // scale: "2", 
            // translate: "14px"
        }}
        date={work.dates}
        iconStyle={{ background: urlFor(work.logo) }}
        icon={
            <div className='app__work-icon'>
                <img
                    src={urlFor(work.logo)}
                    alt={work.title}
                />
            </div>
        }
    >
        <div className='app__work-head'>
            <h3>{work.title}</h3>
            <p>{work.institution}</p>
            <p>{work.location}</p>
        </div>

        <ul className='app__work-list'>
            {work.description.map((block, blockIndex) => (
                <li key={blockIndex} className='app__work_li'
                >
                    {block.children.map((d) => d.text)}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
)


const WorkExperience = () => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        const query = '*[_type == "workExperience"]';
        client.fetch(query).then((data) => {
            setWorks(data);
        });
    }, []);

  return (
    <>
    <motion.div
        initial={{ opacity: 0, x: "-25vw" }}
        whileInView={{ opacity: 1, x: 0}}
        transition={{ duration: 1 }}
        // right={{ opacity: 0, x:  "25vw" }} 
        className='work_head-text'
    >
        <h1 className='head-text'>Career Experience</h1>
        <SectionDivider />
    </motion.div>

    <div className='app__work-timeline'>
        <VerticalTimeline 
        lineColor={"var(--blueAccColor)"}
        animate={true}>
            {works.map((work, index) => (
                <WorkCard key={index} work={work} />
            ))}
        </VerticalTimeline>
    </div>
    </>
  )
}

// export default AppWrap(WorkExperience, "work")
export default AppWrap(
    MotionWrap(WorkExperience,'app__works'),
    'work',
    "app__whitebg");

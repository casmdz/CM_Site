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
            // background: "#b3b1ceee", 
            background: "#7f83d6dd", 
            color: 'var(--mediumIndigoColor)', 
            borderRadius: "40px",
        }}
        contentArrowStyle={{ 
            borderRight: "7px solid var(--indigoColor)", 
            marginTop: "5%",
        }}
        date={work.dates}
        dateClassName={"vtedate"}
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
            <h3 className='p-text'>{work.title}</h3>
            <p className='p-text'>{work.institution}</p>
            <p className='p-text'>{work.location}</p>
        </div>

        <ul className='app__work-list'>
            {work.description.map((block, blockIndex) => (
                <li key={blockIndex} className='app__work_li p-text'
                >
                    {block.children.map((d) => d.text)}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
)


const WorkExperience = () => {
    const [works, setWorks] = useState([]);

    const extractYear = (dateString) => {
        const regex = /(\d{4})/;
        const match = dateString.match(regex);
        const year = match ? parseInt(match[1]) : null;
        // console.log(year, "trying to extract year");
        return year;
    };

    useEffect(() => {
        const query = '*[_type == "workExperience"]';
        client.fetch(query).then((data) => {
            data.sort((a, b) => {
                const yearA = extractYear(a.dates);
                const yearB = extractYear(b.dates);
                // console.log("yearA: " + a.dates);
                // console.log("yearB: " + b.dates);
                console.log(`yearB ${yearB} - yearA ${yearA}`)
                return yearB - yearA;
            });
            setWorks(data);
        });
    }, []);

  return (
    <>
    <motion.div
        initial={{ opacity: 0, x: "-25vw" }}
        whileInView={{ opacity: 1, x: 0}}
        transition={{ duration: 1 }}
        className='work_head-text'
    >
        <h1 className='head-text'>Career Experience</h1>
        <SectionDivider />
    </motion.div>

    <div className='app__work-timeline'>
        <VerticalTimeline 
        lineColor={"var(--mediumIndigoColor)"}
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
    "app__bgAngel");

import React, { useEffect, useState } from 'react'
import './interests.scss'
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap, SectionDivider } from '../../components';
import { client, urlFor } from '../../client';


const Interests = () => {
  const [interests, setInterests] = useState([]);
  const [open, setOpen] = useState(false);
  const [ imgIndex, setImgIndex] = useState(null);
  
  useEffect(() => {
    const intQuery = '*[_type == "interests"]';
    client.fetch(intQuery).then((data) => {
      setInterests(data);
    }).catch(error => {
      console.error('Error fetching interests data', error);
    })
  }, []);

  // const renderDesc = (description) => {
  //   return description.map((param) => (param.children.map(child => child.text)))
  // };

  const openModal = (index) => {
    setImgIndex(index);
    console.log("Open image" + index);
    setOpen(true);
    // document.getElementById("intModal").style.display = "block";
  };
  const closeModal = () => {
    setOpen(false);
    // document.getElementById("intModal").style.display = 'none';
  };

return (
  <div>
    <motion.div className='interests_head-text'>
      <h1 className='head-text'>Some of my interests</h1>
      <SectionDivider />
    </motion.div>
    <div className="app__interests-container">
      {interests.map((i, index) => (
        <motion.div className='interest-item' key={index}>
          <img src={urlFor(i.imgUrl)} 
            alt={`${i.interest}`} 
            onClick={() => openModal(index)}
            className='int-img'
            />
            <h3>{i.interest}</h3>
            {/* <p className="modal-caption">{renderDesc(i.description)}</p> */}
        </motion.div>
      ))}
      </div>
      {open && imgIndex !== null && (
        <Modal
          imgUrl={interests[imgIndex].imgUrl}
          interest={interests[imgIndex].interest}
          // description={console.log("Hi", interests[imgIndex].description.map((desc) => desc.children.map(child => child.text)))}
          description={interests[imgIndex].description.map((desc) => desc.children.map(child => child.text))}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

const Modal = ({ imgUrl, interest, closeModal, description }) => {
  return (
    <div id="intModal" className="modal" onClick={closeModal}>
      <div className='int-modal-content' onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={closeModal}>&times;</span>
          <img src={urlFor(imgUrl)} alt={interest} />
          <p className='int-modal-caption p-text'>{description}</p>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Interests, "app__interests"), "interests", "app__whitebg")
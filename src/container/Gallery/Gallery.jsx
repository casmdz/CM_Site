import React, { useEffect, useState } from 'react';
import './gallery.scss';
import Slider from "react-slick";
import { client, urlFor } from '../../client';
import { AppWrap, MotionWrap } from '../../components';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  var settings = {
    className: "slider variable-width",
    variableWidth: true,
    centerMode: true,
    dots: true,
    infinite: true,
    focusOnSelect: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3800,
    cssEase: "linear",

    // initialSlide: 0,
    // padding: '0px 20px',
    // waitForAnimate: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: false,
        }
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
          // variableWidth: true, //added 
          centerMode: false, //added 
          autoplay: false,
          // adaptiveHeight: true,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
          // adaptiveHeight: true,
          variableWidth: true, //added 
          centerMode: false, //added todo is this okay
          swipeToSlide: true, //added
          autoplay: false,
          adaptiveHeight: true,
        }
      }
    ]
  };

  const [gallery, setGalleryImg] = useState([]);
  useEffect(() => {
    const imgQuery = '*[_type  == "gallery"]';
    client.fetch(imgQuery).then((data) => {
      setGalleryImg(data);
      // console.log("Hey!!!", data);
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);
  //because it makes the code look cleaner 
  const renderDesc = (description) => {
    return description.map((block) => (block.children.map(child => child.text)))
  };

  const [isHovered, setIsHovered] = useState(false);
  const [isInfo, setIsInfo] = useState(false);

  const handleHoverStart = () => {
    setIsHovered(true);
  };
  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  // const handleToggle = () => {
  //   setIsInfo(!isInfo);
  // };

  return (
  <div className='app__gallery-cont'>
    {/* <motion.div
    initial={{ opacity: 0, x: "-15vw" }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className="head-text">Gallery</h1>
  </motion.div> */}

    <div className='slider-container' >
      {/*  style={{ border: "2px dashed green" }} */}
      <Slider {...settings}>
        {gallery.map((img, index) => (
          <div key={index}
            className='gallery-item'
            onMouseEnter={handleHoverStart}
            onMouseLeave={handleHoverEnd}
          >
            <img
              src={urlFor(img.imgUrl)}
              alt={img.altText}
            />
            <motion.div
              className='gallery-desc'
              animate={{
                opacity: (isHovered || isInfo) ? 1 : 0,
                translateY: (isHovered || isInfo) ? 0 : '80%'
              }}
              transition={{
                duration: 0.3,
                scale: { type: "spring", mass: 1 }
              }}
              aria-hidden={!isHovered && !isInfo}
            >
              <h2>{img.title}</h2>
              <p>{renderDesc(img.description)}</p>
            </motion.div>
          </div>
        ))}
      </Slider>
      {/* for mobile */}
      <motion.button
        className='show-more-btn p-text'
        // onClick={handleToggle}
        onClick={() => setIsInfo(!isInfo)}
        aria-expanded={isInfo}
        style={{ cursor: 'pointer' }}
      >
        {isInfo ? 'Hide Info' : 'More Info'}
      </motion.button>
    </div>
  </div>
  )
};
//export default AppWrap(MotionWrap(Contact, "app__contact"), "contact", "app__whitebg")

export default AppWrap(MotionWrap(Gallery, "app__gallery"), "gallery", "app__citybg1")
// export default AppWrap(Gallery, "gallery")
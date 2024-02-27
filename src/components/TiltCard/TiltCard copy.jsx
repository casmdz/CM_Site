import React, { useEffect, useRef } from 'react'
import './tiltcard.scss';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
// A DOMRect describes the size and position of a rectangle.
// https://developer.mozilla.org/en-US/docs/Web/Performance/CSS_JavaScript_animation_performance

//card code credit to www.hover.dev/components/cards#hover-tilt-card 


const TiltCard = ({ children }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  //dont return a setState, but call the set sunction on that object
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["13deg", "-13deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-13deg", "13deg"]
  );

  const cardRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(() => {
        const { width, height, left, top } = cardRef.current.getBoundingClientRect();
        // const rectangle = e.target.getBoundingClientRect();
        // const width = rectangle.width;
        // const height = rectangle.height;
        const mouseX = e.clientX - left; //rectangle.left
        const mouseY = e.clientY - top; //rectangle.top
        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;
        x.set(xPct);
        y.set(yPct);
      });
    };
    const handleMouseLeave = () => {
      y.set(0);
      x.set(0);
      // console.log('reset');
    };
    // const card = document.querySelector('.tilt-card');
    // const card = document.getElementById('tilt-card');
    const card = cardRef.current;
    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [x, y]);

  // onMouseMove={handleMouseMove}
  // onMouseLeave={handleMouseLeave}
  return (
    <motion.div
    ref={cardRef}
    style={{
        rotateX, rotateY,
        transformStyle: "preserve-3d",
        height: "100%",
        width: "100%",
        position: "relative",
        perspective: "1000px",
      }}
    id='tilt-card'
    className='tilt-card'
    >
      {children}
    </motion.div>

  );
};

export default TiltCard;

// {/* <motion.div
//       style={{
//         rotateX, rotateY,
//         transformStyle: "preserve-3d",
//       }}
//       className='tilt-card'
//     >
//       <div
//         style={{
//           transform: "translateZ(75px)",
//           transformStyle: "preserve-3d",
//         }}
//         className='head__2-tilt-card'
//       >
//         <p style={{ transform: "translateZ(50px)", }} className='inner_text-tilt-hover'>HOVER ME</p>
//       </div>
//     </motion.div> */}

  // const handleMouseMove = (e) => {
  //   // if (!ref.current) return;
  //   // console.log(e.target.getBoundingClientRect());
  //   const rectangle = e.target.getBoundingClientRect();
  //   const width = rectangle.width;
  //   const height = rectangle.height;
  //   // console.log(e.clientX, e.clientY);
  //   const mouseX = e.clientX - rectangle.left;
  //   const mouseY = e.clientY - rectangle.top;
  //   // console.log({ mouseX, mouseY }); 
  //   // top left 00, bottom right full
  //   // turn into a percentage, i am 100% of the way on _-axis
  //   // for a rotation it makes it easier to tell - 0.5
  //   const xPct = mouseX / width - 0.5;
  //   const yPct = mouseY / height - 0.5;
  //   //can store in state, but can use MOTION VALUE HOOK
  //   // console.log(xPct, yPct);
  //   x.set(xPct);
  //   y.set(yPct);
  //   console.log('x is doing', xPct);
  //   console.log('y is doing', yPct);
  // };
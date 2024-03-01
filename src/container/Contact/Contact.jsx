import React, {useEffect, useState} from 'react'
import './contact.scss';
import images from '../../constants/images';
import { AppWrap, MotionWrap, TiltCard } from '../../components';
import { motion } from 'framer-motion';
import { client } from '../../client';
import { TiSocialLinkedinCircular, TiMail, TiDocument } from "react-icons/ti";
import { Tooltip } from '../../components';  
// https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API

  const currentYear = new Date().getFullYear();

const Contact = () => {
  const initialState = "Copy to clipboard";
  const [contacts, setContacts] = useState([]);
  const [tooltipContent, setTooltipContent] = useState(initialState);

  useEffect(() => {
    // const contQuery = '*[_type == "contact"]';
    const contQuery = '*[_type == "contact"]{"resumeUrl": resumePdf.asset->url, "refUrl": referencesPdf.asset->url, ...}';
    client.fetch(contQuery).then((data) => {
      setContacts(data);
    }).catch((error) => {
      console.error("Error fetching footer data",error);
    })
  }, []);

  const copyText = () => {
    const copySource = document.querySelector('#contact-email').innerText;
    navigator.clipboard.writeText(copySource).then(() => {
      console.log('Content successfully copied ' + copySource);
      setTooltipContent(`Copied: ${copySource}`)
      console.log('Tooltip text updated');
      setTimeout(() => {
        setTooltipContent(initialState);
        console.log("returning state")
      }, 3000);
    }, () => {
      console.error('Failed to copy')
    });
  };

  return (
  <>
  <div className='footer__parent-cont'>
    <div className="footer_img-container">
      <TiltCard>
        <motion.img
          className='footer-img'
          src={images.logo_book512}
          alt='claudia mendez portrait'
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1 }} 
          />
      </TiltCard>
    </div>
    <div className="ftr-hd">
      <motion.h1 className='head-text'>Let's Work Together</motion.h1>
      <motion.p className='p-text'>Thank you for visiting my site!</motion.p>

    {contacts.map((c, index) => (
      <div className='contact__info-box' key={index}>

        <div className='contact-info__item' key={c.email.title}>
          <TiMail className='info__icon' />
          <Tooltip direction="top" id="contact-tooltip" content={tooltipContent}>
          <p className='p-text' id='contact-email' onClick={copyText}>{c.email}</p>
          </Tooltip>
        </div>

        <div className='contact-info__item' key={c.LinkedInUrl.title}>
          <TiSocialLinkedinCircular className='info__icon' />
          <p className='p-text'>
            <a href={c.LinkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </div>
        
        <div className='contact-info__item' key={c.resumePdf.title}>
          <TiDocument className='info__icon' />
          <p className='p-text'>
            <a href={c.resumeUrl} target="_blank" rel="noopener noreferrer">Resume PDF</a>
          </p>
        </div>

      </div>
      ))}

    </div>
  </div>
  
  <div className="footer__copyright">
    <p className="copyright">@{currentYear} <a 
      href="https://github.com/casmdz" target="_blank" rel="noopener noreferrer"
      >Mendez</a>.&nbsp;All rights reserved.</p>
  </div>
  </>
  )
}

export default AppWrap(MotionWrap(Contact, "app__contact"), "contact", "app__schoolItemsBg")
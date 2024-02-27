import React from 'react'
import { About, Education, Contact, Gallery, Header, Interests, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Education />
      <Skills />
      <Interests />
      <Gallery />
      <Contact />
    </div>
  )
};

export default App;

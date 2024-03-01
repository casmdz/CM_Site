import React from 'react'
import { About, Education, Contact, Gallery, Header, Interests, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <div class="blank-section"></div>
      <About />
      <div class="blank-section"></div>
      <Work />
      <div class="blank-section"></div>
      <Education />
      <div class="blank-section"></div>
      <Skills />
      <div class="blank-section"></div>
      <Interests />
      <div class="blank-section"></div>
      <Gallery />
      <div class="blank-section"></div>
      <Contact />
    </div>
  )
};

export default App;

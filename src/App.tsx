import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Internships from './components/Internships';
import Certificates from './components/Certificates';
import CodingProfiles from './components/CodingProfiles';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Internships />
      <Certificates />
      <CodingProfiles />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
import NavBar from './components/navBar';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import SocialMedia from './components/socialMedia';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <SocialMedia/>
    </div>
  );
}

export default App;

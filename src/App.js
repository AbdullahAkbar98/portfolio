import React from 'react';
import About from './Pages/About'
import Projects from './Pages/Projects'
import Resume from './Pages/Resume'
import Calculator from './Pages/Calculator'
import Route from './Pages/Route'
import './Pages/assets/css/custom.css'

const routing = () => {
  return (
    <div>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/projects">
        <Projects/>
      </Route>
      <Route path="/resume">
        <Resume/>
      </Route>
      <Route path="/calculator">
        <Calculator/>
      </Route>
    </div>
  );
};

export default routing
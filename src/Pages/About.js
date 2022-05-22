import React from 'react';
import './assets/css/custom.css';

const About = () => {
    return (
        <React.StrictMode>
        <div class="p-0 pt-2 ps-md-3">
          <img src={require('./assets/images/profilepic.png')} alt="profilepic" width="130" height="130"/>
          <h1>Abdullah Akbar <i class="fa-solid fa-bolt" id="lightning"></i></h1>
          <h2>Electrical Engineering (B.E.)</h2>
          <p>I am a highly motivated Electrical Engineering senior seeking full-time opportunities to begin upon completion of my degree in July 2022.</p>
        </div>
        <hr/>
        <div class="p-0 pt-2 ps-md-3">
          <h3>Education</h3>
          <ul id="list-form">
            <li>University: Stony Brook University</li>
            <li>High School: Benjamin N. Cardozo High School</li>
          </ul>
        </div>
        <hr/>
        <div class="p-0 pt-2 ps-md-3">
          <h3>Experience</h3>
          <ul id="list-exp">
            <li><i class="fa-solid fa-briefcase" id="ico-color"></i>  SCC Construction Management Group Inc. - Assistant Project Manager</li>
            <li><i class="fa-solid fa-briefcase" id="ico-color"></i>  Surge Inc. - Project Manager</li>
            <li><i class="fa-solid fa-briefcase" id="ico-color"></i>  Wilson-Bennett Technology - Student Ambassador Caller</li>
          </ul>
        </div>
        <hr/>
        <div class="p-0 pt-2 ps-md-3">
          <h3><em>Seeking positions for.....</em></h3>
          <ul id="list-form">
            <li>Software Engineer</li>
              <ul>
                <li>Full Stack Web Developer</li>
                <li>Back End Developer</li>
                <li>Front End Developer</li>
                <li>Software Architect</li>
              </ul>
            <li>Electrical Engineer</li>
                <ul>
                  <li>Embedded Systems Engineer</li>
                  <li>Test Engineer</li>
                  <li>Project Engineer</li>
                  <li>Systems Engineer</li>
                  <li>Hardware Engineer</li>
                </ul>
          </ul>
        </div>
        </React.StrictMode>
    );
};

export default About;
import React from 'react';
import './assets/css/custom.css';

const Projects = () => {
    return (
        <div>
            <div class="p-0 pt-2 ps-md-3">
                <h1><i class="fa-solid fa-folder-open" id="ico-color"></i> Projects</h1>
            </div>
            <hr/>
            <br/>
            <div class="p-0 ps-md-3">
            <div class="card" style={{ width:'18rem'}}>
                <img src={require('./assets/images/calc.png')} class="card-img-top" alt="calc" />
                <div class="card-body">
                <h5 class="card-title"><i class="fa-solid fa-calculator" id="ico-color"/> Calculator</h5>
                <p class="card-text">A simple calculator coded using React.</p>
                <a href="/calculator" target="_blank" rel="noreferrer noopener"><button type="button" class="btn btn-custom">Live Demo</button></a>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Projects;
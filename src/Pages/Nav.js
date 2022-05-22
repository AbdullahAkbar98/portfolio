import React from 'react';
import Link from './Link';
import './assets/css/custom.css';

const Nav = () => {
    return (
    <nav class="navbar navbar-expand-md d-flex p-0 flex-md-column" id="nav-color">
          <a href="/">
            <img src={require('./assets/images/navLogo.png')} alt="logo" width="200" height="200" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse w-100" id="navbarSupportedContent">
            <ul class="navbar-nav w-100 d-flex flex-md-column text-center text-md-end mt-1 pe-2">
              <li>
                <Link href="/" className="About" class="nav-link">About Me</Link>
              </li>
              <li>
                <Link href="./resume" className="Resume" class="nav-link">Resume</Link>
              </li>
              <li>
                <Link href="./projects" className="Projects" class="nav-link">Projects</Link>
              </li>
              <li class="d-block d-sm-block d-md-none" id="mob-icons">
                <p id="connect">Connect</p><a href="https://www.linkedin.com/in/abdullah-akbar98" rel="noopener noreferrer" target="_blank" id="ico-color"><i class="fa-brands fa-linkedin fa-2xl"></i></a> <a href="https://github.com/AbdullahAkbar98" rel="noopener noreferrer" target="_blank" id="ico-color"><i class="fa-brands fa-github-square fa-2xl"></i></a> <i class="fa-solid fa-square-envelope fa-2xl" id="ico-color"></i>
              </li>
            </ul>       
          </div>
          <div class="d-none d-md-block container-fluid d-flex p-0 flex-column flex-md-row" id="side-column">
            <div id="footer">
              <p id="connect">Connect</p><a href="https://www.linkedin.com/in/abdullah-akbar98" rel="noopener noreferrer" target="_blank" id="ico-color"><i class="fa-brands fa-linkedin fa-2xl"></i></a> <a href="https://github.com/AbdullahAkbar98" rel="noopener noreferrer" target="_blank" id="ico-color"><i class="fa-brands fa-github-square fa-2xl"></i></a> <i class="fa-solid fa-square-envelope fa-2xl" id="ico-color"></i>
            </div>
          </div>
      </nav>
    );
};

export default Nav;
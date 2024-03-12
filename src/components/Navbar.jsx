import React, { useState } from 'react';

export default function Navbar() {

  const [isToggled, setToggle] = useState(false);

  const toggleButton = () => {
    setToggle(!isToggled);
  };


  return (
    <div className='navbar-stick'>
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand zoom logo-font-LK" href="/"> L K <h6 className='logo'> Liveleen Kaur</h6> </a>
            <button onClick={toggleButton} className="navbar-toggler" type="button" data-bs-toggle="collapse"  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon light"></span>
            </button>
            <div className={"collapse navbar-collapse" + (isToggled ? " show" : "")} id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link zoom" href="/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link zoom" href="/technology">Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link zoom" href="/projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link zoom" href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr className='orange'/>
      </div>
      
    </div>
  );
}

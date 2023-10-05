import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar-stick'>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">PORTFOLIO</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="src\components\About.jsx">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Projects</a>
          </li> 
          <li class="nav-item">
            <a class="nav-link" href="/">Contact</a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
  </div>
  )
}

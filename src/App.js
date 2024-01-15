import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Technology from './components/Technology';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
//import {HashRouter as Router , Routes , Route} from 'react-router-dom';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



/* function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
   
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/technology" element={<Technology />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Project />} />
    </Routes>

     
    </div>
    </BrowserRouter>
  );
}

export default App;

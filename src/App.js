import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Technology from './components/Technology';
import Project from './components/Project';
import Contact from './components/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/technology" component={Technology} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Project} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

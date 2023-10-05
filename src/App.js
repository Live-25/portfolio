import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Technology from './components/Technology';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Technology />
    </div>
  );
}

export default App;

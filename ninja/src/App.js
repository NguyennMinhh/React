import './index.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

// export the component so we can use it in another files
// This App component is used inside file 'index.js'
export default App;

import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
// first, type: npm install react-router-dom@5 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// export the component so we can use it in another files
// This App component is used inside file 'index.js'
export default App;

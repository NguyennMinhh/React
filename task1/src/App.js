import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import SunEsideBar from './_components/SunEsideBar';
import Listening from './pages/Listening';
import Curriculum from './pages/Curriculum';

function App() {
  return (
    <Router>
      <div className="App flex">
        <SunEsideBar />
        <div className="sunE-right-container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/listening">
              <Listening />
            </Route>
            <Route exact path="/curriculum">
              <Curriculum />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

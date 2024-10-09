import './App.css';
import './index.css';
import SunEsideBar from './_components/SunEsideBar';
import SunERightContainer from './_components/SunERightContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

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
            <Route exact path="/pronunciation">
              <SunERightContainer />
            </Route>
          </Switch>
        </div>
          
      </div>
    </Router>
  );
}

export default App;

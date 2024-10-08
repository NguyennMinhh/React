import './App.css';
import './index.css';
import SunEsideBar from './_components/SunEsideBar';
import SunERightContainer from './_components/SunERightContainer';

function App() {
  return (
    <div className="App flex">
      <SunEsideBar />
      <SunERightContainer />
    </div>
  );
}

export default App;

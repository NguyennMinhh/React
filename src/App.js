import './App.css';
import Navbar from './Navbar';

function App() {
  // npm start to start rendering project
  const title = 'Welcome';
  const likes = 50;
  // number, strings and array are fine while object and boolean, we can't!
  const link = "https://www.google.com/";

  return (
    <div className="App">
      <Navbar />
      <div className="content">

        <h1>{ title } times likes</h1>
        <p>Liked { likes } times</p>
        <p>{ 10 * likes }</p>
        <p>{ Math.random() * 10 }</p>

        
        {/* <a href="#">This is a link</a> */}
        <a href={link}>Google</a>
      </div>
    </div>

  );
}

export default App;

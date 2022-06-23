import myfoto from './img/my photo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My App</h1>
      <h2>Hakan Erarslan</h2>
      <img src={myfoto} alt="" />
    </div>
  );
}

export default App;

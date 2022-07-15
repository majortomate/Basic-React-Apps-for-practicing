import './App.css';
import RectangleArea from './components/RectangleArea';
import ShowImage from './components/ShowImage';
import TemperatureConverter from './components/TemperatureConverter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Practicing React</h1>
      <p>Here's a couple of basic apps based on components to practice React, specially, props and useState</p>
      <TemperatureConverter />
      <RectangleArea />
      <ShowImage />
      </header>
    </div>
  );
}

export default App;

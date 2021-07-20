import './App.css';
import Quotes from './components/Quotes/Quotes';
import WeatherForecast from './components/WeatherForecast/WeatherForecast';

function App() {
  return (
    <div className="App">
      <Quotes/>
      <WeatherForecast/>
    </div>
  );
}

export default App;

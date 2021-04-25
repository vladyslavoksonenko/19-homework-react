import Timer from './components/Timer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Timer timeMilliseconds={6000} autostart={false} step={1000} onTick={(time) => console.log("Залишилось часу: " + time) } onTimeEnd={() => console.log("Час вийшов!")} onTimeStart={() => console.log("Таймер запущено!")} />
      <Timer timeMilliseconds={600000} autostart={true} step={2000} onTick={(time) => console.log("Залишилось часу: " + time)} onTimeEnd={() => console.log("Час вийшов!")} onTimeStart={() => console.log("Таймер запущено!")} />
    </div>
  );
}

export default App;

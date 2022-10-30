import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1>Bienvenidos a React</h1>
      <Counter value={0}/>
    </div>
  );
}

export default App;

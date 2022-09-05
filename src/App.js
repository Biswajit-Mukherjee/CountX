import "./App.css";
import Title from "./components/Title/Title";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App" data-testid="App">
      <Title />
      <Counter />
    </div>
  );
}

export default App;

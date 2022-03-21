import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Barcelona" />
        <footer>
          <p>
            This project was coded by Katrin Kanape and is {""}
            <a href="https://github.com/katrinkan/react-weather-app">
              open-sourced on Github
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

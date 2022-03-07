import logo from "./logo.svg";
import "./App.css";
import Car from "./Classes/Car.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Classes</h1>
        <p>
          A class is a type of function, but instead of using the keyword
          function to initiate it, we use the keyword class, and the properties
          are assigned inside a constructor() method.
        </p>
        <p>Classes are named with an uppercase character.</p>
        <p>
          Scroll down to find some hidden elements that are inside the
          index.html file
        </p>

        <Car>
          This is my car class component. This text did not get rendered.
        </Car>
        <a
          className="App-link"
          href="https://github.com/SouthpawCurveConcepts/rsb-es6-classes-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to repo
        </a>
      </header>
    </div>
  );
}

export default App;

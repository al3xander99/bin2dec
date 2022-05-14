import "./App.css";
import DecOutput from "./components/DecOutput";

/*

Binary to decimal converter;
1) User can enter up to 8 binary digits in one input field
2) User must be notified if anything other than a 0 or 1 was entered
3) User views the result in a single output field containing the decimal equivalent

*/

function App() {
  return (
    <div className="App">
      <h1>Bin2Dec!</h1>
      <div>
        <DecOutput />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import CSSInJSStyledComponent from "./components/CSSInJSStyledComponent";
import CSSStyledComponent from "./components/CSSStyledComponent";
import InlineStyledSimpleComponent from "./components/InlineStyledSimpleComponent";

function App() {
  return (
    <div className="App">
      <CSSStyledComponent />
      <InlineStyledSimpleComponent />
      <CSSInJSStyledComponent />
    </div>
  );
}

export default App;

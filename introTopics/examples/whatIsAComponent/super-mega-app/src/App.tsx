import SimpleComponent from './components/SimpleComponent';
import ComponentList from './components/ComponentList';
import ComponentWithProps from './components/ComponentWithProps';
import ComponentListWithProps from './components/ComponentListWithProps';

import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      {/* <SimpleComponent /> */}

      {/* <ComponentList /> */}

      {/* <ComponentWithProps name="Jack" /> */}

      {/* <ComponentListWithProps names={['Jack', 'Paul', 'Kate', 'Anthony']} /> */}
    </div>
  );
}

export default App;
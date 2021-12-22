import logo from './logo.svg';
import './App.css';
import ShoppingList from './ShoppingList.js' ;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Hello, Eugen! Get the daily offer!
      </div>
      <div>This is work in progress!</div>
      <ShoppingList name="Eugen" />
      </header>
    </div>
  );
}

export default App;

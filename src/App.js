import logo from './logo.svg';
import './App.css';
import ShoppingList from './ShoppingList.js' ;
import DangerButton from './components/forms/SubscriptionForm';
import ResponsiveAppBar from './components/app-bar/ResponsiveAppBar'

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Hello, Eugen! Get the daily offer!
      </div>
      <div>This is work in progress!</div>
      <ShoppingList name="Eugen" />
      </header>

      <body>
        <DangerButton />
      </body>
    </div>
  );
}

export default App;

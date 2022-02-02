import contentLogged from './main';

import './App.css';

var isLoggedIn = true;

function App() {
  return (
    isLoggedIn ? contentLogged() : <h1>Loggeate</h1>
  );
}

export default App;

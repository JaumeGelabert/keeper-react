import ContentLogged from './main';

import './App.css';

var isLoggedIn = true;

function App() {

  return (
      isLoggedIn ? ContentLogged() : <h1>Loggeate</h1>
  );
}

export default App;

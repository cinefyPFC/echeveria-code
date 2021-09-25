import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/global.css';
import Router from './routes/routes';
import Routes from './routes';

function App() {
  document.title = 'Cinefy';
  return (
    <div className="App">
      <Routes />
      <Router />
    </div>
  );
}

export default App;

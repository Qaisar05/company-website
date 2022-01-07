import React from 'react';
import { BrowserRouter }  from 'react-router-dom';
import Navbar from './components/navbar/';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
          <Routes />
        
      </div>
    </BrowserRouter>
  );
}

export default App;

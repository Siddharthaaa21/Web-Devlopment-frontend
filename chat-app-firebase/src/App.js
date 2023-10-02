import './App.css';
import { Auth } from './components/Auth';
import Cookies from 'universal-cookie'


import React, { useState } from 'react';
const cookies =new Cookies();


function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'));
  const [room, setRoom] = useState(null);

  if (!isAuth) {
    return (
      <div className="App">
        <Auth />
      </div>
    );
  }

  return (
    <div>
      {room ? (
        <div>chat </div>
      ) : (
        <div className="room">
          <label>Room ID:</label>
          <input />
          <button>enter chat</button>
        </div>
      )}
    </div>
  );
}

export default App;

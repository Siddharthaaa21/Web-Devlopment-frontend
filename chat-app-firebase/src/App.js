import './App.css';
import { Auth } from './components/Auth/Auth';
import Cookies from 'universal-cookie'


import React, { useState,useRef } from 'react';
import { Chat } from './components/chat/Chat';
const cookies =new Cookies();


function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'));
  const [room, setRoom] = useState(null);
const roomInputRef=useRef(null); 
  if (!isAuth) {
    return (
      <div className="App">
        <Auth setIsAuth ={setIsAuth} />
      </div>
    );
  }

  return (
    <div>
      {room ? (
<Chat room={room}/>      ) : (
        <div className="room">
          <label>Room ID:</label>
          <input  ref={roomInputRef}/>
          <button onClick={()=>setRoom(roomInputRef.current.value)}>enter chat</button>
        </div>
      )}
    </div>
  );
}

export default App;

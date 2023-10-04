import React, { useState } from 'react'
import { addDoc,collection,serverTimestamp } from 'firebase/firestore'
import { auth, db } from './firebase-config'
//db is the variable we exported from firebase-config.js

export const Chat = (props) => {
  const {room}=props
  const [new_message, setNew_message]=useState("");
  const messagesRef=collection(db,"messages");//the collection is named maessages in the firebase storem
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(new_message===""){
      return;
    }
    await addDoc(messagesRef,{
      Text:new_message,
      createAt:serverTimestamp(),
      user:auth.currentUser.displayName,
      room: room,
      //or room, if you want to add the room name to the message
    });
    setNew_message("");
  };

  return (
    <div classNAme="chat-app">
      <form onSubmit={handleSubmit} className='new-message-form'>
        <input className='new-message-input' 
        placeholder='Type your message here' 
        value={new_message} //this is the value of the inputm so that the input value emties out 
        onChange={(e)=>setNew_message(e.target.value)}/> 
        <button className='semd-button' type='submit'>send message</button>
      </form>
      chat
    </div>
  )
}

//add funtionality to create the chat room and then receive it.
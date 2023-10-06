import React, { useEffect, useState } from 'react'
import { QuerySnapshot, addDoc, collection, onSnapshot, query, serverTimestamp, where } from 'firebase/firestore'
import { auth, db } from '../firebase-config'
//db is the variable we exported from firebase-config.js
import './chat.css'

export const Chat = (props) => {
  const { room } = props
  const [new_message, setNew_message] = useState("");
  const messagesRef = collection(db, "messages");//the collection is named maessages in the firebase storem

  // add use effect to display the changes make by any user
  useEffect(() => {
    const queryMessages = query(messagesRef, where("room", "===", room));
    //where is firebases way of filtering the messages by room
    //this way of "room", "===", room is to filter the messages by room 
    onSnapshot(queryMessages, (QuerySnapshot) => {
      let message=[];
      QuerySnapshot.forEach((doc) => {
        message.push({...doc.data(), id: doc.id})
      })
    })
  })
//stopped at 53
//Onsnapshot is a listener that listens to the changes in the database
//QuerySnapshot is a snapshot of the database at that moment
//forEach is a method that loops through the snapshot in javascript
//dco is the document in the snapshot in firebase
//message.push is the array of the messages in the database that we are pushing to the message array 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (new_message === "") {
      return;
    }
    await addDoc(messagesRef, {
      Text: new_message,
      createAt: serverTimestamp(),
      user: auth.currentUser.displayName,
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
          onChange={(e) => setNew_message(e.target.value)} />
        <button className='semd-button' type='submit'>send message</button>
      </form>
      chat
    </div>
  )
}

//add funtionality to create the chat room and then receive it.
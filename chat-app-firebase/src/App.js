import './App.css';
//import firebase sdk 

import firebase from 'firebase/app';
import 'firebase/firebase';
import 'firebase/auth';
// Remove this line since firebase has already been imported at the top of the file
// import firebase from 'firebase/app';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
 //creacting on global variable for firebase configuration
 firebase.initializeApp({
    //your firebase configuration goes here
    apiKey: "AIzaSyBksvkcDNadeFV6PClxTESl9At4Zf1xq6c",
    authDomain: "fireship-3d291.firebaseapp.com",
    projectId: "fireship-3d291",
    storageBucket: "fireship-3d291.appspot.com",
    messagingSenderId: "980573919852",
    appId: "1:980573919852:web:723019a8f0f4b6b8361649",
    measurementId: "G-50Q3BRC4Y0"
  })  
 const auth =firebase.auth();
 const firestore= firebase.firestore();

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;

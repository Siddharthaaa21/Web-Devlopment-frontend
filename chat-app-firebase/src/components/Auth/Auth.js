import React from 'react'
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from "firebase/auth";
import Cookies from 'universal-cookie'
import { AuthErrorCodes } from 'firebase/auth';
import './Auth.css'
const cookies = new Cookies(); 

export const Auth = (props) => {
    const { setIsAuth } = props;    
    const signInWithGoogle = async () => {
        try{
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        //to keep the user loged in so we'll usse coockies
        cookies.set("auth-token", result.user.refreshToken);
        setIsAuth(true);
    }
catch(err){ 
    if (err.code === AuthErrorCodes.CANCELLED_POPUP_REQUEST) {
        console.log('User cancelled the popup request.');
      } else {
        console.error('An error occurred during authentication:', err);
}
}}
    return (
        <div className="auth">
            <p>sign In With Google</p>
            <button onClick={signInWithGoogle}>Sigin with google</button>

        </div>
    )
}

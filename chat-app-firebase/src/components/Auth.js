import React from 'react'
import { auth, provider } from './firebase-config';
import { signInWithPopup } from "firebase/auth";
import Cookies from 'universal-cookie'
const cookies = new Cookies();

export const Auth = () => {
    const signInWithGoogle = async () => {
        try{
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        //to keep the user loged in so we'll usse coockies
        cookies.set("auth-token", result.user.refreshToken);
    }
catch(err){ 
    console.error(err);
}
}
    return (
        <div className="auth">
            <p>sign In With Google</p>
            <button onClick={signInWithGoogle}>Sigin with google</button>

        </div>
    )
}

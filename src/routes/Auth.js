import React, { useState } from "react";
import { authService, firebaseInstance } from "../fbase";
import {
createUserWithEmailAndPassword,
getAuth,
signInWithEmailAndPassword,
} from "firebase/auth";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {
        const { target: { name, value } } = event;
        if (name === "email") {
            setEmail(value)
        } else if (name === "password") {
            setPassword(value);
        }
    };
    const onSubmit = async(event) => {
        event.preventDefault();
        const auth = getAuth();
        let data;
        try {
        if (newAccount) {
            data = await createUserWithEmailAndPassword(
                auth,email, password
            );
        } else {
            data = await signInWithEmailAndPassword(
            auth, email, password
        )
        }
       } catch (error) {
        setError(error.message);
      }     
    }
    const toggleAccount = () => setNewAccount((prev) => !prev);
    const onSocialClick = async (event) => {
        const { target: { name } } = event;
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github") {
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        await authService.signInWithPopup(provider);
        };

return (    
<div> 
  <form onSubmit={onSubmit}>
            <input
                name="email"
                type="email"
                placeholder="Email"
                required value={email}
onChange={onChange}
            />
            <input
                name="password"
                type="password"
                placeholder="Password"
                required value={password}
                onChange={onChange}
            />
            <input
                type="submit"
                value={newAccount ? "Create Account" : "Sign In"}
            />
    </form>
        <span onClick={toggleAccount}>{ newAccount? "Sign In" : "Create Account" }</span>
    
    <div>
        <button onClick={onSocialClick} name="google">Continue with Google</button>        
        <button onClick={onSocialClick} name="github">Continue with GitHub</button>        

    </div>
</div >
);
};
export default Auth;
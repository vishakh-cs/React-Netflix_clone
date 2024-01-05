import { createContext, useContext, useEffect, useState } from "react";

import {createUserWithEmailAndPassword,signInWithEmailAndPassword , signOut , onAuthStateChanged} from "firebase/auth";

import {Auth,db}from "../services/Firebase"
import {doc,setDoc} from "firebase/firestore"

const AuthContext = createContext();

export function AuthContextProvider({children}){
    const [user,setUser]=useState({})

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(Auth, (currentUser) => {
          setUser(currentUser);
        });
      
        return () => {
          unSubscribe();  
        };
      }, []);
      
    function SignUp(email, password) {
        createUserWithEmailAndPassword(Auth, email, password)
        setDoc(doc(db,"users",email),{
          favShows:[]
        })
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("User created:", user);
          })
          .catch((error) => {
            console.error("Error creating user:", error);
          });
      }
      
    function Login(email, password) {
        signInWithEmailAndPassword(Auth, email, password);
    }
    
    function logout(){
        return signOut(Auth)
    }
    return(
        <AuthContext.Provider value={{user,SignUp,Login,logout}}>{children}</AuthContext.Provider>
    )

}
export function userAuth(){
 return useContext(AuthContext)
}
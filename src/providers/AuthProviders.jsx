import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { App } from "../Firebase/firebase.config";

// import { DarkModeSwitch } from "react-toggle-dark-mode";
// import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(App);
// const provider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }


    // sign in 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    const updateUserProfile = (name,photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }


  

  
   



    useEffect(() => {
        const unsubsribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);

        })

        return () => {
            return unsubsribe();
        }
    }, [])

    const info = {
        user,
        loading,
        createUser,
        signIn,
        updateUserProfile,
        logOut,
        
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
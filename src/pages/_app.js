import { useCallback, useEffect, useState } from "react"; 
import { initializeApp } from "firebase/app"; 
import {
createUserWithEmailAndPassword,
getAuth,
onAuthStateChanged,
signInWithEmailAndPassword,
signOut,    
} from "firebase/auth";
import Header from "@/app/components/Header"; 
import firebaseConfig from "../app/components/fireBaseConfig";

export default function MyApp( { Component, pageProps }) {
    const [appIntialized, setAppIntialized] = useState(false); 
    const [isLoading, setIsLoading] = useState(true); 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInformation, setUserInformation] = useState(null);
    const [error, setError] = useState(null); 

    const createUser = useCallback(
        (e) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // user is logged in so true.
            setIsLoggedIn(true);
            // provide user info
            setUserInformation(user);
            // clear errors
            setError(null);
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.warn({error, errorCode, errorMessage});
                setError(errorMessage);
        });
        
        
    }, [setError, setIsLoggedIn, setUserInformation]); 

    const loginUser = useCallback(
        (e) => {
            e.preventDefault();
            const email = e.currentTarget.email.value;
            const password = e.currentTarget.password.value;
            const auth = getAuth();
           signInWithEmailAndPassword( auth, email, password)
           .then((userCredential) => {
            const user = userCredential.user;
            setIsLoggedIn(true);
            setUserInformation(user);
            setError(null);
           })

           .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.warn({error, errorCode, errorMessage});
            setError(errorMessage);
    });
           

    }, [setError, setIsLoggedIn, setUserInformation] ); 

    const logoutUser = useCallback(() => {
        const auth = getAuth();
        signOut(auth)
        .then(() => {
        setUserInformation(null);
        setIsLoggedIn(false);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.warn({error, errorCode, errorMessage});
            setError(errorMessage);
    });
    }, [setError, signOut, setIsLoggedIn, setUserInformation] ); 

    useEffect(() => {
        initializeApp(firebaseConfig); 
        setAppIntialized(true); 
    }, []); 

    useEffect(() => {
        if (appIntialized) {
            const auth = getAuth(); 
            onAuthStateChanged(auth, (user) => {
                if (user) {

                    setUserInformation(user); 
                    setIsLoggedIn(true); 
                } else {
                    setUserInformation(null); 
                    setIsLoggedIn(false); 
                }

                setIsLoading(false); 

            }); 
        }

    }, [appIntialized]); 

    if (isLoading) return null; 


    return (
        <>
            <Header isLoggedIn={isLoggedIn} logoutUser={logoutUser} />
            <Component 
            {...pageProps}
            createUser={createUser}
            logoutUser={logoutUser}
            loginUser={loginUser}
            isLoggedIn={isLoggedIn}
            userInformation={userInformation}
            />
        <p>{error}</p>
        </>
    ); 
}
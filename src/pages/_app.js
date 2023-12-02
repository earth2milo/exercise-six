import { useCallback, useEffect, useState } from "react"; 
import { initializeApp } from "firebase/app"; 
import { getAuth, onAuthStateChanged } from "firebase/auth"; 
import Header from "@/app/components/Header"; 
import firebaseConfig from "../app/components/fireBaseConfig";

export default function MyApp( { Component, pageProps }) {
    const [appIntialized, setAppIntialized] = useState(false); 
    const [isLoading, setIsLoading] = useState(true); 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInformation, setUserInformation] = useState(null); 

    const createUser = useCallback((e) => {

    }, []); 

    const loginUser = useCallback((e) => {

    }, [] ); 

    const logoutUser = useCallback(() => {

    }, [] ); 

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
            <Header />
            <Component 
            {...pageProps}
            createUser={createUser}
            logoutUser={logoutUser}
            loginUser={loginUser}
            isLoggedIn={isLoggedIn}
            userInformation={userInformation}
    
        />
        </>
    ); 
}
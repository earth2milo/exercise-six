
import {useEffect, useState } from 'react';
import {useRouter} from "next/router";
import { getAuth } from 'firebase/app';
import { initializeApp } from 'firebase/app';
import fireBaseConfig from '@/app/components/fireBaseConfig';
import Header from "@/app/components/Header"
import UserProfile from '@/app/components/UserProfile';


export default function userProfile({ isLoggedIn, userInformation}){ 
   const router=useRouter();
    
    useEffect(() => {
      if (!isLoggedIn) router.push("/login")
},[isLoggedIn]);

return(
    <>
    <Header />
    <main>
    <h1>User Profile</h1>
    <UserProfile user={userInformation} />
    </main>
    </>
);

}
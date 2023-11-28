
import {useEffect} from 'react';
import { getAuth } from 'firebase/app';
import { initializeApp } from 'firebase/app';
import fireBaseConfig from "@/app/components/firebaseConfig";
import Header from "@/app/components/Header"
import UserProfile from '../components/UserProfile';


export default function userProfile(){ 
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const app = initializeApp(fireBaseConfig);
        const auth = getAuth(app);
        setIsLoggedIn(true);
        setUser({});
},[])

if (!isLoggedIn || !user) return null;

return(
    <>
    <Header />
    <main>
    <h1>User Profile</h1>
    <UserProfile />
    </main>
    </>
);

}
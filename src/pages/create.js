import { useEffect } from "react"; 
import { useRouter } from "next/router"; 
import Header from "@/app/components/Header"
import CreateUser from "@/app/components/CreateUser"


export default function Create( { isLoggedIn } ) {

    const router = useRouter(); 
    
    useEffect(() => {
        if (!isLoggedIn) router.push("/"); 
    }, [isLoggedIn]); 




    return (
        <>
        <Header /> 
        <main>
            <h1>Create User</h1>
            <CreateUser/> 
        </main>

        </>



    )
} 
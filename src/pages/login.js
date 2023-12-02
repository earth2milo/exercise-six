import { useEffect } from "react"; 
import { useRouter } from "next/navigation"; 
import Header from "@/app/components/Header"
import LoginForm from "@/app/components/LoginForm"

export default function Login( { isLoggedIn } ) {
    const router = useRouter(); 
    
    useEffect(() => {
        if (!isLoggedIn) router.push("/login"); 
    }, [isLoggedIn]); 



    return (
        <>
        <Header /> 
        <main>
            <h1>Login</h1>
            <LoginForm /> 
        </main>

        </>


    )
} 
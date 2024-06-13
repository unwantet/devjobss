"use client";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";


function ProtectRouter({children}) {

    const [ isAuthenticated,setIsAuthenticated] = useState(true)
    const router = useRouter()
    
    useEffect(() => {
        const isAuth = localStorage.getItem("auth-token")
        setIsAuthenticated(isAuth)

        if(!isAuth) {
            router.push("/login")
        } else {
             router.push("/about");
        }
    },[])
  return isAuthenticated && children 
}

export default ProtectRouter
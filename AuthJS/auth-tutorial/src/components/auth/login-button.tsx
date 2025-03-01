"use client";

import { useRouter } from "next/navigation";
import { Children } from "react";

interface LoginButtonProps{
    children:React.ReactNode;
    mode?:"modal" |"redirect",
    asChild?: boolean;

};

export const LoginButton =({
    children,
    mode="redirect",
    asChild

}:LoginButtonProps) =>{
    const router = useRouter(); 
    const onClick =() =>{
        router.push("/auth/login");
        console.log("LOGIN BUTTON CLICKED");
    }; 
    // if(mode === "modal"){
    //     return (
    //         <span>
    //              TODO:Implement modal T
    //         </span>
    //     )
    // }
    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}
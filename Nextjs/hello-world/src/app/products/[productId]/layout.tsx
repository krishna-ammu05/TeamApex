"use client"
import { error } from "console";
import { notFound } from "next/navigation";

function getRandomInt(count : number){
    return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
    children,
}:{
    children:React.ReactNode;
}){
    // const random = getRandomInt(2);
    // if(random===1){
    //     throw new Error("Error lading product");
    // }
    return(
        <>
        {children}
        <h2>Features products</h2>
        </>
    );
}

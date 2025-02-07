'use server';
import { signIn } from "@/auth";
import * as z from "zod";
import { revalidatePath, revalidateTag } from "next/cache";
import {LoginSchema} from '@/schemas'
import { error } from "console";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
export const login =async (values:z.infer <typeof LoginSchema>) =>{
    // console.log(values);
    const validateFields = LoginSchema.safeParse(values);
    if(!validateFields.success){
        return{error:"Invalid fields!"};
    }
   // return{success:"Email sent"};
    // revalidatePath()
    // revalidateTag()

    const {email,password} = validateFields.data;
    try {
       await signIn("credentials",{
        email,
        password,
        redirectTo:DEFAULT_LOGIN_REDIRECT,
       })
    } catch (error) {
        if(error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin":
                    return {error:"Invalid Credentials"}
                default:
                    return{error:"something went wrong!"}
            }
        }
        
    }
};


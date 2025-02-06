'use server';

import * as z from "zod";
import { revalidatePath, revalidateTag } from "next/cache";
import {RegisterSchema} from '@/schemas'
import { error } from "console";
export const register =async (values:z.infer <typeof RegisterSchema>) =>{
    // console.log(values);
    const validateFields = RegisterSchema.safeParse(values);
    if(!validateFields.success){
        return{error:"Invalid fields!"};
    }
    return{success:"Email sent"};
    // revalidatePath()
    // revalidateTag()
};


'use server';

import * as z from "zod";
import { revalidatePath, revalidateTag } from "next/cache";
import {LoginSchema} from '@/schemas'
import { error } from "console";
export const login =async (values:z.infer <typeof LoginSchema>) =>{
    // console.log(values);
    const validateFields = LoginSchema.safeParse(values);
    if(!validateFields.success){
        return{error:"Invalid fields!"};
    }
    return{success:"Email sent"};
    // revalidatePath()
    // revalidateTag()
};


"use client";
import * as z from "zod"
import { startTransition, useTransition,useState } from "react";

import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginSchema } from "@/schemas";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

import { CardWrapper } from "./card-wrapper"
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import {login} from "@/actions/login";

export const LoginForm = () =>{
    const [error, setError] = useState<string| undefined>("");
    const [success, setSuccess] = useState<string|undefined>("");
    const [isPending ,setTransition] = useTransition();
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver:zodResolver(LoginSchema),
        defaultValues:{
            email:"",
            password:"",
        },
 });

 const onSubmit =(values:z.infer<typeof LoginSchema>) =>{
    setError("");
    setSuccess("");
    startTransition(() =>{
    login(values)
        .then((data) =>{
            setError(data.error);
            setSuccess(data.success);
        })
    });
 }
    return(
        <CardWrapper
        headerLabel ="Welcome Back"
        backButtonLabel="Dont have an account?"
        backButtonHref='/auth/register'
        showSocial>
            <Form {...form}>
                <form
                 onSubmit={form.handleSubmit(onSubmit)}
                 className="space-y-6">
                    <div className="space-y-6">
                        <FormField 
                            control={form.control}
                            name="email"
                            render={({field})=>(
                                <FormItem>
                                    <FormLabel> Email</FormLabel>
                                    <FormControl>
                                        <Input
                                        {...field}
                                        placeholder="example@gmail.com"
                                        type="email" 
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}/>
                             <FormField 
                            control={form.control}
                            name="password"
                            render={({field})=>(
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                        {...field}
                                        placeholder="******"
                                        type="password" 
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}/>
                        </div>
                        <FormError message=""/>
                        <FormSuccess message=""/>
                    <Button type="submit" className="w-full">
                        Login
                        </Button>            
                 </form>

            </Form>
        </CardWrapper>
    )
}
//we are exporting default bcoz it is a component not a page 
import { CardWrapper } from "./card-wrapper"

export const LoginForm = () =>{
    return(
        <CardWrapper
        headerLabel ="Welcome Back"
        backButtonLabel="Dont have an account?"
        backButtonHref='/auth/register'
        showSocial>
            LoginForm!
        </CardWrapper>
    )
}
//we are exporting default bcoz it is a component not a page 
//import { children } from "react";

const AuthLayout =({
    children

}:{
    children:React.ReactNode

}) =>{
    return (
        <div className="h-full flex items-center justify-center
        bg-gradient-to-r from-sky-100 via-blue-300 to-blue-700 w-full">
           {children}
        </div>
    );
}

export default AuthLayout;
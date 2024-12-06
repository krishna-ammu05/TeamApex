import { Metadata } from "next";
import { resolve } from "path";

type Props = {
    params:{
        productId:string;
    };
};
// export const generateMetadata = ({params}:Props):Metadata=>{
//     const title = await new Promise((resolve) =>{
//         setTimeout (() =>{
            
//         })
//     })
//     return {
//         title:`Product ${params.productId}`,
//     };
// ;}



export default function ProductDetails({params}:Props)
{
    return <h1>Details about Product{params.productId}</h1>;
}
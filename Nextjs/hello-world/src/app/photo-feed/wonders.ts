import {StaticImageData} from "next/image"
import photo1 from "./photos/1.jpg";
import photo2 from "./photos/2.jpg";
import photo3 from "./photos/3.jpg";
import photo4 from "./photos/4.jpg";
import photo5 from "./photos/5.jpg";
import photo6 from "./photos/6.jpg";
import photo7 from "./photos/7.jpg";

export type WonderImage ={
    id:string;
    name:string;
    src:StaticImageData;
    photographer:string;
    location:string;
};

const wonderImages: WonderImage[]=[
    {
        id:"1",
        name:"cloud1",
        src:photo1,
        photographer:"Krishna",
        location :"Jntuhucej",
    },
    {
        id:"2",
        name:"cloud2",
        src:photo2,
        photographer:"Krishna",
        location :"Jntuhucej",
    },
    {
        id:"3",
        name:"cloud3",
        src:photo3,
        photographer:"Krishna",
        location :"Jntuhucej",
    },
    {
        id:"4",
        name:"ss1",
        src:photo4,
        photographer:"Krishna",
        location :"Jntuhucej",
    },
    {
        id:"5",
        name:"ss2",
        src:photo5,
        photographer:"Krishna",
        location :"Jntuhucej",
    },
    {
        id:"6",
        name:"ss3",
        src:photo6,
        photographer:"Krishna",
        location :"Jntuhucej",
    },
    {
        id:"7",
        name:"Dog",
        src:photo7,
        photographer:"Krishna",
        location :"Jntuhucej",
    }
]
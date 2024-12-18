import Link from "next/link";
import { FC } from "react";


interface MenuItemProps{
    title:string;
    address:string;
    Icon :FC
}

const Menuitem :FC<MenuItemProps>=({title, address,Icon})=>{
    return (
        <Link href={address} className="hover-text-amber-500">
            <Icon/>
            <p className="uppercase hidden sm:inline text-sm">{title}</p>
        </Link>
    );
};

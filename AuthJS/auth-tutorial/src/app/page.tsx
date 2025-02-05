//import Image from "next/image";
import {Poppins} from 'next/font/google';
import {cn} from "@/lib/utils"
import { LoginButton } from '@/components/auth/login-button';

import {Button} from '@/components/ui/button'

const font=Poppins({
  subsets: ["latin"],
  weight:["600"]

})

export default function Home() {
  return (
    // <p className="font-semibold  text-blue-500"> Hello Auth! </p>
    // <Button  size='lg' variant="custom" >
    //   Click me
    //   </Button>
    <main className='flex h-full flex-col items-center justify-center
     bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-100 to-red-700'>
      <div className='space-y-6 text-center' >
        <h1 className={cn(
          'text-6xl font-semibold text-white drop-shadow-md',
        font.className,)}>
          Auth
        </h1>
        <p className='text-yellow-50 text-lg'>
          A Simple Authentication Service
        </p>
        <div>
        <LoginButton mode="modal">
          <Button variant="secondary" size="lg">
            Sign in
          </Button>
         </LoginButton>
      
        </div>
      </div>
    </main>
  );
}

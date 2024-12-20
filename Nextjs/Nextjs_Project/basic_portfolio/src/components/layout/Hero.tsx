'use-client'

import SocialMedia from "@/static/SocialMedia";
import Typing from "@/static/typing";

function Hero(){
    return <div id='Hero' className="flex items-center min-h-screen px-20 bg-gradient-to-r from-gradientLeft to-gradientRight">
        <div className="flex flex-row items-center w-full">
            <div className="flex flex-col z-20 pointer-events-none text-white w-3/5">
            </div>
            <img className="w-2/5 object-contain self-center animate-scalepulse" src="/portraitdummy.wetp" alt="Portrait"/>
        </div>
    </div>
}

export default Hero;
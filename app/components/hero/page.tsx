import React from 'react';
import Image from 'next/image';
import PFP from '@/public/assets/profile.png';
import {HERO_CONTENT} from '@/app/constants/index'
const Hero = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-50 h-50 rounded-full overflow-hidden m-10">
                <Image
                    src={PFP}
                    alt="Profile Picture"
                    width={200}
                    height={200}
                    className="rounded-full object-cover"
                />
            </div>
            <div>
                <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                    Web Developer
                </span>
            </div>
            <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</p>
        </div>
    );
};

export default Hero;
